"use client"

import { Button } from "@/components/ui/button"
import { Eye, MessageCircle, Download, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"

export default function HeroActions() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg" className="animate-slide-up animate-delay-100">
        <a href="#projects">
          <Eye className="h-4 w-4 mr-2" />
          {t.hero.cta}
        </a>
      </Button>

      <Button asChild variant="outline" size="lg" className="animate-slide-up animate-delay-200 bg-transparent">
        <a href="#contact">
          <MessageCircle className="h-4 w-4 mr-2" />
          {t.hero.contact}
        </a>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="lg" className="animate-slide-up animate-delay-300 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            {t.hero.downloadCV}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a href={portfolioData.personal.cv.es} download>
              {t.hero.downloadCVSpanish}
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href={portfolioData.personal.cv.en} download>
              {t.hero.downloadCVEnglish}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
