import { IndustryPage } from '@/components/IndustryPage';
import { campsData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const Camps = () => {
  return (
    <>
      <IndustryPage data={campsData} />
      <IndustryAICTA industry="camps" label="Camps" />
    </>
  );
};

export default Camps;
