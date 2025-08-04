import { MailchimpForm } from "@/components/MailchimpForm";

export const EmailSignup = () => {

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          Join the waiting list and be the first to get access to the updated course
        </p>
        
        <MailchimpForm
          buttonText="Get Early Access"
          placeholder="Email"
          className="max-w-md mx-auto"
        />
      </div>
    </section>
  );
};