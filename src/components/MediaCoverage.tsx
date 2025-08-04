import { Card, CardContent } from "@/components/ui/card";

export const MediaCoverage = () => {
  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Media Coverage</h3>
            <p className="text-lg text-muted-foreground mb-4">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};