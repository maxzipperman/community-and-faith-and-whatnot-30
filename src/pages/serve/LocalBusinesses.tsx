import { IndustryPage } from '@/components/IndustryPage';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';
import { localBusinessesServeData } from '@/data/serveIndustries';

const LocalBusinessesServe = () => {
  return (
    <>
      <IndustryPage data={localBusinessesServeData} />
      <IndustryResourcesSection category="Local Businesses" />
      <IndustryAICTA industry="local-businesses" label="Local Businesses" />
    </>
  );
};

export default LocalBusinessesServe;
