"use client"

import Image from "next/image"
import { portfolioData } from "@/lib/portfolio-data"

export default function HeroImage() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />

      <Image
        src="/mi-foto.jpg"
        alt={portfolioData.personal.name}
        width={400}
        height={400}
        className="relative rounded-full object-cover border-4 border-border"
      />
    </div>
  )
}
