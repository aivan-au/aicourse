import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    title: "Introduction to GenAI technologies",
    color: "bg-course-orange",
    description: "Learn fundamental explanations of technologies underlying artificial intelligence and how it relates to conceptual understandings."
  },
  {
    title: "Strength and weakness of GenAI",
    color: "bg-course-blue", 
    description: "Understanding when GenAI would bring you a lot of aid, when it may assist but you should be cautious about verifying socially useful."
  },
  {
    title: "Use cases in research",
    color: "bg-course-green",
    description: "Learn the generations of realistic example use in this domain. Step-by-step analysis that guides your journey."
  },
  {
    title: "Ethical considerations",
    color: "bg-course-pink",
    description: "Learn to make sure that you not only can should look for you should look into without being responsible."
  }
];

export const WhatYouLearn = () => {
  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What you will learn</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-full h-3 ${module.color} rounded-full mb-4`}></div>
                <h3 className="font-bold text-lg mb-3 leading-tight">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};