"use client"

import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"
import { DegreeSection } from "./DegreeSection"
import { CertificationsSection } from "@/components/certifications/CertificationsSection"

export function EducationSection() {
  const { language, t } = useLanguage()

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up">
          {t.education.title}
        </h2>

        <div className="space-y-12">
          <DegreeSection education={portfolioData.education} language={language} t={t} />
          <CertificationsSection certifications={portfolioData.certifications} t={t} />
        </div>
      </div>
    </section>
  )
}