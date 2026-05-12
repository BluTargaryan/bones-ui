import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/app/lib/utils"

const buttonVariants = cva(
  // Base styles — every button gets these
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md text-sm font-medium",
    "border border-[1.5px]",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none",
  ],
  {
    variants: {
      variant: {
        // Solid fill — the primary action
        primary: [
          "bg-neutral-900 text-white border-neutral-900",
          "hover:bg-neutral-700 hover:border-neutral-700",
        ],
        // White bg, dark border — secondary action
        secondary: [
          "bg-white text-neutral-900 border-neutral-300",
          "hover:bg-neutral-50 hover:border-neutral-400",
        ],
        // Alias for secondary — explicit outline intent
        outline: [
          "bg-transparent text-neutral-900 border-neutral-300",
          "hover:bg-neutral-50 hover:border-neutral-400",
        ],
        // No border, no bg — subtle action
        ghost: [
          "bg-transparent text-neutral-700 border-transparent",
          "hover:bg-neutral-100 hover:border-transparent",
        ],
        // Destructive actions
        destructive: [
          "bg-red-600 text-white border-red-600",
          "hover:bg-red-700 hover:border-red-700",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9 p-0",
      },
      // Error state shifts colors without changing variant structure
      isError: {
        true: "",
      },
    },
    // Compound variants: error state per variant
    compoundVariants: [
      {
        variant: "primary",
        isError: true,
        class: "bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700",
      },
      {
        variant: "secondary",
        isError: true,
        class: "border-red-500 text-red-600 hover:border-red-600 hover:bg-red-50",
      },
      {
        variant: "outline",
        isError: true,
        class: "border-red-500 text-red-600 hover:border-red-600 hover:bg-red-50",
      },
      {
        variant: "ghost",
        isError: true,
        class: "text-red-600 hover:bg-red-50",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (Radix Slot pattern) */
  asChild?: boolean
  /** Shows a spinner and disables interaction */
  loading?: boolean
  /** Shifts to error color treatment */
  isError?: boolean
  /** Icon to render before the label */
  leftIcon?: React.ReactNode
  /** Icon to render after the label */
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      isError = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size, isError, className }))}
        {...props}
      >
        {/* Loading spinner replaces leftIcon when loading */}
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        {children}

        {rightIcon && !loading && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }