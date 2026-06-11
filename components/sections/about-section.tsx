import { Code, Database, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"

interface AboutInfo {
  description1: string
  description2: string
  traits: string[]
  specialties: Array<{
    icon: string
    title: string
    description: string
    color: string
  }>
}

interface AboutSectionProps {
  aboutInfo: AboutInfo
}

const iconMap = {
  Code,
  Database,
  Globe,
  Smartphone,
}

export default function AboutSection({ aboutInfo }: AboutSectionProps) {
  return (
    <section id="about" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <SectionHeading index="01 — About" title="About Me" />

      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 md:gap-10 lg:gap-12 items-start">
        <div className="space-y-5 sm:space-y-6">
          <p className="body-text text-foreground/90">{aboutInfo.description1}</p>
          <p className="body-text">{aboutInfo.description2}</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
            {aboutInfo.traits.map((trait) => (
              <Badge key={trait} variant="status">
                {trait}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
          {aboutInfo.specialties.map((specialty) => {
            const IconComponent = iconMap[specialty.icon as keyof typeof iconMap]
            return (
              <Card key={specialty.title}>
                <CardContent className="p-5 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="icon-circle shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-foreground">{specialty.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-[1.35]">
                      {specialty.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
