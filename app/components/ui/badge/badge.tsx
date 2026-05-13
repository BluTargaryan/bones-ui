import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Variants ─────────────────────────────────────────────────────────────────

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-md border-[1.5px] font-medium",
    "transition-colors duration-150",
    // Focus only matters when badge is interactive (dismissible)
    "focus:outline-none focus:ring-2 focus:ring-offset-1",
  ],
  {
    variants: {
      variant: {
        // Neutral — default label
        default: [
          "bg-neutral-900 text-white border-neutral-900",
          "focus:ring-neutral-900",
        ],
        // Muted — secondary label
        secondary: [
          "bg-neutral-100 text-neutral-700 border-neutral-200",
          "focus:ring-neutral-400",
        ],
        // Outline — minimal
        outline: [
          "bg-white text-neutral-700 border-neutral-300",
          "focus:ring-neutral-400",
        ],
        // Semantic colors
        success: [
          "bg-emerald-50 text-emerald-700 border-emerald-200",
          "focus:ring-emerald-500",
        ],
        warning: [
          "bg-amber-50 text-amber-700 border-amber-200",
          "focus:ring-amber-500",
        ],
        destructive: [
          "bg-red-50 text-red-700 border-red-200",
          "focus:ring-red-500",
        ],
        info: [
          "bg-blue-50 text-blue-700 border-blue-200",
          "focus:ring-blue-500",
        ],
      },
      size: {
        sm: "px-1.5 py-0 text-[10px] leading-5",
        md: "px-2   py-0.5 text-xs",
        lg: "px-2.5 py-1   text-sm",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
)

// Dot uses the same semantic color map — kept in sync via this lookup
const dotColorMap: Record<string, string> = {
  default:     "bg-white",
  secondary:   "bg-neutral-400",
  outline:     "bg-neutral-400",
  success:     "bg-emerald-500",
  warning:     "bg-amber-500",
  destructive: "bg-red-500",
  info:        "bg-blue-500",
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Renders a small colored dot before the label */
  dot?: boolean
  /** Renders a dismiss (×) button — calls onDismiss when clicked */
  dismissible?: boolean
  onDismiss?: () => void
  /** Left slot — icon or any node */
  icon?: React.ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "secondary",
      size,
      dot = false,
      dismissible = false,
      onDismiss,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const dotColor = dotColorMap[variant ?? "secondary"]

    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {/* Dot indicator */}
        {dot && (
          <span
            className={cn(
              "inline-block shrink-0 rounded-full",
              size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2",
              dotColor
            )}
            aria-hidden="true"
          />
        )}

        {/* Left icon slot */}
        {!dot && icon && (
          <span
            className={cn(
              "shrink-0",
              size === "sm" ? "[&>svg]:h-2.5 [&>svg]:w-2.5" : "[&>svg]:h-3 [&>svg]:w-3"
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}

        {/* Label */}
        {children}

        {/* Dismiss button */}
        {dismissible && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onDismiss?.()
            }}
            className={cn(
              "ml-0.5 -mr-0.5 inline-flex shrink-0 items-center justify-center",
              "rounded-sm opacity-60 hover:opacity-100",
              "transition-opacity duration-100",
              "focus:outline-none focus:opacity-100",
              size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"
            )}
            aria-label={`Remove ${typeof children === "string" ? children : "badge"}`}
          >
            <X className="h-full w-full" />
          </button>
        )}
      </span>
    )
  }
)

Badge.displayName = "Badge"

export { Badge, badgeVariants }