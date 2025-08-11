import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroAbout from '@/assets/mission-about-hero.jpg';
import founderPhoto from '@/assets/founder-photo.jpg';

const About = () => {
  const values = [
    { title: 'Accessibility', desc: 'Inclusive by default. WCAG-minded design and development.' },
    { title: 'Empathy', desc: 'We listen first and shape solutions that fit real constraints.' },
    { title: 'Transparency', desc: 'Clear scope, pricing, and plain-language communication.' },
    { title: 'Outcomes', desc: 'Work measured by donations, registrations, and engagement.' },
  ];

  const timeline = [
    { step: 'Discovery', desc: 'Goals, audiences, content, and constraints.' },
    { step: 'Storytelling', desc: 'Message hierarchy and information architecture.' },
    { step: 'Design', desc: 'Accessible, mobile-first layouts with clear CTAs.' },
    { step: 'Build', desc: 'Fast, maintainable code and performance best practices.' },
    { step: 'Launch', desc: 'QA, analytics, and search fundamentals in place.' },
    { step: 'Support', desc: 'Training and realistic post-launch help when you need it.' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us – Mission Digital</title>
        <meta name="description" content="Our story, values, and approach to helping mission-driven organizations grow." />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About Mission Digital" />
        <meta property="og:description" content="Get to know the team and what drives our work." />
        <meta property="og:image" content={heroAbout} />
        <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"AboutPage",
            "name":"About Mission Digital",
            "url":"https://missiondigitalsolutions.com/about"
          }
        `}</script>
      </Helmet>

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <header className="max-w-4xl mx-auto text-center">
            <h1 className="mb-3">About Mission Digital</h1>
            <p className="text-muted-foreground">We build websites that make it easier to do good.</p>
          </header>
          <figure className="max-w-5xl mx-auto mt-8">
            <img src={heroAbout} alt="Small, diverse team collaborating in a bright workspace" className="w-full h-auto rounded-xl shadow-soft" />
          </figure>
        </div>
      </section>

      {/* Story */}
      <section className="py-10" aria-labelledby="story-heading">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto text-center">
            <h2 id="story-heading" className="text-xl font-semibold mb-2">Our story</h2>
            <p className="text-muted-foreground">
              Why we focus on community organizations and how we partner for impact.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="py-10" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <h2 id="values-heading" className="sr-only">Values</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v) => (
              <Card key={v.title} className="shadow-soft border-border">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach timeline */}
      <section className="py-10" aria-labelledby="approach-heading">
        <div className="container mx-auto px-4">
          <h2 id="approach-heading" className="text-xl font-semibold mb-4 text-center">Our approach</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Project approach timeline">
            {timeline.map((t, idx) => (
              <li key={t.step} className="bg-background rounded-lg border border-border p-5 shadow-soft focus-within:ring-2 focus-within:ring-primary outline-none" tabIndex={0} aria-label={`${idx + 1}. ${t.step}: ${t.desc}`}>
                <div className="text-sm text-muted-foreground">Step {idx + 1}</div>
                <div className="text-base font-semibold">{t.step}</div>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-12" id="team" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <h2 id="team-heading" className="text-xl font-semibold text-center mb-6">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <img src={founderPhoto} alt="Max – Founder" className="w-full h-56 object-cover" loading="lazy" />
              <CardContent className="p-5">
                <h3 className="font-semibold">Max</h3>
                <p className="text-sm text-muted-foreground">Founder & designer‑developer focused on accessible, fast experiences that drive action.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex gap-3 justify-center">
            <Button asChild>
              <a href="#team">Meet the Team</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
