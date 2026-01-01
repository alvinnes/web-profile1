import SkeletonCard from "@/components/SkeletonCard";
import { Button } from "@/components/ui/button";
import type { ProjectsItem } from "@/types/ProjectsItem";
import { useEffect, useState } from "react";
import DashboardProjectContent from "./DashboardProjectContent";
import DashboardLayout from "@/layouts/DashboardLayout";

const Dashboard = () => {
  const [projects, setProjects] = useState<ProjectsItem[]>([]);
  const cards = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
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
    fetchProjects();
  }, []);
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 bg-[#222]">
        <div className="w-full h-30 bg-[#333] rounded-xl p-4">
          <Button className="bg-white py-5 hover:bg-[grey] text-[#1d1d1d]">
            <a href="/addProjects"> Add Project</a>
          </Button>
        </div>
        <div className="w-11/12 xs:w-full grid xs:grid-cols-1 gap-x-8 sm:grid-cols-3 place-items-center gap-y-15 mt-20 xs:mt-10 text-white ">
          {projects.length > 0
            ? projects.map((project) => (
                <DashboardProjectContent project={project} key={project.id} />
              ))
            : cards.map((index) => <SkeletonCard key={index} />)}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
