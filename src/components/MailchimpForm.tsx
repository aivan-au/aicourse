import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MailchimpFormProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonVariant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

export const MailchimpForm = ({
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  buttonVariant = "default",
  buttonSize = "lg"
}: MailchimpFormProps) => {
  return (
    <form 
      action="https://gmail.us14.list-manage.com/subscribe/post?u=03a26a86f80e112332293eacc&amp;id=e1587cfdb7&amp;f_id=00c9abe0f0" 
      method="post" 
      target="_self" 
      noValidate
      className={`flex flex-col sm:flex-row gap-3 ${className}`}
    >
      <Input
        type="email"
        name="EMAIL"
        placeholder={placeholder}
        required
        className={`flex-1 ${inputClassName}`}
      />
      
      {/* Bot protection field */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_03a26a86f80e112332293eacc_e1587cfdb7" tabIndex={-1} />
      </div>
      
      <Button 
        type="submit" 
        name="subscribe"
        variant={buttonVariant}
        size={buttonSize}
        className={`sm:w-auto ${buttonClassName}`}
      >
        {buttonText}
      </Button>
    </form>
  );
};