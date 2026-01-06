import HeaderContact from "./HeaderContact";
import ContentContact from "./ContentContact";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const schemaContact = z.object({
  username: z.string().min(3, { message: "Username munimum 3 alphabet!" }),
  email: z.string().email("Email invalid!"),
  message: z.string().nonempty({ message: "Type your message!" }),
});

type FormContactValues = {
  username: string;
  email: string;
  message: string;
};

const Contact = () => {
  const form = useForm<z.infer<typeof schemaContact>>({
    resolver: zodResolver(schemaContact),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schemaContact>) => {
    console.log(values);
    const urlPostMessage = "http://localhost:3000/api/v1/contacts";
    const contactsData = {
      username: values.username,
      email: values.email,
      message: values.message,
    };
    try {
      const request = await fetch(urlPostMessage, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactsData),
      });
      const response = await request.json();
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      alert("Berhasil");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto flex w-11/12 flex-col items-center py-40"
    >
      <HeaderContact />
      <div className="mt-8 flex h-full w-full flex-col items-center justify-between bg-slate-900 sm:h-140 sm:flex-row">
        <ContentContact />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            method="post"
            className="xs:px-6 flex h-full w-full flex-col justify-center gap-6 rounded-md bg-white/5 p-4 sm:w-5/12"
          >
            <InputItemContact
              placeholder="Insert your username"
              name="username"
              form={form}
            />
            <InputItemContact
              placeholder="example@gmail.com"
              name="email"
              form={form}
            />
            <InputTextareaContact
              placeholder="Write your message here"
              form={form}
            />
            <Button
              className="w-fit cursor-pointer bg-white px-8 py-5 text-[#1d1d1d]"
              variant={"secondary"}
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

interface InputItemContactProps {
  form: UseFormReturn<FormContactValues, any, FormContactValues>;
  placeholder: string;
  name: string;
}

const InputItemContact = <T extends keyof FormContactValues>({
  form,
  placeholder,
  name,
}: InputItemContactProps & { name: T }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="flex">
            <Input placeholder={placeholder} className="py-7" {...field} />
          </FormControl>
          <FormMessage />
          <FormDescription />
        </FormItem>
      )}
    />
  );
};

interface InputTextareaContact {
  form: UseFormReturn<FormContactValues, any, FormContactValues>;
  placeholder: string;
}

const InputTextareaContact = ({ form, placeholder }: InputTextareaContact) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormControl className="flex">
            <Textarea
              placeholder={placeholder}
              rows={4}
              className="scroll-style h-40 w-full"
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

export default Contact;
