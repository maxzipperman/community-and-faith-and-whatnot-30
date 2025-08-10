import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import type { Resource } from "@/data/resources";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  resources: Resource[];
  onSelect: (res: Resource) => void;
}

export default function ResourceSearch({ open, setOpen, resources, onSelect }: Props) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search Helpful Resources..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Resources">
          {resources.map((r) => (
            <CommandItem key={r.id} value={`${r.title} ${r.category} ${r.tags.join(' ')}`} onSelect={() => onSelect(r)}>
              <span className="mr-2 inline-block rounded-sm border px-1 text-[10px] uppercase tracking-wider text-muted-foreground">{r.type}</span>
              <div>
                <div className="text-sm font-medium">{r.title}</div>
                <div className="text-xs text-muted-foreground">{r.category} • {r.tags.join(', ')}</div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
