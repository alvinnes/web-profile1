import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputItemMessage from "./InputItemMessage";
import { Button } from "@/components/ui/button";
import InputTextareaMessage from "./FormProjects/InputTextareaMessage";
import ModalLoading from "@/components/ui/modal-loading";
import ModalSuccess from "@/components/ui/modal-success";
import Aurora from "@/components/Aurora";

const schemaContact = z.object({
  username: z.string().min(3, { message: "Username munimum 3 alphabet!" }),
  email: z.string().email("Email invalid!"),
  message: z.string().nonempty({ message: "Type your message!" }),
});

interface Messages {
  id: number;
  username: string;
  email: string;
  message: string;
  create_at: Date;
}

const FormMessages = () => {
  const [onSubmitted, setOnSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<Messages>(Object);
  const navigate = useNavigate();
  const { id } = useParams();
  const urlId = import.meta.env.VITE_END_POINT_CONTACTS + `/${id}`;

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const request = await fetch(urlId);
        const response = await request.json();
        setMessages(response.result[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContact();
  }, [id]);

  const form = useForm<z.infer<typeof schemaContact>>({
    resolver: zodResolver(schemaContact),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
    values: {
      username: messages.username,
      email: messages.email,
      message: messages.message,
    },
  });

  const onSubmit = async (values: z.infer<typeof schemaContact>) => {
    setOnSubmitted(true);
    try {
      const datasMessage = {
        username: values.username,
        email: values.email,
        message: values.message,
      };

      console.log(values);
      const updateMessage = await fetch(urlId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datasMessage),
      });
      const response = await updateMessage.json();
      console.log(response);
      if (updateMessage.ok) {
        setOnSubmitted(false);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 1000);
        setTimeout(() => {
          navigate("/dashboard/messages");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    messages && (
      <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950">
        <Aurora colorStops={["#751aff", "#0174ef", "#3f91fd"]} blend={1} />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="absolute top-1/2 left-1/2 flex w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md bg-slate-900 p-6 text-white"
          >
            <h1 className="font-secondary text-4xl font-bold">
              Update datas message!
            </h1>
            <p className="-mt-2 mb-6 w-11/12 font-light text-slate-100">
              Update message information below. Changes will be saved
              immediately after you submit.
            </p>
            <InputItemMessage
              form={form}
              name="username"
              placeholder="insert your username"
            />
            <InputItemMessage
              form={form}
              name="email"
              placeholder="insert your email"
            />
            <InputTextareaMessage form={form} />
            <Button className="w-full cursor-pointer bg-white px-8 py-5 font-semibold text-[#1d1d1d] hover:bg-slate-200">
              Submit
            </Button>
          </form>
        </Form>
        <ModalLoading submitted={onSubmitted} />
        <ModalSuccess success={submitted}>
          <p>Successfully update your message!</p>
        </ModalSuccess>
      </main>
    )
  );
};

export default FormMessages;
