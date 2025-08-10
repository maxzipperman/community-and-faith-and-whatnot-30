
import { IndustryPage } from '@/components/IndustryPage';
import { youthSportsData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';

const YouthSports = () => {
  return (
    <>
      <IndustryPage data={youthSportsData} />
      <IndustryAICTA industry="youth-sports" label="Youth Sports" />
      <IndustryResourcesSection category="Youth Sports" label="Youth Sports" />
    </>
  );
};

export default YouthSports;
