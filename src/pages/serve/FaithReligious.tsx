import { IndustryPage } from '@/components/IndustryPage';
import { faithReligiousData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Church, Star } from 'lucide-react';

const FaithReligious = () => {
  const faithCommunities = [
    {
      name: 'Churches',
      href: '/serve/churches',
      description: 'Tailored AI solutions for Christian congregations, church administration, and ministry outreach.',
      icon: Church
    },
    {
      name: 'Synagogues',
      href: '/serve/synagogues', 
      description: 'Specialized AI tools for Jewish communities, synagogue management, and religious education.',
      icon: Star
    },
    {
      name: 'Mosques',
      href: '/serve/mosques',
      description: 'Custom AI solutions for Islamic centers, mosque operations, and community engagement.',
      icon: Star
    }
  ];

  return (
    <>
      <IndustryPage data={faithReligiousData} />
      
      {/* Specific Faith Communities Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Solutions for Your Faith Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover AI-powered solutions tailored to the unique needs and traditions of your specific faith community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {faithCommunities.map((community, index) => {
              const IconComponent = community.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{community.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {community.description}
                    </p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Link to={community.href} className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <IndustryResourcesSection category="Faith & Religious" />
      <IndustryAICTA industry="faith-religious" label="Faith & Religious" />
    </>
  );
};

export default FaithReligious;