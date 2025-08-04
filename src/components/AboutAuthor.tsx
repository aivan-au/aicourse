import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


export const AboutAuthor = () => {
  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">About the author</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Avatar className="w-32 h-32 flex-shrink-0">
            <AvatarImage src="/lovable-uploads/7e8f6f04-6059-4012-9587-00c2d6b26fc7.png" alt="Ivan Smirnov" />
            <AvatarFallback className="text-2xl">IS</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Ivan Smirnov is a computational social scientist at the University of Technology Sydney, where he conducts research at the interface of AI and education and guides HDR students in using Generative AI for research. He is also an External Faculty Member at the Complexity Science Hub, Vienna.
              </p>
              <p>
                His research has been presented at flagship conferences in his field such as IC2S2 and ICWSM, published in leading journals including Proceedings of the National Academy of Sciences and EPJ Data Science, and featured in major media outlets including ABC TV, MIT Technology Review, and The Times.
              </p>
              <p>
                Beyond research, Ivan is committed to empowering the next generation of scientists through teaching. He has taught across interdisciplinary programs in four countries, making technical concepts accessible to students from diverse backgrounds spanning philosophy to computer science.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button variant="outline" size="sm" asChild>
                <a href="https://scholar.google.com/citations?hl=en&user=ZP9xvMUAAAAJ" target="_blank" rel="noopener noreferrer">
                  Research
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/ibsmirnov/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};