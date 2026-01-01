import SoftSkills from "./SoftSkills";
import TextType from "@/components/react-bits/TextType";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-11/12 overflow-x-hidden flex-col relative sm:flex-row mx-auto items-center flex justify-between gap-10"
    >
      <SoftSkills />
      <div className="sm:w-11/12 w-11/12 xss:w-full sm:w-xl flex flex-col gap-8">
        <TextType
          text={["Tech Skills"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-4xl font-bold"
        />
        <FrontendSkills />
        <BackendSkills />
        <OtherSkills />
      </div>
    </section>
  );
};

export default Skills;
