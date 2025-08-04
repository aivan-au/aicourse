import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import instructorImage from "@/assets/instructor-portrait.jpg";

export const AboutAuthor = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About the author</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Avatar className="w-32 h-32 flex-shrink-0">
            <AvatarImage src={instructorImage} alt="Ivan Smirnov" />
            <AvatarFallback className="text-2xl">IS</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Ivan Smirnov is blah-blah academic credentials</h3>
            <p className="text-muted-foreground mb-4">And blah-blah teaching credentials</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button variant="outline" size="sm">Papers</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};