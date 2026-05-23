import Squares from "@/components/react-bits/Squares";
import MainContent from "./MainContent";
import Lanyard from "@/components/react-bits/Lanyard";
import Animate from "@/components/ui/Animate";
import Skills from "../../components/features/Skills/Skills";
import Certifications from "../../components/features/Certificatons/Certifications";
import ChromaGrid from "@/components/react-bits/ChromaGrid";
import activitiesItem from "@/types/ActivitiesItem";
import GridLayout from "@/layouts/GridLayout";
import Footer from "../../components/features/Footer/Footer";
import Blogs from "../../components/features/Blogs/Blogs";
import Projects from "../../components/features/Projects/Projects";
import EducationItem from "../../components/features/Education/EducationItem";
import TextAbout from "../../components/features/About/TextAbout";
import Navbar from "@/components/Navbar";
import Contact from "@/components/features/Contact/Contact";
import Timeline from "@/components/features/Education/Timeline";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMountedTitle, setIsMountedTitle] = useState(false);
  const [isMountedSubtitle, setIsMountedSubtitle] = useState(false);
  const [isMountedLayer1, setIsMountedLayer1] = useState(false);
  const [isMountedLayer2, setIsMountedLayer2] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsMountedTitle(true);
    }, 500);

    setTimeout(() => {
      setIsMountedSubtitle(true);
    }, 800);
    setTimeout(() => {
      setIsMounted(true);
    }, 3000);
    setTimeout(() => {
      setIsMountedLayer1(true);
    }, 3400);
    setTimeout(() => {
      setIsMountedLayer2(true);
    }, 3700);
  }, [
    isMounted,
    isMountedSubtitle,
    isMountedTitle,
    isMountedLayer1,
    isMountedLayer2,
  ]);

  const handlePlayMusic = () => {
    if (isPlayed == false) {
      audioRef.current?.play();
      setIsPlayed(true);
    } else {
      audioRef.current?.pause();
      setIsPlayed(false);
    }
  };
  return (
    <main className="w-full text-white">
      <div
        onClick={handlePlayMusic}
        className="animate-rotate fixed right-7 bottom-8 z-999 flex size-13 cursor-pointer items-center justify-center rounded-full bg-indigo-500"
      >
        <Icon
          icon={isPlayed ? "ri:pause-fill" : "ri:play-fill"}
          className="size-8"
        />
        <audio ref={audioRef} loop>
          <source src="/audio/backsound.mp3" type="audio/mp3" />
          Browser doesn't support audio tag
        </audio>
      </div>
      <Navbar />

      <section
        id="home"
        className="relative h-270 w-full overflow-hidden text-white sm:h-screen"
      >
        <Squares
          speed={0.5}
          squareSize={100}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#999"
          hoverFillColor="#222"
        />
        <MainContent />
      </section>

      <section
        id="about"
        className="relative mx-auto flex justify-center overflow-x-hidden bg-slate-950 py-40 sm:w-full"
      >
        <div className="flex w-11/12 flex-col items-center sm:w-10/12">
          <Animate direction="vertical" reverse={true}>
            <h2 className="hidden text-4xl font-bold sm:block">About Me</h2>
          </Animate>
          <div className="-mt-15 flex w-full flex-col items-center justify-between sm:flex-row">
            <div className="-mt-20 w-xl overflow-hidden sm:-mt-35">
              <Lanyard position={[0, 0, 13]} gravity={[0, -100, 0]} />
            </div>
            <TextAbout />
          </div>
        </div>
        <div className="absolute top-4 right-4 size-130 rounded-full bg-indigo-500/5 blur-[3rem]"></div>
        <div className="absolute bottom-4 left-0 size-130 rounded-full bg-indigo-500/5 blur-[3rem]"></div>
      </section>

      <Skills />

      <section
        id="education"
        className="relative mx-auto flex w-full flex-col items-center bg-slate-950 py-40"
      >
        <Animate direction="vertical" reverse={true}>
          <div className="xs:w-full mx-auto w-10/12 text-center sm:w-xl">
            <h2 className="xs:text-5xl font-secondary text-4xl font-bold sm:text-7xl">
              My Education
            </h2>
            <p className="xs:text-sm mt-6 text-[0.8em] font-extralight">
              Every stage of my education has given me different experiences and
              lessons that have helped me grow and understand my interests in
              the world of technology.
            </p>
          </div>
        </Animate>

        <Timeline
          className="xs:mt-30 mt-10 w-11/12 self-start sm:self-center"
          height="h-[1000px] sm:h-[1200px]"
        >
          <EducationItem title="MIN 2 JEPARA" year="2016 - 2020">
            Focused on basic education and character development. Had not yet
            been exposed to technology or computers in depth.
          </EducationItem>

          <EducationItem
            title="SMP NEGERI 1 BATEALIT"
            year="2020 - 2023"
            position="translate-x-0"
            positionBullet="sm:left-155.5 -left-7"
          >
            In 9th grade, I was introduced to the world of coding and became
            interested in learning HTML and basic computer concepts.
          </EducationItem>

          <EducationItem title="SMK WALISONGO PECANGAAN" year="2023 - Now">
            I chose the{" "}
            <b className="font-semibold">
              Computer and Telecommunications Network Engineering
            </b>{" "}
            major because I wanted to understand various aspects of technology,
            including computer networks, programming, operating systems, and
            other supporting components.
          </EducationItem>
        </Timeline>
        <div className="absolute top-4 right-4 size-120 rounded-full bg-indigo-500/5 blur-[3rem]"></div>
        <div className="absolute top-1/2 left-0 size-150 -translate-y-1/2 rounded-full bg-indigo-500/8 blur-[5rem]"></div>
        <div className="absolute right-0 bottom-4 size-120 rounded-full bg-indigo-500/5 blur-[3rem]"></div>
      </section>
      <Certifications />
      <Projects />

      <GridLayout
        id="activities"
        title="Activities"
        subjudul="This section showcases my daily learning activities and hands-on
              experiments with various electronic components and technologies.
              Here, I document the ongoing projects, troubleshooting, and new
              skills I acquire each day as part of my continuous growth journey
              in the world of tech."
        customStyle="bg-black w-full"
        customStyleSecondary="w-10/12 px-2 xs:px-0 sm:px-13"
      >
        <div className="relative mt-30 w-full">
          <Animate direction="vertical">
            <ChromaGrid
              items={activitiesItem}
              radius={300}
              damping={0.8}
              fadeOut={0.6}
              ease="power3.out"
              className="gap-10 sm:gap-15"
            />
          </Animate>
        </div>
      </GridLayout>
      <Blogs />
      <Contact />
      <Footer />

      <div
        className={`${isMounted ? "invisible -top-full" : "visible top-0"} fixed left-0 z-1000 flex size-full items-center justify-center bg-slate-950 transition-all duration-2000 ease-in-out`}
      >
        <h1
          className={`${isMountedTitle ? "mt-0 animate-pulse opacity-100" : "-mt-50 animate-none opacity-0"} font-secondary relative text-8xl font-bold transition-all duration-1200 ease-out`}
        >
          Alvin
        </h1>
        <span
          className={`${isMountedSubtitle ? "mt-0 opacity-100" : "mt-50 opacity-0"} text-8xl font-bold text-indigo-500 transition-all duration-1200 ease-out`}
        >
          nes
        </span>
      </div>

      <div
        className={`${isMountedLayer1 ? "invisible -top-full" : "visible top-0"} fixed left-0 z-999 size-full bg-slate-900 transition-all duration-1500 ease-in-out`}
      ></div>
      <div
        className={`${isMountedLayer2 ? "invisible -top-full" : "visible top-0"} fixed left-0 z-998 size-full bg-slate-800 transition-all duration-1500 ease-in-out`}
      ></div>
    </main>
  );
};

export default HomePage;
