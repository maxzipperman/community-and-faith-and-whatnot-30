import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/privacy` : undefined;
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Mission Digital</title>
        <meta name="description" content="Learn how Mission Digital collects, uses, and protects your information. Our privacy-first approach keeps your community safe." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      <header className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Your privacy matters. We collect the minimum data necessary to provide our services and never sell personal data.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <section>
            <h2>Who we are</h2>
            <p>Mission Digital builds accessible, community-centered websites and related services. This policy explains how we handle personal information.</p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <ul>
              <li>Contact details you provide (name, email, phone) when you inquire or book a call.</li>
              <li>Project details you share to help us scope and deliver services.</li>
              <li>Basic usage data (pages visited, device/browser info) to improve the website.</li>
              <li>Payment information processed securely by our payment provider (we do not store full card details).</li>
            </ul>
          </section>

          <section>
            <h2>How we use information</h2>
            <ul>
              <li>Provide and improve our services and website.</li>
              <li>Respond to inquiries and schedule consultations.</li>
              <li>Process payments and manage billing.</li>
              <li>Protect our services from abuse and ensure reliability.</li>
            </ul>
          </section>

          <section>
            <h2>Cookies and tracking</h2>
            <p>We use essential cookies and limited analytics to operate and improve the site. You can control cookies via your browser settings.</p>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>We rely on reputable third-parties to operate our services. These may include:</p>
            <ul>
              <li>Scheduling: Calendly (for booking consultations)</li>
              <li>Payments: Stripe (for secure checkout and billing)</li>
              <li>Hosting & infrastructure: Vite/React hosting and related providers</li>
              <li>Database/auth: Supabase (for forms and secure data handling where applicable)</li>
            </ul>
            <p>These providers process information on our behalf under their own privacy policies.</p>
          </section>

          <section>
            <h2>Data retention</h2>
            <p>We keep information only as long as necessary for the purposes described or to comply with legal obligations, resolve disputes, and enforce agreements.</p>
          </section>

          <section>
            <h2>Data security</h2>
            <p>We use reasonable administrative, technical, and physical safeguards to protect information. No method of transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>Depending on your location, you may have rights to access, correct, or delete your information. Contact us to exercise these rights.</p>
          </section>

          <section>
            <h2>Children’s privacy</h2>
            <p>Our site and services are directed to organizations and adults. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time. When we do, we’ll change the “Last updated” date below.</p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>If you have questions about this policy or our practices, please contact us via the <a href="/contact">Contact</a> page.</p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </article>
      </main>
    </Layout>
  );
};

export default Privacy;
