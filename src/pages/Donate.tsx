import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Donate = () => {
  const amounts = [25, 50, 100, 250];

  return (
    <Layout>
      <Helmet>
        <title>Donate | Position Digital</title>
        <meta name="description" content="Demo donation page showing a simple, mobile-friendly giving experience." />
        <link rel="canonical" href="/donate" />
      </Helmet>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="mb-4">Support the Mission</h1>
            <p className="text-muted-foreground mb-8">This is a demo of a streamlined donation experience. In production we integrate with your preferred giving platform.</p>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {amounts.map(a => (
                      <button key={a} className="px-4 py-2 rounded-md border border-border hover:bg-accent/10 hover:text-accent transition-smooth" aria-label={`Donate $${a}`}>
                        ${a}
                      </button>
                    ))}
                    <input type="number" placeholder="Custom" className="px-3 py-2 rounded-md border bg-background w-28" aria-label="Custom amount" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <input type="text" placeholder="Full name" className="px-3 py-2 rounded-md border bg-background" aria-label="Full name" />
                  <input type="email" placeholder="Email address" className="px-3 py-2 rounded-md border bg-background" aria-label="Email address" />
                </div>
                <div className="mb-6">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-accent" />
                    Make this a monthly gift
                  </label>
                </div>
                <Button className="w-full gradient-accent text-accent-foreground" aria-label="Continue to payment">Continue</Button>
                <p className="text-xs text-muted-foreground mt-3">Secure and encrypted. We never store payment details.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
