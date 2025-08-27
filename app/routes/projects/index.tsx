import { useState } from "react";;
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/component/ProjectCard";
import Pagination from "~/component/Pagination";

export async function loader({request}: Route.LoaderArgs):Promise<{projects: Project[]}> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();

  return {projects: data};
}

const ProjectsPage = ({loaderData}: Route.ComponentProps) => {
  const {projects} = loaderData as {projects: Project[]};
  
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get current pages projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOffFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOffFirst, indexOfLast);


  
  return (
    <>
        <h2 className='text-3xl font-bold mb-8'>Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>

        <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}/>
    </>
  )
}

export default ProjectsPage