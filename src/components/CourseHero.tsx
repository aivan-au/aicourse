import { MailchimpForm } from "@/components/MailchimpForm";
export const CourseHero = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-4 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url('/lovable-uploads/929ef441-645b-40f9-9b04-bdc0a6442cd5.png')`
  }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="mb-12">
          
          
          <h1 className="font-sans text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Getting Started with{" "}
            <span className="text-white">
              GenAI
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-white/30 flex-1 max-w-16"></div>
            <span className="text-2xl font-sans font-medium text-white/90">4th Edition</span>
            <div className="h-px bg-white/30 flex-1 max-w-16"></div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl text-white/90 mb-8 leading-relaxed">The 4th edition of "Getting Started with Generative AI in Research" is coming soon. Join the waiting list and be the first to get access</p>
          
          <div className="flex justify-center">
            <div dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="aivanau" data-color="#bc4749" data-emoji="🚀" data-font="Inter" data-text="Get Early Access" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00"></script>`
            }} />
          </div>
          
          
        </div>
      </div>
    </section>;
};