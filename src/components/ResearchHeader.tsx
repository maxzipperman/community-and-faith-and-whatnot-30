import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

interface ResearchHeaderProps {
  industry?: string;
  className?: string;
}

export const ResearchHeader = ({ industry, className = "" }: ResearchHeaderProps) => {
  return (
    <Alert className={`border-accent/30 bg-accent/5 ${className}`}>
      <Search className="h-4 w-4 text-accent" />
      <AlertDescription className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              2025 Research Initiative
            </Badge>
            <span className="text-sm font-medium">
              Currently conducting research interviews with faith and community organizations to shape our 2025 launch.
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Share your challenges and get early access to cutting-edge AI solutions.
          </p>
        </div>
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <Link to={`/contact${industry ? `?source=research-${industry}` : ''}`} className="flex items-center gap-2">
            <span>Join Research</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default ResearchHeader;