import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function toTitle(slug?: string) {
  if (!slug) return 'Case Study';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const CaseStudy = () => {
  const { slug } = useParams();
  const title = toTitle(slug);

  return (
    <Layout>
      <Helmet>
        <title>{`${title} | Case Study | Mission Digital`}</title>
        <meta name="description" content="Goals, approach, and measurable results for this project." />
        <link rel="canonical" href={`/case/${slug ?? ''}`} />
        <script type="application/ld+json">{`
          { "@context":"https://schema.org", "@type":"Article", "headline":"${title}", "about":"Website case study" }
        `}</script>
      </Helmet>

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="mb-2">{title}</h1>
          <p className="text-muted-foreground">Each case includes goals, approach, and measurable results.</p>
        </div>
      </section>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">Goals</h2>
            <p className="text-muted-foreground">Outline the organization’s objectives and constraints.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Approach</h2>
            <p className="text-muted-foreground">Brief description of discovery, messaging, design, and build decisions.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Faster loads and clearer CTA flow</li>
              <li>Higher donations, registrations, or attendance</li>
              <li>Improved accessibility and SEO</li>
            </ul>
          </section>

          <div className="pt-4 text-center">
            <Button asChild>
              <Link to="/contact">Request a Case Study Walkthrough</Link>
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CaseStudy;
