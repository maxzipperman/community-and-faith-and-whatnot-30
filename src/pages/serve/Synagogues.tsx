import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Bot, MessageSquare, Users, ChevronRight, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import ResearchHeader from '@/components/ResearchHeader';

const Synagogues = () => {
  return (
    <Layout>
      <Helmet>
        <title>Synagogue Websites with AI Automation | Mission Digital</title>
        <meta name="description" content="AI-powered synagogue websites that save 10-18 hours per week through automated member FAQ, Hebrew/English communications, and Torah study coordination." />
        <link rel="canonical" href="/serve/synagogues" />
        <meta property="og:title" content="Synagogue Websites with AI Automation" />
        <meta property="og:description" content="Save 10-18 hours weekly with AI-enhanced synagogue websites. Bilingual support, Shabbat-observant scheduling, Torah study coordination." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Synagogue Website Design with AI Automation",
          "provider": {
            "@type": "Organization",
            "name": "Mission Digital Solutions"
          },
          "description": "AI-powered synagogue websites with Hebrew/English support, member FAQ automation, and Torah study coordination",
          "areaServed": "North America",
          "audience": {
            "@type": "Audience",
            "audienceType": "Synagogues, Jewish Communities"
          }
        })}</script>
      </Helmet>

      <ResearchHeader industry="synagogues" className="mx-4 mt-20 mb-4" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Bot className="h-4 w-4 mr-2" />
              AI-Enhanced Synagogue Websites
            </Badge>
            <h1 className="mb-6 text-primary leading-tight">
              Save 10-18 Hours Weekly with AI-Powered Synagogue Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional synagogue websites with intelligent Hebrew/English FAQ automation, Shabbat-observant scheduling, and Torah study coordination designed for Jewish communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Your AI-Enhanced Synagogue Site</span>
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
              { stat: '10-15', label: 'Hours saved weekly on member inquiries', icon: MessageSquare },
              { stat: '4-6', label: 'Hours saved on Hebrew/English communications', icon: Clock },
              { stat: '6-10', label: 'Hours saved on Torah study & event coordination', icon: Calendar },
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
          <p className="text-xs opacity-80 text-center mt-4">Based on outcomes from synagogues using AI-powered Jewish community management features.</p>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">AI-Powered Synagogue Features</h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built automation that understands the unique needs and traditions of Jewish communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Bilingual Member FAQ Automation',
                description: 'AI chatbot with Hebrew/English bilingual support, trained on synagogue policies, service times, lifecycle events, and Jewish lifecycle questions.',
                benefits: ['Answers service times and parking in Hebrew/English', 'Provides lifecycle event information (Bar/Bat Mitzvah, etc.)', 'Handles basic religious questions with rabbinic oversight', 'Reduces administrative calls by 75%'],
                priority: 'Priority Score: 4.85',
                culturalFeatures: 'Hebrew script support, Jewish calendar integration, kosher/kashrut guidance'
              },
              {
                title: 'Shabbat-Observant Communications', 
                description: 'AI assistant that drafts synagogue communications while respecting Shabbat observance, with Hebrew text integration and Jewish seasonal content.',
                benefits: ['Schedules communications for post-Shabbat delivery', 'Integrates Torah portions and Jewish calendar', 'Maintains appropriate religious tone and language', 'Saves 4-6 hours weekly on bilingual content'],
                priority: 'Priority Score: 4.60',
                culturalFeatures: 'Torah portion integration, Hebrew text handling, Jewish holiday awareness'
              },
              {
                title: 'Torah Study & Event Coordination',
                description: 'Intelligent system for coordinating Torah study groups, lifecycle events, and synagogue activities with Jewish calendar integration.',
                benefits: ['Matches study partners by Hebrew proficiency', 'Coordinates Bar/Bat Mitzvah preparation schedules', 'Manages High Holy Day volunteer coordination', 'Reduces event planning time by 65%'],
                priority: 'Priority Score: 4.15',
                culturalFeatures: 'Jewish calendar sync, Torah study tracking, lifecycle event templates'
              },
              {
                title: 'Rabbinic Teaching Archive Search',
                description: 'Semantic search through sermon library, Torah commentaries, and Jewish texts with AI-powered cross-referencing to traditional sources.',
                benefits: ['Search by Torah portion, Jewish concept, or theme', 'Cross-reference with traditional commentaries', 'Find related teachings across Jewish texts', 'Saves 3-4 hours on research and preparation'],
                priority: 'Priority Score: 3.75',
                culturalFeatures: 'Hebrew text search, Jewish source integration, commentary cross-referencing'
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
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs mb-2">Jewish Community Features</Badge>
                    <p className="text-xs text-muted-foreground">{feature.culturalFeatures}</p>
                  </div>
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
                Works with ShulCloud, ChaiPoint, SiddurSoft, and other popular synagogue management platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>AI-Enhanced Synagogue Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Professional Synagogue Website</span>
                      <span className="font-semibold">$3,800 - $5,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Setup & Hebrew Integration</span>
                      <span className="font-semibold">$2,299 - $5,499</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly AI Features</span>
                      <span className="font-semibold">$249 - $449/mo</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>ROI from Time Savings</span>
                      <span className="text-accent">3.5-5.2x</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 shadow-accent">
                <CardHeader>
                  <CardTitle className="text-accent">Jewish Community Value Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Staff Hours Saved (50-75/month)</span>
                      <span className="font-semibold">$1,500-2,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bilingual AI Solution Cost</span>
                      <span className="font-semibold">$449/month</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Monthly Value Created</span>
                      <span className="text-success">$1,050-1,800 net</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground">
                <Link to="/contact">
                  Schedule Your Synagogue AI Consultation
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
                  "The Hebrew/English FAQ system has been transformative. Members get instant answers about lifecycle events and religious questions in their preferred language, and our staff can focus on pastoral care and education instead of repetitive inquiries."
                </blockquote>
                <p className="text-muted-foreground">Synagogue Administrator, Conservative Congregation (450 families)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <IndustryAICTA industry="faith-religious" label="Synagogues" />
    </Layout>
  );
};

export default Synagogues;