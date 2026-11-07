import sosmedItem from "@/types/SosmedItem.ts";
import TextHome from "./TextHome";
import { Icon } from "@iconify/react";
import Animate from "@/components/ui/Animate";
import ProfileCard from "@/components/react-bits/ProfileCard";

const MainContent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 flex w-11/12 -translate-1/2 flex-col items-center justify-between gap-15 sm:w-10/12 sm:flex-row sm:gap-0">
      <TextHome />
      <Animate delay={4.3}>
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
      <div className="xs:gap-8 absolute -bottom-20 flex items-center gap-6 sm:-bottom-15">
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
