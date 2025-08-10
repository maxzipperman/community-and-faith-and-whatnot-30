import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { FirecrawlService } from '@/utils/FirecrawlService';
import { PerplexityService } from '@/utils/PerplexityService';
import ApiKeyHelpDialog from './ApiKeyHelpDialog';

export const ApiKeys = () => {
  const { toast } = useToast();
  const [firecrawl, setFirecrawl] = useState<string>(FirecrawlService.getApiKey() || '');
  const [perplexity, setPerplexity] = useState<string>(PerplexityService.getApiKey() || '');
  const [testing, setTesting] = useState<{ f: boolean; p: boolean }>({ f: false, p: false });

  const saveFirecrawl = () => {
    FirecrawlService.saveApiKey(firecrawl);
    toast({ title: 'Saved', description: 'Firecrawl API key saved.' });
  };
  const savePerplexity = () => {
    PerplexityService.saveApiKey(perplexity);
    toast({ title: 'Saved', description: 'Perplexity API key saved.' });
  };

  const testFirecrawl = async () => {
    setTesting(s => ({ ...s, f: true }));
    const ok = await FirecrawlService.testApiKey(firecrawl);
    setTesting(s => ({ ...s, f: false }));
    toast({ title: ok ? 'Firecrawl OK' : 'Firecrawl Failed', description: ok ? 'Key works.' : 'Please verify your key.' , variant: ok ? 'default' : 'destructive' });
  };
  const testPerplexity = async () => {
    setTesting(s => ({ ...s, p: true }));
    const ok = await PerplexityService.testApiKey(perplexity);
    setTesting(s => ({ ...s, p: false }));
    toast({ title: ok ? 'Perplexity OK' : 'Perplexity Failed', description: ok ? 'Key works.' : 'Please verify your key.' , variant: ok ? 'default' : 'destructive' });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <ApiKeyHelpDialog />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Firecrawl API Key</CardTitle>
            <CardDescription>Crawl your site pages for analysis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              type="password"
              value={firecrawl}
              onChange={(e) => setFirecrawl(e.target.value)}
              placeholder="fc-..."
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={saveFirecrawl}>Save</Button>
              <Button onClick={testFirecrawl} disabled={!firecrawl || testing.f}>{testing.f ? 'Testing...' : 'Test'}</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Perplexity API Key</CardTitle>
            <CardDescription>Get structured feedback from an LLM.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              type="password"
              value={perplexity}
              onChange={(e) => setPerplexity(e.target.value)}
              placeholder="pplx-..."
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={savePerplexity}>Save</Button>
              <Button onClick={testPerplexity} disabled={!perplexity || testing.p}>{testing.p ? 'Testing...' : 'Test'}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiKeys;
