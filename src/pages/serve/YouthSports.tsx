
import { IndustryPage } from '@/components/IndustryPage';
import { youthSportsData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const YouthSports = () => {
  return (
    <>
      <IndustryPage data={youthSportsData} />
      <IndustryAICTA industry="youth-sports" label="Youth Sports" />
    </>
  );
};

export default YouthSports;
