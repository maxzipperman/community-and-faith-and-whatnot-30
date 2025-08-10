import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function toHex(arrayBuffer: ArrayBuffer) {
  return [...new Uint8Array(arrayBuffer)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hmacSha256(key: Uint8Array, data: string) {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(data));
  return new Uint8Array(sig);
}

async function getSignatureKey(secretKey: string, dateStamp: string, region: string, service: string) {
  const kDate = await hmacSha256(new TextEncoder().encode('AWS4' + secretKey), dateStamp);
  const kRegion = await hmacSha256(kDate, region);
  const kService = await hmacSha256(kRegion, service);
  const kSigning = await hmacSha256(kService, 'aws4_request');
  return kSigning;
}

function base64encode(data: string) {
  return btoa(unescape(encodeURIComponent(data)));
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { provider, fileName, contentType, size, folder = '', constraints } = await req.json();

    const maxSize = constraints?.maxSize || 10 * 1024 * 1024; // 10MB default
    const allowedTypes: string[] = constraints?.allowedTypes || [];

    if (!provider || !fileName || !contentType || typeof size !== 'number') {
      return new Response(JSON.stringify({ error: 'Missing required fields: provider, fileName, contentType, size' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (size > maxSize) {
      return new Response(JSON.stringify({ error: `File too large. Max allowed is ${maxSize} bytes.` }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (allowedTypes.length > 0 && !allowedTypes.some(t => contentType.startsWith(t))) {
      return new Response(JSON.stringify({ error: `Content-Type not allowed. Allowed types: ${allowedTypes.join(', ')}` }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const safeFolder = folder.replace(/^\/+|\/+$|\.\.+/g, '').trim();
    const keyPath = safeFolder ? `${safeFolder}/${fileName}` : fileName;

    // Provider switch
    if (provider === 'supabase-storage') {
      const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
      const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
      const bucket = Deno.env.get('SUPABASE_STORAGE_BUCKET') ?? '';
      if (!supabaseUrl || !serviceKey || !bucket) {
        return new Response(JSON.stringify({ error: 'Supabase Storage not configured. Set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_STORAGE_BUCKET.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      const supabase = createClient(supabaseUrl, serviceKey);
      const { data, error } = await supabase.storage.from(bucket).createSignedUploadUrl(keyPath);
      if (error) {
        throw error;
      }
      return new Response(JSON.stringify({
        uploadType: 'supabase-signed',
        bucket,
        path: keyPath,
        token: data.token,
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (provider === 's3' || provider === 'r2') {
      // S3-compatible POST policy
      const accessKey = provider === 's3' ? Deno.env.get('AWS_ACCESS_KEY_ID') : Deno.env.get('R2_ACCESS_KEY_ID');
      const secretKey = provider === 's3' ? Deno.env.get('AWS_SECRET_ACCESS_KEY') : Deno.env.get('R2_SECRET_ACCESS_KEY');
      const bucket = provider === 's3' ? (Deno.env.get('S3_BUCKET') ?? '') : (Deno.env.get('R2_BUCKET') ?? '');
      const region = provider === 's3' ? (Deno.env.get('S3_REGION') ?? 'us-east-1') : (Deno.env.get('R2_REGION') ?? 'auto');
      const endpoint = (provider === 's3' ? Deno.env.get('S3_ENDPOINT') : Deno.env.get('R2_ENDPOINT')) || '';

      if (!accessKey || !secretKey || !bucket) {
        return new Response(JSON.stringify({ error: `${provider.toUpperCase()} not configured. Missing keys or bucket.` }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      const now = new Date();
      const dateStamp = now.toISOString().slice(0,10).replace(/-/g, '');
      const amzDate = `${dateStamp}T${now.toISOString().slice(11,19).replace(/:/g, '')}Z`;
      const credential = `${accessKey}/${dateStamp}/${region}/s3/aws4_request`;

      const policy = {
        expiration: new Date(now.getTime() + 5 * 60 * 1000).toISOString(),
        conditions: [
          { bucket },
          ['starts-with', '$key', safeFolder ? `${safeFolder}/` : '' ],
          { 'x-amz-algorithm': 'AWS4-HMAC-SHA256' },
          { 'x-amz-credential': credential },
          { 'x-amz-date': amzDate },
          ['content-length-range', 0, maxSize],
        ] as any[],
      };

      const policyBase64 = base64encode(JSON.stringify(policy));
      const signingKey = await getSignatureKey(secretKey, dateStamp, region, 's3');
      const signatureBytes = await hmacSha256(signingKey, policyBase64);
      const signature = toHex(signatureBytes.buffer);

      const url = endpoint
        ? `${endpoint.replace(/\/$/, '')}/${bucket}`
        : provider === 's3'
          ? `https://${bucket}.s3.${region}.amazonaws.com`
          : `https://${bucket}.${(Deno.env.get('R2_ACCOUNT_ID') || 'account').trim()}.r2.cloudflarestorage.com`;

      return new Response(JSON.stringify({
        uploadType: 's3-post',
        url,
        fields: {
          key: keyPath,
          'Content-Type': contentType,
          'x-amz-algorithm': 'AWS4-HMAC-SHA256',
          'x-amz-credential': credential,
          'x-amz-date': amzDate,
          policy: policyBase64,
          'x-amz-signature': signature,
        },
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (provider === 'cloudinary') {
      const cloudName = Deno.env.get('CLOUDINARY_CLOUD_NAME') ?? '';
      const apiKey = Deno.env.get('CLOUDINARY_API_KEY') ?? '';
      const apiSecret = Deno.env.get('CLOUDINARY_API_SECRET') ?? '';
      const uploadPreset = Deno.env.get('CLOUDINARY_UPLOAD_PRESET') ?? '';

      if (!cloudName || !apiKey || !apiSecret) {
        return new Response(JSON.stringify({ error: 'Cloudinary not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      const timestamp = Math.floor(Date.now() / 1000);
      const params: Record<string, string> = { timestamp: String(timestamp) };
      if (safeFolder) params.folder = safeFolder;
      if (uploadPreset) params.upload_preset = uploadPreset;
      // Build signature string in alpha order without api_key/secret
      const toSign = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&');
      const encoder = new TextEncoder();
      const keyData = encoder.encode(apiSecret);
      const data = encoder.encode(toSign);
      const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
      const sigBuf = await crypto.subtle.sign('HMAC', cryptoKey, data);
      const signature = toHex(sigBuf);

      const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
      return new Response(JSON.stringify({
        uploadType: 'cloudinary',
        url,
        params: {
          api_key: apiKey,
          timestamp,
          signature,
          folder: safeFolder || undefined,
          upload_preset: uploadPreset || undefined,
        },
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (provider === 'imagekit') {
      const publicKey = Deno.env.get('IMAGEKIT_PUBLIC_KEY') ?? '';
      const privateKey = Deno.env.get('IMAGEKIT_PRIVATE_KEY') ?? '';
      const urlEndpoint = Deno.env.get('IMAGEKIT_URL_ENDPOINT') ?? '';

      if (!publicKey || !privateKey || !urlEndpoint) {
        return new Response(JSON.stringify({ error: 'ImageKit not configured. Set IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      const expire = Math.floor(Date.now() / 1000) + 60 * 5; // 5 min
      const token = crypto.randomUUID().replace(/-/g, '');
      const dataToSign = token + expire + fileName;
      const keyData = new TextEncoder().encode(privateKey);
      const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
      const sigBuf = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(dataToSign));
      const signature = toHex(sigBuf);

      return new Response(JSON.stringify({
        uploadType: 'imagekit',
        urlEndpoint,
        publicKey,
        signature,
        expire,
        token,
        folder: safeFolder || undefined,
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ error: `Unsupported provider: ${provider}` }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error('upload-signer error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Server error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
