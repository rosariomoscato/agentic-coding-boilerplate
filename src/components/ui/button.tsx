import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider font-[family-name:var(--font-display)] transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-2 border-brutal-border rounded-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_var(--brutal-shadow)] hover:shadow-[1px_1px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        destructive:
          "bg-destructive text-white shadow-[3px_3px_0px_0px_var(--brutal-shadow)] hover:shadow-[1px_1px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        outline:
          "bg-background text-foreground shadow-[3px_3px_0px_0px_var(--brutal-shadow)] hover:bg-surface hover:shadow-[1px_1px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[3px_3px_0px_0px_var(--brutal-shadow)] hover:bg-surface-raised hover:shadow-[1px_1px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        ghost:
          "border-transparent shadow-none hover:bg-surface hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline border-transparent shadow-none",
        neon:
          "bg-transparent text-neon border-neon shadow-[3px_3px_0px_0px_var(--brutal-shadow)] hover:bg-neon hover:text-primary-foreground hover:shadow-[1px_1px_0px_0px_var(--brutal-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 px-8 has-[>svg]:px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
