import "swiper/css";
import { SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import techSkillsItem from "@/types/TechSkillsItem";
import TechSkillsLayout from "@/layouts/TechSkillsLayout";

const OtherSkills = () => {
  const other = techSkillsItem.filter((skill) => skill.category === "Other");
  return (
    <TechSkillsLayout title="Other Tech" delay={5000}>
      {other.map((item, index) => (
        <SwiperSlide>
          <div
            key={index}
            className="size-30 rounded-md bg-white/5 backdrop-blur-sm flex flex-col items-center border-2 border-slate-200/40 border-solid justify-between p-2"
          >
            <span className="text-[0.6em] self-start bg-indigo-500/20 text-indigo-400 font-semibold -m-2 p-1 rounded-br-md">
              {item.status}
            </span>
            <Icon icon={item.icon} width={70} className="mt-4" />
            <p className="text-[0.8em] font-semibold">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </TechSkillsLayout>
  );
};

export default OtherSkills;
