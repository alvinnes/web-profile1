import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputItemMessage from "./InputItemMessage";
import { Button } from "@/components/ui/button";
import InputTextareaMessage from "./FormMessage/InputTextareaMessage";
import ModalLoading from "@/components/ui/modal-loading";
import ModalSuccess from "@/components/ui/modal-success";
import Aurora from "@/components/Aurora";

const schemaActivity = z.object({
  title: z.string().min(10, { message: "Title minimum 10 alphabet!" }),
  description: z.string().nonempty({ message: "Description is required!" }),
});

interface Messages {
  id: number;
  title: string;
  description: string;
  create_at: Date;
}

const FormActivity = () => {
  const [onSubmitted, setOnSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activity, setActivity] = useState<Messages>(Object);
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

  const form = useForm<z.infer<typeof schemaActivity>>({
    resolver: zodResolver(schemaActivity),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schemaActivity>) => {
    setOnSubmitted(true);
    try {
      const datasActivity = {
        title: values.title,
        description: values.description,
      };

      const updateMessage = await fetch(urlId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datasActivity),
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
          navigate("/dashboard/activity");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    activity && (
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
              name="title"
              placeholder="insert title activity here"
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

export default FormActivity;
