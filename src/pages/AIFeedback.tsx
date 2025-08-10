import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import ApiKeys from '@/components/ai/ApiKeys';
import { CrawlForm } from '@/components/ai/CrawlForm';
import AIReport from '@/components/ai/AIReport';
import { FirecrawlService } from '@/utils/FirecrawlService';
import { PerplexityService } from '@/utils/PerplexityService';

const DEFAULT_GOALS = `
- Improve conversion clarity and reduce friction.
- Fix accessibility issues (color contrast, landmarks, nav order, alt text).
- Optimize performance (LCP, images, fonts, JS/CSS bloat).
- Tighten copy: jargon removal, clear CTAs, value props.
- Suggest Tailwind utility-level fixes (classes, structure).
`;

const AIFeedback = () => {
  const [goals, setGoals] = useState(DEFAULT_GOALS.trim());
  const [analysisText, setAnalysisText] = useState<string | undefined>();
  const [issues, setIssues] = useState<any[] | undefined>();
  const [pages, setPages] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCrawlComplete = (data: any) => {
    // Normalize pages from Firecrawl response
    const items: any[] = Array.isArray((data as any)?.data)
      ? (data as any).data
      : Array.isArray((data as any)?.pages)
      ? (data as any).pages
      : [];

    setPages(items);
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisText(undefined);
    setIssues(undefined);

    try {
      const perplexityKey = PerplexityService.getApiKey();
      if (!perplexityKey) {
        alert('Perplexity API key missing. Add it above or use Offline mode to copy prompt+content.');
        setIsAnalyzing(false);
        return;
      }

      // Build pages payload
      const pagePayload = pages.length > 0
        ? pages.map((p: any) => ({
            url: p.url || p.source || 'unknown',
            title: p.title,
            content: p.markdown || p.html || JSON.stringify(p).slice(0, 8000),
          }))
        : [];

      if (pagePayload.length === 0) {
        alert('Please crawl a site or provide at least one page.');
        setIsAnalyzing(false);
        return;
      }

      const res = await PerplexityService.analyzeContent(pagePayload, goals);
      if (res.success) {
        setAnalysisText(res.text);
        setIssues(res.issues);
      } else {
        alert(res.error || 'Analysis failed');
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const copyOfflineBundle = () => {
    const content = pages
      .map((p: any, i: number) => `# Page ${i + 1}: ${p.title || p.url}\nURL: ${p.url}\n---\n${p.markdown || p.html || JSON.stringify(p)}`)
      .join('\n\n');
    const bundle = `Goals:\n${goals}\n\nSite Content (paste into your LLM):\n${content}`;
    navigator.clipboard.writeText(bundle);
    alert('Copied prompt + content to clipboard');
  };

  return (
    <Layout>
      <Helmet>
        <title>AI Feedback | Position Digital</title>
        <meta name="description" content="Get instant AI-powered feedback on your site: UX, accessibility, performance, and copy improvements." />
        <link rel="canonical" href="/ai-feedback" />
      </Helmet>

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <div className="text-center space-y-3">
            <h1>AI Feedback</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crawl your site and get a prioritized report from an LLM. Store API keys locally; for production, we can move to Supabase Edge Functions.
            </p>
          </div>

          <ApiKeys />

          <Card>
            <CardHeader>
              <CardTitle>Goals & Context</CardTitle>
              <CardDescription>Tell the AI what to focus on.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea value={goals} onChange={(e) => setGoals(e.target.value)} rows={6} />
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setGoals(DEFAULT_GOALS.trim())}>Reset</Button>
                <Button variant="outline" onClick={copyOfflineBundle}>Offline: Copy Prompt + Content</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pages to Analyze</CardTitle>
              <CardDescription>Use Firecrawl to gather pages.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CrawlForm onCrawlComplete={handleCrawlComplete} />
              {pages.length > 0 && (
                <div className="text-sm text-muted-foreground">Selected pages: {pages.length}</div>
              )}
              <Button onClick={runAnalysis} disabled={isAnalyzing || pages.length === 0}>
                {isAnalyzing ? 'Analyzing...' : 'Analyze with Perplexity'}
              </Button>
            </CardContent>
          </Card>

          {(analysisText || (issues && issues.length > 0)) && (
            <AIReport issues={issues} text={analysisText} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AIFeedback;
