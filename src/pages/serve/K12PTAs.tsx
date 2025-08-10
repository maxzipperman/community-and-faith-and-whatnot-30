
import { IndustryPage } from '@/components/IndustryPage';
import { k12PTAsData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';

const K12PTAs = () => {
  return (
    <>
      <IndustryPage data={k12PTAsData} />
      <IndustryAICTA industry="k12-ptas" label="K-12 & PTAs" />
      <IndustryResourcesSection category="K-12 Schools & PTAs" label="K-12 & PTAs" />
    </>
  );
};

export default K12PTAs;
