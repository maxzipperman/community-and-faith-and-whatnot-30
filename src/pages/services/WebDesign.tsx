import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import webDesignHero from '@/assets/mission-webdesign-hero.jpg';

const steps = [
  { step: '1', title: 'Discover', desc: 'Align goals, audiences, and constraints.' },
  { step: '2', title: 'Story & IA', desc: 'Clarify message and site map.' },
  { step: '3', title: 'Design', desc: 'Accessible, mobile-first layouts.' },
  { step: '4', title: 'Build', desc: 'Fast, modern stack with best practices.' },
  { step: '5', title: 'QA', desc: 'A11y, CWV, and cross-device checks.' },
  { step: '6', title: 'Launch', desc: 'Training and smooth handoff.' },
];

export default function WebDesign() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Honeypot check
    if ((form.get('company') as string)?.length) return;
    setStatus('success');
    formRef.current?.reset();
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design & Development',
    provider: { '@type': 'Organization', name: 'Mission Digital' },
  };

  return (
    <Layout>
      <Helmet>
        <title>Web Design & Development | Mission Digital</title>
        <meta name="description" content="Custom nonprofit websites built for accessibility, speed, and results." />
        <link rel="canonical" href="/services/web-design" />
        <meta property="og:title" content="Mission Digital – Web Design for Nonprofits" />
        <meta property="og:description" content="A clear process from discovery to launch with measurable outcomes." />
        <meta property="og:image" content={webDesignHero} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="pt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="mb-4">Web Design & Development</h1>
              <p className="text-lg text-muted-foreground mb-6">Accessible, mobile-first websites that turn interest into action.</p>
              <p className="text-muted-foreground mb-6">We plan, design, and build sites that tell your story, make giving easy, and grow your community.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gradient-accent text-accent-foreground">
                  <Link to="/contact">Schedule a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
            <div>
              <img src={webDesignHero} alt="Hands on keyboard with nonprofit website mockups on screen" width={1280} height={720} className="w-full h-auto rounded-xl shadow-large" loading="eager" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-4">Process</h2>
            <p className="text-muted-foreground">Discover → Story & IA → Design → Build → QA → Launch</p>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12" aria-label="Website project timeline">
              {steps.map((s) => (
                <li key={s.step} className="rounded-xl border border-border p-6 bg-card" aria-label={`Step ${s.step}: ${s.title}`}>
                  <div className="text-sm text-muted-foreground mb-2">Step {s.step}</div>
                  <div className="font-semibold mb-1">{s.title}</div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6">
              {[ 
                { k: 'Higher donations', d: 'Increase completion with better UX and trust signals.' },
                { k: 'More registrations', d: 'Clear CTAs and forms reduce friction.' },
                { k: 'Stronger engagement', d: 'Mobile-first design and content patterns.' }
              ].map((r) => (
                <Card key={r.k} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">{r.k}</CardTitle>
                    <CardDescription>{r.d}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">Case-study highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <Card key={i} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">Community Org {i}</CardTitle>
                    <CardDescription>Redesigned giving and registration flows for measurable impact.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/portfolio" aria-label={`Read case study ${i}`}>Read case</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 gradient-subtle" aria-labelledby="inquiry-heading">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 id="inquiry-heading" className="mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-6">Tell us a bit about your goals and we’ll follow up within one business day.</p>
            <Card>
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={onSubmit} className="space-y-4" aria-describedby="form-help">
                  <p id="form-help" className="sr-only">All fields are optional, but an email helps us respond.</p>
                  <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <Input id="name" name="name" aria-describedby="name-desc" />
                      <p id="name-desc" className="sr-only">Your full name</p>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" name="email" type="email" required aria-describedby="email-desc" />
                      <p id="email-desc" className="sr-only">We’ll only use this to reply</p>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="org" className="block text-sm font-medium mb-1">Organization</label>
                    <Input id="org" name="organization" aria-describedby="org-desc" />
                    <p id="org-desc" className="sr-only">Your organization or team name</p>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" name="message" rows={4} aria-describedby="message-desc" />
                    <p id="message-desc" className="sr-only">Describe your project or goals</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <Button type="submit" className="gradient-accent text-accent-foreground">Send inquiry</Button>
                    <span aria-live="polite" className="text-sm text-success">{status === 'success' ? 'Thanks! We\'ll be in touch shortly.' : ''}</span>
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
