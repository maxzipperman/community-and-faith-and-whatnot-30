import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, Clock, TrendingUp, Users, Star, CheckCircle2, Globe, BookOpen, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mosqueServiceData } from '@/data/mosqueServices';
import ROICalculator from '@/components/ROICalculator';
import { ResearchHeader } from '@/components/ResearchHeader';

export default function Mosques() {
  const { industry, heroStats, modules, integrations, testimonial } = mosqueServiceData;
  
  const statsData = {
    clientsServed: heroStats.find(s => s.label.includes('Centers'))?.stat + ' Islamic Centers',
    avgTimeSaved: heroStats.find(s => s.label.includes('Hours'))?.stat + ' hours/month',
    roi: heroStats.find(s => s.label.includes('ROI'))?.stat + ' ROI',
    setupTime: heroStats.find(s => s.label.includes('Setup'))?.stat + ' weeks'
  };

  return (
    <>
      <Helmet>
        <title>AI Solutions for Mosques & Islamic Centers | Mission Digital</title>
        <meta name="description" content="Transform your mosque operations with AI-powered solutions. Bilingual Arabic/English support, Islamic calendar integration, prayer time automation, and Quranic content management." />
        <meta name="keywords" content="mosque AI, Islamic center technology, Arabic bilingual AI, prayer time automation, Quranic content management, mosque management software, Islamic community tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Research Header */}
        <div className="container mx-auto px-4 py-4">
          <ResearchHeader industry="mosques" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Serving the Ummah with Technology
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                AI Solutions for{' '}
                <span className="text-primary">Mosques & Islamic Centers</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your mosque operations with culturally-aware AI that understands Islamic values, supports Arabic/English bilingual communication, and integrates seamlessly with Islamic calendars and prayer times.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact?source=mosques-hero">
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/portfolio">
                  View Islamic Center Examples
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{statsData.clientsServed}</div>
                <div className="text-sm text-muted-foreground">Islamic Centers Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{statsData.avgTimeSaved}</div>
                <div className="text-sm text-muted-foreground">Time Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{statsData.roi}</div>
                <div className="text-sm text-muted-foreground">Return on Investment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{statsData.setupTime}</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Modules */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Culturally-Aware AI Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four core modules designed specifically for Islamic communities, with deep cultural understanding and bilingual support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <Card key={module.id} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Module {index + 1}</Badge>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Setup</div>
                        <div className="font-semibold">${module.pricing.setup}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {module.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {module.culturalAdaptations && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Globe className="w-4 h-4 mr-2 text-blue-600" />
                          Islamic Cultural Features
                        </h4>
                        <ul className="space-y-1">
                          {module.culturalAdaptations?.mosques?.map((adaptation, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2 shrink-0" />
                              {adaptation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Monthly</div>
                        <div className="text-lg font-bold">${module.pricing.monthly}/mo</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">ROI</div>
                        <div className="text-sm font-semibold">{module.roiMetrics.hoursSavedWeekly}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <ROICalculator />
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Investment in Your Community
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparent pricing designed for Islamic communities of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="w-fit mx-auto">Complete Solution</Badge>
                  <CardTitle className="text-2xl">All Four Modules</CardTitle>
                  <CardDescription>Everything your mosque needs to serve the community better</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$1,497</div>
                    <div className="text-sm text-muted-foreground">One-time setup</div>
                    <div className="text-2xl font-bold mt-2">$286/month</div>
                    <div className="text-sm text-muted-foreground">All AI features</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Member FAQ Automation</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Islamic Communications Drafting</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Community Service Coordination</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Khutbah & Teaching Archive</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Arabic/English Bilingual Support</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Islamic Calendar Integration</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/contact?source=mosques-pricing-full">
                      Start Your Islamic AI Journey
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto">Custom Package</Badge>
                  <CardTitle className="text-2xl">Individual Modules</CardTitle>
                  <CardDescription>Start with specific needs and expand over time</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$299-449</div>
                    <div className="text-sm text-muted-foreground">Per module setup</div>
                    <div className="text-2xl font-bold mt-2">$49-89/month</div>
                    <div className="text-sm text-muted-foreground">Per module</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Choose specific modules</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Scale up when ready</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Same cultural features</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Full Arabic/English support</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Islamic calendar included</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>24/7 support included</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact?source=mosques-pricing-custom">
                      Discuss Custom Needs
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl italic text-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-semibold text-lg">{testimonial.author}</div>
                <div className="text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Seamless Integration with Islamic Systems
            </h2>
            <p className="text-muted-foreground mb-8">
              Works with the tools your mosque already uses
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="p-4 border rounded-lg bg-card">
                  <div className="text-sm font-medium">{integration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Mosque's Digital Presence?
              </h2>
              <p className="text-xl opacity-90">
                Join Islamic centers across the country who are using AI to better serve their communities while respecting Islamic values and traditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/contact?source=mosques-final-cta">
                    Schedule Free Consultation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/portfolio">
                    See Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}