import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  index?: string
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center"

  return (
    <div className={`section-heading-block ${isCenter ? "text-center" : "text-left"}`}>
      {(index || eyebrow) && (
        <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${isCenter ? "justify-center" : ""}`}>
          {index && (
            <span className="text-caption uppercase tracking-[0.12em] text-muted-foreground font-medium">
              {index}
            </span>
          )}
          {eyebrow && <Badge variant="status">{eyebrow}</Badge>}
        </div>
      )}
      <h2 className={`section-heading ${isCenter ? "mx-auto" : ""}`}>{title}</h2>
      {subtitle && (
        <p className={`body-text max-w-2xl ${isCenter ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  )
}
