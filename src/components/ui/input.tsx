import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-surface border-2 border-brutal-border rounded-none h-10 w-full min-w-0 px-4 py-2.5 text-base text-foreground transition-all duration-150",
        "shadow-[3px_3px_0px_0px_var(--brutal-shadow)]",
        "focus:border-neon focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--brutal-shadow),0_0_10px_0px_#00ffc825]",
        "placeholder:text-muted-foreground",
        "selection:bg-primary selection:text-primary-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "aria-invalid:border-destructive aria-invalid:shadow-[3px_3px_0px_0px_var(--destructive)]",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
