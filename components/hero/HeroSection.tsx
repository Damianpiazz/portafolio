"use client"

import HeroText from "./HeroText"
import HeroActions from "./HeroActions"
import HeroSocials from "./HeroSocials"
import HeroImage from "./HeroImage"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <HeroText />
            <HeroActions />
            <HeroSocials />
          </div>

          <div className="animate-slide-in-right flex justify-center">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  )
}
