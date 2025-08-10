
import { IndustryPage } from '@/components/IndustryPage';
import { parksRecData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';

const ParksRec = () => {
  return (
    <>
      <IndustryPage data={parksRecData} />
      <IndustryAICTA industry="parks-rec" label="Parks & Recreation" />
      <IndustryResourcesSection category="Parks & Recreation" label="Parks & Recreation" />
    </>
  );
};

export default ParksRec;
