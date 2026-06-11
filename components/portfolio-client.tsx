"use client"

import { useState, useEffect } from "react"

import personalInfoData from "../data/personal-info.json"
import workExperienceData from "../data/work-experience.json"
import projectsData from "../data/projects.json"
import skillsData from "../data/skills.json"
import educationData from "../data/education.json"

import PortfolioNav from "@/components/layout/portfolio-nav"
import PortfolioFooter from "@/components/layout/portfolio-footer"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import WorkExperienceSection from "@/components/sections/work-experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import EducationSection from "@/components/sections/education-section"
import BlogsSection from "@/components/sections/blogs-section"
import ContactSection from "@/components/sections/contact-section"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  const updatedPersonalInfo = {
    ...personalInfoData,
    profileImage: `${basePath}${personalInfoData.profileImage}`,
    heroBackground: `${basePath}${personalInfoData.heroBackground}`,
    resume: `${basePath}${personalInfoData.resume}`,
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-[var(--surface-canvas)] text-foreground transition-colors duration-300">
      <PortfolioNav
        name={personalInfoData.name}
        resume={updatedPersonalInfo.resume}
        github={personalInfoData.github}
        linkedin={personalInfoData.linkedin}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main className="page-gutter">
        <div className="section-container">
          <HeroSection personalInfo={updatedPersonalInfo} />
          <AboutSection aboutInfo={updatedPersonalInfo.about} />
          <WorkExperienceSection experiences={workExperienceData} />
          <ProjectsSection projects={projectsData} />
          <SkillsSection skillCategories={skillsData.categories} />
          <EducationSection education={educationData} />
          <BlogsSection blogs={personalInfoData.blogs} darkMode={darkMode} />
          <ContactSection
            email={updatedPersonalInfo.email}
            linkedin={updatedPersonalInfo.linkedin}
            github={updatedPersonalInfo.github}
          />
        </div>
      </main>

      <PortfolioFooter name={updatedPersonalInfo.name} title={updatedPersonalInfo.title} />
    </div>
  )
}
