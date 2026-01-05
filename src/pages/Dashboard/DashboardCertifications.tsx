import DashboardLayout from "@/layouts/DashboardLayout";
import DialogCertificates from "./DashboardCertificates/DialogCertificates";
import { useEffect, useState } from "react";
import ElectricBorder from "@/components/react-bits/ElectricBorder";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import DialogDeleteCertification from "./DashboardCertificates/DialogDeleteCertification";

export interface Certificates {
  id: number;
  certification: string;
  uploaded_at: Date;
}

const DashboardCertifications = () => {
  const [certificates, setCertificates] = useState<Certificates[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [certificateItem, setCertificateItem] = useState<Certificates | null>(
    null,
  );

  const [selectedCertificate, setSelectedCertificate] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const url = import.meta.env.VITE_END_POINT_CERTIFICATES;
        const getCertificates = await fetch(url);
        const response = await getCertificates.json();
        const certificatesDatas = response.data.map((item: Certificates) => ({
          id: item.id,
          certification: item.certification,
          uploaded_at: item.uploaded_at,
        }));
        setCertificates(certificatesDatas);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCertificates();
  }, []);

  const handleModalDelete = (certificate: Certificates) => {
    setCertificateItem(certificate);
    setIsOpen(!isOpen);
  };
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 bg-[#222] p-4">
        <div className="h-20 w-full rounded-xl bg-[#333] p-4">
          <DialogCertificates />
          <Button
            onClick={() => setSelectedCertificate(!selectedCertificate)}
            size="lg"
            className="ml-4 cursor-pointer bg-white text-[#1d1d1d] hover:bg-slate-100"
          >
            Hapus
          </Button>
        </div>
        <div className="xs:w-full mt-10 grid w-11/12 grid-cols-1 place-items-center gap-y-10 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6">
          {certificates.map((item, index) => (
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              className="group"
              key={index}
            >
              <div className="xs:h-60 relative z-3 h-50 rounded-xl bg-white/10 p-2 sm:w-100">
                <img
                  src={`/app/storage${item.certification}`}
                  alt="certificate"
                  className="size-full rounded-md"
                />
              </div>
              <div className="absolute top-0 left-0 flex size-full cursor-pointer items-center justify-center bg-black/60 text-white opacity-0 transition-all duration-400 group-hover:opacity-100">
                <Icon icon="ri:image-2-line" width={90} />
              </div>
              <div
                onClick={() => handleModalDelete(item)}
                className={`${selectedCertificate ? "visible opacity-100" : "invisible opacity-0"} absolute top-0 left-0 z-4 flex size-full cursor-pointer items-center justify-center bg-black/70 text-white transition-all duration-500`}
              >
                <Icon icon="ri:delete-bin-line" width={90} />
              </div>
            </ElectricBorder>
          ))}
        </div>
        <DialogDeleteCertification
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          certificateItem={certificateItem}
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardCertifications;
