import { IndustryPage } from '@/components/IndustryPage';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';
import { independentCreativesServeData } from '@/data/serveIndustries';

const IndependentCreativesServe = () => {
  return (
    <>
      <IndustryPage data={independentCreativesServeData} />
      <IndustryResourcesSection category="Independent Creatives" />
      <IndustryAICTA industry="independent-creatives" label="Independent Creatives" />
    </>
  );
};

export default IndependentCreativesServe;
