
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import CalendlyBooking from '@/components/booking/CalendlyBooking';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
const Contact = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const paymentStatus = searchParams.get('payment');
  const contactInfo = [{
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "hello@positiondigital.com",
    description: "We respond within 24 hours"
  }, {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    content: "(555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST"
  }, {
    icon: <Clock className="h-5 w-5" />,
    title: "Response Time",
    content: "24 hours",
    description: "Free audit within 2 business days"
  }];
  const services = ["Website Design & Development", "Brand Messaging Strategy", "Website Optimization & Refresh", "Free Website Audit", "Other"];
  const industries = ["Professional Services (Law, Accounting, Consulting)", "Local Business (Restaurant, Home Services, Retail)", "Nonprofit & Religious Organizations", "Independent Creatives (Photography, Art, Coaching)", "Other"];
  return <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Get Started</Badge>
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us about your mission—we’ll help you plan the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {paymentStatus === 'success' && (
            <Alert className="mb-6">
              <AlertTitle>Payment successful</AlertTitle>
              <AlertDescription>Your consultation is confirmed. We’ve emailed your receipt.</AlertDescription>
            </Alert>
          )}
          {paymentStatus === 'canceled' && (
            <Alert variant="destructive" className="mb-6">
              <AlertTitle>Payment canceled</AlertTitle>
              <AlertDescription>You can try again anytime. Your booking isn’t confirmed yet.</AlertDescription>
            </Alert>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Tell us about your mission—we’ll help you plan the next step.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const hp = (form.querySelector('input[name="company_website"]') as HTMLInputElement)?.value;
                    if (hp) return; // honeypot
                    setSubmitted(true);
                    form.reset();
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required aria-required="true" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" name="email" required aria-required="true" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="org">Organization</Label>
                      <Input id="org" name="organization" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Topic</Label>
                      <Input id="subject" name="subject" placeholder="Project, audit, question…" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={5} required aria-required="true" />
                  </div>
                  {/* Honeypot */}
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div className="flex items-center gap-3">
                    <Button type="submit">Submit</Button>
                    <a href="#schedule" className="text-accent">Schedule a Call</a>
                  </div>
                  <div role="status" aria-live="polite" className="text-success text-sm mt-2">
                    {submitted && 'Thanks! We received your message and will reply within 24 hours.'}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Details + Calendar */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Contact Details</CardTitle>
                  <CardDescription>We respect your privacy and never share your information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {info.icon}
                      <div>
                        <div className="font-medium">{info.title}</div>
                        <div className="text-sm text-muted-foreground">{info.content} — {info.description}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card id="schedule" className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule a Call</CardTitle>
                  <CardDescription>Pick a time that works for you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CalendlyBooking calendlyUrl="https://calendly.com/maxzipperman" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;
