"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export default function HeroSocials() {
  const social = portfolioData.personal.social

  return (
    <div className="flex gap-4 pt-4 animate-slide-up animate-delay-400">
      <SocialIcon href={social.github} icon={<Github className="h-6 w-6" />} label="GitHub" />
      <SocialIcon href={social.linkedin} icon={<Linkedin className="h-6 w-6" />} label="LinkedIn" />
      <SocialIcon
        href={`mailto:${portfolioData.personal.email}`}
        icon={<Mail className="h-6 w-6" />}
        label="Email"
      />
    </div>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
