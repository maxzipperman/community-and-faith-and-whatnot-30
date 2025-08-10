import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { FirecrawlService } from '@/utils/FirecrawlService';

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
}

export const CrawlForm = ({ onCrawlComplete }: { onCrawlComplete: (result: any) => void }) => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [crawlResult, setCrawlResult] = useState<CrawlResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setCrawlResult(null);

    try {
      const apiKey = FirecrawlService.getApiKey();
      if (!apiKey) {
        toast({
          title: 'Error',
          description: 'Please set your Firecrawl API key first',
          variant: 'destructive',
          duration: 3000,
        });
        return;
      }

      setProgress(10);
      const result = await FirecrawlService.crawlWebsite(url, limit);
      setProgress(80);

      if (result.success) {
        toast({ title: 'Success', description: 'Website crawled successfully', duration: 3000 });
        const data: any = (result.data as any) || {};
        setCrawlResult(data);
        onCrawlComplete(data);
      } else {
        toast({ title: 'Error', description: result.error || 'Failed to crawl website', variant: 'destructive', duration: 3000 });
      }
    } catch (error) {
      console.error('Error crawling website:', error);
      toast({ title: 'Error', description: 'Failed to crawl website', variant: 'destructive', duration: 3000 });
    } finally {
      setProgress(100);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-4 gap-3">
          <div className="md:col-span-3 space-y-2">
            <label htmlFor="url" className="text-sm font-medium text-foreground">Website URL</label>
            <Input id="url" type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="limit" className="text-sm font-medium text-foreground">Max pages</label>
            <Input id="limit" type="number" min={1} max={100} value={limit} onChange={(e) => setLimit(parseInt(e.target.value) || 1)} />
          </div>
        </div>
        {isLoading && <Progress value={progress} className="w-full" />}
        <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
          {isLoading ? 'Crawling...' : 'Crawl Site'}
        </Button>
      </form>

      {crawlResult && (
        <Card className="mt-4 p-4">
          <h3 className="text-lg font-semibold mb-2">Crawl Summary</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            {'status' in crawlResult && <p>Status: {(crawlResult as any).status}</p>}
            {'completed' in crawlResult && <p>Completed: {(crawlResult as any).completed}</p>}
            {'total' in crawlResult && <p>Total: {(crawlResult as any).total}</p>}
            {'creditsUsed' in crawlResult && <p>Credits Used: {(crawlResult as any).creditsUsed}</p>}
          </div>
        </Card>
      )}
    </div>
  );
};

export default CrawlForm;
