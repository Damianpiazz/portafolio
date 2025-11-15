"use client"

import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"

export default function HeroText() {
  const { language, t } = useLanguage()

  return (
    <div className="space-y-4">
      <p className="text-primary font-medium">{t.hero.greeting}</p>

      <h1 className="text-4xl md:text-6xl font-bold text-balance">
        {portfolioData.personal.name}
      </h1>

      <h2 className="text-xl md:text-2xl text-muted-foreground text-balance">
        {portfolioData.personal.role[language]}
      </h2>

      <p className="text-lg text-muted-foreground max-w-xl text-pretty">
        {portfolioData.personal.bio[language]}
      </p>
    </div>
  )
}
