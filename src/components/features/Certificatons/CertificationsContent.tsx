import ElectricBorder from "@/components/react-bits/ElectricBorder";
import Animate from "@/components/ui/Animate";
import certificateItem from "@/types/CertificateItem";
import { Icon } from "@iconify/react";

const CertificationsContent = () => {
  return (
    <div className="w-full sm:w-11/12 xs:w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-y-15 gap-y-10 place-items-center mt-25">
      {certificateItem.map((item, index) => (
        <Animate key={index} direction="vertical" delay={item.delay}>
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            className="group"
          >
            <div className="sm:w-100 h-60 w-full sm:h-60 rounded-xl p-2 bg-white/10 relative">
              <img
                src={item.img}
                alt={item.alt}
                className="size-full rounded-md"
              />
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-400 top-0 left-0 size-full flex justify-center items-center bg-black/60">
              <Icon icon="ri:image-2-line" width={90} />
            </div>
          </ElectricBorder>
        </Animate>
      ))}
    </div>
  );
};

export default CertificationsContent;
