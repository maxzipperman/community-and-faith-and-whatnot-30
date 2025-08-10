import * as React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableCaption
} from './ui/table';

export interface ProblemOutcomeItem {
  problem: string;
  outcome: string;
}

interface ProblemOutcomeTableProps {
  items: ProblemOutcomeItem[];
}

export const ProblemOutcomeTable: React.FC<ProblemOutcomeTableProps> = ({ items }) => {
  return (
    <div className="bg-background rounded-lg shadow-sm border">
      <Table>
        <TableCaption className="text-muted-foreground">From Problems to Outcomes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Problem</TableHead>
            <TableHead className="w-1/2 text-right">Outcome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((po, idx) => (
            <TableRow key={idx} className="hover:bg-muted/50 transition-smooth">
              <TableCell className="text-sm">{po.problem}</TableCell>
              <TableCell className="text-sm text-primary text-right font-medium">{po.outcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProblemOutcomeTable;
