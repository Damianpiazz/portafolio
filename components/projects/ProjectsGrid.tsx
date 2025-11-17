import { ProjectCard } from "./ProjectCard"

interface ProjectsGridProps {
  projects: any[]
  language: string
}

export function ProjectsGrid({ projects, language }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          language={language}
          index={index}
        />
      ))}
    </div>
  )
}

