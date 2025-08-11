import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


import { Link } from 'react-router-dom';
import { HeartHandshake, Users, HandCoins, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Index = () => {

  return (
    <Layout>
      <Helmet>
        <title>Nonprofit & Community Websites | Mission Digital Solutions</title>
        <meta name="description" content="Accessible, mission-driven websites that grow donations, volunteers, and event participation. Book a free strategy call." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Your Mission, Amplified. Your Community, Engaged." />
        <meta property="og:description" content="Websites for nonprofits, faith communities, and schools—built for impact and growth." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization","LocalBusiness"],
          "name": "Mission Digital Solutions",
          "url": "https://missiondigitalsolutions.com",
          "description": "Website design and development for nonprofits, faith communities, schools, and community organizations",
          "address": {"@type":"PostalAddress","addressLocality":"Los Angeles","addressRegion":"CA","addressCountry":"US"},
          "sameAs": [],
          "knowsAbout":["Nonprofit Websites","Faith Organization Websites","School Websites"]
        })}</script>
      </Helmet>

      {/* Section 1: Hero */}
      <section className="pt-24 pb-16 lg:py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartHandshake className="h-4 w-4" />
              <span>Built for nonprofits and faith communities</span>
            </div>
            <h1 className="mb-4 text-primary leading-tight">Your Mission, Amplified. Your Community, Engaged.</h1>
            <p className="text-xl lg:text-lg text-muted-foreground mb-8 lg:mb-6 max-w-2xl mx-auto leading-relaxed">
              Beautiful, accessible websites that help nonprofits, faith communities, and schools share impact, grow community, and increase donations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground font-semibold">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get a Free Strategy Call</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ai-feedback">Test Your Current Site</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { stat: '156%', label: 'More online donations' },
              { stat: '89%', label: 'Higher volunteer signups' },
              { stat: '134%', label: 'More event registrations' },
            ].map((item, i) => (
              <Card key={i} className="bg-primary text-primary-foreground border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-extrabold">{item.stat}</div>
                  <div className="opacity-90 text-sm">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs opacity-80 text-center mt-4">Based on partner outcomes after optimizing friction and clarifying stories.</p>
        </div>
      </section>

      {/* Section 2: Engagement Pillars */}
      <section className="py-16 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 max-w-5xl mx-auto">
            <Card className="hover-lift shadow-soft">
              <CardHeader className="lg:p-5 lg:pb-2">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-accent" />
                  <CardTitle>Share Your Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="lg:p-5">
                Clearly communicate your story and purpose with a professional website that inspires trust and action.
              </CardContent>
            </Card>
            <Card className="hover-lift shadow-soft">
              <CardHeader className="lg:p-5 lg:pb-2">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-accent" />
                  <CardTitle>Engage Your Community</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="lg:p-5">
                Bring people together with volunteer sign-ups and community news.
              </CardContent>
            </Card>
            <Card className="hover-lift shadow-soft">
              <CardHeader className="lg:p-5 lg:pb-2">
                <div className="flex items-center space-x-3">
                  <HandCoins className="h-6 w-6 text-accent" />
                  <CardTitle>Grow Your Donations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="lg:p-5">
                Make giving easy and secure with a frictionless, mobile-friendly donation process built to increase support.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Industries We Serve */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-6">
            <h2 className="mb-3">Tailored pathways for the communities you serve:</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-3 max-w-5xl mx-auto">
            {[
              { name: 'Faith & Religious', href: '/serve/faith-religious', desc: 'Sermons, events, secure giving, and communications.' },
              { name: 'K-12 Schools', href: '/serve/k12-ptas', desc: 'Clear parent communications, calendars, and fundraising.' },
              { name: 'Nonprofits', href: '/serve/community-nonprofits', desc: 'Impact storytelling, donation flows, volunteer pipelines.' },
            ].map((s, i) => (
              <Card key={i} className="hover-lift">
                <CardHeader className="lg:p-5 lg:pb-2">
                  <CardTitle className="text-lg">{s.name}</CardTitle>
                </CardHeader>
                <CardContent className="lg:p-5">
                  <p className="text-sm text-muted-foreground mb-2">{s.desc}</p>
                  <Link to={s.href} className="text-accent font-medium">Learn more →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Section 5: Testimonial */}
      <section className="py-16 lg:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-foreground text-background p-6 lg:p-5 rounded-lg shadow-soft">
              <blockquote className="text-2xl lg:text-xl font-semibold mb-2 leading-snug">“Our new site finally matches our mission—and online donations are measurably up.”</blockquote>
              <p className="opacity-80">Community Director, Nonprofit Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="mb-3">Discover → Design → Build → Launch</h2>
            <p className="text-muted-foreground">A clear, collaborative process that keeps momentum and delivers measurable outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Discover', desc: 'Goals, audiences, friction points.' },
              { step: '02', title: 'Design', desc: 'Accessible, mobile-first, on-brand.' },
              { step: '03', title: 'Build', desc: 'Performance, SEO, integrations.' },
              { step: '04', title: 'Launch', desc: 'Training, analytics, optimizations.' },
            ].map((s, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold">{s.step}</div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-16 lg:py-16 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-primary-foreground leading-tight">Ready to Build a Website That Inspires Action?</h2>
            <p className="text-primary-foreground/80 mb-8 lg:mb-6">Let’s create a digital home for your mission that reflects your work and empowers your community to get involved.</p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
