import { MailchimpForm } from "@/components/MailchimpForm";

export const EmailSignup = () => {

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          Join the waiting list and be the first to get access to the updated course
        </p>
        
        <div className="flex justify-center">
          <a href="https://www.buymeacoffee.com/aivanau">
            <img src="https://img.buymeacoffee.com/button-api/?text=Get Early Access&emoji=🚀&slug=aivanau&button_colour=bc4749&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" alt="Get Early Access" />
          </a>
        </div>
      </div>
    </section>
  );
};