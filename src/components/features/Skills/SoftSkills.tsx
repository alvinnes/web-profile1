import LaserFlow from "@/components/react-bits/LaserFlow";
import TextType from "@/components/react-bits/TextType";
import Animate from "@/components/ui/Animate";
import { Badge } from "@/components/ui/badge";
import softSkillsItem from "@/types/SoftSkillsItem";

const SoftSkills = () => {
  return (
    <div className="sm:w-2xl w-full mb-60">
      <div className="relative sm:overflow-hidden h-100 sm:h-230 w-250">
        <LaserFlow
          wispIntensity={20}
          horizontalSizing={0.5}
          wispDensity={5}
          horizontalBeamOffset={-0.2}
          verticalBeamOffset={0.0}
          flowSpeed={1}
          color="#6366F1"
          className="xs:-translate-x-45"
        />
        <div className="absolute left-0 -bottom-58 w-full xs:h-[60%] rounded-md z-6">
          <Animate direction="vertical">
            <div className="sm:w-2xl w-full h-84.5 rounded-xl bg-white/5 border-solid border-slate-200/50 border-1 backdrop-blur-2xl sm:-mt-35 p-6 flex flex-col justify-between xs:-mt-27">
              <TextType
                text={["Soft Skills"]}
                typingSpeed={120}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                className="text-4xl font-bold mb-8 "
              />
              {softSkillsItem.map((item, index) => (
                <div
                  key={index}
                  className="flex sm:flex-row xs:flex-col-reverse xs:mb-6 xs:items-start xs:gap-2 items-center justify-between"
                >
                  <span className="sm:w-sm xs:w-full text-[0.8em] flex justify-between items-center rounded-md bg-slate-800">
                    <p
                      className={`w-[${item.percentage}] bg-slate-700 py-2 pl-2 rounded-sm`}
                    >
                      {item.skill}
                    </p>
                    <p className="mr-2">{item.percentage}%</p>
                  </span>
                  <Badge className="bg-slate-800 text-violet-400 py-2 px-3 rounded-sm">
                    {item.description}
                  </Badge>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
