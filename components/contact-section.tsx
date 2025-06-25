import { Mail, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  email: string
  linkedin: string
  github: string
}

export default function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can create
          something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">{email}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/syedmdsaifihassan</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Github className="w-8 h-8 mx-auto mb-4 text-gray-600" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300">github.com/syedmdsaifihassan</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" asChild>
            <a href={`mailto:${email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={github} target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
