import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FounderCTA } from '@/components/FounderCTA';

const Pricing = () => {
  const tiers = [
    { tier: 'Starter', price: '$1,500', features: ['Up to 5 pages', 'Donation integration', 'Accessibility basics', 'Launch support'] },
    { tier: 'Growth', price: '$3,500', features: ['Up to 15 pages', 'Blog/events', 'SEO setup', 'Quarterly optimization'], popular: true },
    { tier: 'Custom', price: 'Request', features: ['Advanced integrations', 'CRM/AMS', 'Multi-site support', 'Training & documentation'] },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Pricing – Mission Digital</title>
        <meta name="description" content="Transparent pricing for mission-driven websites. Starter, Growth, and Custom plans." />
        <link rel="canonical" href="/pricing" />
        <meta property="og:title" content="Pricing – Mission Digital" />
        <meta property="og:description" content="Transparent pricing for mission-driven websites. Starter, Growth, and Custom plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/pricing" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <section className="pt-24 pb-12 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="mb-6">Pricing & Plans</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Clear tiers for organizations of every size.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((t, i) => (
              <Card key={i} className={`bg-white rounded-xl shadow-md border ${t.popular ? 'border-accent shadow-accent relative' : 'border-border'}`}>
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">Most Popular</span>
                )}
                <CardHeader>
                  <CardTitle>{t.tier}</CardTitle>
                  <CardDescription>{t.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {t.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full">{t.tier === 'Growth' ? 'Choose Growth' : t.tier === 'Custom' ? 'Request Custom Quote' : 'Get Started'}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-includes" className="py-0">
        <div className="container mx-auto px-4">
          <p id="pricing-includes" className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            All plans include mobile-first design, accessibility best practices, analytics, and performance optimization.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers about pricing, timelines, and what’s included.</p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>What’s the typical timeline?</AccordionTrigger>
              <AccordionContent>
                Starter launches in ~2 weeks, Growth in 3–4 weeks, and Custom varies by scope. We’ll confirm your timeline in our kickoff.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
              <AccordionContent>
                Yes. We commonly split projects into 2–3 milestones aligned with discovery, design, and launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What’s not included?</AccordionTrigger>
              <AccordionContent>
                Ongoing hosting and any third‑party subscriptions (e.g., donation platforms) are billed directly to you at cost.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-muted/40 rounded-xl p-6 md:p-8 shadow-soft">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-primary mt-1" />
              <blockquote className="text-lg md:text-xl">
                “Our new site made it easier for supporters to donate and sign up for events—launch paid for itself in the first month.”
              </blockquote>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">— Program Director, Community Nonprofit</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <FounderCTA ctaText="Book a free strategy call" variant="secondary" />
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
