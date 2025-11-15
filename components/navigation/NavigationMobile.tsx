"use client"

import { NavItem } from "./NavItems"

export function NavigationMobile({
  navItems,
  isOpen,
  onClose,
}: {
  navItems: NavItem[]
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="md:hidden py-4 border-t border-border">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
