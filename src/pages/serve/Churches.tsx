import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Bot, MessageSquare, Users, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import ResearchHeader from '@/components/ResearchHeader';

const Churches = () => {
  return (
    <Layout>
      <Helmet>
        <title>Church Websites with AI Automation | Mission Digital</title>
        <meta name="description" content="AI-powered church websites that save 8-15 hours per week through automated member FAQ, communications drafting, and volunteer coordination." />
        <link rel="canonical" href="/serve/churches" />
        <meta property="og:title" content="Church Websites with AI Automation" />
        <meta property="og:description" content="Save 8-15 hours weekly with AI-enhanced church websites. Member FAQ automation, smart communications, volunteer matching." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Church Website Design with AI Automation",
          "provider": {
            "@type": "Organization",
            "name": "Mission Digital Solutions"
          },
          "description": "AI-powered church websites with member FAQ automation, communications drafting, and volunteer coordination",
          "areaServed": "North America",
          "audience": {
            "@type": "Audience",
            "audienceType": "Churches, Faith Communities"
          }
        })}</script>
      </Helmet>

      <ResearchHeader industry="churches" className="mx-4 mt-20 mb-4" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Bot className="h-4 w-4 mr-2" />
              AI-Enhanced Church Websites
            </Badge>
            <h1 className="mb-6 text-primary leading-tight">
              Save 8-15 Hours Weekly with AI-Powered Church Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional church websites with intelligent member FAQ automation, smart communications drafting, and volunteer coordination that work 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Your AI-Enhanced Church Site</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ai-feedback?industry=faith-religious">Test Your Current Site</Link>
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
              { stat: '8-12', label: 'Hours saved weekly on member questions', icon: MessageSquare },
              { stat: '3-5', label: 'Hours saved on bulletin/newsletter writing', icon: Clock },
              { stat: '5-8', label: 'Hours saved on volunteer coordination', icon: Users },
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
          <p className="text-xs opacity-80 text-center mt-4">Based on client outcomes using AI-powered church management features.</p>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">AI-Powered Church Features</h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built automation that understands the unique needs of faith communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Member FAQ Automation',
                description: 'AI chatbot trained on your church policies, service times, programs, and frequently asked questions. Available 24/7 to help members and visitors.',
                benefits: ['Answers service times, parking, childcare questions', 'Provides program information and requirements', 'Handles basic pastoral care inquiries', 'Reduces staff phone calls by 70%'],
                priority: 'Priority Score: 4.75'
              },
              {
                title: 'Smart Communications Drafting', 
                description: 'AI assistant that helps draft weekly bulletins, newsletters, and announcements with your church voice and theological accuracy.',
                benefits: ['Drafts bulletin content from calendar events', 'Maintains consistent church voice', 'Suggests biblical references and quotes', 'Saves 3-5 hours weekly on writing'],
                priority: 'Priority Score: 4.25'
              },
              {
                title: 'Volunteer Coordination System',
                description: 'Intelligent matching system that connects members with volunteer opportunities based on skills, availability, and ministry interests.',
                benefits: ['Matches volunteers to ministry needs', 'Automated reminder and scheduling', 'Tracks volunteer hours and impact', 'Reduces coordination time by 60%'],
                priority: 'Priority Score: 3.75'
              },
              {
                title: 'Sermon & Teaching Archive Search',
                description: 'Semantic search through your sermon library, Bible studies, and teaching materials with AI-powered discovery.',
                benefits: ['Search by topic, scripture, or theme', 'Find related teachings instantly', 'Discover content connections', 'Saves 2-3 hours on research'],
                priority: 'Priority Score: 3.25'
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
                Works with Planning Center, Pushpay, Breeze, and other popular church management platforms.
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
                      <span>Professional Church Website</span>
                      <span className="font-semibold">$3,300 - $4,900</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Setup & Training</span>
                      <span className="font-semibold">$1,999 - $4,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly AI Features</span>
                      <span className="font-semibold">$199 - $399/mo</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>ROI from Time Savings</span>
                      <span className="text-accent">3-4.5x</span>
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
                      <span>Staff Hours Saved (40-60/month)</span>
                      <span className="font-semibold">$1,200-1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Solution Cost</span>
                      <span className="font-semibold">$399/month</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Monthly Value Created</span>
                      <span className="text-success">$800-1,400 net</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground">
                <Link to="/contact">
                  Schedule Your Church AI Consultation
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
                  "The AI FAQ system alone saves our staff 10+ hours per week. Members get instant answers, and we can focus on ministry instead of answering the same questions repeatedly."
                </blockquote>
                <p className="text-muted-foreground">Executive Pastor, Mid-size Church (800 attendees)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <IndustryAICTA industry="faith-religious" label="Churches" />
    </Layout>
  );
};

export default Churches;