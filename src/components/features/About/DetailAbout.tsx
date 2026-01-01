import TextType from "@/components/react-bits/TextType";
import TiltedCard from "@/components/react-bits/TiltedCard";
import { Button } from "@/components/ui/button";
import sosmedItem from "@/types/SosmedItem";
import { Icon } from "@iconify/react";
import type React from "react";

interface DetailAboutProps {
  isOpenAbout: boolean;
  setIsOpenAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailAbout = ({ isOpenAbout, setIsOpenAbout }: DetailAboutProps) => {
  return (
    <div
      onClick={() => setIsOpenAbout(false)}
      className={`fixed top-0 left-0 z-1000 size-full bg-white/20 backdrop-blur-sm flex transition-all duration-800 justify-center items-center ${isOpenAbout ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="w-11/12 sm:w-10/12 p-4 h-[100vh] sm:h-[80vh] flex justify-between relative bg-slate-800 sm:rounded-xl overflow-hidden custom-scroll flex flex-col sm:flex-row">
        <div className="w-full sm:w-5/12 relative h-500 sm:h-full flex bg-white/5 justify-center relative rounded-xl flex-col items-center p-4 sm:p-8">
          <TiltedCard
            imageSrc="/img/foto-profile2.png"
            altText="Alvin Nando Erik Saputra"
            captionText="Alvin Nando Erik Saputra"
            containerHeight="sm:h-130 h-11/12"
            containerWidth="sm:w-full w-full"
            imageHeight="sm:h-130 h-11/12"
            imageWidth="sm:w-full w-full"
            rotateAmplitude={14}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="bg-white/30 backdrop-blur-xl text-sm xss:text-base p-2 rounded-xl">
                Alvin Nando Erik Saputra
              </p>
            }
          />
          <div className="flex items-center gap-5 xs:gap-6 absolute bottom-4">
            {sosmedItem.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <Icon icon={item.icon} width={25} />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-7/12 h-full overflow-y-auto p-4 mt-10 sm:mt-0 sm:p-8 flex flex-col gap-4">
          <TextType
            text={["All About Me"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-2xl font-bold"
            cursorClassName="text-white"
          />
          <p className="text-sm leading-6">
            Hello, my name is <strong>Alvin Nando Erik Saputra</strong>, an
            11th-grade student at <strong>SMK Walisongo Pecangaan</strong>,
            majoring in <strong>Computer and Network Engineering</strong>. I
            have a strong interest in the world of technology, particularly in{" "}
            <strong>software development</strong>,
            <strong>computer networking</strong>, and{" "}
            <strong>digital systems</strong>. Since the beginning of my studies,
            I have continuously developed my technical and professional skills
            to prepare myself for a future career as a{" "}
            <strong>Software Engineer</strong>.
          </p>
          <TextType
            text={["Current Focus"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-2xl font-bold"
            cursorClassName="text-white"
          />
          <p className="text-sm leading-6">
            Currently, I have gained experience in{" "}
            <strong>web application development</strong> as a{" "}
            <strong>Fullstack Developer</strong>, with a primary focus on{" "}
            <strong>React.js</strong> for frontend development, while
            continuously improving my skills in{" "}
            <strong>backend development</strong>. I am committed to learning new
            technologies and working on various projects to broaden my
            experience and strengthen my technical foundation.
          </p>
          <TextType
            text={["Personal Strengths"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-2xl font-bold"
            cursorClassName="text-white"
          />
          <p className="text-sm leading-6">
            On a personal level, I am known as a <strong>humble</strong>,{" "}
            <strong>communicative</strong>, and <strong>collaborative</strong>{" "}
            individual who works well in team environments. I possess strong{" "}
            <strong>problem-solving skills</strong>, good{" "}
            <strong>leadership abilities</strong>, and the ability to adapt
            quickly in dynamic environments. I strongly believe that effective
            teamwork leads to better and more impactful solutions.
          </p>
          <TextType
            text={["Technical Skills"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-2xl font-bold"
            cursorClassName="text-white"
          />
          <p className="text-sm leading-6">
            Throughout my studies in the Computer and Network Engineering
            program, I have developed a broad range of technical competencies
            across <strong>hardware</strong>, <strong>networking</strong>,{" "}
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
              hotspot, port forwarding, basic routing, and access point setup
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
              Installation of <strong>Debian Server</strong> with services such
              as SSH, Apache2, and ProFTPD
            </li>
            <li>
              Installation and use of <strong>Proxmox</strong> for
              <strong>server virtualization</strong>
            </li>
            <li>
              <strong>IoT development</strong>, including relays, temperature
              sensors, Arduino IDE, and Arduino Cloud
            </li>
            <li>
              IoT project involving
              <strong>relay and lighting control</strong> and
              <strong>cloud-based temperature monitoring</strong>
            </li>
          </ul>
          <p className="text-sm leading-6">
            With a combination of strong technical skills, solid interpersonal
            abilities, and a continuous learning mindset, I am eager to grow
            further and contribute meaningfully to the technology industry.
          </p>
          <Button
            onClick={() => setIsOpenAbout(false)}
            className="bg-white px-6 text-black cursor-pointer hover:bg-slate-200 self-start"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailAbout;
