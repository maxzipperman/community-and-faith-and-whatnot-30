
import { IndustryPage } from '@/components/IndustryPage';
import { parksRecData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const ParksRec = () => {
  return (
    <>
      <IndustryPage data={parksRecData} />
      <IndustryAICTA industry="parks-rec" label="Parks & Recreation" />
    </>
  );
};

export default ParksRec;
