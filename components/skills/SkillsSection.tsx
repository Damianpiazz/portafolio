"use client"

import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"
import { SkillCategoryCard } from "./SkillCategoryCard"

export function SkillsSection() {
  const { t } = useLanguage()

const skillCategories = [
  { id: "frontend", title: t.skills.frontend, skills: portfolioData.skills.frontend },
  { id: "backend", title: t.skills.backend, skills: portfolioData.skills.backend },
  { id: "languages", title: t.skills.languages, skills: portfolioData.skills.languages },
  { id: "database", title: t.skills.database, skills: portfolioData.skills.database },
  { id: "otherSkills", title: t.skills.other, skills: portfolioData.skills.other },
  { id: "tools", title: t.skills.tools, skills: portfolioData.skills.tools },
]


  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              animationDelay={Math.min((index + 1) * 100, 400)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
