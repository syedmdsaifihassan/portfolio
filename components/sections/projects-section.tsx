import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  gradient: string
  displayName: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <SectionHeading index="03 — Projects" title="Featured Projects" />

      <div className="content-grid">
        {featured && (
          <Card className="overflow-hidden lg:grid lg:grid-cols-[minmax(200px,280px)_1fr]">
            <div className="h-36 sm:h-40 lg:h-auto bg-[var(--surface-soft)] border-b lg:border-b-0 lg:border-r border-[var(--border-hairline)] flex items-center justify-center p-6 sm:p-8">
              <span className="font-medium text-2xl sm:text-3xl tracking-[-0.38px] text-foreground text-center">
                {featured.displayName}
              </span>
            </div>
            <div>
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 text-xl">
                  <span>{featured.title}</span>
                  <ProjectLinks github={featured.github} demo={featured.demo} />
                </CardTitle>
                <CardDescription className="text-base mt-3">{featured.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {featured.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {rest.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-28 sm:h-32 bg-[var(--surface-soft)] border-b border-[var(--border-hairline)] flex items-center justify-center px-4 sm:px-6">
                <span className="font-medium text-xl tracking-[-0.17px] text-foreground text-center">
                  {project.displayName}
                </span>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="flex items-start justify-between gap-2 text-lg">
                  <span className="min-w-0">{project.title}</span>
                  <ProjectLinks github={project.github} demo={project.demo} />
                </CardTitle>
                <CardDescription className="mt-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectLinks({ github, demo }: { github: string; demo: string }) {
  return (
    <div className="flex gap-1 shrink-0">
      <Button variant="ghost" size="icon" asChild>
        <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github className="w-4 h-4" />
        </a>
      </Button>
      {demo && (
        <Button variant="ghost" size="icon" asChild>
          <a href={demo} target="_blank" rel="noreferrer" aria-label="Live demo">
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      )}
    </div>
  )
}
