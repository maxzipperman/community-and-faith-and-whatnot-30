import React from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

export type ProcessStep = {
  step: string;
  duration?: string;
  details?: string;
};

function parseDurationToDays(input?: string): number {
  if (!input) return 1;
  const str = input.trim().toLowerCase();
  // Match formats like "1-2 weeks", "3 weeks", "5 days", "1-2 months"
  const rangeMatch = str.match(/(\d+(?:\.\d+)?)[\s-–to]+(\d+(?:\.\d+)?)/);
  const singleMatch = str.match(/(\d+(?:\.\d+)?)/);
  const isWeek = /week/.test(str);
  const isMonth = /month/.test(str);
  const isDay = /day/.test(str);

  let value = 1;
  if (rangeMatch) {
    const a = parseFloat(rangeMatch[1]);
    const b = parseFloat(rangeMatch[2]);
    value = (a + b) / 2;
  } else if (singleMatch) {
    value = parseFloat(singleMatch[1]);
  }

  if (isMonth) return Math.max(1, Math.round(value * 30));
  if (isWeek) return Math.max(1, Math.round(value * 7));
  if (isDay) return Math.max(1, Math.round(value));
  // Fallback: treat as days
  return Math.max(1, Math.round(value));
}

interface GanttProcessProps {
  steps: ProcessStep[];
}

export const GanttProcess: React.FC<GanttProcessProps> = ({ steps }) => {
  if (!steps?.length) return null;

  const keys = steps.map((_, i) => `s${i}`);
  const values = steps.map((s) => parseDurationToDays(s.duration));

  // Build single-row stacked data object
  const dataPoint: Record<string, number | string> = { name: 'Timeline' };
  keys.forEach((k, i) => {
    dataPoint[k] = values[i] || 1;
  });
  const data = [dataPoint];

  // Build chart config for colors and labels
  const config: ChartConfig = keys.reduce((acc, key, i) => {
    const opacity = Math.max(0.45, 1 - i * 0.1);
    acc[key] = {
      label: steps[i].step,
      color: `hsl(var(--primary) / ${opacity})`,
    };
    return acc;
  }, {} as ChartConfig);

  // Map key -> index for tooltip lookups
  const indexByKey = Object.fromEntries(keys.map((k, i) => [k, i] as const));

  return (
    <div className="w-full">
      <ChartContainer config={config} className="w-full">
        <BarChart data={data} barCategoryGap={0} stackOffset="expand">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" hide domain={[0, 'dataMax']} />
          <YAxis type="category" dataKey="name" hide />
          {keys.map((k, i) => (
            <Bar
              key={k}
              dataKey={k}
              name={steps[i].step}
              stackId="process"
              fill={`var(--color-${k})`}
              radius={i === keys.length - 1 ? [0, 8, 8, 0] : [0, 0, 0, 0]}
            />
          ))}
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                formatter={(value: any, name: any, item: any) => {
                  const k = item?.dataKey as string;
                  const idx = indexByKey[k] ?? 0;
                  const step = steps[idx];
                  const days = parseDurationToDays(step.duration);
                  const human = step.duration || `${days} days`;
                  return (
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{step.step}</span>
                      <span className="text-xs text-muted-foreground">{human}</span>
                      {step.details ? (
                        <span className="text-xs text-muted-foreground mt-1">{step.details}</span>
                      ) : null}
                    </div>
                  );
                }}
              />
            }
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default GanttProcess;
