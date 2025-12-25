import { Fragment } from "react/jsx-runtime";

const HeaderContact = () => {
  return (
    <Fragment>
      <h2 className="sm:text-7xl text-5xl ml-3 xs:ml-0 font-secondary font-bold self-start mb-10">
        Contact Me
      </h2>
      <div className=" bg-slate-200 w-full sm:h-150 h-100 rounded-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746.7380715813483!2d110.7238629741427!3d-6.624137658860672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7120106b5ede3b%3A0xcecb1b59544cfdad!2sBawu%2C%20Kec.%20Batealit%2C%20Kabupaten%20Jepara%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1763983481304!5m2!1sid!2sid"
          loading="lazy"
          className="size-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default HeaderContact;
