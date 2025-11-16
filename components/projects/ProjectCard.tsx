import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Github, ExternalLink, Video } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectCardProps {
  project: any
  language: string
  index: number
}

export function ProjectCard({ project, language, index }: ProjectCardProps) {
  return (
    <Card
      className={`flex flex-col overflow-hidden group animate-scale-in animate-delay-${Math.min(
        (index + 2) * 100,
        500
      )}`}
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out hover:scale-105 hover:brightness-110"
          quality={90}
        />
      </div>

      {/* Contenido */}
      <CardContent className="flex-1 pt-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description[language]}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.technologies?.slice(0, 3).map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies?.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Botones */}
      <CardFooter className="flex gap-2">
        {/* Demo */}
        {project.demo ? (
          <Button asChild variant="default" size="sm">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          </Button>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default" size="sm" className="flex items-center gap-1 cursor-not-allowed">
                <ExternalLink className="h-4 w-4" /> Demo
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Próximamente</p>
            </TooltipContent>
          </Tooltip>
        )}

        {/* GitHub */}
        {project.github ? (
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 cursor-not-allowed">
                <Github className="h-4 w-4" /> GitHub
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Próximamente</p>
            </TooltipContent>
          </Tooltip>
        )}

        {/* Video */}
        {project.video ? (
          <Button asChild variant="outline" size="sm">
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Video className="h-4 w-4" /> Video
            </a>
          </Button>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 cursor-not-allowed">
                <Video className="h-4 w-4" /> Video
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Próximamente</p>
            </TooltipContent>
          </Tooltip>
        )}
      </CardFooter>
    </Card>
  )
}
