import { Code, Database, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{aboutInfo.description1}</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{aboutInfo.description2}</p>
            <div className="flex flex-wrap gap-2">
              {aboutInfo.traits.map((trait) => (
                <Badge key={trait} variant="outline">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {aboutInfo.specialties.map((specialty) => {
              const IconComponent = iconMap[specialty.icon as keyof typeof iconMap]
              return (
                <Card key={specialty.title}>
                  <CardContent className="p-6 text-center">
                    <IconComponent className={`w-8 h-8 mx-auto mb-4 ${specialty.color}`} />
                    <h3 className="font-semibold mb-2">{specialty.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{specialty.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
