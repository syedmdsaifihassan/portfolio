"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

interface PortfolioNavProps {
  name: string
  resume: string
  github: string
  linkedin: string
  darkMode: boolean
  onToggleDarkMode: () => void
}

export default function PortfolioNav({
  name,
  resume,
  github,
  linkedin,
  darkMode,
  onToggleDarkMode,
}: PortfolioNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 page-gutter pt-3 sm:pt-4 pb-2 bg-[var(--surface-canvas)]">
      <header className="section-container">
        <div className="floating-nav px-3 sm:px-4 md:px-6">
          <div className="flex h-14 md:h-16 items-center justify-between gap-3 sm:gap-4">
            <a href="#" className="text-base md:text-lg font-bold tracking-tight text-foreground shrink-0">
              Md Saifi Hassan
            </a>

            <nav className="hidden xl:flex items-center gap-1" aria-label="Main">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-foreground/80 hover:text-foreground px-3 py-2 rounded-button hover:bg-[var(--color-parchment)] dark:hover:bg-[var(--surface-soft)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" onClick={onToggleDarkMode} aria-label="Toggle theme">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex" asChild>
                <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex" asChild>
                <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" className="hidden md:inline-flex" asChild>
                <a href={resume} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4 mr-1.5" />
                  Resume
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {mobileOpen && (
            <nav
              className="xl:hidden border-t border-[var(--border-hairline)] py-3 grid grid-cols-2 gap-2"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm py-2.5 px-3 rounded-button text-foreground/80 hover:text-foreground hover:bg-[var(--surface-soft)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 text-sm py-2.5 px-3 text-center rounded-button bg-honey text-ink font-medium mt-1"
              >
                Download Resume
              </a>
            </nav>
          )}
        </div>
      </header>
    </div>
  )
}
