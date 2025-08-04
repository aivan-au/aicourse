import { CourseHero } from "@/components/CourseHero";
import { WhatMakesDifferent } from "@/components/WhatMakesDifferent";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { Testimonials } from "@/components/Testimonials";
import { EmailSignup } from "@/components/EmailSignup";
import { AboutAuthor } from "@/components/AboutAuthor";
import { MediaCoverage } from "@/components/MediaCoverage";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CourseHero />
      <WhatMakesDifferent />
      <WhatYouLearn />
      <Testimonials />
      <EmailSignup />
      <AboutAuthor />
      <MediaCoverage />
      
    </div>
  );
};

export default Index;
