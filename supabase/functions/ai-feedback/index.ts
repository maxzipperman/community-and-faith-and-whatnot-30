
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
      // Check rate limit for non-whitelisted IPs
      const today = new Date().toISOString().split('T')[0]
      
      const { data: usage, error } = await supabaseClient
        .from('ai_feedback_usage')
        .select('requests_count')
        .eq('ip_address', clientIP)
        .eq('date', today)
        .single()

      if (error && error.code !== 'PGRST116') {
        throw error
      }

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

      // Update usage count
      await supabaseClient
        .from('ai_feedback_usage')
        .upsert({
          ip_address: clientIP,
          date: today,
          requests_count: currentCount + 1
        })

      remainingRequests = 3 - (currentCount + 1)
    } else {
      remainingRequests = 'unlimited'
    }

    const perplexityKey = Deno.env.get('PERPLEXITY_API_KEY')

    if (!perplexityKey) {
      throw new Error('PERPLEXITY_API_KEY not configured')
    }

    // Analyze with Perplexity
    const prompt = `You are a UX/UI expert analyzing websites. Based on these goals:
${goals}

Analyze the following pages and provide a JSON response with this exact structure:
{
  "issues": [
    {
      "severity": "high|medium|low",
      "area": "UX|Performance|Accessibility|Copy|Design",
      "finding": "Description of the issue found",
      "fixSuggestion": "Specific actionable recommendation",
      "codeHints": "Optional: Tailwind classes or HTML structure suggestions",
      "impactedRoutes": ["Optional: array of affected page URLs"]
    }
  ]
}

Pages to analyze:
${pages.map((p: any, i: number) => `
# Page ${i + 1}: ${p.title || p.url}
URL: ${p.url}
Content: ${String(p.content || '').slice(0, 4000)}
`).join('\n')}

Focus on actionable, prioritized recommendations. Return ONLY valid JSON.`

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
            content: 'You are a UX expert. Analyze websites and return JSON only.'
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
