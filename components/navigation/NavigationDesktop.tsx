"use client"

import { NavItem } from "./NavItems"

export function NavigationDesktop({ navItems }: { navItems: NavItem[] }) {
  return (
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
