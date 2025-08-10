export type AIssue = {
  severity: 'high' | 'medium' | 'low';
  area: string;
  finding: string;
  fixSuggestion: string;
  codeHints?: string;
  impactedRoutes?: string[];
};

export class PerplexityService {
  private static API_KEY_STORAGE_KEY = 'perplexity_api_key';

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    console.log('Perplexity API key saved');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            { role: 'system', content: 'Be precise and concise.' },
            { role: 'user', content: 'Say ok in one word.' },
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 50,
        }),
      });
      return res.ok;
    } catch (e) {
      console.error('Perplexity key test error', e);
      return false;
    }
  }

  static async analyzeContent(
    pages: { url: string; title?: string; content: string }[],
    goals: string
  ): Promise<{ success: boolean; issues?: AIssue[]; text?: string; raw?: any; error?: string }>{
    const apiKey = this.getApiKey();
    if (!apiKey) return { success: false, error: 'Perplexity API key not found' };

    try {
      const promptHeader = `You are an expert web UX, accessibility, performance, and conversion auditor. Provide actionable, Tailwind-level fixes.
Output strict JSON with this shape: { issues: [{ severity: 'high'|'medium'|'low', area: string, finding: string, fixSuggestion: string, codeHints?: string, impactedRoutes?: string[] }] }.`;
      const contentBundle = pages
        .slice(0, 8)
        .map((p, idx) => `# Page ${idx + 1}: ${p.title || p.url}\nURL: ${p.url}\n---\n${p.content.substring(0, 8000)}`)
        .join('\n\n');

      const messages = [
        { role: 'system', content: promptHeader },
        { role: 'user', content: `Goals (industry best practices):\n${goals}\n\nChecklist requirements:\n- Output STRICT JSON only with { \"issues\": [ ... ] }\n- 8–18 concise checks\n- Prefix finding with [PASS] or [FAIL]\n- Use high/medium/low severity (PASS can be low)\n\nSite Content:\n${contentBundle}` },
      ];

      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages,
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1200,
        }),
      });

      const json = await res.json();
      const text: string = json?.choices?.[0]?.message?.content || '';
      let issues: AIssue[] | undefined = undefined;
      try {
        const parsed = JSON.parse(text);
        if (parsed && Array.isArray(parsed.issues)) {
          issues = parsed.issues as AIssue[];
        }
      } catch {}

      return { success: true, issues, text, raw: json };
    } catch (error) {
      console.error('Perplexity analyze error', error);
      return { success: false, error: error instanceof Error ? error.message : 'Failed to analyze' };
    }
  }
}
