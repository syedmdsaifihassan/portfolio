interface Blog {
  name: string
  url: string
  icon: string
  iconDark?: string
}

interface BlogsSectionProps {
  blogs: Blog[]
  darkMode?: boolean
}

export default function BlogsSection({ blogs, darkMode = false }: BlogsSectionProps) {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

  return (
    <section id="writing" className="portfolio-section section-shell border-t border-[var(--border-hairline)]">
      <div className="section-heading-block">
        <span className="text-caption uppercase tracking-[0.12em] text-muted-foreground font-medium block">
          06 — Writing
        </span>
        <h2 className="section-heading">My Blogs</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl">
        {blogs.map((blog, index) => {
          const imageUrl = `${basePath}${darkMode && blog.iconDark ? blog.iconDark : blog.icon}`
          return (
            <a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group p-6 sm:p-8 flex items-center gap-4 sm:gap-5 hover:bg-[var(--surface-soft)] transition-colors"
            >
              <div
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0"
              />
              <p className="font-medium text-foreground group-hover:underline underline-offset-4">
                {blog.name}
              </p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
