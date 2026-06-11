"use client"

import { useState, useEffect } from "react"
import { MapPin, Calendar, Briefcase, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PersonalInfo {
  name: string
  title: string
  description: string
  location: string
  experience: string
  status: string
  profileImage: string
  resume: string
  email: string
  github: string
}

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = personalInfo.profileImage
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageLoaded(false)
  }, [personalInfo.profileImage])

  return (
    <section
      id="home"
      className="portfolio-section relative flex flex-col items-center text-center py-16 sm:py-20 md:py-24 lg:py-[80px]"
    >
      <div className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <div className="flex justify-center">
          <Badge variant="status">{personalInfo.status}</Badge>
        </div>

        <div
          className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-card border border-[var(--border-hairline)] bg-[var(--surface-card)] overflow-hidden"
          style={{
            backgroundImage: imageLoaded ? `url('${personalInfo.profileImage}')` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!imageLoaded && (
            <div className="w-full h-full flex items-center justify-center bg-[var(--surface-soft)]">
              <span className="text-2xl font-medium text-foreground">MS</span>
            </div>
          )}
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h1 className="display-heading">{personalInfo.name}</h1>
          <p className="subheading">{personalInfo.title}</p>
          <p className="body-text max-w-2xl mx-auto">{personalInfo.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Badge variant="status">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            {personalInfo.location}
          </Badge>
          <Badge variant="status">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {personalInfo.experience}
          </Badge>
          <Badge variant="status">
            <Briefcase className="w-3.5 h-3.5 mr-1.5" />
            {personalInfo.title}
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() =>
              window.open(`mailto:${personalInfo.email}`, "_blank", "noopener,noreferrer")
            }
          >
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              View Projects
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() =>
              window.open(personalInfo.resume, "_blank", "noopener,noreferrer")
            }
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex fixed bottom-6 left-6 z-40 w-10 h-10 items-center justify-center rounded-full border border-[var(--border-hairline)] bg-[var(--surface-card)] text-foreground hover:bg-[var(--surface-soft)] transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  )
}
