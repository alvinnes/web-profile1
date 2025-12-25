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
      className="w-11/12 flex flex-col items-center mx-auto py-40"
    >
      <HeaderContact />
      <div className="w-full flex flex-col sm:flex-row items-center h-full sm:h-140 justify-between mt-8 bg-slate-900">
        <ContentContact />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            method="post"
            className="w-full sm:w-5/12 p-4 xs:px-6 flex flex-col gap-6 bg-white/5 rounded-md"
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
            <InputTextareaContact form={form} />
            <Button
              className="bg-white text-[#1d1d1d] py-5 cursor-pointer w-fit px-8"
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
}

const InputTextareaContact = ({ form }: InputTextareaContact) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormControl className="flex">
            <Textarea
              placeholder="Create description for project"
              rows={4}
              className="scroll-style w-full h-40"
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
