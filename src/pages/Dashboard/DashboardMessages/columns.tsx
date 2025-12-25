import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

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
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="border-none">
              <Button className="cursor-pointer w-full py-5 bg-red-700">
                Delete
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="border-none">
              <Button className="cursor-pointer w-full py-5 bg-black">
                Update
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
