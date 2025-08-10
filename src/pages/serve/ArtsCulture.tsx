
import { IndustryPage } from '@/components/IndustryPage';
import { artsCultureData } from '@/data/serveIndustries';
import IndustryAICTA from '@/components/ai/IndustryAICTA';

const ArtsCulture = () => {
  return (
    <>
      <IndustryPage data={artsCultureData} />
      <IndustryAICTA industry="arts-culture" label="Arts & Culture" />
    </>
  );
};

export default ArtsCulture;
