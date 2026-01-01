import sosmedItem from "@/types/SosmedItem";
import QuickLinks from "./QuickLinks";
import LatestBlogs from "./LatestBlogs";
import Question from "./Question";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="mx-auto w-full overflow-x-hidden sm:gap-8 rounded-t-md bg-indigo-500/10 py-15 flex-col sm:flex-row flex justify-between gap-15 px-8 xs:px-6 sm:px-14">
      <div>
        <h3 className="text-2xl font-bold relative before:w-20 before:h-1 before:bg-indigo-500 before:absolute before:-bottom-1 before:left-0.5 mb-8">
          Alvinnes
        </h3>
        <p className="w-full xs:w-xs text-[0.8em] xs:text-sm">
          Thank you for visiting my portfolio. I’m still learning, exploring,
          and improving every day, and I hope my work reflects the passion I put
          into developing my skills.
        </p>
        <div className="flex items-center gap-6 mt-6">
          {sosmedItem.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Icon icon={item.icon} width={23} />
            </a>
          ))}
        </div>
      </div>
      <QuickLinks />
      <LatestBlogs />
      <Question />
    </footer>
  );
};

export default Footer;
