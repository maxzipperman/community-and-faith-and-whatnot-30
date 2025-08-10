import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import missionLogo from '@/assets/mission-digital-logo.png';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const industries = [{
    name: 'Faith & Religious',
    href: '/serve/faith-religious'
  }, {
    name: 'K-12 Schools & PTAs',
    href: '/serve/k12-ptas'
  }, {
    name: 'Youth Sports',
    href: '/serve/youth-sports'
  }, {
    name: 'Community Centers & Nonprofits',
    href: '/serve/community-nonprofits'
  }, {
    name: 'Arts & Culture',
    href: '/serve/arts-culture'
  }, {
    name: 'Parks & Recreation',
    href: '/serve/parks-rec'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Mission Digital home">
            <img src={missionLogo} alt="Mission Digital logo" className="h-16 w-16" loading="eager" />
            <span className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">Mission Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-smooth hover:text-accent ${isActive('/') ? 'text-accent font-medium' : 'text-foreground'}`}>
              Home
            </Link>
            <Link to="/about" className="transition-smooth hover:text-accent text-foreground">
              About
            </Link>
            <Link to="/services" className={`transition-smooth hover:text-accent ${isActive('/services') ? 'text-accent font-medium' : 'text-foreground'}`}>
              Services
            </Link>
            
            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-smooth hover:text-accent text-foreground">
                <span>Who We Serve</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {industries.map(industry => <DropdownMenuItem key={industry.href} asChild>
                    <Link to={industry.href} className="w-full cursor-pointer">
                      {industry.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/portfolio" className={`transition-smooth hover:text-accent ${isActive('/portfolio') ? 'text-accent font-medium' : 'text-foreground'}`}>
              Portfolio
            </Link>
            <Link to="/resources" className={`transition-smooth hover:text-accent ${isActive('/resources') ? 'text-accent font-medium' : 'text-foreground'}`}>Helpful Resources
          </Link>
            <Link to="/ai-feedback" className={`transition-smooth hover:text-accent ${isActive('/ai-feedback') ? 'text-accent font-medium' : 'text-foreground'}`}>
              AI Feedback
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm" variant="outline" className="font-medium" aria-label="Get Started">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground hover:text-accent transition-smooth">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Who We Serve</div>
                {industries.map(industry => <Link key={industry.href} to={industry.href} className="block px-3 py-1 text-sm text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                    {industry.name}
                  </Link>)}
              </div>
              <Link to="/portfolio" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
              <Link to="/resources" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                Helpful Resources
              </Link>
              <Link to="/ai-feedback" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth" onClick={() => setIsOpen(false)}>
                AI Feedback
              </Link>
              <div className="pt-2 space-y-2">
                <Button asChild variant="outline" className="w-full" aria-label="Get Started">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;