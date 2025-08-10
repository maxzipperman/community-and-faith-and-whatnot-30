import { IndustryPage } from '@/components/IndustryPage';
import { communityNonprofitsData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const CommunityNonprofits = () => {
  return (
    <>
      <IndustryPage data={communityNonprofitsData} />
      <IndustryAICTA industry="community-nonprofits" label="Community Nonprofits" />
    </>
  );
};

export default CommunityNonprofits;