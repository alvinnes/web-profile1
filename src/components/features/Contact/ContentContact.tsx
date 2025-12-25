import { Icon } from "@iconify/react";

const ContentContact = () => {
  return (
    <div className="w-full sm:w-7/12 h-120 xs:h-100 sm:h-full p-6 sm:p-0 bg-white/5 rounded-md flex justify-center items-center bg-[url('/img/bg-contact.jpg')] bg-cover relative before:size-full before:absolute before:bottom-0 before:left-0 before:bg-linear-to-t before:from-black/80 before:via-black/50 before:to-transparent">
      <div className="w-lg text-center relative z-2">
        <h3 className="sm:text-5xl text-4xl mb-4 font-semibold ">
          Get In Touch
        </h3>
        <q className="sm:text-sm text-[0.8em] font-light text-[#808080]">
          It is through communication, understanding, and the courage to reach
          out that we bridge distances between people. Every message exchanged
          holds the power to inspire change and build lasting connections.
        </q>
        <p className="text-sm mt-3">- Nelson Mandela -</p>
      </div>
      <div className="flex items-center gap-6 absolute bottom-6 text-sm text-[grey]">
        <a
          href="mailto:alvinnes2008@gmail.com"
          target="_blank"
          className="flex items-center gap-1"
        >
          <Icon icon="ri:mail-line" /> alvinnes2008@gmail.com
        </a>
        <a
          href="https://github.com/alvinnes"
          target="_blank"
          className="flex items-center gap-1"
        >
          <Icon icon="ri:github-fill" /> alvinnes
        </a>
      </div>
    </div>
  );
};

export default ContentContact;
