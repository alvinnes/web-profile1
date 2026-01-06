import ElectricBorder from "@/components/react-bits/ElectricBorder";
import type { Certificates } from "@/pages/Dashboard/DashboardCertifications";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const CertificationsContent = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<
    string | undefined
  >("");
  const [certificatesItem, setCertificateItem] = useState<Certificates[]>([]);
  const url = import.meta.env.VITE_END_POINT_CERTIFICATES;
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        const certificates = response.data.map((item: Certificates) => ({
          id: item.id,
          certification: item.certification,
          uploaded_at: item.uploaded_at,
        }));
        setCertificateItem(certificates);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCertificates();
  });

  return (
    <div className="mt-25 grid w-full grid-cols-2 place-items-center gap-x-4 gap-y-4 sm:w-11/12 sm:grid-cols-3 sm:gap-y-15">
      {certificatesItem.map((item) => (
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          className="group"
          key={item.id}
        >
          <div className="relative h-35 w-full rounded-xl bg-white/10 p-2 sm:h-60 sm:w-100">
            <img
              src={`/app/storage${item.certification}`}
              alt="picture certificate"
              className="size-full rounded-md"
            />
          </div>
          <div
            onClick={() => setSelectedCertificate(item.certification)}
            className="absolute top-0 left-0 flex size-full cursor-pointer items-center justify-center bg-black/60 opacity-0 transition-all duration-400 group-hover:opacity-100"
          >
            <Icon
              icon="ri:image-2-line"
              className="stroke-1 text-6xl sm:text-8xl"
            />
          </div>
        </ElectricBorder>
      ))}
      <div
        onClick={() => setSelectedCertificate("")}
        className={`${selectedCertificate ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 z-1000 flex h-screen w-full items-center justify-center bg-white/20 backdrop-blur-sm transition-all duration-500`}
      >
        <div className="relative h-[30vh] w-11/12 rounded-xl bg-white p-1 sm:h-[80vh] sm:w-8/12">
          <img src={selectedCertificate} alt="" className="size-full" />
          <span
            onClick={() => setSelectedCertificate("")}
            className="xs:-top-3 xs:-right-3 absolute -top-2 -right-2 cursor-pointer rounded-full bg-white p-1 text-black shadow-sm transition-all duration-300 hover:rotate-360"
          >
            <Icon
              icon="material-symbols:close-rounded"
              className="xs:size-6 size-6"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CertificationsContent;
