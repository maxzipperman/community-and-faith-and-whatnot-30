import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import brandHero from '@/assets/mission-brand-hero.jpg';

export default function BrandMessaging() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Brand Messaging & Storytelling',
    provider: { '@type': 'Organization', name: 'Mission Digital' },
  };

  return (
    <Layout>
      <Helmet>
        <title>Brand Messaging & Storytelling | Mission Digital</title>
        <meta name="description" content="Workshops and copywriting that clarify your mission and increase support." />
        <link rel="canonical" href="/services/brand-messaging" />
        <meta property="og:title" content="Mission Digital – Brand Messaging" />
        <meta property="og:description" content="Story-first messaging that boosts donations and engagement." />
        <meta property="og:image" content={brandHero} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="pt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">Brand Messaging & Storytelling</h1>
              <p className="text-lg text-muted-foreground mb-6">Clarity that moves people to support your mission.</p>
              <p className="text-muted-foreground mb-6">Donors support what they understand. We help you say the right things in the right order.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gradient-accent text-accent-foreground">
                  <Link to="/contact">Book a Messaging Workshop</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/portfolio">See Examples</Link>
                </Button>
              </div>
            </div>
            <div>
              <img src={brandHero} alt="Facilitator leading small community workshop with whiteboard and sticky notes" width={1280} height={720} className="w-full h-auto rounded-xl shadow-large" loading="eager" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-10">
          <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Why it matters</CardTitle>
                <CardDescription>Story-first messaging clarifies value and reduces friction.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Donors, parents, and members need relevance fast. Clear messaging boosts donations and registrations.</CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Workshops</CardTitle>
                <CardDescription>Stakeholder interviews and collaborative sessions.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">We facilitate workshops and synthesize insights into a messaging hierarchy and content outlines.</CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Deliverables</CardTitle>
                <CardDescription>Actionable assets you can use right away.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Mission statement refinement and tone guidelines</li>
                  <li>Donation copy patterns and page templates</li>
                  <li>Key-page copy drafts (Home, Give/Donate, Programs)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-4">Before / After</h2>
            <div className="grid md:grid-cols-2 gap-6" role="region" aria-label="Before and After messaging examples">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Before</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Our organization has many programs and we are excited to share updates with our community. Please contact us for more information.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">After</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Your support connects neighbors with meals and mentoring. Give today or join a volunteer team—every hour changes a story.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="testimonial bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg">“We raised more in 60 days than the previous year.”</CardTitle>
                <CardDescription>Director of Development, Community Nonprofit</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="py-12 gradient-subtle" aria-labelledby="onepager-heading">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 id="onepager-heading" className="mb-4">Download the one‑pager</h2>
            <p className="text-muted-foreground mb-6">Enter your email to receive a concise guide with examples and templates.</p>
            <Card>
              <CardContent className="p-6">
                <form
                  onSubmit={(e) => { e.preventDefault(); setStatus('success'); }}
                  className="grid gap-4"
                  aria-describedby="dl-help"
                >
                  <p id="dl-help" className="sr-only">We’ll send you a link to download after submission.</p>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" required aria-describedby="email-help" />
                    <p id="email-help" className="sr-only">We never share your email.</p>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-1">What are you working on? (optional)</label>
                    <Textarea id="notes" rows={3} />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <Button type="submit" className="gradient-accent text-accent-foreground">Email me the one‑pager</Button>
                    <span aria-live="polite" className="text-sm text-success">{status === 'success' ? 'Check your inbox for the download link.' : ''}</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  );
}
