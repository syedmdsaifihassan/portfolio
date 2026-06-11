import { Mail, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"

interface ContactSectionProps {
  email: string
  linkedin: string
  github: string
}

export default function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  return (
    <section id="contact" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
        <div>
          <SectionHeading
            index="07 — Contact"
            title="Let's Work Together"
            subtitle="I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can create something amazing together."
          />
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href={`mailto:${email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href={github} target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <ContactRow icon={Mail} label="Email" value={email} href={`mailto:${email}`} />
          <ContactRow
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/syedmdsaifihassan"
            href={linkedin}
          />
          <ContactRow
            icon={Github}
            label="GitHub"
            value="github.com/syedmdsaifihassan"
            href={github}
          />
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href: string
}) {
  return (
    <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">
      <Card className="hover:bg-[var(--surface-soft)] transition-colors">
        <CardContent className="p-5 sm:p-6 flex items-center gap-3 sm:gap-4">
          <div className="icon-circle shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="text-sm text-muted-foreground truncate mt-0.5">{value}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
