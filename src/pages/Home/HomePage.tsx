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

const HomePage = () => {
  return (
    <main className="w-full text-white">
      <Navbar />

      <section
        id="home"
        className="text-white py-10 w-full min-h-screen relative"
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
        className="sm:w-full bg-slate-950 relative flex justify-center mx-auto py-40"
      >
        <div className="w-11/12 sm:w-10/12 flex flex-col items-center">
          <Animate direction="vertical" reverse={true}>
            <h2 className="text-3xl font-bold sm:block hidden">About Me</h2>
          </Animate>
          <div className="w-full flex sm:flex-row flex-col justify-between items-center -mt-15">
            <div className="overflow-hidden -mt-20 sm:-mt-40 w-xl">
              <Lanyard position={[0, 0, 13]} gravity={[0, -100, 0]} />
            </div>
            <TextAbout />
          </div>
        </div>
        <div className="absolute top-4 right-4 size-130 rounded-full blur-[3rem] bg-indigo-500/5 "></div>
        <div className="absolute bottom-4 left-0 size-130 rounded-full blur-[3rem] bg-indigo-500/5 "></div>
      </section>

      <Skills />

      <section
        id="education"
        className="w-11/12 flex flex-col relative items-center mx-auto py-40"
      >
        <Animate direction="vertical" reverse={true}>
          <div className="sm:w-xl w-11/12 mx-auto xs:w-full text-center">
            <h2 className="sm:text-7xl  text-4xl xs:text-5xl font-secondary font-bold">
              My Education
            </h2>
            <p className="xs:text-sm text-[0.8em] font-extralight mt-6">
              Every stage of my education has given me different experiences and
              lessons that have helped me grow and understand my interests in
              the world of technology.
            </p>
          </div>
        </Animate>

        <Timeline
          className="mt-10 xs:mt-30 w-11/12 sm:self-center self-start"
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
            positionBullet="sm:left-141.5 -left-7"
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
        <div className="w-full relative mt-30">
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
    </main>
  );
};

export default HomePage;
