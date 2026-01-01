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
        <h3 className="font-bold text-xl mb-4 px-4 bg-white/15 text-indigo-400 w-fit py-3 rounded-full">
          {title}
        </h3>
        <Swiper
          slidesPerView={4}
          watchSlidesProgress={true}
          className="flex sm:gap-4"
          grabCursor={true}
          spaceBetween={0}
          autoplay={{ delay, pauseOnMouseEnter: true }}
          modules={[Autoplay]}
          breakpoints={{
            728: {
              slidesPerView: 4,
            },
            414: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 5,
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
