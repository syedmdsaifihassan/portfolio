"use client"

import { useState, useEffect } from "react"
import { MapPin, Calendar, Briefcase, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Blog {
  name: string;
  url: string;
  icon: string;
  iconDark?: string;
  color: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  experience: string;
  status: string;
  profileImage: string;
  heroBackground: string;
  resume: string;
  email: string;
  github: string;
  blogs: Blog[];
}

interface HeroSectionProps {
  personalInfo: PersonalInfo
  darkMode: boolean
}

export default function HeroSection({ personalInfo, darkMode }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = personalInfo.profileImage
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageLoaded(false)
  }, [personalInfo.profileImage])

  return (
    <section
      className="py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage: darkMode
          ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('${personalInfo.heroBackground}')`
          : `linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.75)), url('${personalInfo.heroBackground}')`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center"
          style={{
            backgroundImage: imageLoaded
              ? `url('${personalInfo.profileImage}')`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!imageLoaded && (
            <span className="text-4xl font-bold text-white">MD</span>
          )}
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {personalInfo.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge className="px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            {personalInfo.location}
          </Badge>
          <Badge className="px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            {personalInfo.experience}
          </Badge>
          <Badge className="px-4 py-2">
            <Briefcase className="w-4 h-4 mr-2" />
            {personalInfo.status}
          </Badge>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                `mailto:${personalInfo.email}`,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(personalInfo.github, "_blank", "noopener,noreferrer")
            }
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(personalInfo.resume, "_blank", "noopener,noreferrer")
            }
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
        
        {/* Blog Links Section */}
        <div className="mt-16 space-y-4">
          <h3 className="text-xl font-semibold">My Blogs</h3>
          <div className="flex flex-row justify-center gap-12">
            {personalInfo.blogs.map((blog, index) => (
              <div key={index} className="bg-white/5 dark:bg-gray-800/50 p-3 rounded-lg shadow-sm transition-transform hover:scale-[1.02] aspect-square size-36">
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center space-y-2 h-full">
                  <div className="relative size-36">
                    <img
                      src={darkMode && blog.iconDark ? blog.iconDark : blog.icon}
                      alt={`${blog.name} Logo`}
                      className="size-36"
                    />
                    <span className="text-lg font-medium">{blog.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
