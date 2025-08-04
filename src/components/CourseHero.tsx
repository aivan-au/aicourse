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
    <section className="bg-gradient-section py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block border-2 border-foreground rounded-lg px-6 py-3 mb-6">
            <h1 className="text-2xl font-bold">Getting Started with GenAI</h1>
            <span className="text-sm text-muted-foreground">4th edition</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            The 4th edition of "Getting Started with Generative AI in Research" is coming soon. Join the waiting list and be the first to get access.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg" className="sm:w-auto">
              Join the waiting list
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};