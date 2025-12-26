import Animate from "@/components/ui/Animate";
import { Icon } from "@iconify/react";
import type { ReactNode } from "react";

interface GridLayoutProps {
  title: string;
  subjudul: string;
  children: ReactNode;
  id: string;
  customStyle?: string;
  customStyleSecondary?: string;
}

const GridLayout = ({
  id,
  title,
  children,
  subjudul,
  customStyle = "sm:w-11/12 w-11/12 xss:w-full",
  customStyleSecondary = "w-full sm:w-11/12 px-2 sm:px-4",
}: GridLayoutProps) => {
  return (
    <section
      id={id}
      className={`${customStyle} text-white mx-auto flex flex-col items-center py-10 sm:py-30`}
    >
      <Animate direction="vertical" reverse={true}>
        <div className="sm:w-2xl text-center w-11/12 mx-auto">
          <h2 className="sm:text-7xl font-secondary text-4xl xs:text-5xl font-bold">
            {title}
          </h2>
          <p className="xs:text-sm text-[0.8em] font-extralight mt-6">
            {subjudul}
          </p>
        </div>
      </Animate>

      {children}
      <div
        className={`${customStyleSecondary} flex justify-between items-center mt-8`}
      >
        <Animate reverse={true}>
          <p className="sm:text-sm text-[0.8em] text-[#808080]">6 {title}</p>
        </Animate>
        <Animate>
          <a
            href=""
            className="flex items-center gap-2 font-semibold text-[#808080] sm:text-base text-[0.8em]"
          >
            See All {title} <Icon icon="ri:arrow-right-long-line" width={30} />
          </a>
        </Animate>
      </div>
    </section>
  );
};

export default GridLayout;
