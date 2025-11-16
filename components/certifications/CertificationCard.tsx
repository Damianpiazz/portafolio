"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CertificationDialog } from "./CertificationDialog"

interface CertificationCardProps {
  cert: any
  t: any
  style?: React.CSSProperties
}

export function CertificationCard({ cert, t, style }: CertificationCardProps) {
  return (
    <Card className="flex-shrink-0 overflow-hidden" style={style}>
      <CertificationDialog cert={cert} t={t} />
    </Card>
  )
}
