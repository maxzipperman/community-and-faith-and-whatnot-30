import { useId } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ChecklistProps {
  storageKey: string;
  title?: string;
  items: string[];
}

export default function Checklist({ storageKey, title, items }: ChecklistProps) {
  const [checked, setChecked] = useLocalStorage<Record<number, boolean>>(storageKey, {});
  const id = useId();

  const completed = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completed / items.length) * 100);

  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <div className="text-sm text-muted-foreground">Progress: {completed}/{items.length} ({progress}%)</div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={`${id}-${idx}`} className="flex items-start gap-3">
            <Checkbox
              id={`${id}-${idx}`}
              checked={!!checked[idx]}
              onCheckedChange={(v) => setChecked({ ...checked, [idx]: Boolean(v) })}
            />
            <label htmlFor={`${id}-${idx}`} className="text-sm leading-6 cursor-pointer select-none">
              {item}
            </label>
          </li>
        ))}
      </ul>
      <div className="pt-2">
        <Button variant="outline" size="sm" onClick={() => setChecked({})}>
          Reset checklist
        </Button>
      </div>
    </div>
  );
}
