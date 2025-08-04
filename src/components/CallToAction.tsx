import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Card className="w-full max-w-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-course-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Buy me a coffee</h3>
              <div className="text-3xl font-bold text-course-orange mb-4">A$10</div>
              <Button variant="cta" className="w-full" size="lg">
                Support
              </Button>
            </CardContent>
          </Card>
          
          <Card className="w-full max-w-sm border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Become founding member</h3>
              <div className="text-3xl font-bold text-primary mb-4">A$100</div>
              <Button variant="course" className="w-full" size="lg">
                Join Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};