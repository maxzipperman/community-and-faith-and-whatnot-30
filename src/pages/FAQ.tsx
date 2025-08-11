import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import heroFaq from '@/assets/mission-faq-hero.jpg';

const FAQ = () => {
  const faqs = [
    { q: 'How long does a typical project take?', a: 'Most websites launch in 4–8 weeks depending on scope, content readiness, approvals, and integrations.' },
    { q: 'What platforms or CMS options do you support?', a: 'We build lightweight front‑ends and can integrate with popular CMS options like WordPress (headless), Sanity, or a simple Git‑based workflow—choosing the simplest option that fits your team.' },
    { q: 'How do you approach accessibility and SEO?', a: 'Accessibility and SEO are built in from day one: semantic HTML, color contrast, keyboard navigation, alt text, structured data, sitemaps, and performance budgets.' },
    { q: 'What’s included after launch?', a: 'We include handoff docs, a training session, and 30‑day support. Ongoing help is available as needed—no retainers required.' },
    { q: 'How do you handle donations and registrations?', a: 'Clear flows and trusted providers. We implement streamlined donation and registration paths with clear CTAs, error handling, and analytics.' },
    { q: 'Do you migrate content?', a: 'Yes. We can audit, map, and migrate content. For large sites, we prioritize critical pages and create a plan for the rest.' },
    { q: 'What about hosting and performance?', a: 'We use modern hosting and edge delivery. Sites are optimized for Core Web Vitals—fast, resilient, and cache‑friendly.' },
    { q: 'What budgets do you work with?', a: 'We offer scoped packages and custom quotes. We aim for the smallest solution that achieves your goals.' },
    { q: 'Can you work with our internal team or volunteers?', a: 'Absolutely. We partner closely, provide templates, and keep the tech approachable.' },
    { q: 'How do we get started?', a: 'Book a short call. We’ll align on goals, scope, and next steps.' },
  ];

  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q));
  }, [query, faqs]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>FAQ – Mission Digital</title>
        <meta name="description" content="Answers to common questions about timelines, accessibility, SEO, donations, and support." />
        <link rel="canonical" href="/faq" />
        <meta property="og:title" content="Mission Digital FAQ" />
        <meta property="og:description" content="Everything you need to know before we start." />
        <meta property="og:image" content={heroFaq} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="pt-24 pb-6">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="mb-3">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Short answers to help you move forward with confidence.</p>
          <figure className="max-w-5xl mx-auto mt-8">
            <img src={heroFaq} alt="Abstract Q&A motif with soft teal gradients" className="w-full h-auto rounded-xl shadow-soft" loading="lazy" />
          </figure>
        </div>
      </section>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Search */}
          <div className="mt-2 mb-4">
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <input
              id="faq-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              aria-describedby="faq-search-help"
            />
            <p id="faq-search-help" className="sr-only">Type to filter the list of questions below.</p>
          </div>

          {/* Accordion */}
          <section aria-labelledby="faq-heading" className="mb-10">
            <h2 id="faq-heading" className="sr-only">FAQ</h2>
            <Accordion type="single" collapsible className="w-full border border-border rounded-xl divide-y">
              {filtered.map((item, i) => (
                <AccordionItem key={item.q} value={`q${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* CTAs */}
          <section className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default FAQ;

