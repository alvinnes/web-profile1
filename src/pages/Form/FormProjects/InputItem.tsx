import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

interface InputItemProps {
  form: UseFormReturn<FormValues, any, FormValues>;
  type?: string;
  placeholder: string;
  name: string;
}

export type FormValues = {
  title: string;
  url: string;
  techs: string;
  description: string;
  img: File;
};

const InputItem = <T extends keyof FormValues>(
  props: InputItemProps & { name: T }
) => {
  const { form, name, type, placeholder } = props;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const { value, ...rest } = field;

        return (
          <FormItem>
            <FormControl className="flex">
              <Input
                type={type}
                placeholder={placeholder}
                {...rest}
                className="py-6.5 w-full"
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

export default InputItem;
