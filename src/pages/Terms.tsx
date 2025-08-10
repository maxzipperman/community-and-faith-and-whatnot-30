import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Terms = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/terms` : undefined;
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Mission Digital</title>
        <meta name="description" content="Read the Terms of Service for using Mission Digital’s website and services, including payments, acceptable use, and limitations." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      <header className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Please read these terms carefully. By using our website or services, you agree to these Terms of Service.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <section>
            <h2>Acceptance of terms</h2>
            <p>By accessing or using Mission Digital’s website or services, you agree to be bound by these terms and our Privacy Policy. If you do not agree, do not use our services.</p>
          </section>

          <section>
            <h2>Services</h2>
            <p>We provide website design, development, and related consulting. Specific deliverables, timelines, and pricing are defined in project proposals or order forms.</p>
          </section>

          <section>
            <h2>Payments & refunds</h2>
            <p>Payments are processed securely by our payment provider. Certain fees may be non-refundable once work begins. Any refund terms will be stated in your proposal or checkout flow.</p>
          </section>

          <section>
            <h2>Accounts & security</h2>
            <p>If you create an account or are given access to tools, you are responsible for keeping credentials secure and for all activity under your account.</p>
          </section>

          <section>
            <h2>Content & intellectual property</h2>
            <p>All content on this site, including text, graphics, logos, and software, is the property of Mission Digital or its licensors. Client deliverables are governed by your project agreement.</p>
          </section>

          <section>
            <h2>Acceptable use</h2>
            <p>You agree not to misuse the services, attempt unauthorized access, interfere with operation, or use the services to transmit unlawful content.</p>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>We may integrate third-party services such as scheduling, hosting, analytics, storage, and payments. Your use of those services may be subject to their own terms and policies.</p>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>Services are provided “as is” and “as available.” We disclaim all warranties to the fullest extent permitted by law.</p>
          </section>

          <section>
            <h2>Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Mission Digital will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits or revenues.</p>
          </section>

          <section>
            <h2>Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Mission Digital and its personnel from any claims, liabilities, damages, and expenses arising from your use of the services or violation of these terms.</p>
          </section>

          <section>
            <h2>Changes to terms</h2>
            <p>We may update these terms from time to time. Continued use of the services after changes means you accept the updated terms.</p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the jurisdiction where Mission Digital operates, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions about these terms? Contact us via the <Link to="/contact">Contact</Link> page.</p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </article>
      </main>
    </Layout>
  );
};

export default Terms;
