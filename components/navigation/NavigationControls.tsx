"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon, Globe, Menu, X } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavigationControls({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean
  setMobileOpen: (value: boolean) => void
}) {
  const { theme, toggleTheme } = useTheme()
  const { setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      {/* THEME TOGGLE */}
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>

      {/* LANGUAGE MENU */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("es")}>🇪🇸 Español</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>🇬🇧 English</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* MOBILE MENU BUTTON */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  )
}
