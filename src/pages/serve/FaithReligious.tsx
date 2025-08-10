import { IndustryPage } from '@/components/IndustryPage';
import { faithReligiousData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';

const FaithReligious = () => {
  return (
    <>
      <IndustryPage data={faithReligiousData} />
      <IndustryResourcesSection category="Faith & Religious" />
      <IndustryAICTA industry="faith-religious" label="Faith & Religious" />
    </>
  );
};

export default FaithReligious;