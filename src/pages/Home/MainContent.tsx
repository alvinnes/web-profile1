import sosmedItem from "@/types/SosmedItem.ts";
import TextHome from "./TextHome";
import { Icon } from "@iconify/react";
import Animate from "@/components/ui/Animate";
import ProfileCard from "@/components/react-bits/ProfileCard";

const MainContent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 sm:w-10/12 w-11/12 flex justify-between items-center flex-col sm:flex-row gap-15 sm:gap-0">
      <TextHome />
      <Animate delay={0.6}>
        <ProfileCard
          name="Alvinnes"
          handle="alvinnes_"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/img/foto-profile2.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </Animate>
      <div className="flex items-center gap-8 absolute sm:-bottom-45 xs:-bottom-20">
        {sosmedItem.map((item, index) => (
          <Animate reverse={true} key={index}>
            <a
              key={index}
              href={item.link}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Icon icon={item.icon} width={25} />
            </a>
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
