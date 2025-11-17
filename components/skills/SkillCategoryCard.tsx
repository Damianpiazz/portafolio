"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillItem } from "./SkillItem"

interface SkillCategoryCardProps {
  title: string
  skills: { name: string; icon: string }[]
  animationDelay?: number
}

export function SkillCategoryCard({ title, skills, animationDelay = 0 }: SkillCategoryCardProps) {
  return (
    <Card className={`animate-scale-in animate-delay-${animationDelay}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
