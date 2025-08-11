import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FounderCTA } from '@/components/FounderCTA';

const sectors = [
  { name: 'Faith & Religious', href: '/serve/faith-religious', desc: 'Grow participation, giving, and connection.' },
  { name: 'K-12 Schools & PTAs', href: '/serve/k12-ptas', desc: 'Simplify events, signups, and fundraising.' },
  { name: 'Youth Sports', href: '/serve/youth-sports', desc: 'Streamline registration and schedules.' },
  { name: 'Camps', href: '/serve/camps', desc: 'Fill sessions with clear enrollment flows.' },
  { name: 'Community Nonprofits', href: '/serve/community-nonprofits', desc: 'Boost donations and volunteer engagement.' },
  { name: 'Arts & Culture', href: '/serve/arts-culture', desc: 'Promote events and memberships.' },
  { name: 'Parks & Recreation', href: '/serve/parks-rec', desc: 'Make programs easy to find and join.' },
  { name: 'Local Businesses', href: '/serve/local-businesses', desc: 'Turn visitors into customers.' },
  { name: 'Independent Creatives', href: '/serve/independent-creatives', desc: 'Showcase work and book clients.' },
];

const Industries = () => {
  return (
    <Layout>
      <Helmet>
        <title>Industries We Serve – Mission Digital</title>
        <meta name="description" content="Explore the industries we serve: faith, schools, nonprofits, parks & rec, and more." />
        <link rel="canonical" href="/industries" />
        <meta property="og:title" content="Industries We Serve – Mission Digital" />
        <meta property="og:description" content="Explore the industries we serve: faith, schools, nonprofits, parks & rec, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/industries" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <section className="pt-24 pb-12 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Who We Serve</Badge>
            <h1 className="mb-6">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Websites built for participation, giving, and community impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sectors.map((s) => (
              <Card key={s.href} className="hover-lift transition-smooth">
                <CardHeader>
                  <CardTitle>{s.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{s.desc}</p>
                  <Button asChild variant="outline">
                    <Link to={s.href}>Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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

export default Industries;
