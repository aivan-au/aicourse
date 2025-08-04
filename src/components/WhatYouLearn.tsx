import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    title: "Introduction to GenAI technologies",
    color: "bg-course-orange",
    description: "Non-technical explanations that provide conceptual understanding of the technologies underlying modern GenAI"
  },
  {
    title: "Strengths and weaknesses of GenAI",
    color: "bg-course-blue", 
    description: "Discussing when GenAI can be extremely helpful and when you need to be cautious"
  },
  {
    title: "Use cases in research",
    color: "bg-course-green",
    description: "From idea generation and data analysis to communicating results and supporting your PhD journey"
  },
  {
    title: "Ethical considerations",
    color: "bg-course-pink",
    description: "How to make sure that you use GenAI tools not only efficiently but also responsibly"
  }
];

export const WhatYouLearn = () => {
  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What you will learn</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-full h-3 ${module.color} rounded-full mb-4`}></div>
                <h3 className="font-bold text-lg mb-3 leading-tight text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};