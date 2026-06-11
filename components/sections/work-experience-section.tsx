import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"

interface WorkExperience {
  id: number
  title: string
  company: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface WorkExperienceSectionProps {
  experiences: WorkExperience[]
}

export default function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
  return (
    <section id="experience" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <SectionHeading index="02 — Experience" title="Work Experience" />

      <div className="relative max-w-4xl">
        <div
          className="absolute left-[5px] top-4 bottom-4 w-px bg-[var(--border-hairline)] hidden sm:block"
          aria-hidden
        />

        <div className="space-y-5 sm:space-y-6">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative sm:pl-10">
              <div
                className="absolute left-0 top-7 hidden sm:block w-[11px] h-[11px] rounded-full border-2 border-[var(--surface-canvas)] bg-foreground"
                aria-hidden
              />

              <Card>
                <CardHeader className="bg-[var(--surface-soft)] border-b border-[var(--border-hairline)] !pb-5 sm:!pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <span className="text-caption text-muted-foreground font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <CardTitle className="mt-1">{experience.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground mt-1">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-row sm:flex-col sm:items-end gap-2 sm:gap-1.5 shrink-0">
                      <Badge variant="secondary">{experience.duration}</Badge>
                      <span className="text-sm text-muted-foreground">{experience.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-5 sm:pt-6">
                  <p className="body-text mb-5">{experience.description}</p>
                  <div className="mb-5">
                    <h4 className="font-medium mb-3 text-foreground text-sm uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="body-text flex gap-3">
                          <span className="text-foreground shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-foreground" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-hairline)]">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
