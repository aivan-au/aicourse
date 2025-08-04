import { MailchimpForm } from "@/components/MailchimpForm";

export const EmailSignup = () => {

  return (
    <section className="py-16 px-4 bg-gradient-section">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          Join the waiting list and be the first to get access to an updated course
        </p>
        
        <MailchimpForm
          buttonText="Join the waiting list"
          placeholder="Email"
          className="max-w-md mx-auto"
        />
      </div>
    </section>
  );
};