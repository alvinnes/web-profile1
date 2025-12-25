import navItem from "@/types/NavItem";

const QuickLinks = () => {
  return (
    <div className="w-xs -mr-8">
      <h3 className="text-2xl font-bold relative before:w-20 before:h-1 before:bg-indigo-500 before:absolute before:-bottom-1 before:left-0.5 mb-8">
        Quick Links
      </h3>
      <ul className="grid grid-cols-2 w-full">
        {navItem.map((item, index) => (
          <li
            key={index}
            className="transition-all duration-300 text-sm hover:translate-x-2 text-[grey] mb-1.5 hover:text-white"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
