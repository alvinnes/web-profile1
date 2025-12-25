import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import InputItem from "@/pages/Form/FormProjects/InputItem";
import InputTextarea from "./InputTextarea";
import InputImage from "./InputImage";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router";

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Username munimum 3 alphabet!" })
    .nonempty("Url must filled!"),
  url: z.string().nonempty("Url must filled!"),
  techs: z.string().nonempty("techs must filled!"),
  description: z.string().nonempty("description must filled!"),
  img: z
    .file()
    .mime(["image/png", "image/jpeg", "image/webp"], {
      message: "File must be png/jpeg/webp",
    })
    .nonoptional({ message: "Image must be filled!" }),
});

const FormProjects = () => {
  const [onSubmited, setOnSubmited] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      url: "",
      techs: "",
      description: "",
      img: undefined,
    },
  });

  const navigate = useNavigate();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOnSubmited(true);
    try {
      const url = "http://localhost:3000";
      const formData = new FormData();

      formData.append("img", values.img);
      formData.append("title", values.title);
      formData.append("url", values.url);
      formData.append("description", values.description);
      formData.append("techs", values.techs);

      const postProject = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const response = await postProject.json();
      console.log(response);
      setOnSubmited(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="w-full h-screen bg-black flex justify-center items-center flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-4xl p-6 rounded-md bg-[#222] gap-4 flex flex-col text-white"
        >
          <h1 className="font-semibold mb-6 text-5xl">Add Your Projects!</h1>
          <div className="flex gap-4">
            <div className="w-7/12 flex flex-col gap-4">
              <InputItem
                form={form}
                name="title"
                placeholder="Insert your title project"
              />
              <InputItem
                form={form}
                name="url"
                placeholder="Insert your url project"
              />
              <InputItem
                form={form}
                name="techs"
                placeholder="Insert your techs for create project"
              />
              <InputTextarea form={form} />
              <Button className="bg-white text-[#1d1d1d] py-5 px-8 font-semibold w-full  cursor-pointer hover:bg-slate-200">
                Submit
              </Button>
            </div>
            <InputImage form={form} />
          </div>
        </form>
      </Form>
      <div
        className={`${onSubmited ? "opacity-100 top-10" : "top-6 opacity-0"} flex items-center gap-3 transition-all duration-400 w-sm font-semibold rounded-xl bg-white py-4 fixed left-1/2 -translate-x-1/2 px-6`}
      >
        <Spinner className="size-5" /> Loading...
      </div>
      <div
        className={`${submitted ? "opacity-100 top-10" : "top-6 opacity-0"} flex items-center gap-3 transition-all duration-400 w-sm font-semibold rounded-xl bg-white py-4 fixed left-1/2 -translate-x-1/2 px-6`}
      >
        <BadgeCheck className="text-green-800" /> Success add project
      </div>
    </main>
  );
};

export default FormProjects;
