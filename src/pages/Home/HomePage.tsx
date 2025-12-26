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
        className="text-white w-full h-270 sm:h-screen relative"
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
            <h2 className="text-4xl font-bold sm:block hidden">About Me</h2>
          </Animate>
          <div className="w-full flex sm:flex-row flex-col justify-between items-center -mt-15">
            <div className="overflow-hidden -mt-20 sm:-mt-35 w-xl">
              <Lanyard position={[0, 0, 13]} gravity={[0, -100, 0]} />
            </div>
            <TextAbout />
          </div>
        </div>
        <div className="absolute top-4 right-4 size-130 rounded-full blur-[3rem] bg-indigo-500/5 "></div>
        <div className="absolute bottom-4 left-0 size-130 rounded-full blur-[3rem] bg-indigo-500/5 "></div>

        <div className="fixed top-0 left-0 z-1000 size-full bg-white/20 backdrop-blur-sm flex justify-center items-center">
          <div className="w-10/12 p-1 h-[80vh] flex justify-between relative bg-slate-800 rounded-xl overflow-hidden custom-scroll">
            <div className="w-4/12 h-full"></div>
            <div className="w-8/12 h-full overflow-y-auto p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">All About Me</h2>
              <p className="text-sm leading-6">
                Hello, my name is <strong>Alvin Nando Erik Saputra</strong>, an
                11th-grade student at <strong>SMK Walisongo Pecangaan</strong>,
                majoring in <strong>Computer and Network Engineering</strong>. I
                have a strong interest in the world of technology, particularly
                in <strong>software development</strong>,
                <strong>computer networking</strong>, and{" "}
                <strong>digital systems</strong>. Since the beginning of my
                studies, I have continuously developed my technical and
                professional skills to prepare myself for a future career as a{" "}
                <strong>Software Engineer</strong>.
              </p>
              <h2 className="text-2xl font-bold">Current Focus</h2>
              <p className="text-sm leading-6">
                Currently, I have gained experience in{" "}
                <strong>web application development</strong> as a{" "}
                <strong>Fullstack Developer</strong>, with a primary focus on{" "}
                <strong>React.js</strong> for frontend development, while
                continuously improving my skills in{" "}
                <strong>backend development</strong>. I am committed to learning
                new technologies and working on various projects to broaden my
                experience and strengthen my technical foundation.
              </p>
              <h2 className="text-2xl font-bold">Personal Strengths</h2>
              <p className="text-sm leading-6">
                On a personal level, I am known as a <strong>humble</strong>,{" "}
                <strong>communicative</strong>, and{" "}
                <strong>collaborative</strong> individual who works well in team
                environments. I possess strong{" "}
                <strong>problem-solving skills</strong>, good{" "}
                <strong>leadership abilities</strong>, and the ability to adapt
                quickly in dynamic environments. I strongly believe that
                effective teamwork leads to better and more impactful solutions.
              </p>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
              <p className="text-sm leading-6">
                Throughout my studies in the Computer and Network Engineering
                program, I have developed a broad range of technical
                competencies across <strong>hardware</strong>,{" "}
                <strong>networking</strong>,{" "}
                <strong>server administration</strong>, and{" "}
                <strong>Internet of Things (IoT)</strong>.
              </p>
              <ul className="list-disc ml-12 text-sm flex flex-col gap-2">
                <li>
                  Understanding of <strong>computer components</strong> and{" "}
                  <strong>PC assembly</strong>
                </li>
                <li>
                  Development of <strong>website landing pages</strong>
                </li>
                <li>
                  <strong>Subnetting</strong>, <strong>VLSM</strong>, and{" "}
                  <strong>IP address management</strong>
                </li>
                <li>
                  <strong>Basic MikroTik configuration</strong>, including VLAN,
                  hotspot, port forwarding, basic routing, and access point
                  setup
                </li>
                <li>
                  Installation and configuration of
                  <strong>FreePBX</strong> and <strong>Asterisk</strong> for
                  <strong>VoIP systems</strong>
                </li>
                <li>
                  Configuration of <strong>IP Phones</strong>,
                  <strong>PortSIP</strong>, and <strong>MicroSIP</strong>
                </li>
                <li>
                  Installation of <strong>Debian Server</strong> with services
                  such as SSH, Apache2, and ProFTPD
                </li>
                <li>
                  Installation and use of <strong>Proxmox</strong> for
                  <strong>server virtualization</strong>
                </li>
                <li>
                  <strong>IoT development</strong>, including relays,
                  temperature sensors, Arduino IDE, and Arduino Cloud
                </li>
                <li>
                  IoT project involving
                  <strong>relay and lighting control</strong> and
                  <strong>cloud-based temperature monitoring</strong>
                </li>
              </ul>
              <p className="text-sm leading-6">
                With a combination of strong technical skills, solid
                interpersonal abilities, and a continuous learning mindset, I am
                eager to grow further and contribute meaningfully to the
                technology industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      <section
        id="education"
        className="w-full flex flex-col relative bg-slate-950 items-center mx-auto py-40"
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
        <div className="absolute top-4 right-4 size-120 rounded-full blur-[3rem] bg-indigo-500/5 "></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 size-150 rounded-full blur-[5rem] bg-indigo-500/8 "></div>
        <div className="absolute bottom-4 right-0 size-120 rounded-full blur-[3rem] bg-indigo-500/5 "></div>
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
