import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          Join the waiting list and be the first to get access to an updated course
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
    </section>
  );
};