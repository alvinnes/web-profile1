import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModalLoading from "@/components/ui/modal-loading";
import ModalSuccess from "@/components/ui/modal-success";
import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export type Contact = {
  id: number;
  username: string;
  email: string;
  message: string;
  create_at: Date;
  actions: number;
};

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "create_at",
    header: "Create At",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [isDeleting, setIsDeleting] = useState<boolean>(false);
      const [success, setSuccess] = useState<boolean>(false);
      const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

      const url =
        import.meta.env.VITE_END_POINT_CONTACTS + `/${row.original.id}`;
      const handleDeleteMessage = async () => {
        setIsDeleting(true);
        try {
          const request = await fetch(url, { method: "DELETE" });
          const response = await request.json();
          console.log(response);
          if (request.ok) {
            setIsDeleting(false);
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
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#333]">
              <DropdownMenuItem className="border-none focus:bg-[#333]">
                <Button
                  onClick={() => setIsOpenModal(!isOpenModal)}
                  className="w-full cursor-pointer bg-[#444] py-5 hover:bg-[#44444470]"
                >
                  Delete
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem className="-mt-1 border-none focus:bg-[#333]">
                <Button className="w-full cursor-pointer bg-[#444] py-5 hover:bg-[#44444470]">
                  <a href={`/updateMessages/${row.original.id}`}>Update</a>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div
            className={`${isOpenModal ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 z-1000 flex h-screen w-full items-center justify-center bg-black/10 backdrop-blur-sm transition-all duration-500`}
          >
            <div className="flex w-lg flex-col gap-3 rounded-xl bg-[#333] p-6 text-white outline-1 outline-white">
              <h2 className="text-left text-3xl font-bold text-wrap">
                Are you sure want to delete this message?
              </h2>
              <p className="text-left font-light text-wrap text-slate-100">
                This action is permanent and cannot be undone. Once deleted, the
                message will be removed from the system and you will not be able
                to recover it.
              </p>
              <div className="mt-3 flex gap-2">
                <Button
                  onClick={() => setIsOpenModal(false)}
                  variant="outline"
                  className="cursor-pointer py-5 text-[#1d1d1d]"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={handleDeleteMessage}
                  disabled={isDeleting}
                  variant="destructive"
                  className={`${isDeleting ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"} ml-2 py-5.5`}
                >
                  Delete
                </Button>
              </div>
            </div>
            <ModalLoading submitted={isDeleting} />
            <ModalSuccess success={success}>
              <p>Successfully delete message!</p>
            </ModalSuccess>
          </div>
        </>
      );
    },
  },
];
