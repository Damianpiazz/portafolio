"use client"

interface SkillItemProps {
  skill: {
    name: string
    icon: string
  }
}

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 duration-200">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-10 h-10 object-contain"
      />
      <span className="text-sm font-medium text-center">{skill.name}</span>
    </div>
  )
}
