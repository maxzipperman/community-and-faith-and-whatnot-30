import { BookOpen, CheckCircle2, ExternalLink, Globe, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ApiKeyHelpDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">How to get your API keys</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Get your Firecrawl and Perplexity keys</DialogTitle>
          <DialogDescription>
            Follow these quick steps. Your Firecrawl key can be stored locally; Perplexity should be added as a Supabase secret.
          </DialogDescription>
        </DialogHeader>

        <section className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Firecrawl (website crawling)
          </h3>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <KeyRound className="h-4 w-4 mt-0.5 text-primary" />
              Create an account and copy your API key
              (<a className="inline-flex items-center gap-1 text-primary underline" href="https://firecrawl.dev" target="_blank" rel="noreferrer">
                firecrawl.dev <ExternalLink className="h-3 w-3" />
              </a>).
            </li>
            <li className="flex items-start gap-3">
              <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
              Paste the key in the Firecrawl field here and click Save, then Test to verify.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
              OK to store locally (we save it in your browser). You can clear it anytime.
            </li>
          </ol>
        </section>

        <section className="space-y-4 pt-2">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Perplexity (AI analysis)
          </h3>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <KeyRound className="h-4 w-4 mt-0.5 text-primary" />
              Get an API key from
              <a className="inline-flex items-center gap-1 text-primary underline ml-1" href="https://www.perplexity.ai/settings/api" target="_blank" rel="noreferrer">
                perplexity.ai/settings/api <ExternalLink className="h-3 w-3" />
              </a>.
            </li>
            <li className="flex items-start gap-3">
              <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
              We recommend adding this key as a Supabase Secret for security. If not, you can store it locally to try things out.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
              Cost note: We use the small Sonar model by default to keep costs very low. There is no truly free Perplexity tier; you can remove the key anytime.
            </li>
          </ol>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyHelpDialog;
