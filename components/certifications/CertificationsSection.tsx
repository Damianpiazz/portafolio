"use client"

import { Award } from "lucide-react"
import { CertificationsCarousel } from "./CertificationsCarousel"

interface CertificationsSectionProps {
  certifications: any[]
  t: any
}

export function CertificationsSection({ certifications, t }: CertificationsSectionProps) {
  return (
    <div className="animate-slide-up animate-delay-200">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Award className="h-6 w-6 text-primary" />
        {t.education.certifications}
      </h3>
      <CertificationsCarousel certifications={certifications} t={t} />
    </div>
  )
}
