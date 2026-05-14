import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

// ─── Shimmer base ─────────────────────────────────────────────────────────────
// backgroundSize wider than any realistic element so the sweep
// takes the same duration regardless of element width.

const shimmerClass = [
  "animate-shimmer",
  "bg-[length:800px_100%]",
  "bg-[linear-gradient(90deg,#e5e7eb_0px,#f9fafb_40px,#e5e7eb_80px)]",
].join(" ")

// ─── Primitive ────────────────────────────────────────────────────────────────

const skeletonVariants = cva(
  [shimmerClass, "rounded-md"],
  {
    variants: {
      variant: {
        line:   "h-4 w-full",
        block:  "w-full",
        circle: "rounded-full",
        pill:   "rounded-full h-6",
      },
    },
    defaultVariants: { variant: "line" },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
)
Skeleton.displayName = "Skeleton"

// ─── SkeletonText ─────────────────────────────────────────────────────────────

export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
  shortenLast?: boolean
}

const lineWidths = ["w-full", "w-11/12", "w-10/12", "w-3/4", "w-5/6", "w-9/12"]

const SkeletonText = ({
  lines = 3,
  shortenLast = true,
  className,
  ...props
}: SkeletonTextProps) => (
  <div
    aria-hidden="true"
    className={cn("flex flex-col gap-2", className)}
    {...props}
  >
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant="line"
        className={cn(
          lineWidths[i % lineWidths.length],
          i === lines - 1 && shortenLast && "w-3/5"
        )}
      />
    ))}
  </div>
)
SkeletonText.displayName = "SkeletonText"

// ─── SkeletonAvatar ───────────────────────────────────────────────────────────

export interface SkeletonAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  lines?: number
}

const avatarSizeMap = {
  sm: "h-8  w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
}

const SkeletonAvatar = ({
  size = "md",
  lines = 2,
  className,
  ...props
}: SkeletonAvatarProps) => (
  <div
    aria-hidden="true"
    className={cn("flex items-center gap-3", className)}
    {...props}
  >
    <Skeleton
      variant="circle"
      className={cn("shrink-0", avatarSizeMap[size])}
    />
    <div className="flex flex-1 flex-col gap-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="line"
          className={i === 0 ? "w-1/3" : "w-2/3"}
        />
      ))}
    </div>
  </div>
)
SkeletonAvatar.displayName = "SkeletonAvatar"

// ─── SkeletonCard ─────────────────────────────────────────────────────────────

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: boolean
  imageHeight?: string
  lines?: number
}

const SkeletonCard = ({
  image = true,
  imageHeight = "h-40",
  lines = 3,
  className,
  ...props
}: SkeletonCardProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "flex flex-col overflow-hidden rounded-md border-[1.5px] border-neutral-200",
      className
    )}
    {...props}
  >
    {image && (
      <Skeleton
        variant="block"
        className={cn("w-full rounded-none", imageHeight)}
      />
    )}
    <div className="flex flex-col gap-3 p-4">
      <Skeleton variant="line" className="h-5 w-3/4" />
      <SkeletonText lines={lines} shortenLast />
    </div>
  </div>
)
SkeletonCard.displayName = "SkeletonCard"

// ─── SkeletonTable ────────────────────────────────────────────────────────────
// Div-based — purely decorative, aria-hidden, no semantic table needed.

export interface SkeletonTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
  rows?: number
  header?: boolean
}

// Column widths vary per position so rows don't look like a grid
const colWidth = (col: number) =>
  col === 0 ? "w-32" : col % 3 === 0 ? "w-12" : "w-20"

const headerWidth = (col: number) =>
  col === 0 ? "w-24" : col % 2 === 0 ? "w-16" : "w-20"

const SkeletonTable = ({
  columns = 4,
  rows = 5,
  header = true,
  className,
  ...props
}: SkeletonTableProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "overflow-hidden rounded-md border-[1.5px] border-neutral-200",
      className
    )}
    {...props}
  >
    {/* Header row */}
    {header && (
      <div className="flex border-b border-neutral-200 bg-neutral-50">
        {Array.from({ length: columns }).map((_, col) => (
          <div key={col} className="flex-1 px-4 py-3">
            <Skeleton className={cn("h-3.5", headerWidth(col))} />
          </div>
        ))}
      </div>
    )}

    {/* Data rows */}
    {Array.from({ length: rows }).map((_, row) => (
      <div
        key={row}
        className="flex border-b border-neutral-100 last:border-0"
      >
        {Array.from({ length: columns }).map((_, col) => (
          <div key={col} className="flex-1 px-4 py-3">
            <Skeleton className={cn("h-3.5", colWidth(col))} />
          </div>
        ))}
      </div>
    ))}
  </div>
)
SkeletonTable.displayName = "SkeletonTable"

// ─── SkeletonButton ───────────────────────────────────────────────────────────

export interface SkeletonButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  width?: string
}

const buttonSizeMap = {
  sm: "h-8  w-20",
  md: "h-9  w-24",
  lg: "h-11 w-28",
}

const SkeletonButton = ({
  size = "md",
  width,
  className,
  ...props
}: SkeletonButtonProps) => (
  <Skeleton
    className={cn(buttonSizeMap[size], width, className)}
    {...props}
  />
)
SkeletonButton.displayName = "SkeletonButton"

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable,
  SkeletonButton,
}