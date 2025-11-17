"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CertificationCard } from "./CertificationCard"

interface CertificationsCarouselProps {
  certifications: any[]
  t: any
}

export function CertificationsCarousel({ certifications, t }: CertificationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const total = certifications.length
  const maxIndex = Math.max(0, total - itemsPerView)

  const handlePrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" onClick={handlePrevious} disabled={currentIndex === 0}>
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex >= maxIndex}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} t={t} style={{ width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 24) / itemsPerView}px)` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
