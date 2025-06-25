import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <Card key={experience.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <Badge variant="secondary">{experience.duration}</Badge>
                    <span className="text-sm text-gray-500 mt-1">{experience.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
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
