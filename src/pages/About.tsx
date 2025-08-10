import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import AboutMe from '@/components/AboutMe';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Mission Digital | Helping Communities Communicate</title>
        <meta name="description" content="We help schools, nonprofits, and local groups communicate clearly and act quickly with accessible, fast websites." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-3">About Mission Digital</h1>
            <p className="text-muted-foreground">Our story and how we work with community-focused organizations.</p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <AboutMe />

      {/* Our Approach */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h2 className="text-lg font-semibold mb-2">1) Listen & Align</h2>
              <p className="text-sm text-muted-foreground">Quick discovery to define goals, audience, and success metrics. We map the smallest site that achieves impact.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h2 className="text-lg font-semibold mb-2">2) Simplify the Path</h2>
              <p className="text-sm text-muted-foreground">Clear structure, focused messaging, and accessible design. We reduce clicks to donate, register, or get involved.</p>
            </article>
            <article className="bg-background rounded-lg border border-border p-5 shadow-soft">
              <h2 className="text-lg font-semibold mb-2">3) Ship, Train, Support</h2>
              <p className="text-sm text-muted-foreground">Fast build, hands-on training, and post-launch support. No retainers—just what you need to grow.</p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
