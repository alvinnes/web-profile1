import { Button } from "@/components/ui/button";
import type { Certificates } from "../DashboardCertifications";
import { useState, type Dispatch, type SetStateAction } from "react";
import ModalLoading from "@/components/ui/modal-loading";
import ModalSuccess from "@/components/ui/modal-success";

interface DialogCertificationProps {
  certificateItem: Certificates | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogDeleteCertification = (props: DialogCertificationProps) => {
  const { certificateItem, isOpen, setIsOpen } = props;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDeleteCertificate = async (id: number) => {
    setIsSubmitting(true);
    try {
      const url = import.meta.env.VITE_END_POINT_CERTIFICATES + `/${id}`;
      const request = await fetch(url, {
        method: "DELETE",
      });
      const response = await request.json();
      console.log(response);
      if (request.ok) {
        setIsSubmitting(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 z-1000 flex h-screen w-full items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-500`}
    >
      <div
        className={`flex w-lg flex-col gap-3 rounded-xl bg-[#333] p-6 text-white outline-1 outline-white`}
      >
        <h2 className="text-3xl font-bold">
          Are you sure want to delete this certificate?
        </h2>
        <p className="font-light text-slate-100">
          This action is permanent and cannot be undone. Once deleted, the
          certificate will be removed from the system and you will not be able
          to recover it.
        </p>
        <img
          src={`/app/storage${certificateItem?.certification}`}
          alt="cerficate picture"
          className="h-60 w-full rounded-md bg-[#444] p-2"
        />
        <div className="flex gap-2">
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="cursor-pointer py-5 text-[#1d1d1d]"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => handleDeleteCertificate(certificateItem!.id)}
            disabled={isSubmitting}
            variant="destructive"
            className={`ml-2 py-5.5 ${isSubmitting ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"}`}
          >
            Delete
          </Button>
        </div>
      </div>
      <ModalLoading submitted={isSubmitting} />
      <ModalSuccess success={success}>
        <p>Successfully delete certificate!</p>
      </ModalSuccess>
    </div>
  );
};

export default DialogDeleteCertification;
