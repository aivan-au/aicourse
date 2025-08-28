import { Library, Earth, MessageCircleQuestion, HatGlasses } from 'lucide-react';

export const WhatMakesDifferent = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-none">
          <p className="text-xl leading-relaxed mb-8">
          This course is designed for doctoral students and early-career researchers from any discipline.
          No coding or AI expertise is required—just your curiosity.
          Drawing directly from research papers, the course is best suited to learners who want to see past the headlines.
          It will help you get the most out of GenAI in your research while learning to recognize exaggerated claims.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="flex items-start space-x-6">
              <Library className="w-12 h-12 mt-1 flex-shrink-0 mr-4" style={{ color: '#49BB47' }} />
              <div>
                <h3 className="font-semibold text-xl mb-2">Evidence-based</h3>
                <p className="text-lg">Based on research papers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Earth className="w-12 h-12 mt-1 flex-shrink-0 mr-4" style={{ color: '#49BB47' }} />
              <div>
                <h3 className="font-semibold text-xl mb-2">Open to all disciplines</h3>
                <p className="text-lg">No coding or AI background required</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <MessageCircleQuestion className="w-12 h-12 mt-1 flex-shrink-0 mr-4" style={{ color: '#49BB47' }} />
              <div>
                <h3 className="font-semibold text-xl mb-2">Thoughtful</h3>
                <p className="text-lg">Clear explanations with conceptual depth</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <HatGlasses className="w-12 h-12 mt-1 flex-shrink-0 mr-4" style={{ color: '#49BB47' }} />
              <div>
                <h3 className="font-semibold text-xl mb-2">Critical</h3>
                <p className="text-lg">Helps you see beyond hype</p>
              </div>
            </div>
          </div>
          {/*
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Check out the video if you want to learn more about the course philosophy.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/902GXqnPJ2c"
                title="Course Philosophy Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};