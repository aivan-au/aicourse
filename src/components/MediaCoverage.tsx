export const MediaCoverage = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4 text-foreground">Media Coverage</h3>
        <p className="text-lg text-muted-foreground mb-8">
          Featured by{" "}
          <a 
            href="https://www.atn.edu.au/news-media/dr-ivan-smirnov-empowering-the-next-generation-of-researchers-with-genai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline font-medium"
          >
            Australian Technology Network of Universities
          </a>
        </p>
        
        <a 
          href="https://www.atn.edu.au/news-media/dr-ivan-smirnov-empowering-the-next-generation-of-researchers-with-genai/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-3xl hover:opacity-90 transition-opacity duration-200"
        >
          <img 
            src="/lovable-uploads/d681213b-2eea-4352-bf61-b272d311c4ec.png" 
            alt="Australian Technology Network article about Dr Ivan Smirnov"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
      </div>
    </section>
  );
};