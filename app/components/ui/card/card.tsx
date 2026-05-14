import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

// ─── Root variants ────────────────────────────────────────────────────────────

const cardVariants = cva(
  [
    "flex flex-col rounded-lg",
    "text-neutral-900",
    // Transition covers interactive hover
    "transition-all duration-150",
  ],
  {
    variants: {
      variant: {
        default:  "border-[1.5px] border-neutral-200 bg-white",
        ghost:    "border-[1.5px] border-transparent bg-transparent",
        elevated: "border-[1.5px] border-transparent bg-white shadow-md",
      },
      interactive: {
        true: [
          "cursor-pointer",
          "hover:border-neutral-300 hover:shadow-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
          "active:scale-[0.995]",
        ],
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "elevated",
        interactive: true,
        class: "hover:shadow-lg hover:border-transparent",
      },
      {
        variant: "ghost",
        interactive: true,
        class: "hover:bg-neutral-50 hover:border-neutral-200",
      },
    ],
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Makes the entire card a focusable, clickable surface */
  interactive?: boolean
  /** Renders a skeleton overlay — compose with SkeletonCard for full effect */
  loading?: boolean
  /** Disables interactive state without changing visual opacity */
  disabled?: boolean
}

// ─── Root ─────────────────────────────────────────────────────────────────────

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      interactive = false,
      loading = false,
      disabled = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role={interactive ? "button" : undefined}
      tabIndex={interactive && !disabled ? 0 : undefined}
      aria-disabled={disabled || undefined}
      aria-busy={loading || undefined}
      onClick={interactive && !disabled && !loading ? onClick : undefined}
      onKeyDown={
        interactive && !disabled && !loading
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
              }
            }
          : undefined
      }
      className={cn(
        cardVariants({ variant, interactive: interactive && !disabled && !loading }),
        disabled && "cursor-not-allowed opacity-50",
        loading && "cursor-wait",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Card.displayName = "Card"

// ─── Header ───────────────────────────────────────────────────────────────────

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Renders a bottom border separating header from body */
  divided?: boolean
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, divided = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-1.5 px-5 pt-5 pb-4",
        divided && "border-b border-neutral-200",
        className
      )}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

// ─── Title ────────────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-base font-semibold leading-snug text-neutral-900",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// ─── Description ─────────────────────────────────────────────────────────────

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-500 leading-snug", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// ─── Body ─────────────────────────────────────────────────────────────────────

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 px-5 pb-4 pt-0 first:pt-5 last:pb-5", className)}
    {...props}
  />
))
CardBody.displayName = "CardBody"

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Renders a top border separating footer from body */
  divided?: boolean
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, divided = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center px-5 pb-5 pt-0 first:pt-5",
        divided && "border-t border-neutral-200 pt-4",
        className
      )}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

// ─── Image ────────────────────────────────────────────────────────────────────
// Bleeds to card edges — no padding, handles top-radius clipping

export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  height?: string
  position?: "top" | "bottom"
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  (
    {
      className,
      src,
      alt,
      height = "h-48",
      position = "top",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden",
        position === "top"    && "rounded-t-[calc(0.5rem-1.5px)]",
        position === "bottom" && "rounded-b-[calc(0.5rem-1.5px)]",
        height,
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  )
)
CardImage.displayName = "CardImage"

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardImage,
}