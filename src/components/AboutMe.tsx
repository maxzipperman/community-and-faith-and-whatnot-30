import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderPhoto from "@/assets/founder-photo.jpg";
export default function AboutMe() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="about-me-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8 items-center">
          <figure className="mx-auto">
            <img
              src="/lovable-uploads/399a3fcc-cdb9-4f9b-91da-1d395fe61893.png"
              alt="Founder in Los Angeles with golden retriever Chuck"
              className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover shadow-soft mx-auto"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src !== founderPhoto) img.src = founderPhoto;
              }}
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              I live in Los Angeles with my golden retriever, Chuck.
            </figcaption>
          </figure>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h2 id="about-me-heading" className="mb-3">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I’m a mission‑oriented founder in Los Angeles (dog dad to Chuck) helping communities thrive online. Ex‑Google, 15+ years building apps and websites. I blend consulting, business acumen, technical chops, and SEO to deliver results that matter.
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
