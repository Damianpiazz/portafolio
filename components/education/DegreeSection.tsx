"use client"

import { GraduationCap } from "lucide-react"
import { DegreeCard } from "./DegreeCard"

interface DegreeSectionProps {
  education: any[]
  language: string
  t: any
}

export function DegreeSection({ education, language, t }: DegreeSectionProps) {
  return (
    <div className="animate-slide-up animate-delay-100">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <GraduationCap className="h-6 w-6 text-primary" />
        {t.education.degree}
      </h3>
      <div className="space-y-4">
        {education.map((edu) => (
          <DegreeCard key={edu.id} edu={edu} language={language} />
        ))}
      </div>
    </div>
  )
}
