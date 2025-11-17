"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExperienceHeader } from "./ExperienceHeader"
import { ExperienceDescription } from "./ExperienceDescription"
import { ExperienceTechnologies } from "./ExperienceTechnologies"

export function ExperienceCard({ exp, index }: any) {
  return (
    <Card
      className={`relative animate-slide-in-left animate-delay-${Math.min(
        (index + 1) * 100,
        500
      )}`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />

      <CardContent className="pt-6">
        <ExperienceHeader exp={exp} />
        <ExperienceDescription exp={exp} />
        <ExperienceTechnologies exp={exp} />
      </CardContent>
    </Card>
  )
}
