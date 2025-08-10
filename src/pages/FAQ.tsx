import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <Layout>
      <Helmet>
        <title>Uploads & Media FAQ | Mission Digital</title>
        <meta name="description" content="How we handle uploads and media: BYO storage (S3/R2/GCS/Cloudinary), secure signed uploads, limits, and ownership." />
        <link rel="canonical" href="/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you host our images and files?",
              "acceptedAnswer": { "@type": "Answer", "text": "By default, no. We set up direct uploads to your own storage or media platform. You keep ownership, control, and billing. If you prefer, we can host temporarily with strict quotas and auto-deletion policies." }
            },
            {
              "@type": "Question",
              "name": "What storage providers do you support?",
              "acceptedAnswer": { "@type": "Answer", "text": "Amazon S3, Cloudflare R2, Google Cloud Storage, Azure Blob, Supabase Storage (on your project), Cloudinary, ImageKit, and Uploadcare." }
            },
            {
              "@type": "Question",
              "name": "Is the upload secure?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use short-lived, pre-signed upload URLs or signed parameters so your secret keys are never exposed. Files go directly from the browser to your storage (no large files through our servers)." }
            },
            {
              "@type": "Question",
              "name": "Can you add limits (file size, types, quotas)?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. We enforce limits in both the UI and backend. We also recommend lifecycle rules (e.g., auto-delete old temp files) to keep costs low." }
            },
            {
              "@type": "Question",
              "name": "Who pays for bandwidth and storage?",
              "acceptedAnswer": { "@type": "Answer", "text": "You do—directly to your provider. We don’t add any markup." }
            }
          ]
        })}</script>
      </Helmet>

      <section className="pt-24 pb-10 gradient-subtle">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="mb-4">Uploads & Media — Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Bring your own storage or media platform (S3, Cloudflare R2, GCS, Cloudinary, ImageKit, etc.). Secure, fast, and you keep ownership.
          </p>
        </div>
      </section>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <section aria-labelledby="faq-heading" className="mb-10">
            <h2 id="faq-heading" className="sr-only">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Do you host our images and files?</AccordionTrigger>
                <AccordionContent>
                  By default, no. We set up direct uploads to your own storage or media platform. You keep ownership, control, and billing. If you prefer, we can host temporarily with strict quotas and auto-deletion policies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>What storage providers do you support?</AccordionTrigger>
                <AccordionContent>
                  Amazon S3, Cloudflare R2, Google Cloud Storage, Azure Blob, Supabase Storage (on your project), Cloudinary, ImageKit, and Uploadcare.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is the upload secure?</AccordionTrigger>
                <AccordionContent>
                  Yes. We use short-lived, pre-signed upload URLs or signed parameters so your secret keys are never exposed. Files go directly from the browser to your storage (no large files through our servers).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Can you add limits (file size, types, quotas)?</AccordionTrigger>
                <AccordionContent>
                  Yes. We enforce limits in both the UI and backend. We also recommend lifecycle rules (e.g., auto-delete old temp files) to keep costs low.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Who pays for bandwidth and storage?</AccordionTrigger>
                <AccordionContent>
                  You do—directly to your provider. We don’t add any markup.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section aria-labelledby="trust-legal" className="mb-10 grid sm:grid-cols-2 gap-4">
            <h2 id="trust-legal" className="sr-only">Trust & Legal</h2>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Data Ownership & Portability</h3>
                <p className="text-sm text-muted-foreground">
                  You own your media and files. We never lock you in; we simply connect your site to your chosen storage. You can export or switch providers anytime.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Privacy & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  We minimize data we store (typically file URLs and basic metadata). For sensitive uploads, we can enable extra safeguards (virus scanning, encryption, data residency, or provider-level compliance).
                </p>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="onboarding" className="mb-12">
            <h2 id="onboarding" className="text-lg font-semibold mb-3">Customer onboarding</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">We’ll set up your preferred storage:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium text-foreground">S3/R2/GCS:</span> we’ll need a bucket, region, and programmatic access keys with restricted permissions (upload only). We’ll apply size/type limits and enable CDN caching.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Cloudinary/ImageKit:</span> share your cloud name/public key. We’ll configure signed uploads for security.
                  </li>
                  <li>
                    Not sure? We’ll recommend the best option based on volume, budget, and regions.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="gradient-accent text-accent-foreground">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">See Pricing</Link>
            </Button>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default FAQ;
