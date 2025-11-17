"use client"

import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

type ContactCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  delay?: number
}

export function ContactCard({ icon, label, value, delay = 0 }: ContactCardProps) {
  return (
    <Card className={`animate-scale-in animate-delay-${delay}`}>
      <CardContent className="pt-6 text-center">
        {icon}
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="font-medium text-sm">{value}</p>
      </CardContent>
    </Card>
  )
}