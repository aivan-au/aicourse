import { Rocket } from 'lucide-react';

export const CourseHero = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-4 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url('/images/929ef441-645b-40f9-9b04-bdc0a6442cd5.png')`
  }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="mb-12">
          
          
          <h1 className="font-sans text-5xl md:text-7xl font-bold hero-title-spacing leading-tight">
            Getting Started with&nbsp;GenAI
          </h1>
          
          <p className="text-3xl md:text-4xl font-light text-white/90 mt-6 mb-4 tracking-wide">
            online course for doctoral students and early&nbsp;career&nbsp;researchers
          </p>
          
          <div className="flex items-center justify-center gap-4 hero-divider-spacing">
            <div className="flex-1 max-w-16" style={{height: '2px', backgroundColor: 'white'}}></div>
            <span className="text-2xl font-sans font-semibold text-white">4th Edition</span>
            <div className="flex-1 max-w-16" style={{height: '2px', backgroundColor: 'white'}}></div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-center">
            <a 
              href="https://mailchi.mp/a49e49a187cb/getting-started-with-genai-in-research"
              className="hero-button inline-flex items-center gap-4 bg-[#bc4749] hover:bg-[#a63f41] text-white font-medium px-12 py-6 rounded-2xl transition-colors duration-200 shadow-xl hover:shadow-2xl text-xl"
            >
              <Rocket className="w-8 h-8" />
              Get Early Access
            </a>
          </div>
          
          
        </div>
      </div>
    </section>;
};