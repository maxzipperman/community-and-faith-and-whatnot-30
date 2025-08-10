import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="about-me-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8 items-center">
          <img
            src="/lovable-uploads/ec35dfcc-812b-4477-89d1-2d1f01781693.png"
            alt="Founder headshot of Mission Digital"
            className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover shadow-soft mx-auto"
            loading="lazy"
          />
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h2 id="about-me-heading" className="mb-3">About Me</h2>
              <p className="text-muted-foreground mb-4">
                I’m a mission‑oriented entrepreneur focused on bringing communities together. I build warm, accessible websites that make it easier for people to connect, share what matters, and take action.
              </p>
              <p className="text-muted-foreground mb-6">
                If you’re leading a school, faith group, youth sports club, or nonprofit, I’m here to make the web side simple so you can focus on people.
              </p>
              <Button asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
