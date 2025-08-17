import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Bot, MessageSquare, FileText, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const NonprofitsAI = () => {
  return (
    <Layout>
      <Helmet>
        <title>Nonprofit Websites with AI Automation | Mission Digital</title>
        <meta name="description" content="AI-powered nonprofit websites that save 10-20 hours per week through automated service inquiries, donor communications, and grant writing assistance." />
        <link rel="canonical" href="/serve/nonprofits-ai" />
        <meta property="og:title" content="Nonprofit Websites with AI Automation" />
        <meta property="og:description" content="Save 10-20 hours weekly with AI-enhanced nonprofit websites. Service inquiry automation, donor communications, grant assistance." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Nonprofit Website Design with AI Automation",
          "provider": {
            "@type": "Organization",
            "name": "Mission Digital Solutions"
          },
          "description": "AI-powered nonprofit websites with service inquiry automation, donor communications, and grant writing assistance",
          "areaServed": "North America",
          "audience": {
            "@type": "Audience",
            "audienceType": "Nonprofits, Community Organizations"
          }
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Bot className="h-4 w-4 mr-2" />
              AI-Enhanced Nonprofit Websites
            </Badge>
            <h1 className="mb-6 text-primary leading-tight">
              Save 10-20 Hours Weekly with AI-Powered Nonprofit Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional nonprofit websites with intelligent service inquiry automation, donor communications, and grant writing assistance that work around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Your AI-Enhanced Nonprofit Site</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ai-feedback?industry=community-nonprofits">Test Your Current Site</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { stat: '10-15', label: 'Hours saved weekly on service inquiries', icon: MessageSquare },
              { stat: '5-8', label: 'Hours saved on donor communications', icon: Clock },
              { stat: '20-40', label: 'Hours saved per grant with AI assistance', icon: FileText },
            ].map((item, i) => (
              <Card key={i} className="bg-primary text-primary-foreground border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 mx-auto mb-3 opacity-90" />
                  <div className="text-3xl font-extrabold">{item.stat}</div>
                  <div className="opacity-90 text-sm">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs opacity-80 text-center mt-4">Based on client outcomes using AI-powered nonprofit management features.</p>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">AI-Powered Nonprofit Features</h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built automation that understands the unique challenges of community organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Service Inquiry Automation',
                description: 'AI chatbot trained on your programs, eligibility requirements, application processes, and frequently asked questions. Provides instant support 24/7.',
                benefits: ['Answers eligibility and application questions', 'Provides program information and schedules', 'Handles intake screening and routing', 'Reduces staff inquiries by 80%'],
                priority: 'Priority Score: 4.50'
              },
              {
                title: 'Smart Donor Communications', 
                description: 'AI assistant that creates personalized donor communications, impact updates, and fundraising campaigns tailored to different donor segments.',
                benefits: ['Personalized donor acknowledgments', 'Impact stories with specific metrics', 'Segmented campaign messaging', 'Saves 5-8 hours weekly on communications'],
                priority: 'Priority Score: 4.50'
              },
              {
                title: 'Volunteer Coordination System',
                description: 'Intelligent matching system that connects volunteers with opportunities based on skills, availability, and cause interests.',
                benefits: ['Skills-based volunteer matching', 'Automated scheduling and reminders', 'Impact tracking and reporting', 'Reduces coordination time by 70%'],
                priority: 'Priority Score: 4.25'
              },
              {
                title: 'Grant Writing Assistant',
                description: 'AI-powered grant proposal generator that matches your organization with relevant opportunities and helps draft compelling applications.',
                benefits: ['Identifies matching grant opportunities', 'Drafts proposal sections and narratives', 'Budget and outcome projections', 'Saves 20-40 hours per grant cycle'],
                priority: 'Priority Score: 3.75'
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-lift shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{feature.priority}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Pricing */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Seamless Integration with Your Current Systems</h2>
              <p className="text-lg text-muted-foreground">
                Works with Salesforce Nonprofit Cloud, Blackbaud, Bloomerang, and other popular nonprofit management platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>AI-Enhanced Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Professional Nonprofit Website</span>
                      <span className="font-semibold">$1,900 - $4,900</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Setup & Training</span>
                      <span className="font-semibold">$999 - $3,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly AI Features</span>
                      <span className="font-semibold">$149 - $299/mo</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>ROI from Time Savings</span>
                      <span className="text-accent">3.8-5.8x</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 shadow-accent">
                <CardHeader>
                  <CardTitle className="text-accent">Value Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Staff Hours Saved (45-70/month)</span>
                      <span className="font-semibold">$1,125-1,750</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Solution Cost</span>
                      <span className="font-semibold">$299/month</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Monthly Value Created</span>
                      <span className="text-success">$825-1,450 net</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground">
                <Link to="/contact">
                  Schedule Your Nonprofit AI Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <blockquote className="text-xl font-semibold mb-4">
                  "The service inquiry automation transformed our front desk operations. We can now help 3x more clients with the same staff, and our team focuses on high-impact case management instead of answering the same questions."
                </blockquote>
                <p className="text-muted-foreground">Executive Director, Community Services Nonprofit</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <IndustryAICTA industry="community-nonprofits" label="Nonprofits" />
    </Layout>
  );
};

export default NonprofitsAI;