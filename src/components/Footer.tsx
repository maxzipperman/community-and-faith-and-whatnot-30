import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import missionLogo from '@/assets/mission-digital-logo.png';

const Footer = () => {
  const industries = [
    { name: 'Faith & Religious', href: '/serve/faith-religious' },
    { name: 'K-12 Schools & PTAs', href: '/serve/k12-ptas' },
    { name: 'Youth Sports', href: '/serve/youth-sports' },
    { name: 'Camps', href: '/serve/camps' },
    { name: 'Community Centers & Nonprofits', href: '/serve/community-nonprofits' },
    { name: 'Arts & Culture', href: '/serve/arts-culture' },
    { name: 'Parks & Recreation', href: '/serve/parks-rec' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={missionLogo} alt="Mission Digital logo" className="h-8 w-8" loading="lazy" />
              <h3 className="text-xl font-bold">Mission Digital</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Strategic web partner for mission-driven organizations. Beyond websites — we build growth assets that differentiate and convert.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@missiondigital.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/web-design" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/brand-messaging" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Brand Messaging Strategy
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Optimization & Refresh
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Free Website Audit
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.href}>
                  <Link 
                    to={industry.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Ready to Get Started?</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Let's discuss how we can elevate your online presence and drive real results.
            </p>
            <Button 
              asChild 
              variant="secondary" 
              className="w-full hover-lift"
            >
              <Link to="/contact">Get Free Audit</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Mission Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/legal/privacy" 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/legal/terms" 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth"
            >
              Terms of Service
            </Link>
            <Link 
              to="/faq" 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;