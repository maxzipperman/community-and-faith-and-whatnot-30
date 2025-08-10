
import { IndustryPage } from '@/components/IndustryPage';
import { artsCultureData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';
import IndustryResourcesSection from '@/components/resources/IndustryResourcesSection';

const ArtsCulture = () => {
  return (
    <>
      <IndustryPage data={artsCultureData} />
      <IndustryAICTA industry="arts-culture" label="Arts & Culture" />
      <IndustryResourcesSection category="Arts & Culture" label="Arts & Culture" />
    </>
  );
};

export default ArtsCulture;
