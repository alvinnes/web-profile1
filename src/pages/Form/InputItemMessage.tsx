import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

interface InputItemProps {
  form: UseFormReturn<FormValuesMessage, any, FormValuesMessage>;
  type?: string;
  placeholder: string;
  name: string;
}

export type FormValuesMessage = {
  username: string;
  email: string;
  message: string;
};

const InputItemMessage = <T extends keyof FormValuesMessage>(
  props: InputItemProps & { name: T },
) => {
  const { form, name, type, placeholder } = props;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormControl className="flex">
              <Input
                type={type}
                placeholder={placeholder}
                className="w-full py-6.5"
                {...field}
              />
            </FormControl>
            <FormMessage />
            <FormDescription />
          </FormItem>
        );
      }}
    />
  );
};

export default InputItemMessage;
