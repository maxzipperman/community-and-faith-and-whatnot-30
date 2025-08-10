
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type AIFeedbackResponse = {
  analysis?: string;
  usage?: { remaining: number; limit: number; whitelisted: boolean };
  meta?: { contentSource: "firecrawl" | "direct" | "none" };
  error?: string;
  provider?: string;
  details?: unknown;
};

const AI_FEEDBACK_URL = "https://memsytfgkmdotevwssqm.functions.supabase.co/ai-feedback";

const INDUSTRIES = [
  "Professional Services",
  "Local Businesses",
  "Nonprofits",
  "Creatives",
  "Lawyers",
  "Accountants",
  "Consultants",
];

export default function ServerAIFeedbackForm() {
  const { toast } = useToast();
  const location = useLocation();

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [focusArea, setFocusArea] = useState("");
  const [industry, setIndustry] = useState<string>("Professional Services");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIFeedbackResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Prefill industry from querystring if it matches allowed values
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const qsIndustry = params.get("industry");
    if (qsIndustry && INDUSTRIES.includes(qsIndustry)) {
      setIndustry(qsIndustry);
    }
  }, [location.search]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(AI_FEEDBACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // IMPORTANT: snake_case keys
        body: JSON.stringify({
          website_url: websiteUrl,
          focus_area: focusArea || undefined,
          industry: industry || undefined,
        }),
      });

      const data: AIFeedbackResponse = await res.json();

      if (!res.ok) {
        const msg =
          data?.error ||
          (res.status === 429
            ? "Rate limit reached for today. Please try again later."
            : `Request failed (${res.status}). Please try again later.`);
        setError(msg);
        setResult(data);
        toast({
          title: "Analysis failed",
          description: msg,
          variant: "destructive",
        });
      } else {
        setResult(data);
        toast({
          title: "Analysis complete",
          description: "Your AI analysis is ready.",
        });
      }
    } catch (err: any) {
      const msg = err?.message || "Unexpected error";
      setError(msg);
      toast({
        title: "Network error",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const usageText = useMemo(() => {
    if (!result?.usage) return null;
    const { remaining, limit, whitelisted } = result.usage;
    if (whitelisted) return "Whitelisted: unlimited";
    return `Remaining: ${remaining ?? "—"} / ${limit ?? "—"}`;
  }, [result]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <form onSubmit={onSubmit} className="lg:col-span-2 space-y-4">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Analyze a website</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Website URL</label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Focus Area (optional)</label>
              <Textarea
                placeholder="e.g., Improve conversions, clarify services, mobile UX..."
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Industry</label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((i) => (
                    <SelectItem key={i} value={i}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
              >
                {loading ? "Analyzing..." : "Run Analysis"}
              </Button>
            </div>

            {error && (
              <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}
          </CardContent>
        </Card>
      </form>

      <aside className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>What’s included</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>Design & trust signals</li>
              <li>UX & navigation</li>
              <li>Messaging & CTAs</li>
              <li>Conversion optimization</li>
              <li>Industry-specific notes</li>
              <li>Top 3 action items</li>
            </ul>
            <p className="mt-3 text-xs">
              Rate limits apply per IP. Whitelisting available server-side.
            </p>
          </CardContent>
        </Card>

        {result?.analysis && (
          <Card>
            <CardHeader>
              <CardTitle>AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap text-sm border rounded-md p-3 bg-muted">
                {result.analysis}
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                Content source: {result.meta?.contentSource || "unknown"}
                {usageText ? ` | ${usageText}` : ""}
              </div>
            </CardContent>
          </Card>
        )}
      </aside>
    </div>
  );
}
