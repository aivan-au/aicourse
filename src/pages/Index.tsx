import { CourseHero } from "@/components/CourseHero";
import { WhatMakesDifferent } from "@/components/WhatMakesDifferent";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { EmailSignup } from "@/components/EmailSignup";
import { AboutAuthor } from "@/components/AboutAuthor";
import { MediaCoverage } from "@/components/MediaCoverage";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHero />
      <WhatMakesDifferent />
      <WhatYouLearn />
      <EmailSignup />
      <AboutAuthor />
      <MediaCoverage />
      <CallToAction />
    </div>
  );
};

export default Index;
