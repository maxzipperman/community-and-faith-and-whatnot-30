import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Checklist from "./Checklist";
import Quiz from "./Quiz";
import { Resource } from "@/data/resources";
import ROICalculator from "@/components/ROICalculator";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const { title, excerpt, type, tags } = resource;

  const typeLabel: Record<Resource["type"], string> = {
    checklist: "Checklist",
    quiz: "Quiz",
    tool: "Tool",
    link: "Guide",
  };

  const interactive = type === "checklist" || type === "quiz" || type === "tool";

  const content = (
    <Card className="h-full shadow-soft hover-lift">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{typeLabel[type]}</Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        {interactive ? (
          <Button size="sm">Open</Button>
        ) : (
          <Button asChild size="sm" variant="outline">
            <a href={resource.href} target="_blank" rel="noopener noreferrer">Read</a>
          </Button>
        )}
        <div className="ml-auto flex flex-wrap gap-1">
          {tags.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (!interactive) return content;

  return (
    <Dialog>
      <DialogTrigger asChild>{content}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {resource.type === "checklist" && resource.payload && (
          <Checklist
            storageKey={`resource:${resource.id}:checklist`}
            items={(resource.payload as any).items}
          />
        )}
        {resource.type === "quiz" && resource.payload && (
          <Quiz questions={(resource.payload as any).questions} />
        )}
        {resource.type === "tool" && (
          <div className="py-2">
            <ROICalculator />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
