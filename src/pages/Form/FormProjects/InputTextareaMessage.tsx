import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { FormValuesMessage } from "../InputItemMessage";

interface InputTextareaProps {
  form: UseFormReturn<FormValuesMessage, any, FormValuesMessage>;
}

const InputTextareaMessage = ({ form }: InputTextareaProps) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormControl className="flex">
            <Textarea
              placeholder="write your message here"
              rows={4}
              className="scroll-style h-30 w-full"
              {...field}
            />
          </FormControl>
          <FormMessage />
          <FormDescription />
        </FormItem>
      )}
    />
  );
};

export default InputTextareaMessage;
