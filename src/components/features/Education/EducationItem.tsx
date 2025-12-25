import Animate from "@/components/ui/Animate";
import type { ReactNode } from "react";

interface EducationItemProps {
  title: string;
  year: string;
  children: ReactNode;
  position?: string;
  positionBullet?: string;
}

const EducationItem = ({
  title,
  year,
  children,
  position = "sm:left-1/2 left-0",
  positionBullet = "sm:-left-18.5 -left-7 xs:-left-8",
}: EducationItemProps) => {
  return (
    <Animate direction="vertical">
      <div
        className={`${position} sm:w-120 w-full ml-4 xs:ml-5 p-6 rounded-md bg-indigo-500/5 relative border-l-6 border-solid border-indigo-500 sm:ml-15 z-20`}
      >
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="font-light">{year}</p>
        <p className="mt-2 font-light">{children}</p>
        <span
          className={`size-3 xs:size-4 bg-white flex rounded-full absolute top-1/2 -translate-y-1/2 ${positionBullet}`}
        ></span>
      </div>
    </Animate>
  );
};

export default EducationItem;
