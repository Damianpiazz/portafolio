"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const formDataToSend = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mwpajjdq", {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }

    // Reset status to idle after 3s
    setTimeout(() => setStatus("idle"), 3000)
  }

  const renderButtonContent = () => {
    switch (status) {
      case "sending":
        return (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            {t.contact.sending}
          </>
        )
      case "success":
        return (
          <>
            <Check className="h-4 w-4 mr-2 text-green-500" />
            Sent!
          </>
        )
      case "error":
        return (
          <>
            <Send className="h-4 w-4 mr-2 text-red-500" />
            Error
          </>
        )
      default:
        return (
          <>
            <Send className="h-4 w-4 mr-2" />
            {t.contact.send}
          </>
        )
    }
  }

  return (
    <Card className="animate-slide-up animate-delay-400">
      <CardHeader>
        <CardTitle>{t.contact.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder={t.contact.name}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder={t.contact.email}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Textarea
            name="message"
            placeholder={t.contact.message}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            required
          />
          <Button
            type="submit"
            className={`w-full ${status === "success" ? "bg-green-100 text-green-700" : ""}`}
            disabled={status === "sending"}
          >
            {renderButtonContent()}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
