"use client"

import { Badge } from "@/components/ui/badge"

export function ExperienceTechnologies({ exp }: any) {
  return (
    <div className="flex flex-wrap gap-2">
      {exp.technologies.map((tech: string) => (
        <Badge key={tech} variant="secondary">
          {tech}
        </Badge>
      ))}
    </div>
  )
}
