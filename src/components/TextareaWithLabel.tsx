import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";

const TextareaWithLabel = () => {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="messsage"
        name="message"
        placeholder="Send your message here"
        rows={4}
        className="scroll-style overflow-y-auto h-40"
      />
    </div>
  );
};

export default TextareaWithLabel;
