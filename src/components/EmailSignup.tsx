import { MailchimpForm } from "@/components/MailchimpForm";

export const EmailSignup = () => {

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          Join the waiting list and be the first to get access to the updated course
        </p>
        
        <div className="flex justify-center">
          <div dangerouslySetInnerHTML={{
            __html: `<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="aivanau" data-color="#bc4749" data-emoji="🚀" data-font="Inter" data-text="Get Early Access" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00"></script>`
          }} />
        </div>
      </div>
    </section>
  );
};