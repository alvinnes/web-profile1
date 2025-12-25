import { Icon } from "@iconify/react";

const Question = () => {
  return (
    <div className="text-sm">
      <h3 className="text-2xl font-bold relative before:w-20 before:h-1 before:bg-indigo-500 before:absolute before:-bottom-1 before:left-0.5 mb-8">
        Have a Questions?
      </h3>
      <ul className="w-xs flex flex-col gap-1.5">
        <li className="transition-all duration-300 hover:translate-x-2 text-[grey] mb-1 hover:text-white">
          <a href="" className="flex items-center gap-2">
            <Icon icon="ri:mail-line" /> alvinnes2008@gmail.com
          </a>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2 text-[grey] mb-1 hover:text-white">
          <a
            href="https://maps.app.goo.gl/NfM5RFRa3Zvbeast8"
            className="flex gap-1.5"
          >
            <Icon icon="ri:mail-line" className="mt-0.5" width={20} /> Bawu
            I,Bawu, Kec. Batealit, Kabupaten Jepara, Jawa Tengah
          </a>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2 text-[grey] mb-1 hover:text-white">
          <a
            href="https://maps.app.goo.gl/NfM5RFRa3Zvbeast8"
            className="flex gap-1.5"
          >
            <Icon icon="ri:phone-line" className="mt-0.5" width={20} /> +62
            895-3653-37399
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Question;
