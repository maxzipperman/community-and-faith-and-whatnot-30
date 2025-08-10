
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AIssue {
  severity: 'high' | 'medium' | 'low';
  area: string;
  finding: string;
  fixSuggestion: string;
  codeHints?: string;
  impactedRoutes?: string[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const { pages, goals } = await req.json()
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    
    // Whitelist IP
    const whitelistedIP = '2600:1700:46b0:96c0:48f0:b4ff:64d7:61db'
    let remainingRequests: number | string = 'unlimited'
    let currentCount = 0
    
    if (clientIP !== whitelistedIP) {
      try {
        // Check rate limit for non-whitelisted IPs
        const today = new Date().toISOString().split('T')[0]

        const { data: usage, error } = await supabaseClient
          .from('ai_feedback_usage')
          .select('requests_count')
          .eq('ip_address', clientIP)
          .eq('date', today)
          .single()

        if (error && error.code !== 'PGRST116') {
          // If table/column does not exist, bypass rate limiting gracefully
          if (error.code === '42P01' || error.code === '42703') {
            remainingRequests = 'unknown'
          } else {
            console.error('Rate limit check error:', error)
            remainingRequests = 'unknown'
          }
        } else {
          currentCount = usage?.requests_count || 0
          if (currentCount >= 3) {
            return new Response(
              JSON.stringify({
                success: false,
                error: 'Daily limit of 3 AI feedback analyses reached. Contact us for unlimited access.',
                isRateLimit: true
              }),
              { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }

          // Update usage count (ignore errors)
          await supabaseClient
            .from('ai_feedback_usage')
            .upsert({ ip_address: clientIP, date: today, requests_count: currentCount + 1 })
            .then(() => {})
            .catch((e) => console.warn('Usage upsert failed (ignored):', e))

          remainingRequests = 3 - (currentCount + 1)
        }
      } catch (e) {
        console.warn('Bypassing rate limit due to error:', e)
        remainingRequests = 'unknown'
      }
    } else {
      remainingRequests = 'unlimited'
    }

    const perplexityKey = Deno.env.get('PERPLEXITY_API_KEY')

    if (!perplexityKey) {
      throw new Error('PERPLEXITY_API_KEY not configured')
    }

    // Analyze with Perplexity
    const prompt = `You are a senior UX/UI auditor. Treat the provided goals as industry best practices and audit the pages against them.
${goals}

Return a CHECKLIST in strict JSON using this exact structure (no extra keys, no prose):
{
  "issues": [
    {
      "severity": "high|medium|low",
      "area": "UX|Performance|Accessibility|Copy|Design|Trust|Conversion",
      "finding": "[PASS]|[FAIL] concise justification of the check result",
      "fixSuggestion": "If FAIL: the specific action to take; If PASS: optional next step",
      "codeHints": "Optional Tailwind/ARIA/HTML hints",
      "impactedRoutes": ["Optional array of affected URLs"]
    }
  ]
}

Checklist rules:
- Each array item is a single best-practice check.
- Prefer short, scannable items. Keep to 8-18 total checks.
- Only use high/medium/low for FAILED items; use "low" for PASS items.
- Do not include markdown. Return ONLY valid JSON.

Pages to analyze:
${pages.map((p: any, i: number) => `
# Page ${i + 1}: ${p.title || p.url}
URL: ${p.url}
Content: ${String(p.content || '').slice(0, 4000)}
`).join('\n')}
`

    const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a senior UX auditor. Return STRICT JSON only. Produce checklist-style items per the schema; no prose, no markdown.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2,
        max_tokens: 2000,
      }),
    })

    if (!perplexityResponse.ok) {
      throw new Error(`Perplexity API error: ${perplexityResponse.status}`)
    }

    const perplexityData = await perplexityResponse.json()
    const analysisText = perplexityData.choices?.[0]?.message?.content || ''

    let issues: AIssue[] = []
    try {
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        issues = parsed.issues || []
      }
    } catch (e) {
      console.error('Failed to parse AI response as JSON:', e)
    }

    return new Response(
      JSON.stringify({
        success: true,
        issues,
        text: analysisText,
        remainingRequests
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: any) {
    console.error('Error in ai-feedback function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Analysis failed' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
