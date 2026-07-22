import ElectricBorder from "@/components/react-bits/ElectricBorder";
// import type { ProjectsItem } from "@/types/ProjectsItem";

export interface ProjectStruct {
  id: number;
  title: string;
  url: string;
  description: string;
  techs: string[];
  img: string;
}

interface ProjectContentProps {
  // project: ProjectsItem;
  project: ProjectStruct;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <a href={project.url} target="_blank">
      <ElectricBorder
        key={project.id}
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        className="group transition-all duration-300 hover:-translate-y-2"
      >
        <div className="xs:h-95 h-80 cursor-pointer rounded-md bg-indigo-500/10 p-4 sm:w-100">
          <img
            // src={`/app/storage${project.img}`}
            src={project.img}
            alt="project"
            className="xs:h-55 mb-4 h-40 w-full rounded-md object-cover"
          />
          <span className="font-semibold">HTML | React | Tailwindcss</span>
          <h3 className="my-1 line-clamp-2 text-lg font-bold text-ellipsis">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm font-light text-ellipsis">
            {project.description}
          </p>
        </div>
      </ElectricBorder>
    </a>
  );
};

export default ProjectContent;
