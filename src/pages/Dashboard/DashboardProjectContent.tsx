import ElectricBorder from "@/components/react-bits/ElectricBorder";
import type { ProjectsItem } from "@/types/ProjectsItem";

interface ProjectContentProps {
  project: ProjectsItem;
}

const DashboardProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <a href={project.url} target="_blank">
      <ElectricBorder
        key={project.id}
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        className="group  hover:-translate-y-2 transition-all duration-300"
      >
        <div className="sm:w-95 h-80 xs:h-95 cursor-pointer rounded-md bg-indigo-500/10 p-4">
          <img
            src={`/app/storage${project.img}`}
            alt="project"
            className="object-cover w-full h-40 xs:h-55 rounded-md mb-4"
          />
          <span className="font-semibold">HTML | React | Tailwindcss</span>
          <h3 className="text-lg font-bold my-1 text-ellipsis line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm font-light line-clamp-2 text-ellipsis">
            {project.description}
          </p>
        </div>
      </ElectricBorder>
    </a>
  );
};

export default DashboardProjectContent;
