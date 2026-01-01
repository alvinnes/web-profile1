import Animate from "@/components/ui/Animate";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import TrueFocus from "@/components/react-bits/TrueFocus";
import { useState } from "react";
import DetailAbout from "./DetailAbout";

const TextAbout = () => {
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  return (
    <div className="sm:w-xl w-11/12 xss:w-full flex flex-col gap-3">
      <Animate delay={0.2}>
        <div className="w-full relative text-sm flex">
          <TrueFocus
            sentence="I'm Fullstack Developer"
            manualMode={false}
            blurAmount={5}
            borderColor="purple"
            animationDuration={0.5}
            pauseBetweenAnimations={1.5}
          />
        </div>
      </Animate>
      <Animate>
        <p className="font-light text-sm leading-5.5">
          Hello, my name is Alvin Nando Erik Saputra, an 11th-grade student at{" "}
          <b className="font-semibold">SMK Walisongo Pecangaan</b>, majoring in{" "}
          <b className="font-semibold">Computer and Network Engineering</b>. I
          have a strong interest in the world of technology, especially in
          software development, computer networking, and digital systems. Since
          the beginning of my studies, I have continuously developed my
          technical and professional skills to prepare myself for a future
          career as a <b className="font-semibold">Software Engineer</b>.
        </p>
      </Animate>
      <Animate delay={0.2}>
        <p className="font-light text-sm leading-5.5">
          Currently, I have gained an understanding of web application
          development as a <b className="font-semibold">Fullstack Developer</b>,
          with a primary focus on <b className="font-semibold">React.js</b> for
          frontend development, while continuously improving my skills in
          backend development. I always strive to learn new technologies and
          work on various projects to broaden my experience.
        </p>
      </Animate>
      <Animate delay={0.3}>
        <p className="font-light text-sm leading-5.5">
          If you would like to learn more about the competencies I have
          developed and the projects I have worked on, please click the Read
          More <button className="q"> </button>
        </p>
      </Animate>
      <Animate delay={0.3}>
        <div className="flex gap-6 items-center mt-6">
          <Button
            onClick={() => setIsOpenAbout(!isOpenAbout)}
            className="bg-white cursor-pointer text-[#1d1d1d] py-6 px-6 font-bold hover:bg-white/75 transition-all duration-400"
          >
            Read More
          </Button>
          <Button variant="link" className="text-white  font-light">
            <a href="#projects" className="flex items-center gap-1">
              All Projects <Icon icon="mynaui:arrow-long-right" />
            </a>
          </Button>
        </div>
      </Animate>
      <DetailAbout setIsOpenAbout={setIsOpenAbout} isOpenAbout={isOpenAbout} />
    </div>
  );
};

export default TextAbout;
