import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

const Form = () => {
  return (
    <form
      className="grid gap-4"
      action="https://usebasin.com/f/437c48626f77"
      method="POST"
      encType="multipart/form-data"
      id="feedback-form"
      name="feedback-form"
    >
      <div className="grid gap-2 my-4 sm:my-auto">
        <Label className="text-4xl sm:text-base" htmlFor="name">
          Name
        </Label>
        <Input
          name="name"
          id="name"
          type="text"
          required
          placeholder="Enter your name..."
          className="text-3xl sm:text-base h-20 sm:h-auto"
        />
      </div>

      <div className="grid gap-2 my-4 sm:my-auto">
        <Label className="text-4xl sm:text-base" htmlFor="email">
          Email
        </Label>
        <Input
          name="email"
          id="email"
          type="email"
          required
          placeholder="Enter your email..."
          className="text-3xl sm:text-base h-20 sm:h-auto"
        />
      </div>

      <div className="grid gap-2 my-4 sm:my-auto">
        <Label className="text-4xl sm:text-base" htmlFor="message">
          Message
        </Label>
        <Textarea
          name="message"
          id="message"
          required
          placeholder="Enter your message..."
          className="text-3xl sm:text-base h-40 sm:h-auto"
        ></Textarea>
      </div>

      <Button
        type="submit"
        className="mt-4 justify-center text-4xl sm:text-base h-20 sm:h-auto rounded-2xl"
      >
        Submit
        <SendHorizontal className="ml-2" />
      </Button>
    </form>
  );
};

export default Form;
