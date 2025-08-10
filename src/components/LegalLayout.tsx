import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import missionLogo from '@/assets/mission-digital-logo.png';

interface LegalLayoutProps {
  children: ReactNode;
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Mission Digital home">
            <img src={missionLogo} alt="Mission Digital logo" className="h-8 w-8" loading="eager" />
            <span className="font-semibold text-foreground group-hover:text-accent transition-smooth">Mission Digital</span>
          </Link>
          <nav aria-label="Legal navigation" className="text-sm text-muted-foreground">
            <Link to="/legal/privacy" className="hover:text-foreground transition-smooth mr-4">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-foreground transition-smooth">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Mission Digital</span>
          <Link to="/" className="hover:text-foreground transition-smooth">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
