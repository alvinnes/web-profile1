import type { UseFormReturn } from "react-hook-form";
import type { FormValues } from "./InputItem";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface InputTextareaProps {
  form: UseFormReturn<FormValues, any, FormValues>;
}

const InputTextarea = ({ form }: InputTextareaProps) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormControl className="flex">
            <Textarea
              placeholder="Create description for project"
              rows={4}
              className="scroll-style w-full h-30"
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

export default InputTextarea;
