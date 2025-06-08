import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import discord from "@/assets/icons/discord.svg";
import github from "@/assets/icons/github.svg";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default:
              "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
          discord:
              "rounded-sm border border-[#5865F2] bg-gradient-to-r from-[#545CBD] to-[#333A8C] text-white shadow-xs hover:from-[#4752C4] hover:to-[#2E3582] focus-visible:ring-[#5865F2]/20",
          github:
              "rounded-sm border border-white/5 bg-gradient-to-r from-white/5 to-neutral-500/5 text-white shadow-xs hover:from-white/10 hover:to-neutral-500/10 focus-visible:ring-white/20",
          destructive:
              "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
              "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          secondary:
              "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
          ghost:
              "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
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

  const getContent = () => {
    if (variant === "discord") {
      return (
          <>
            <img src={discord.src} alt="Discord" className="w-4 h-4" />
            Add to Discord
          </>
      )
    }

    if (variant === "github") {
      return (
          <>
            <img src={github.src} alt="GitHub" className="w-4 h-4" />
            View on GitHub
          </>
      )
    }

    // @ts-ignore
      return children
  }

  return (
      <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
      >
        {getContent()}
      </Comp>
  )
}

export { Button, buttonVariants }
