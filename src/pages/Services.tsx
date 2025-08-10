import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, CalendarDays, Users, HandCoins } from 'lucide-react';
import ROICalculator from '@/components/ROICalculator';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const Services = () => {
  const packages = [
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "Essential Community Site",
      description: "Standard 5-page site with giving or registration built in",
      features: [
        "5 pages: Home, About/Our Story, Programs/Ministries or Teams, Events, Contact",
        "One Give/Donate or Register/Join integration",
        "Mobile-first, WCAG-friendly setup",
        "Core Web Vitals performance pass",
        "1 round of revisions",
        "2-week timeline"
      ],
      details: [
        "Homepage storytelling with hero, mission, and calls-to-action",
        "One integration (Stripe/Donorbox or simple Registration form)",
        "Basic analytics & SEO setup (titles, descriptions, sitemap)",
        "Up to 10 images and 1 downloadable (e.g., PDF)"
      ],
      price: "$1,900",
      popular: false
    },
    {
      icon: <CalendarDays className="h-8 w-8 text-accent" />,
      title: "Community Plus",
      description: "8–10 pages and 2 modules for deeper engagement",
      features: [
        "8–10 pages + 2 modules (choose: Events, News/Sermons, Volunteer, Newsletter)",
        "Preset donation tiers & recurring giving (or Registration form)",
        "Content migration up to 10 pages",
        "Training + 30 days of launch support",
        "2 rounds of revisions",
        "3–4 weeks timeline"
      ],
      details: [
        "Choose any two modules (Events, News/Sermons, Volunteer, Newsletter)",
        "Donation UX best practices (suggested amounts, recurring prompts)",
        "Light copy polish for Home + one key page",
        "Up to 3 forms (contact, volunteer, subscribe)"
      ],
      price: "$3,300",
      popular: true
    },
    {
      icon: <HandCoins className="h-8 w-8 text-accent" />,
      title: "Impact Pro",
      description: "12–15 pages, 3 modules, and advanced structure",
      features: [
        "12–15 pages + 3 modules (e.g., Sermon/Media archive, Groups/Ministries, Events)",
        "Multi-campus/team structure; multi-language ready",
        "Content migration up to 20 pages",
        "Copy polish for key pages",
        "60 days of launch support",
        "4–6 weeks timeline"
      ],
      details: [
        "Information architecture workshop and sitemap",
        "Advanced SEO setup (schema basics, redirects if needed)",
        "Deeper content migration and media handling",
        "Up to 5 custom content types (e.g., Staff, Groups, Sermons)"
      ],
      price: "$4,900",
      popular: false
    }
  ];

  const auditProduct = {
    icon: <CheckCircle className="h-8 w-8 text-accent" />,
    title: "Quick Audit",
    description: "Performance, accessibility, messaging, and donation/registration teardown",
    features: [
      "Detailed performance analysis report",
      "Mobile usability assessment",
      "SEO & messaging opportunities",
      "Donation/registration flow review",
      "Competitor comparison",
      "30-minute strategy consultation"
    ],
    price: "$299",
    note: "Credited if you proceed with any build"
  };

  return (
    <Layout>
      <Helmet>
        <title>Community Website Packages | Position Digital</title>
        <meta name="description" content="Standardized, lower-cost website packages for faith groups, schools, sports, and community orgs." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <section className="pt-24 pb-12 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="mb-6">Community Website Packages</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Standardized, lower-cost builds focused on donations, registrations, and community engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Simple, Community-First Packages</h2>
            <p className="text-lg text-muted-foreground">
              Clear scope. Lower cost. Built for donations, registrations, and engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover-lift shadow-medium h-full ${pkg.popular ? 'border-2 border-accent/50 shadow-accent' : ''} relative`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-lg mb-1">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="details">
                      <AccordionTrigger className="text-sm">More info: what it can include</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                          {pkg.details.map((d: string, i: number) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="pt-3 border-t border-border">
                    <div className="text-xl font-bold text-accent mb-3">
                      {pkg.price}
                    </div>
                    <Button asChild className={`w-full ${pkg.popular ? 'gradient-accent text-accent-foreground' : ''}`}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-3 text-center">Popular Add-ons</h3>
            <TooltipProvider>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: 'Events Calendar module', price: '$300', desc: 'Show upcoming events with categories, recurring options, and RSVP/registration links. Includes calendar and list views.' },
                  { name: 'Sermons/News archive', price: '$400', desc: 'Filterable archive with tags and search. Supports audio, video, transcripts, and featured items.' },
                  { name: 'Online Giving setup (Stripe/Donorbox)', price: '$250', desc: 'Set up secure giving with preset amounts, recurring donations, receipts, and thank-you flow best practices.' },
                  { name: 'Volunteer/Registration forms', price: '$200', desc: 'Accessible, spam-protected forms with conditional fields and email notifications to your team.' },
                  { name: 'Newsletter integration', price: '$150', desc: 'Connect Mailchimp, ConvertKit, or similar with single/double opt-in and success/error messaging.' },
                  { name: 'Content migration beyond package', price: '$20/page', desc: 'We migrate additional pages from your current site with formatting cleanup and link checks.' },
                  { name: 'Accessibility remediation pass (AA)', price: '$400', desc: 'Fixes for color contrast, alt text, headings, keyboard traps, labels, and ARIA to meet WCAG 2.1 AA.' },
                  { name: 'Care Plan updates', price: '$79/mo or $690/yr', desc: 'Ongoing updates, monitoring, backups, uptime alerts, and a bucket of minor edits each month.' },
                ].map((a, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <Card className="border-dashed hover-scale">
                        <CardContent className="p-4 flex items-center justify-between">
                          <span className="text-sm">{a.name}</span>
                          <span className="text-sm font-medium text-primary">{a.price}</span>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs text-sm leading-relaxed" side="top" align="center">
                      <div>
                        <div className="font-medium mb-1">{a.name}</div>
                        <p className="text-muted-foreground">{a.desc}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          {/* Media & File Storage: Bring Your Own */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-dashed">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Media & File Storage: Bring Your Own</h3>
                <p className="text-muted-foreground mb-3">
                  For uploads and media hosting, we connect your site directly to your own cloud storage or media platform (S3, Cloudflare R2, GCS, Cloudinary, etc.). You keep full ownership and pay your provider directly—no markups from us. We configure everything and ensure a smooth, secure upload experience.
                </p>
                <Link to="/faq" className="text-primary hover:underline text-sm">Learn more in our FAQ</Link>
              </CardContent>
            </Card>
          </div>

          {/* Audit Product */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Not Sure Which Package is Right?</h3>
              <p className="text-muted-foreground">Start with our quick audit to get personalized recommendations.</p>
            </div>
            <Card className="shadow-large border-2 border-accent/20">
              <CardHeader className="text-center pb-3">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {auditProduct.icon}
                </div>
                <CardTitle className="text-xl mb-1">{auditProduct.title}</CardTitle>
                <CardDescription className="text-base">
                  {auditProduct.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <ul className="space-y-2.5">
                  {auditProduct.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-accent">{auditProduct.price}</span>
                    <Badge variant="secondary">{auditProduct.note}</Badge>
                  </div>
                  <Button asChild className="w-full gradient-accent text-accent-foreground">
                    <Link to="/contact" className="flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>Order Your Audit</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      <section className="py-12 lg:py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground">
              A collaborative approach that ensures your project is delivered on time, 
              on budget, and aligned with your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We understand your business, audience, and goals through detailed discovery sessions."
              },
              {
                step: "02", 
                title: "Design & Messaging",
                description: "Create wireframes, designs, and strategic copy that resonates with your target audience."
              },
              {
                step: "03",
                title: "Development & Testing", 
                description: "Hand-code your website with performance, security, and SEO as top priorities."
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "Deploy your site and provide training, analytics setup, and ongoing optimization recommendations."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold mb-3">{process.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-5">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="gradient-accent text-accent-foreground font-semibold hover-lift"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Request Free Audit</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;