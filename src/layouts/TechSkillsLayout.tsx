import Animate from "@/components/ui/Animate";
import type { ReactNode } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";

interface TechSkillsLayoutProps {
  title: string;
  children: ReactNode;
  delay: number;
}

const TechSkillsLayout = ({
  title,
  children,
  delay,
}: TechSkillsLayoutProps) => {
  return (
    <Animate>
      <div className="w-full">
        <h3 className="font-bold text-xl mb-2 bg-white/10 text-indigo-400 w-fit py-3 rounded-full">
          {title}
        </h3>
        <Swiper
          slidesPerView={4}
          watchSlidesProgress={true}
          className="flex gap-6 sm:gap-4"
          spaceBetween={0}
          autoplay={{ delay, pauseOnMouseEnter: true }}
          modules={[Autoplay]}
          breakpoints={{
            728: {
              slidesPerView: 4,
            },
            414: {
              slidesPerView: 3,
            },
            360: {
              slidesPerView: 2,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </Animate>
  );
};

export default TechSkillsLayout;
