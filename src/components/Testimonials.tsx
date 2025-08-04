import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "The course was so useful! I had been to this.",
    author: "Jane Doe, PhD candidate, UTS",
    color: "bg-course-blue"
  },
  {
    text: "The course was so useful! I had used to it. Was.",
    author: "Jane Doe, PhD candidate, UTS", 
    color: "bg-course-green"
  },
  {
    text: "The course was so useful! I had been to so.",
    author: "Jane Doe, PhD candidate, UTS",
    color: "bg-course-orange"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Trusted by 200+ PhD students and early-career researchers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The first three editions of the course were offered as non-compulsory, not-for-credit modules at University of Technology Sydney and attracted more than 200 participants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="mt-1">
                    <AvatarFallback className={`${testimonial.color} text-white font-semibold`}>
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm mb-3 italic">"{testimonial.text}"</p>
                    <p className="text-xs text-muted-foreground font-medium">{testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};