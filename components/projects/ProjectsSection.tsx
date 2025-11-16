"use client"

import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"
import { ProjectsGrid } from "./ProjectsGrid"

export function ProjectsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-slide-up">
          {t.projects.title}
        </h2>

        <ProjectsGrid projects={portfolioData.projects} language={language} />
      </div>
    </section>
  )
}
