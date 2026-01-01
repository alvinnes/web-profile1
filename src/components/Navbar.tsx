import navItem from "@/types/NavItem";
import sidebarItem from "@/types/SidebarItem";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const isActive = (hash: string): boolean => location.hash == hash;
  const isActiveSidebar = (hash: string): boolean => location.hash == hash;

  return (
    <Fragment>
      <nav className="w-11/12 fixed top-2 left-1/2 -translate-x-1/2 bg-white/5 rounded-md backdrop-blur-sm z-49 py-8 px-[3%] flex justify-between items-center">
        <h3 className="font-semibold o text-3xl font-secondary">Alvinnes</h3>
        <ul className="hidden sm:flex gap-10">
          {navItem.map((item, index) => (
            <li
              key={index}
              className={`${isActive(item.link) ? "text-white" : "text-[#9f9f9f]"} hover:text-white`}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <span className="sm:hidden cursor-pointer">
          <Icon
            icon="ri:align-justify"
            width={30}
            onClick={() => setIsClicked(!isClicked)}
          />
        </span>
      </nav>

      <aside
        className={`${isClicked ? "right-0 opacity-100" : "-right-full opacity-0"} fixed top-0 bottom-0 traisiton-all duration-500 w-8/12 bg-[#13042a] h-screen px-4 flex flex-col z-1000 justify-between py-4`}
      >
        <div className="w-full flex">
          <span
            className="bg-indigo-500 py-2 rounded-md cursor-pointer px-6"
            onClick={() => setIsClicked(false)}
          >
            <Icon icon="ri:arrow-right-long-line" width={20} />
          </span>
        </div>
        <hr className="w-full border-white" />

        <ul className="flex flex-col gap-1.5 w-full">
          {sidebarItem.map((item, index) => (
            <li
              key={index}
              className={`${isActiveSidebar(item.link) ? "bg-white/10" : "bg-transparent"} w-full py-3 px-4 transition-all duration-500 rounded-md`}
            >
              <a href={item.link} className="flex items-center gap-3">
                <Icon icon={item.icon} width={20} /> {item.name}
              </a>
            </li>
          ))}
        </ul>
        <hr className="w-full border-white" />
        <div className="w-full px-3 py-6 bg-white/10  flex gap-3 rounded-xl items-center">
          <div className="size-12 rounded-full bg-black overflow-hidden">
            <img
              src="/img/foto-profile2.png"
              alt="profile photo"
              className="size-full object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-lg xss:text-xl font-semibold">Alvinnes</h3>
            <p className="text-[0.7em] xss:text-[0.8em] text-[grey]">
              Fullstack Developer
            </p>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Navbar;
