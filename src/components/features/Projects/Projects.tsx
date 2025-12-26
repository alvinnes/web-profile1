import GridLayout from "@/layouts/GridLayout";
import { type ProjectsItem } from "@/types/ProjectsItem";
import ProjectContent from "./ProjectContent";
import { useEffect, useRef, useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsItem[]>([]);
  // const [hasFetched, setHasFetched] = useState(false);
  const cards = [1, 2, 3, 4, 5, 6];
  const projectContent = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchProjects();
          observer.disconnect();
        }
      },
      { rootMargin: "-400px" }
    );

    if (projectContent.current) {
      observer.observe(projectContent.current);
    }

    const fetchProjects = async () => {
      const request = await fetch(import.meta.env.VITE_END_POINT_PROJECTS);
      const response = await request.json();
      const projectsData = response.map((project: ProjectsItem) => ({
        id: project.id,
        img: project.img,
        url: project.url,
        title: project.title,
        description: project.description,
        techs: project.techs,
        delay: project.delay,
      }));
      setProjects(projectsData);
    };

    return () => observer.disconnect();
  }, []);

  return (
    <GridLayout
      id="projects"
      title="Projects"
      subjudul="Here you will find a selection of projects that showcase my growth
               and hands-on experience as a full stack developer. Each project
               demonstrates my ability to solve real-world problems by applying the
               skills I have learned, from frontend design to backend development
               and database management. Feel free to explore the details and see
               how I bring ideas to life through code."
    >
      <div
        ref={projectContent}
        className="sm:w-11/12 w-full xs:w-full grid grid-cols-2 sm:grid-cols-3 place-items-center gap-y-15 gap-x-4 pl-4 mt-20 mt-30 "
      >
        {projects.length > 0
          ? projects.map((project) => (
              <ProjectContent project={project} key={project.id} />
            ))
          : cards.map((index) => <SkeletonCard key={index} />)}
      </div>
    </GridLayout>
  );
};

export default Projects;
