"use client"

import { CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface CertificationDialogProps {
  cert: any
  t: any
}

export function CertificationDialog({ cert, t }: CertificationDialogProps) {
  return (
    <>
      <div className="relative h-48 bg-muted">
        <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain p-4" />
      </div>
      <CardContent className="pt-6">
        <h4 className="font-bold mb-1">{cert.name}</h4>
        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
        <Badge variant="secondary" className="text-xs">{cert.date}</Badge>

        <div className="mt-4 flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">{t.education.viewCertificate}</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{cert.name}</DialogTitle>
              </DialogHeader>
              <div className="relative w-full h-96">
                <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
              </div>
            </DialogContent>
          </Dialog>

          {cert.credentialUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label="Verify credential">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </>
  )
}
