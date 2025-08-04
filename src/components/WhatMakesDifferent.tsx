export const WhatMakesDifferent = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">What makes it different</h2>
        
        <div className="max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            The aim of the course is to be accessible to learners from all disciplines without sacrificing conceptual depth. 
            The content draws directly from research papers and discusses the practical applications of their findings.
          </p>
          
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
        </div>
      </div>
    </section>
  );
};