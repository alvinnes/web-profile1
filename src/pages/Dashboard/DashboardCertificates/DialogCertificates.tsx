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
import ModalLoading from "@/components/ui/modal-loading";
import ModalSuccess from "@/components/ui/modal-success";

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

      setTimeout(() => {
        setSubmitted(false);
        setSuccess(true);
      }, 1000);

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      setTimeout(() => {
        window.location.reload();
      }, 2200);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer py-5">
          Add Certification
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-[#333] text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Add Your Certification
          </DialogTitle>
          <DialogDescription className="text-base text-slate-100">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 flex flex-col gap-4 rounded-md text-white"
          >
            <FormCertificatesContent form={form} />
            <DialogFooter className="mt-1">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="cursor-pointer py-5 text-[#1d1d1d]"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="ml-2 cursor-pointer py-5.5">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
      <ModalLoading submitted={submitted} />
      <ModalSuccess success={success}>
        <p>Successfully added certificate!</p>
      </ModalSuccess>
    </Dialog>
  );
};

export default DialogCertificates;
