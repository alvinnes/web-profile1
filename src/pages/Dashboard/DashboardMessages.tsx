import DashboardLayout from "@/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { DataTable } from "./DashboardMessages/data-table";
import { columns, type Contact } from "./DashboardMessages/columns";

const DashboardMessages = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const url = import.meta.env.VITE_END_POINT_CONTACTS;
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        const contactsData = await response.map((contact: Contact) => {
          const date = new Date(contact.create_at);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const createAt = `${day}-${month}-${year}`;

          return {
            id: contact.id,
            username: contact.username,
            email: contact.email,
            message: contact.message,
            create_at: createAt,
          };
        });
        setContacts(contactsData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContacts();
  }, []);
  return (
    <DashboardLayout>
      <div className="w-full h-screen bg-black text-white px-4 flex justify-center">
        <DataTable columns={columns} data={contacts} />
      </div>
    </DashboardLayout>
  );
};

export default DashboardMessages;
