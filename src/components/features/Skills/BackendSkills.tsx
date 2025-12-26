import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icon } from "@iconify/react";
import techSkillsItem from "@/types/TechSkillsItem";
import TechSkillsLayout from "@/layouts/TechSkillsLayout";

const BackendSkills = () => {
  const backend = techSkillsItem.filter(
    (skill) => skill.category === "Backend"
  );
  return (
    <TechSkillsLayout title="Backend Tech" delay={4000}>
      {backend.map((item, index) => (
        <SwiperSlide>
          <div
            key={index}
            className="sm:size-30 size-28 rounded-md bg-white/5 backdrop-blur-sm flex flex-col items-center border-2 border-slate-200/40 border-solid justify-between p-2"
          >
            <span className="text-[0.6em] self-start bg-indigo-500/20 text-indigo-400 font-semibold -m-2 p-1 rounded-br-md">
              {item.status}
            </span>
            <Icon icon={item.icon} width={50} className="mt-4" />
            <p className="text-[0.8em] font-semibold">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </TechSkillsLayout>
  );
};

export default BackendSkills;
