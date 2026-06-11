interface PortfolioFooterProps {
  name: string
  title?: string
}

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function PortfolioFooter({ name, title }: PortfolioFooterProps) {
  return (
    <footer className="bg-[var(--color-graphite)] text-[var(--color-paper)] dark:bg-[#1a1d1e] dark:text-[var(--color-ink)]">
      <div className="page-gutter">
        <div className="section-container py-12 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
            <div className="max-w-md">
              <p className="text-2xl font-medium tracking-[-0.17px] mb-2">{name}</p>
              {title && <p className="text-sm opacity-80">{title}</p>}
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-10 pt-6 border-t border-[var(--border-hairline)]">
            <p className="text-sm opacity-70 text-center md:text-left">
              © {new Date().getFullYear()} {name}. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
