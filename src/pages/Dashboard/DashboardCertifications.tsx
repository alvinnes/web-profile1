import DashboardLayout from "@/layouts/DashboardLayout";
import DialogCertificates from "./DashboardCertificates/DialogCertificates";
import { useEffect, useState } from "react";
import ElectricBorder from "@/components/react-bits/ElectricBorder";
import { Icon } from "@iconify/react";

interface Certificates {
  id: number;
  certification: string;
  uploaded_at: Date;
}

const DashboardCertifications = () => {
  const [certificates, setCertificates] = useState<Certificates[]>([]);
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
  console.log(certificates);
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 bg-[#222]">
        <div className="w-full h-20 bg-[#333] rounded-xl p-4">
          <DialogCertificates />
        </div>
        <div className="w-11/12 xs:w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-y-15 gap-y-10 place-items-center mt-10">
          {certificates.map((item, index) => (
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              className="group"
              key={index}
            >
              <div className="sm:w-90 h-50 xs:h-60 rounded-xl p-2 bg-white/10 relative">
                <img
                  src={`/app/storage${item.certification}`}
                  alt="certificate"
                  className="size-full rounded-md"
                />
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 text-white cursor-pointer transition-all duration-400 top-0 left-0 size-full flex justify-center items-center bg-black/60">
                <Icon icon="ri:image-2-line" width={90} />
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardCertifications;
