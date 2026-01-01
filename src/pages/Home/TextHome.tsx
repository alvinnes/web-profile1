import BlurText from "@/components/react-bits/BlurText";
import TextType from "@/components/react-bits/TextType";
import Animate from "@/components/ui/Animate";
import { Button } from "@/components/ui/button";

const TextHome = () => {
  return (
    <div className="sm:w-2xl xss:w-full w-11/12 relative xs:mt-10">
      <Animate delay={4.7} reverse={true}>
        <TextType
          text={["I'm a Fullstack Web Developer"]}
          typingSpeed={60}
          pauseDuration={1200}
          showCursor={true}
          cursorCharacter="|"
          className="text-white text-lg xss:text-xl mb-4 font-extralight"
        />
      </Animate>
      <Animate delay={4.8} reverse={true}>
        <BlurText
          text="Hi I'm Alvinnes"
          delay={200}
          animateBy="words"
          direction="top"
          className="sm:text-8xl text-4xl xss:text-5xl font-secondary font-bold sm:-ml-1.5"
        />
      </Animate>
      <div className="absolute -z-1 sm:left-80 left-30 top-17 sm:top-23 w-full translate-y-2">
        <Animate direction="vertical" delay={4.8}>
          <svg
            viewBox="0 -10 230 20"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2"
          >
            <path d="M4 10 Q 50 -10 115 4" />
          </svg>
        </Animate>
      </div>
      <Animate delay={4.9} reverse={true}>
        <p className="sm:w-xl xs:w-full font-light my-7 text-sm leading-5.5">
          Hello, I'm Alvin, and I develop{" "}
          <b className="font-bold">scalable and user-friendly</b> web
          applications, with experience handling{" "}
          <b className="font-bold">frontend, backend, and database</b>{" "}
          development. I specialize in React and Node.js, creating solutions
          that combine clean code, great user experience, and reliable
          performance.{" "}
          <b className="font-bold">Ready to bring your project to life?</b>
        </p>
      </Animate>
      <Animate reverse={true} delay={5}>
        <div className="flex gap-6">
          <Button className="bg-white hover:bg-white/80 text-[#1d1d1d] font-bold sm:p-6 xs:p-5">
            <a href="#about">About Me</a>
          </Button>
          <Button
            variant="outline"
            className="bg-white/5 backdrop-blur-sm transition-all duration-500 font-bold sm:py-6 xs:py-5 xs:px-6 sm:px-10"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </Animate>
    </div>
  );
};

export default TextHome;
