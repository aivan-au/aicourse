import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const CourseHero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/929ef441-645b-40f9-9b04-bdc0a6442cd5.png')`
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">New Edition Available</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Getting Started with{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              GenAI
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-white/30 flex-1 max-w-16"></div>
            <span className="text-xl font-serif text-white/80">4th Edition</span>
            <div className="h-px bg-white/30 flex-1 max-w-16"></div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            The definitive guide to Generative AI in Research. Join thousands of researchers who've transformed their work with cutting-edge AI tools.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <Button type="submit" variant="secondary" size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold">
              Get Early Access
            </Button>
          </form>
          
          <p className="text-sm text-white/70 mt-3">
            Be the first to access the 4th edition when it launches
          </p>
        </div>
      </div>
    </section>
  );
};