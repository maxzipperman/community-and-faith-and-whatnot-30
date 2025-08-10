import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, CreditCard, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
const Payments = () => {
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setHasSession(!!data.session));
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => setHasSession(!!session));
    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, []);

  const handleStartAudit = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-payment');
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        toast.error('Could not start Stripe Checkout.');
      }
    } catch (err) {
      console.error('[Payments] create-payment error:', err);
      toast.error('Failed to start checkout. Please try again.');
    }
  };
  const handleManageBilling = async () => {
    if (!hasSession) {
      toast.info('Please sign in to access the billing portal.');
      return;
    }
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        toast.error('Could not open Stripe Customer Portal.');
      }
    } catch (err) {
      console.error('[Payments] customer-portal error:', err);
      toast.error('Failed to open billing portal. Please try again.');
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>Payments & Billing | Mission Digital</title>
        <meta name="description" content="Pay the initial $499 audit and learn how billing works. Secure Stripe checkout and clear next steps." />
        <link rel="canonical" href="/payments" />
      </Helmet>

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Payments & Billing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with a $499 expert audit paid up front. Then choose the package and add‑ons that fit your goals—pay from there.
            </p>
          </header>
          <p className="text-[10px] text-muted-foreground text-center" aria-hidden>
            Build marker: v-payments-1
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>How payment works</CardTitle>
                  <CardDescription>Simple, transparent, and built for momentum</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div>
                        <div className="font-medium">1) Initial Audit — $499 (paid in advance)</div>
                        <p className="text-sm text-muted-foreground">We run a focused audit covering UX, performance, accessibility, messaging, and conversion paths. You receive a prioritized action plan.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div>
                        <div className="font-medium">2) Choose package + add‑ons</div>
                        <p className="text-sm text-muted-foreground">Pick from our standardized packages and optional modules to match scope, timeline, and budget.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div>
                        <div className="font-medium">3) Pay for build</div>
                        <p className="text-sm text-muted-foreground">We’ll confirm scope and share a secure Stripe checkout or invoice for the selected package and add‑ons.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div>
                        <div className="font-medium">4) Schedule & build</div>
                        <p className="text-sm text-muted-foreground">We lock dates, set milestones, and start building. You’ll get regular progress updates.</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" /> Secure payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>We use Stripe for secure, PCI‑compliant checkout. We never store card details.</p>
                  <p>Receipts are emailed automatically. For purchasing questions or invoices, contact us.</p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="shadow-large border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl">Start with an Audit</CardTitle>
                  <CardDescription>Kick off with a focused, expert review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Audit price</span>
                    <span className="text-xl font-bold text-accent">$499</span>
                  </div>
                  <Button onClick={handleStartAudit} className="w-full gradient-accent text-accent-foreground">
                    <span className="flex items-center gap-2"><CreditCard className="h-4 w-4" /> Pay & Request Audit</span>
                  </Button>
                  <p className="text-xs text-muted-foreground">Prefer an invoice? <Link to="/contact" className="text-primary underline">Contact us</Link>.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2"><Settings className="h-4 w-4" /> Manage Billing</CardTitle>
                  <CardDescription>Update payment methods, view invoices, or cancel</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleManageBilling} className="w-full" variant="outline" disabled={!hasSession}>
                    Open Stripe Customer Portal
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">{hasSession ? 'You are signed in. Click to manage billing.' : 'Sign in to access your portal.'}</p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payments;
