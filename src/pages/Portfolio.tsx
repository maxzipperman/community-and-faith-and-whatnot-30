import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import heroPortfolio from '@/assets/mission-portfolio-hero.jpg';
import accountantsHero from '@/assets/accountants-hero.jpg';
import lawyersHero from '@/assets/lawyers-hero.jpg';
import consultantsHero from '@/assets/consultants-hero.jpg';

const Portfolio = () => {
  type Sector = 'All' | 'Faith' | 'Schools' | 'Nonprofits';
  const [filter, setFilter] = useState<Sector>('All');

  const projects = [
    {
      slug: 'faith-center-refresh', sector: 'Faith' as const, org: 'City Faith Center',
      metric: '+32% donations in 90 days', thumb: lawyersHero,
    },
    {
      slug: 'pta-enrollment-hub', sector: 'Schools' as const, org: 'Northview PTA',
      metric: '+41% registrations YoY', thumb: consultantsHero,
    },
    {
      slug: 'community-food-bank', sector: 'Nonprofits' as const, org: 'Westside Food Bank',
      metric: '2x volunteer signups', thumb: accountantsHero,
    },
    {
      slug: 'after-school-program', sector: 'Schools' as const, org: 'Greenfield Elementary',
      metric: '+18% attendance', thumb: consultantsHero,
    },
    {
      slug: 'neighborhood-parish', sector: 'Faith' as const, org: 'St. Joseph Parish',
      metric: 'Sub-1.5s loads, +24% giving', thumb: lawyersHero,
    },
  ];

  const filtered = useMemo(() => (
    filter === 'All' ? projects : projects.filter(p => p.sector === filter)
  ), [filter, projects]);

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Mission Digital</title>
        <meta name="description" content="Selected projects and case studies for mission-driven organizations." />
        <link rel="canonical" href="/portfolio" />
        <meta property="og:title" content="Mission Digital Portfolio" />
        <meta property="og:description" content="See outcomes from community websites we’ve built." />
        <meta property="og:image" content={heroPortfolio} />
        <script type="application/ld+json">{`
          { "@context":"https://schema.org", "@type":"CollectionPage", "name":"Mission Digital Portfolio", "url":"https://missiondigitalsolutions.com/portfolio" }
        `}</script>
      </Helmet>

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h1 className="mb-3">Portfolio & Case Studies</h1>
            <p className="text-muted-foreground">Work that helped missions grow giving, volunteers, and attendance.</p>
          </div>
          <figure className="max-w-5xl mx-auto mt-8">
            <img src={heroPortfolio} alt="Collage of website snapshots with teal accents" className="w-full h-auto rounded-xl shadow-soft" />
          </figure>
        </div>
      </section>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-muted-foreground">Each case includes goals, approach, and measurable results.</p>

          {/* Filter controls */}
          <div className="mt-6 flex flex-wrap gap-2 items-center justify-center" role="radiogroup" aria-label="Filter projects by sector" aria-controls="portfolio-gallery">
            {(['All','Faith','Schools','Nonprofits'] as Sector[]).map(s => (
              <Button key={s} variant={filter === s ? 'default' : 'outline'} onClick={() => setFilter(s)} aria-pressed={filter === s} aria-label={`Show ${s} projects`}>
                {s}
              </Button>
            ))}
          </div>

          {/* Gallery */}
          <div id="portfolio-gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filtered.map((p) => (
              <Card key={p.slug} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover-lift">
                <Link to={`/case/${p.slug}`} aria-label={`Open case study: ${p.org}`}>
                  <img src={p.thumb} alt={`${p.org} website thumbnail`} className="w-full h-44 object-cover" loading="lazy" />
                </Link>
                <CardHeader>
                  <CardTitle className="text-lg">{p.org}</CardTitle>
                  <p className="text-primary font-medium">{p.metric}</p>
                </CardHeader>
                <CardContent>
                  <Button asChild size="sm">
                    <Link to={`/case/${p.slug}`}>View case</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link to="/contact">Request a Case Study Walkthrough</Link>
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
