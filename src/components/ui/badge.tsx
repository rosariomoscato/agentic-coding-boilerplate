import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border-2 border-brutal-border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-display)] rounded-none transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-brutal-border bg-primary text-primary-foreground",
        secondary:
          "border-brutal-border bg-secondary text-secondary-foreground",
        destructive:
          "border-brutal-border bg-destructive text-white",
        outline: "text-foreground bg-transparent",
        neon: "border-neon bg-neon/10 text-neon",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
