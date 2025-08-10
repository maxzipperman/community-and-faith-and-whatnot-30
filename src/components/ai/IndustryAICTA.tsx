
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

type Props = {
  industry: string;
  label?: string;
};

export const IndustryAICTA = ({ industry, label }: Props) => {
  const to = `/ai-feedback?industry=${encodeURIComponent(industry)}`;
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Button asChild size="lg" className="shadow-lg animate-pulse hover:animate-none">
        <Link to={to} aria-label={"Run an Instant Best Practices Audit"}>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Run an Instant Best Practices Audit</span>
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default IndustryAICTA;
