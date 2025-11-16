"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DegreeCardProps {
  edu: any
  language: string
}

export function DegreeCard({ edu, language }: DegreeCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <h4 className="text-xl font-bold">{edu.degree[language]}</h4>
            <p className="text-muted-foreground">{edu.institution}</p>
            <p className="text-sm text-muted-foreground mt-2">{edu.description[language]}</p>

            {/* Badge debajo de la descripción */}
            {edu.badge && (
              <Badge variant="secondary" className="mt-3">
                {edu.badge}
              </Badge>
            )}
          </div>

          <Badge variant="outline" className="whitespace-nowrap">
            {edu.startDate} - {edu.endDate}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
