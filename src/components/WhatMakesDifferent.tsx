export const WhatMakesDifferent = () => {
  return <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">What makes it different</h2>
        
        <div className="max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">The aim of the course is to be accessible to learners from all disciplines without sacrificing conceptual depth. The content draws directly from research papers and discusses the practical applications of their findings.</p>
          
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Check out the video if you want to learn more about course philosophy.
          </p>
          
          <div className="bg-card border rounded-lg p-8 max-w-2xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border-2 border-primary">
                <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1 bg-muted h-1 rounded-full">
                  <div className="w-1/3 bg-primary h-1 rounded-full"></div>
                </div>
                <span className="text-muted-foreground">5:42</span>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H5a1 1 0 0 0 0 2h1v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9h1a1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};