"use client"

import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"
import { ExperienceCard } from "./ExperienceCard"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up">
          {t.experience.title}
        </h2>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
