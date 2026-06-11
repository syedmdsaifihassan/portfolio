import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"

interface Education {
  id: number
  degree: string
  institution: string
  duration: string
  percentage: string
  description: string
  coursework: string[]
  achievements: string[]
}

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <SectionHeading index="05 — Education" title="Education" />

      <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-stretch">
        {education.map((edu) => (
          <Card key={edu.id} className="h-full flex flex-col">
            <CardHeader className="border-b border-[var(--border-hairline)] bg-[var(--surface-soft)]">
              <div className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                  {edu.duration}
                </Badge>
                <CardTitle className="text-lg sm:text-xl leading-snug">{edu.degree}</CardTitle>
                <CardDescription className="text-base font-medium text-foreground">
                  {edu.institution}
                </CardDescription>
                <p className="text-sm text-muted-foreground">Percentage: {edu.percentage}</p>
              </div>
            </CardHeader>
            <CardContent className="pt-5 sm:pt-6 flex-1 flex flex-col gap-5">
              <p className="body-text">{edu.description}</p>
              <div>
                <h4 className="font-medium mb-2 sm:mb-3 text-foreground text-sm uppercase tracking-wider">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <Badge key={course} variant="outline">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="font-medium mb-2 sm:mb-3 text-foreground text-sm uppercase tracking-wider">
                  Achievements
                </h4>
                <ul className="space-y-2.5">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="body-text flex gap-3">
                      <span className="text-foreground shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-foreground" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
