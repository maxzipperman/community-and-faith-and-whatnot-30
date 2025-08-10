import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Props {
  categories: string[];
  tags: string[];
  selectedCategory: string;
  selectedTags: string[];
  search: string;
  onCategoryChange: (val: string) => void;
  onToggleTag: (tag: string) => void;
  onSearch: (val: string) => void;
  onClear: () => void;
}

export default function ResourceFilters({ categories, tags, selectedCategory, selectedTags, search, onCategoryChange, onToggleTag, onSearch, onClear }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search resources" value={search} onChange={(e) => onSearch(e.target.value)} />
          <div className="text-xs text-muted-foreground">Tip: Press ⌘K / Ctrl+K to open quick search</div>
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const active = selectedTags.includes(t);
              return (
                <button
                  type="button"
                  key={t}
                  onClick={() => onToggleTag(t)}
                  className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-smooth ${active ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground'}`}
                  aria-pressed={active}
                >
                  <Badge variant={active ? 'secondary' : 'outline'}>{t}</Badge>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <button type="button" onClick={onClear} className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground">Clear all filters</button>
      </div>
    </div>
  );
}
