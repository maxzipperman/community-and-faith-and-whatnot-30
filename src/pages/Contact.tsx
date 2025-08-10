
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

const Contact = () => {
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
            <h1 className="mb-6">
              Let's Create Something 
              <span className="text-accent"> Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your online presence? We'd love to learn about your project 
              and provide a free website audit with actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form (Replaced with Calendly + Payment flow) */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your 2-Hour Consultation</CardTitle>
                <CardDescription>
                  Pick a time below. After booking, you'll be redirected to secure checkout to complete your $499 consultation.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Alert>
                  <AlertTitle>Paid Consultation</AlertTitle>
                  <AlertDescription>
                    This is a paid 2-hour consultation priced at <span className="font-semibold">$499</span>. 
                    After you select a time, you’ll be redirected to Stripe to pay and confirm.
                  </AlertDescription>
                </Alert>

                <CalendlyBooking calendlyUrl="https://calendly.com/maxzipperman" />
              </CardContent>
            </Card>

            {/* Contact Info & What to Expect */}
            <div className="space-y-8">
              {/* Contact Information */}
              

              {/* What to Expect */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                  <CardDescription>
                    Our free audit process and next steps
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["We'll review your current website (if you have one)", "Analyze your industry and competitors", "Provide specific recommendations for improvement", "Discuss your goals and create a custom proposal", "No obligation — just valuable insights for your business"].map((step, index) => <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>)}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-soft gradient-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="text-accent-foreground">Why Choose Mission Digital?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">48hrs</div>
                      <div className="text-sm opacity-90">Average response time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Client satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">90+</div>
                      <div className="text-sm opacity-90">PageSpeed scores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">0</div>
                      <div className="text-sm opacity-90">Monthly fees</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;
