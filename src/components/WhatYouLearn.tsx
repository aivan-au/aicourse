import { Card, CardContent } from "@/components/ui/card";
import { Bot, BicepsFlexed, Microscope, Scale } from 'lucide-react';

const modules = [
  {
    title: "Introduction to GenAI technologies",
    icon: Bot,
    description: "You will gain a conceptual understanding of the technologies underlying modern GenAI, explained in clear, non-technical language"
  },
  {
    title: "Strengths and weaknesses of GenAI",
    icon: BicepsFlexed,
    description: "You will learn to tell the difference between cases where GenAI can be extremely helpful in research and those where caution is needed"
  },
  {
    title: "Use cases in research",
    icon: Microscope,
    description: "You will discover how GenAI can support different stages of research from idea generation and data analysis to communicating results and navigating your PhD journey."
  },
  {
    title: "Ethical considerations",
    icon: Scale,
    description: "You will explore how to use GenAI tools responsibly, including questions of authorship and accountability, confidentiality and copyright, and bias and discrimination."
  }
];

export const WhatYouLearn = () => {
  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What you will learn</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <IconComponent className="w-12 h-12 mt-1 flex-shrink-0 mr-4" style={{ color: '#4749BB' }} />
                    <div>
                      <h3 className="font-bold text-xl mb-3 leading-tight text-foreground">{module.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};