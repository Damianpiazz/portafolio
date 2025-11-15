"use client"

import { useLanguage } from "@/contexts/language-context"

export function ExperienceDescription({ exp }: any) {
  const { language } = useLanguage()
  return (
    <p className="text-muted-foreground mb-4">
      {exp.description[language]}
    </p>
  )
}
