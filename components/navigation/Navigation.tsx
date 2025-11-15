"use client"

import { useState } from "react"
import Link from "next/link"
import { BriefcaseBusiness } from 'lucide-react';
import { useLanguage } from "@/contexts/language-context"
import { useScroll } from "@/hooks/useScroll"

import { NavigationDesktop } from "./NavigationDesktop"
import { NavigationMobile } from "./NavigationMobile"
import { NavigationControls } from "./NavigationControls"

export function Navigation() {
  const { t } = useLanguage()
  const isScrolled = useScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-foreground">
            <BriefcaseBusiness className="h-5 w-5"/>
          </Link>

          <NavigationDesktop navItems={navItems} />

          <NavigationControls mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        </div>

        <NavigationMobile navItems={navItems} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </nav>
  )
}
