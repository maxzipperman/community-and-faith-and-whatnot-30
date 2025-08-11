import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import industriesHero from '@/assets/mission-industries-hero.jpg';

const sectors = [
  { name: 'Faith & Religious', href: '/serve/faith-religious', desc: 'Grow participation, giving, and connection.' },
  { name: 'K-12 Schools', href: '/serve/k12-ptas', desc: 'Simplify events, signups, and fundraising.' },
  { name: 'Nonprofits', href: '/serve/community-nonprofits', desc: 'Boost donations and volunteer engagement.' },
];

export default function Industries() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industries We Serve',
    url: 'https://missiondigitalsolutions.com/industries'
  };

  return (
    <Layout>
      <Helmet>
        <title>Industries We Serve | Mission Digital</title>
        <meta name="description" content="Faith, schools, and nonprofits—tailored solutions to increase donations and engagement." />
        <link rel="canonical" href="/industries" />
        <meta property="og:title" content="Mission Digital Industries" />
        <meta property="og:description" content="See how we help communities like yours thrive online." />
        <meta property="og:image" content={industriesHero} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">Who We Serve</h1>
              <p className="text-lg text-muted-foreground mb-4">Specialized solutions for mission-driven communities.</p>
              <p className="text-muted-foreground mb-6">We understand the unique needs of faith organizations, schools, and nonprofits.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
            <div>
              <img src={industriesHero} alt="Collage of faith, school, and nonprofit scenes" width={1280} height={720} className="w-full h-auto rounded-xl shadow-large" loading="eager" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Choose your path</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
              {sectors.map(s => (
                <Card key={s.href} className="bg-card rounded-xl shadow-md border border-accent/20 p-0 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{s.name}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <Link to={s.href} aria-label={`View solutions for ${s.name}`}>See tailored solutions</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 gradient-subtle">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="mb-3">Case study teaser</h2>
                <p className="text-muted-foreground mb-4">A local nonprofit increased recurring giving by clarifying their story and simplifying the donate flow.</p>
                <Button asChild variant="outline"><Link to="/portfolio">Read the case</Link></Button>
              </div>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">What to expect</CardTitle>
                  <CardDescription>Clear process from discovery to launch with measurable outcomes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Donation/registration-ready experiences</li>
                    <li>Accessibility and performance baked in</li>
                    <li>Training and smooth handoff</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
