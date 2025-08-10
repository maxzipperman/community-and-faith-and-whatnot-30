import { IndustryPage } from '@/components/IndustryPage';
import { campsData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';

const Camps = () => {
  return (
    <>
      <IndustryPage data={campsData} />
      <IndustryAICTA industry="camps" label="Camps" />
      <IndustryResourcesSection category="Camps" label="Camps" />
    </>
  );
};

export default Camps;
