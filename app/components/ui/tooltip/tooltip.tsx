import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

// ─── Provider ─────────────────────────────────────────────────────────────────
// Must wrap your app (or Storybook decorator). Controls the global delay.

const TooltipProvider = TooltipPrimitive.Provider

// ─── Content variants ─────────────────────────────────────────────────────────

const tooltipContentVariants = cva(
  [
    "z-50 rounded-md border-[1.5px] px-3 py-1.5",
    "text-xs leading-snug",
    "shadow-sm",
    // Animations
    "will-change-[transform,opacity]",
    "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-1",
    "data-[side=top]:slide-in-from-bottom-1",
    "data-[side=left]:slide-in-from-right-1",
    "data-[side=right]:slide-in-from-left-1",
  ],
  {
    variants: {
      variant: {
        // Dark — default, high contrast
        dark:  "bg-neutral-900 text-white border-neutral-900",
        // Light — for dark backgrounds
        light: "bg-white text-neutral-900 border-neutral-200",
        // Danger — destructive context hints
        danger: "bg-red-600 text-white border-red-600",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TooltipProps
  extends VariantProps<typeof tooltipContentVariants> {
  /** The element that triggers the tooltip */
  children: React.ReactNode
  /** Tooltip content — string or any React node */
  content: React.ReactNode
  /** Which side to render on */
  side?: "top" | "right" | "bottom" | "left"
  /** Alignment along the side */
  align?: "start" | "center" | "end"
  /** Gap between trigger and tooltip (px) */
  sideOffset?: number
  /** Delay before showing (ms) */
  delayDuration?: number
  /** Show the small directional arrow */
  showArrow?: boolean
  /** Disable the tooltip entirely */
  disabled?: boolean
  /** Controlled open */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

// ─── Component ────────────────────────────────────────────────────────────────

const Tooltip = ({
  children,
  content,
  side = "top",
  align = "center",
  sideOffset = 6,
  delayDuration = 300,
  showArrow = false,
  disabled = false,
  variant,
  open,
  onOpenChange,
}: TooltipProps) => {
  if (disabled) return <>{children}</>

  return (
    <TooltipPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      {/*
        Disabled HTML elements don't fire pointer events, so Radix never
        sees the hover. Wrapping in a <span> with tabIndex restores the
        events without changing the DOM semantics of the trigger itself.
      */}
      <TooltipPrimitive.Trigger asChild>
        <span
          tabIndex={0}
          className="inline-flex cursor-default"
          // Forward aria-label if the child is an icon-only button
          aria-label={
            typeof content === "string" ? content : undefined
          }
        >
          {children}
        </span>
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={cn(tooltipContentVariants({ variant }))}
        >
          {content}

          {showArrow && (
            <TooltipPrimitive.Arrow
              className={cn(
                "fill-current",
                variant === "light"  ? "text-neutral-200" : "",
                variant === "danger" ? "text-red-600"     : "text-neutral-900"
              )}
              width={8}
              height={4}
            />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

Tooltip.displayName = "Tooltip"

export { Tooltip, TooltipProvider }