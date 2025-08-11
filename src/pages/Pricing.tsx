import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
    </Layout>
  );
};

export default Pricing;
