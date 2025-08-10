import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { CrawlForm } from '@/components/ai/CrawlForm';
import AIReport from '@/components/ai/AIReport';
import { DatabaseSetup } from '@/components/ai/DatabaseSetup';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Zap, Shield } from 'lucide-react';

const DEFAULT_GOALS = `
- Improve conversion clarity and reduce friction.
- Fix accessibility issues (color contrast, landmarks, nav order, alt text).
- Optimize performance (LCP, images, fonts, JS/CSS bloat).
- Tighten copy: jargon removal, clear CTAs, value props.
- Suggest Tailwind utility-level fixes (classes, structure).
`;


const AIFeedback = () => {
  const { toast } = useToast();
  const [goals, setGoals] = useState(DEFAULT_GOALS.trim());
  const [analysisText, setAnalysisText] = useState<string | undefined>();
  const [issues, setIssues] = useState<any[] | undefined>();
  const [pages, setPages] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [remainingRequests, setRemainingRequests] = useState<number | string>('unknown');

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
      // Build pages payload
      const pagePayload = pages.length > 0
        ? pages.map((p: any) => ({
            url: p.url || p.source || 'unknown',
            title: p.title,
            content: p.markdown || p.html || JSON.stringify(p).slice(0, 8000),
          }))
        : [];

      if (pagePayload.length === 0) {
        toast({
          title: "No pages to analyze",
          description: "Please crawl a website first to get content for analysis.",
          variant: "destructive",
        });
        setIsAnalyzing(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke('ai-feedback', {
        body: { pages: pagePayload, goals }
      });

      if (error) throw error;

      if (data.success) {
        setAnalysisText(data.text);
        setIssues(data.issues);
        setRemainingRequests(data.remainingRequests);
        toast({
          title: "Analysis complete!",
          description: "Your AI-powered feedback is ready.",
        });
      } else {
        if (data.isRateLimit) {
          toast({
            title: "Daily limit reached",
            description: data.error,
            variant: "destructive",
          });
        } else {
          throw new Error(data.error);
        }
      }
    } catch (error: any) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
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
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                AI-Powered Website Analysis
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get instant professional UX, accessibility, and performance feedback powered by AI. 
              No technical setup required - just enter your URL and get actionable insights.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Instant Analysis
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                No API Keys Required
              </Badge>
              <Badge variant="outline">
                {typeof remainingRequests === 'number' 
                  ? `${remainingRequests} requests remaining today`
                  : remainingRequests === 'unlimited' 
                    ? 'Unlimited access'
                    : '3 free requests per day'
                }
              </Badge>
            </div>
          </div>

          <DatabaseSetup />

          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Analysis Goals & Context
              </CardTitle>
              <CardDescription>
                Customize what our AI expert should focus on during the analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea 
                value={goals} 
                onChange={(e) => setGoals(e.target.value)} 
                rows={6}
                className="border-primary/20 focus:border-primary"
              />
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setGoals(DEFAULT_GOALS.trim())}>
                  Reset to Defaults
                </Button>
                <Button variant="outline" onClick={copyOfflineBundle}>
                  Export Analysis Data
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Website Analysis
              </CardTitle>
              <CardDescription>
                Enter your website URL to crawl and analyze all pages automatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CrawlForm onCrawlComplete={handleCrawlComplete} />
              {pages.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline">{pages.length} pages ready</Badge>
                  <span>Ready for AI analysis</span>
                </div>
              )}
              <Button 
                onClick={runAnalysis} 
                disabled={isAnalyzing || pages.length === 0}
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    AI is analyzing your website...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get AI-Powered Feedback
                  </>
                )}
              </Button>
              {typeof remainingRequests === 'number' && remainingRequests <= 1 && (
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                    You have {remainingRequests} analysis{remainingRequests !== 1 ? 'es' : ''} remaining today.
                  </p>
                  <Button variant="outline" size="sm">
                    Get Unlimited Access
                  </Button>
                </div>
              )}
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
