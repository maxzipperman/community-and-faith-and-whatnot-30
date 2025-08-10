import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { resources as ALL_RESOURCES, CATEGORIES, TAGS, type Resource } from "@/data/resources";
import ResourceFilters from "@/components/resources/ResourceFilters";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceSearch from "@/components/resources/ResourceSearch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ROICalculator from "@/components/ROICalculator";

export default function Resources() {
  const [category, setCategory] = useState<string>("All");
  const [tags, setTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    return ALL_RESOURCES.filter((r) =>
      (category === "All" || r.category === category) &&
      (tags.length === 0 || tags.every((t) => r.tags.includes(t))) &&
      (search.trim() === "" || (r.title + r.excerpt + r.category + r.tags.join(" ")).toLowerCase().includes(search.toLowerCase()))
    );
  }, [category, tags, search]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onToggleTag = (tag: string) => {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const onQuickOpen = (res: Resource) => {
    setSearchOpen(false);
    // simple: scroll to grid and rely on dialogs to open via user click
    const el = document.getElementById("resources-grid");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <Helmet>
        <title>Helpful Resources | Position Digital</title>
        <meta name="description" content="Interactive checklists, quizzes, and tools to help community orgs and local businesses launch and grow online." />
        <link rel="canonical" href="/resources" />
      </Helmet>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="mb-3">Helpful Resources</h1>
            <p className="text-muted-foreground">Interactive guides, checklists, quizzes, and tools for faith groups, schools, youth sports, and nonprofits.</p>
          </div>

          <ResourceFilters
            categories={CATEGORIES}
            tags={TAGS}
            selectedCategory={category}
            selectedTags={tags}
            search={search}
            onCategoryChange={setCategory}
            onToggleTag={onToggleTag}
            onSearch={setSearch}
            onClear={() => { setCategory("All"); setTags([]); setSearch(""); }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <div className="lg:col-span-2 space-y-6" id="resources-grid">
              {filtered.length === 0 ? (
                <div className="text-sm text-muted-foreground">No resources match your filters. Try clearing filters or searching.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((r) => (
                    <ResourceCard key={r.id} resource={r} />
                  ))}
                </div>
              )}
            </div>
            <aside className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-base">Quick Tool: ROI Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <ROICalculator />
                </CardContent>
              </Card>

            </aside>
          </div>
        </div>
      </section>

      <ResourceSearch open={searchOpen} setOpen={setSearchOpen} resources={ALL_RESOURCES} onSelect={onQuickOpen} />
    </Layout>
  );
}
