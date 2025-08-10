import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export type AIssue = {
  severity: 'high' | 'medium' | 'low';
  area: string;
  finding: string;
  fixSuggestion: string;
  codeHints?: string;
  impactedRoutes?: string[];
};

export const AIReport = ({ issues, text }: { issues?: AIssue[]; text?: string }) => {
  const copy = (content: string) => navigator.clipboard.writeText(content);
  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ issues, text }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-feedback.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>AI Feedback Report</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={exportJson}>Export JSON</Button>
          {text && <Button size="sm" onClick={() => copy(text)}>Copy Raw</Button>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {issues && issues.length > 0 ? (
          <div className="space-y-3">
            {issues.map((i, idx) => (
              <div key={idx} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{i.area}</div>
                  <Badge variant={i.severity === 'high' ? 'destructive' : i.severity === 'medium' ? 'default' : 'secondary'}>
                    {i.severity}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{i.finding}</div>
                <div className="text-sm"><span className="font-medium">Suggested fix:</span> {i.fixSuggestion}</div>
                {i.codeHints && (
                  <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto"><code>{i.codeHints}</code></pre>
                )}
                {i.impactedRoutes && i.impactedRoutes.length > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground">Routes: {i.impactedRoutes.join(', ')}</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <pre className="text-sm bg-muted p-3 rounded overflow-auto max-h-[60vh]">{text || 'No issues returned.'}</pre>
        )}
      </CardContent>
    </Card>
  );
};

export default AIReport;
