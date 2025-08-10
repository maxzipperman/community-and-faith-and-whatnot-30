import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

interface SignerResponse {
  uploadType: 'supabase-signed' | 's3-post' | 'cloudinary' | 'imagekit';
  // supabase
  bucket?: string;
  path?: string;
  token?: string;
  // s3
  url?: string;
  fields?: Record<string, string>;
  // cloudinary
  params?: Record<string, any>;
  // imagekit
  urlEndpoint?: string;
  publicKey?: string;
  signature?: string;
  expire?: number;
  folder?: string;
}

const PluggableUploader: React.FC = () => {
  const [provider, setProvider] = useState<string>('supabase-storage');
  const [file, setFile] = useState<File | null>(null);
  const [folder, setFolder] = useState<string>('uploads');
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<string>('');

  const onUpload = async () => {
    if (!file) return;
    setStatus('Requesting signed upload...');
    setProgress(5);

    const { data, error } = await supabase.functions.invoke('upload-signer', {
      body: {
        provider,
        fileName: file.name,
        contentType: file.type || 'application/octet-stream',
        size: file.size,
        folder,
        constraints: {
          maxSize: 20 * 1024 * 1024,
          allowedTypes: ['image/', 'video/', 'application/pdf']
        }
      }
    });

    if (error || !data) {
      setStatus(`Signer error: ${error?.message || 'Unknown'}`);
      return;
    }

    const resp = data as SignerResponse;

    try {
      if (resp.uploadType === 'supabase-signed' && resp.bucket && resp.path && resp.token) {
        setStatus('Uploading to Supabase Storage...');
        setProgress(25);
        const { data: up, error: upErr } = await supabase.storage
          .from(resp.bucket)
          .uploadToSignedUrl(resp.path, resp.token, file);
        if (upErr) throw upErr;
        setProgress(100);
        setStatus(`Done! Path: ${resp.path}`);
        return;
      }

      if (resp.uploadType === 's3-post' && resp.url && resp.fields) {
        setStatus('Uploading to S3-compatible storage...');
        setProgress(25);
        const form = new FormData();
        Object.entries(resp.fields).forEach(([k, v]) => form.append(k, v));
        form.append('file', file);
        const res = await fetch(resp.url, { method: 'POST', body: form });
        if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
        setProgress(100);
        setStatus('Done!');
        return;
      }

      if (resp.uploadType === 'cloudinary' && resp.url && resp.params) {
        setStatus('Uploading to Cloudinary...');
        setProgress(25);
        const form = new FormData();
        Object.entries(resp.params).forEach(([k, v]) => v !== undefined && form.append(k, String(v)));
        form.append('file', file);
        const res = await fetch(resp.url, { method: 'POST', body: form });
        if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
        const json = await res.json();
        setProgress(100);
        setStatus(`Done! URL: ${json.secure_url || json.url || 'uploaded'}`);
        return;
      }

      if (resp.uploadType === 'imagekit' && resp.urlEndpoint && resp.publicKey && resp.signature && resp.token && resp.expire) {
        setStatus('Uploading to ImageKit...');
        setProgress(25);
        const form = new FormData();
        form.append('file', file);
        form.append('fileName', file.name);
        form.append('publicKey', resp.publicKey);
        form.append('signature', resp.signature);
        form.append('token', resp.token);
        form.append('expire', String(resp.expire));
        if (resp.folder) form.append('folder', resp.folder);
        const res = await fetch('https://upload.imagekit.io/api/v1/files/upload', { method: 'POST', body: form });
        if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
        const json = await res.json();
        setProgress(100);
        setStatus(`Done! URL: ${json.url || 'uploaded'}`);
        return;
      }

      throw new Error('Unsupported signer response or missing fields');
    } catch (e: any) {
      setStatus(`Upload error: ${e.message}`);
    }
  };

  return (
    <Card className="max-w-xl">
      <CardContent className="p-4 space-y-4">
        <div className="grid gap-2">
          <label className="text-sm">Provider</label>
          <Select value={provider} onValueChange={setProvider}>
            <SelectTrigger>
              <SelectValue placeholder="Choose provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="supabase-storage">Supabase Storage</SelectItem>
              <SelectItem value="s3">Amazon S3</SelectItem>
              <SelectItem value="r2">Cloudflare R2</SelectItem>
              <SelectItem value="cloudinary">Cloudinary</SelectItem>
              <SelectItem value="imagekit">ImageKit</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Folder (optional)</label>
          <Input value={folder} onChange={(e) => setFolder(e.target.value)} placeholder="e.g. uploads" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">File</label>
          <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </div>
        <div className="flex gap-2">
          <Button onClick={onUpload} disabled={!file}>Upload</Button>
        </div>
        {status && (
          <div className="space-y-2">
            <Progress value={progress} />
            <p className="text-sm text-muted-foreground">{status}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PluggableUploader;
