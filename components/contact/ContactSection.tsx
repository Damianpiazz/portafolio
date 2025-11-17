"use client"

import { ContactCard } from "./ContactCard"
import { ContactForm } from "./ContactForm"
import { Mail, MapPin, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { portfolioData } from "@/lib/portfolio-data"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <ContactCard
            icon={<Mail className="h-8 w-8 mx-auto mb-3 text-primary" />}
            label={t.contact.email}
            value={portfolioData.personal.email}
            delay={100}
          />
          <ContactCard
            icon={<Linkedin className="h-8 w-8 mx-auto mb-3 text-primary" />}
            label="LinkedIn"
            value={portfolioData.personal.social.linkedin}
            delay={200}
          />
          <ContactCard
            icon={<MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />}
            label="Location"
            value={portfolioData.personal.location}
            delay={300}
          />
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
