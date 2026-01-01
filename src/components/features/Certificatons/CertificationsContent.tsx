import ElectricBorder from "@/components/react-bits/ElectricBorder";
import Animate from "@/components/ui/Animate";
import certificateItem from "@/types/CertificateItem";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CertificationsContent = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<
    string | undefined
  >("");

  return (
    <div className="w-full sm:w-11/12 w-full grid sm:grid-cols-3 grid-cols-2 sm:gap-y-15 gap-y-4 gap-x-4 place-items-center mt-25">
      {certificateItem.map((item, index) => (
        <Animate key={index} direction="vertical" delay={item.delay}>
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            className="group"
          >
            <div className="sm:w-100 h-35 w-full sm:h-60 rounded-xl p-2 bg-white/10 relative">
              <img
                src={item.img}
                alt={item.alt}
                className="size-full rounded-md"
              />
            </div>
            <div
              onClick={() => setSelectedCertificate(item.img)}
              className="absolute opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-400 top-0 left-0 size-full flex justify-center items-center bg-black/60"
            >
              <Icon
                icon="ri:image-2-line"
                className="text-6xl sm:text-8xl stroke-1"
              />
            </div>
          </ElectricBorder>
        </Animate>
      ))}
      <div
        onClick={() => setSelectedCertificate("")}
        className={`${selectedCertificate ? "opacity-100 visible" : "opacity-0 invisible"} w-full h-screen bg-white/20 backdrop-blur-sm flex justify-center items-center fixed top-0 left-0 z-1000 transition-all duration-500`}
      >
        <div className="w-11/12 sm:w-8/12 p-1 h-[30vh] sm:h-[80vh] relative bg-white rounded-xl">
          <img src={selectedCertificate} alt="" className="size-full" />
          <span
            onClick={() => setSelectedCertificate("")}
            className="absolute xs:-top-3 -top-2 -right-2 xs:-right-3 text-black bg-white shadow-sm hover:rotate-360 transition-all duration-300 cursor-pointer rounded-full p-1"
          >
            <Icon
              icon="material-symbols:close-rounded"
              className="size-6 xs:size-6"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CertificationsContent;
