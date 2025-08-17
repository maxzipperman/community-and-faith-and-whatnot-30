import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, TrendingDown } from 'lucide-react';

const ROICalculator = () => {
  const [timeframe, setTimeframe] = useState(3);

  const positionDigitalCost = {
    upfront: 4500,
    hosting: 120, // per year
    maintenance: 0,
    aiSetup: 2999, // one-time AI implementation
    aiMonthly: 299 * 12 // AI features per year
  };

  const typicalAgencyCost = {
    upfront: 3500,
    hosting: 0,
    maintenance: 50 * 12, // $50/month
    aiSetup: 0,
    aiMonthly: 0
  };

  const calculateTotalCost = (costs: typeof positionDigitalCost) => {
    return costs.upfront + costs.aiSetup + (costs.hosting + costs.maintenance + costs.aiMonthly) * timeframe;
  };

  const positionTotal = calculateTotalCost(positionDigitalCost);
  const typicalTotal = calculateTotalCost(typicalAgencyCost);
  const timeSavings = (40 * 30 * timeframe) * 12; // 40 hours/month saved * $30/hour * timeframe years
  const netValue = timeSavings - (positionTotal - typicalTotal);

  return (
    <section className="py-16 lg:py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              AI-Enhanced ROI Calculator
            </Badge>
            <h2 className="mb-6">
              AI Features Pay for Themselves in 
              <span className="text-accent"> Time Savings</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the ROI from AI automation that saves 40+ hours monthly vs traditional websites over {timeframe} years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Mission Digital */}
            <Card className="border-2 border-accent/20 shadow-accent">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-accent">Mission Digital</CardTitle>
                <CardDescription>One-time investment, no ongoing fees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Website Development</span>
                    <span className="font-semibold">${positionDigitalCost.upfront.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Setup & Training</span>
                    <span className="font-semibold">${positionDigitalCost.aiSetup.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hosting ({timeframe} years)</span>
                    <span className="font-semibold">${(positionDigitalCost.hosting * timeframe).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Features ({timeframe} years)</span>
                    <span className="font-semibold">${(positionDigitalCost.aiMonthly * timeframe).toLocaleString()}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Cost ({timeframe} years)</span>
                    <span className="text-accent">${positionTotal.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Typical Agency */}
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingDown className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle>Traditional Website</CardTitle>
                <CardDescription>Lower upfront cost, no AI automation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Initial Investment</span>
                    <span className="font-semibold">${typicalAgencyCost.upfront.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hosting ({timeframe} years)</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform/Maintenance Fees</span>
                    <span className="font-semibold">${(typicalAgencyCost.maintenance * timeframe).toLocaleString()}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Cost ({timeframe} years)</span>
                    <span>${typicalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeframe Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-lg p-1">
              {[1, 2, 3, 5].map((years) => (
                <Button
                  key={years}
                  variant={timeframe === years ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTimeframe(years)}
                  className="px-6"
                >
                  {years} Year{years > 1 ? 's' : ''}
                </Button>
              ))}
            </div>
          </div>

          {/* AI Value Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center gradient-accent border-0">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-accent-foreground mb-2">
                  ${timeSavings.toLocaleString()} Value Created
                </h3>
                <p className="text-accent-foreground/80 text-lg">
                  From 40+ hours saved monthly over {timeframe} years
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-accent/20">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-accent mb-2">
                  ${netValue.toLocaleString()} Net ROI
                </h3>
                <p className="text-muted-foreground text-lg">
                  After all AI implementation costs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
