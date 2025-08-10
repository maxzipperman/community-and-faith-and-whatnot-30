import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import AboutMe from '@/components/AboutMe';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Mission Digital | Helping Communities Communicate</title>
        <meta name="description" content="We help schools, nonprofits, and local groups communicate clearly and act quickly with accessible, fast websites." />
        <link rel="canonical" href="/about" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mission Digital",
            "description": "We help schools, nonprofits, and local groups communicate clearly and act quickly with accessible, fast websites."
          }
        `}</script>
      </Helmet>

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <header className="max-w-4xl mx-auto text-center">
            <h1 className="mb-3">Helping communities communicate clearly and act quickly</h1>
            <p className="text-muted-foreground">We build clear, accessible websites for schools, nonprofits, and local organizations—removing friction between your message and the actions that matter.</p>
          </header>
        </div>
      </section>

      {/* Bio */}
      <AboutMe />

      {/* Philosophy */}
      <section className="py-10" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto text-center">
            <h2 id="philosophy-heading" className="text-xl font-semibold mb-2">Our philosophy</h2>
            <p className="text-muted-foreground">
              Keep it clear, fast, and maintainable. We hand‑code using modern tooling so your site stays lightweight,
              accessible, and easy to evolve.
            </p>
          </article>
        </div>
      </section>

      {/* How we work */}
      <section className="py-10" aria-labelledby="how-we-work-heading">
        <div className="container mx-auto px-4">
          <h2 id="how-we-work-heading" className="sr-only">How we work</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-2">1) Listen & Align</h3>
              <p className="text-sm text-muted-foreground">Quick discovery to define goals, audiences, and success metrics. We map the smallest site that achieves impact.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-2">2) Messaging & IA</h3>
              <p className="text-sm text-muted-foreground">Clear structure and focused messaging so donors, parents, and volunteers find what they need fast.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-2">3) Performance‑first Build</h3>
              <p className="text-sm text-muted-foreground">Accessible, fast, and maintainable. We reduce friction to donate, register, or get involved.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-2">4) Launch, Train, Support</h3>
              <p className="text-sm text-muted-foreground">Launch with analytics and SEO. Hands‑on training and realistic support—no retainers required.</p>
            </article>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-10" aria-labelledby="expect-heading">
        <div className="container mx-auto px-4">
          <h2 id="expect-heading" className="text-xl font-semibold mb-4 text-center">What you can expect</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-1">Clear roadmaps & pricing</h3>
              <p className="text-sm text-muted-foreground">You’ll know exactly what we’re building, why, and how much it costs—before we begin.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-1">Senior‑level attention</h3>
              <p className="text-sm text-muted-foreground">Work directly with an experienced designer‑developer focused on outcomes, not deliverables.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-1">Accessibility & SEO from day one</h3>
              <p className="text-sm text-muted-foreground">WCAG‑minded design, semantic HTML, fast performance, and structured data built‑in.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h3 className="text-base font-semibold mb-1">Measurable results</h3>
              <p className="text-sm text-muted-foreground">Analytics and clear KPIs so you can see what’s working and improve quickly.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-background rounded-lg border border-border p-8 shadow-soft">
            <h2 className="text-xl font-semibold mb-2">Ready to align your community around action?</h2>
            <p className="text-muted-foreground mb-6">Let’s map the smallest, fastest path to impact—then ship it.</p>
            <Button asChild>
              <Link to="/contact">Book your strategy call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
