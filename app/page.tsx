"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Globe,
  Smartphone,
  Download,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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

  useEffect(() => {
    const img = new Image();
    img.src = '/profile.jpg';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      {/* Animated Background */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
                i % 3 === 0
                  ? "bg-purple-300 dark:bg-purple-600"
                  : i % 3 === 1
                    ? "bg-blue-300 dark:bg-blue-600"
                    : "bg-pink-300 dark:bg-pink-600"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${200 + Math.random() * 200}px`,
                height: `${200 + Math.random() * 200}px`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${7 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div> */}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Md Saifi Hassan</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/syedmdsaifihassan" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/syedmdsaifihassan/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('/hero-section.jpg')"
            : "linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.75)), url('/hero-section.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center"
            style={{
              backgroundImage: imageLoaded ? "url('/profile.jpg')" : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!imageLoaded && (
              <span className="text-4xl font-bold text-white">MD</span>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Md Saifi Hassan</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Software Engineer with 3+ years of experience building scalable web applications
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              New Delhi, India
            </Badge>
            <Badge className="px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              3+ Years Experience
            </Badge>
            <Badge className="px-4 py-2">
              <Briefcase className="w-4 h-4 mr-2" />
              Available for Hire
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Get In Touch</Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('/Md_Saifi_Resume_SDE_React.pdf', '_blank', 'noopener,noreferrer')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate software engineer with over 3 years of experience in building modern web applications.
                I specialize in React, Next.js, and full-stack development, with a strong focus on creating intuitive
                user experiences and scalable solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My journey in tech started with a curiosity for problem-solving and has evolved into a career where I
                get to build products that make a difference. I'm always eager to learn new technologies and collaborate
                with talented teams.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Team Collaboration", "Continuous Learning", "User-Centric Design"].map(
                  (trait) => (
                    <Badge key={trait} variant="outline">
                      {trait}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Python, APIs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">Web</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Responsive, Accessible</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-8 h-8 mx-auto mb-4 text-orange-600" />
                  <h3 className="font-semibold mb-2">Mobile</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Progressive Web Apps</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Work Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Software Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">Thales</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <Badge variant="secondary">Aug 2022 - Present</Badge>
                    <span className="text-sm text-gray-500 mt-1">New Delhi, India</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Led full-stack development of Spirit Airlines’ In-Flight Entertainment (IFE) OTT platform serving thousands of
                  daily passengers, receiving outstanding user satisfaction ratings.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Architected and implemented mission-critical streaming infrastructure using NodeJS and Golang backend with
                      React/TypeScript frontend, ensuring performance at scale</li>
                    <li> Championed DevOps integration by creating automated CI/CD pipelines with Jenkins, reducing deployment
                      time by 65% and enabling rapid feature delivery</li>
                    <li>Implemented comprehensive testing architecture combining Jest, React Testing Library, Cypress, and Percy
                      for visual regression testing, maintaining 90%+ test coverage</li>
                    <li>Directed code quality initiatives through systematic peer reviews and architectural governance, establishing coding
                      standards that improved maintainability by 40%</li>
                    <li>Participated in agile development processes, contributing to sprint planning and retrospectives</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Jest"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Software Engineer Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">Guavus, a Thales company</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <Badge variant="secondary">Jan 2022 - Aug 2022</Badge>
                    <span className="text-sm text-gray-500 mt-1">Remote</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed and maintained full-stack applications using MERN stack. Implemented RESTful APIs and
                  optimized database queries for better performance.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Developed and maintained a comprehensive UI component library using React, TypeScript, and Storybook</li>
                    <li>Created reusable UI components that were implemented across multiple product interfaces</li>
                    <li>Implemented CI/CD pipeline using GitHub Actions</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Express.js", "AWS", "Docker"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Junior Software Developer</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">DevStudio Inc</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <Badge variant="secondary">Aug 2021 - May 2022</Badge>
                    <span className="text-sm text-gray-500 mt-1">New York, NY</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built responsive user interfaces and collaborated on various client projects. Gained experience in
                  modern web development practices and agile methodologies.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Delivered 15+ client projects on time</li>
                    <li>Improved code quality through peer reviews</li>
                    <li>Contributed to open-source projects</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "CSS3", "Git", "MySQL", "PHP"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">E-Commerce</span>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-Commerce Platform
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://github.com/syedmdsaifihassan" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://demo.com" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A full-featured e-commerce platform with user authentication, payment integration, and admin
                  dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Stripe", "PostgreSQL", "Prisma"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Task Manager</span>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Task Management App
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://github.com/syedmdsaifihassan" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://demo.com" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A collaborative task management application with real-time updates and team collaboration features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Socket.io", "Node.js", "MongoDB"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Weather</span>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Weather Dashboard
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://github.com/syedmdsaifihassan" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://demo.com" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  A responsive weather dashboard with location-based forecasts and interactive charts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Chart.js", "OpenWeather API", "Tailwind"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"].map(
                    (skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tools & Others</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Vercel", "Jest", "Cypress", "Figma"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Bachelor's */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Bachelor of Technology in Computer Science</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Dr A.P.J Abdul Kalam Technical University, Lucknow
                    </CardDescription>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Percentage: 78%</p>
                  </div>
                  <Badge variant="secondary">2019 - 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Graduated Magna Cum Laude with a focus on software engineering, algorithms, and data structures.
                  Participated in various coding competitions and hackathons.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Software Engineering",
                      "Database Systems",
                      "Web Development",
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Dean's List for 6 semesters</li>
                    <li>Winner of Annual Hackathon 2020</li>
                    <li>President of Computer Science Club</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Diploma */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Diploma in Computer Engineering</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Jamia Millia Islamia, New Delhi
                    </CardDescription>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Percentage: 74%</p>
                  </div>
                  <Badge variant="secondary">2016 - 2019</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Graduated Magna Cum Laude with a focus on software engineering, algorithms, and data structures.
                  Participated in various coding competitions and hackathons.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Software Engineering",
                      "Database Systems",
                      "Web Development",
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Dean's List for 6 semesters</li>
                    <li>Winner of Annual Hackathon 2020</li>
                    <li>President of Computer Science Club</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
            create something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">syedsaifihassan@gmail.com</p>
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
              <a href="mailto:syedsaifihassan@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/syedmdsaifihassan/" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/syedmdsaifihassan" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">© 2024 Md Saifi Hassan. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
