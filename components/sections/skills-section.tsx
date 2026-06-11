import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"

interface SkillCategory {
  title: string
  skills: string[]
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[]
}

export default function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <SectionHeading index="04 — Skills" title="Technical Skills" />

      <div className="editorial-card divide-y divide-[var(--border-hairline)]">
        {skillCategories.map((category) => (
          <div key={category.title} className="p-5 sm:p-6 md:p-8">
            <h3 className="font-medium text-foreground mb-3 sm:mb-4 text-sm uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
