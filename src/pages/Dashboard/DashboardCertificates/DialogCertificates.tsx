import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import FormCertificatesContent from "./FormCertificatesContent";
import { useState } from "react";
import { useNavigate } from "react-router";

const formCertificationSchema = z.object({
  certification: z
    .file()
    .mime(["image/png", "image/jpeg", "image/webp"], {
      message: "File must be png/jpeg/webp",
    })
    .nonoptional({ message: "Image must be filled!" }),
});

const DialogCertificates = () => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formCertificationSchema),
    defaultValues: {
      certification: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formCertificationSchema>) => {
    setSubmitted(true);
    try {
      const form = new FormData();
      form.append("certification", values.certification);
      const url = import.meta.env.VITE_END_POINT_CERTIFICATES;
      const postCertificates = await fetch(url, {
        method: "POST",
        body: form,
      });
      const response = await postCertificates.json();
      console.log(response);

      setSubmitted(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
      setTimeout(() => {
        navigate("/dashboard/certifications");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="py-5 cursor-pointer">
          Add Certification
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-[#333] text-white">
        <DialogHeader>
          <DialogTitle>Add Your Certification</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-2 rounded-md gap-4 flex flex-col text-white mt-2"
          >
            <FormCertificatesContent form={form} />
            <DialogFooter className="mt-1">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="text-[#1d1d1d] py-5 cursor-pointer"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="py-5.5 ml-2 cursor-pointer">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCertificates;
