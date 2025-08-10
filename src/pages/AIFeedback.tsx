
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Sparkles } from 'lucide-react';
import ServerAIFeedbackForm from '@/components/ai/ServerAIFeedbackForm';

const AIFeedback = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Feedback | Position Digital</title>
        <meta
          name="description"
          content="Get instant AI-powered feedback on your site: UX, accessibility, performance, and copy improvements."
        />
        <link rel="canonical" href="/ai-feedback" />
      </Helmet>

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                AI Website Analysis
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get quick, actionable feedback. No credentials are stored client-side—this uses our secured Supabase Edge Function and secrets.
            </p>
          </div>

          <ServerAIFeedbackForm />
        </div>
      </section>
    </Layout>
  );
};

export default AIFeedback;
