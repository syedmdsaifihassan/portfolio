import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-card text-[13px] font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-honey text-ink px-3 py-1",
        secondary:
          "bg-[var(--surface-soft)] text-foreground border border-[var(--border-hairline)] px-3 py-1",
        destructive: "bg-destructive text-destructive-foreground px-3 py-1",
        outline:
          "border border-[var(--border-hairline)] bg-transparent text-foreground px-3 py-1",
        status: "bg-apricot text-ink px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
