import { IndustryPage } from '@/components/IndustryPage';
import { faithReligiousData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const FaithReligious = () => {
  return (
    <>
      <IndustryPage data={faithReligiousData} />
      <IndustryAICTA industry="faith-religious" label="Faith & Religious" />
    </>
  );
};

export default FaithReligious;