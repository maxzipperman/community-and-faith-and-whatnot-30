import ResourceCard from "@/components/resources/ResourceCard";
import { resources } from "@/data/resources";

interface IndustryResourcesSectionProps {
  category: string;
  label?: string;
  limit?: number;
}

export default function IndustryResourcesSection({
  category,
  label,
  limit = 2,
}: IndustryResourcesSectionProps) {
  const items = resources.filter((r) => r.category === category).slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="industry-resources" className="py-16">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h2 id="industry-resources" className="text-2xl font-semibold tracking-tight">
            Helpful Resources for {label || category}
          </h2>
          <p className="text-muted-foreground mt-2">
            Curated guides and tools to help you move faster this month.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      </div>
    </section>
  );
}
