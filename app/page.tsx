"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import components
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkExperienceSection from "@/components/work-experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"

// Import data
import personalInfoData from "@/data/personal-info.json"
import workExperienceData from "@/data/work-experience.json"
import projectsData from "@/data/projects.json"
import skillsData from "@/data/skills.json"
import educationData from "@/data/education.json"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{personalInfoData.name}</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={personalInfoData.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={personalInfoData.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection personalInfo={personalInfoData} darkMode={darkMode} />
      <AboutSection aboutInfo={personalInfoData.about} />
      <WorkExperienceSection experiences={workExperienceData} />
      <ProjectsSection projects={projectsData} />
      <SkillsSection skillCategories={skillsData.categories} />
      <EducationSection education={educationData} />
      <ContactSection
        email={personalInfoData.email}
        linkedin={personalInfoData.linkedin}
        github={personalInfoData.github}
      />

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 {personalInfoData.name}. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
