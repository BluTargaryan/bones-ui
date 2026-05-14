import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"
import { User } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export type AvatarStatus = "online" | "offline" | "away" | "busy"
export type AvatarShape  = "circle" | "square"
export type AvatarSize   = "xs" | "sm" | "md" | "lg" | "xl"

// ─── Size maps ────────────────────────────────────────────────────────────────

const containerSizeMap: Record<AvatarSize, string> = {
  xs: "h-6  w-6  text-[10px]",
  sm: "h-8  w-8  text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
}

const statusSizeMap: Record<AvatarSize, string> = {
  xs: "h-1.5 w-1.5 border",
  sm: "h-2   w-2   border",
  md: "h-2.5 w-2.5 border-[1.5px]",
  lg: "h-3   w-3   border-2",
  xl: "h-4   w-4   border-2",
}

const statusColorMap: Record<AvatarStatus, string> = {
  online:  "bg-emerald-500",
  offline: "bg-neutral-400",
  away:    "bg-amber-500",
  busy:    "bg-red-500",
}

const shapeMap: Record<AvatarShape, string> = {
  circle: "rounded-full",
  square: "rounded-md",
}

// ─── Initials helper ──────────────────────────────────────────────────────────
// "Jane Doe" → "JD" · "Jane" → "J" · "" → ""

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return ""
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

export interface AvatarProps {
  /** Image URL */
  src?: string
  /** Used for alt text and generating initials fallback */
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  status?: AvatarStatus
  className?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      name = "",
      size = "md",
      shape = "circle",
      status,
      className,
    },
    ref
  ) => {
    const initials = getInitials(name)
    const radiusClass = shapeMap[shape]

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex shrink-0", className)}
      >
        <AvatarPrimitive.Root
          className={cn(
            "inline-flex items-center justify-center overflow-hidden",
            "border-[1.5px] border-neutral-200 bg-neutral-100",
            "font-medium text-neutral-700 select-none",
            containerSizeMap[size],
            radiusClass,
          )}
        >
          {/* 1 — Image */}
          <AvatarPrimitive.Image
            src={src}
            alt={name || "Avatar"}
            className="h-full w-full object-cover"
          />

          {/* 2 — Initials fallback (shown while image loads or on error) */}
          <AvatarPrimitive.Fallback
            delayMs={src ? 400 : 0}
            className="flex h-full w-full items-center justify-center"
          >
            {initials || (
              // 3 — Generic icon fallback when no name provided
              <User
                className={cn(
                  "text-neutral-400",
                  size === "xs" ? "h-3 w-3"
                  : size === "sm" ? "h-4 w-4"
                  : size === "md" ? "h-5 w-5"
                  : size === "lg" ? "h-6 w-6"
                  : "h-8 w-8"
                )}
                aria-hidden="true"
              />
            )}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        {/* Status indicator */}
        {status && (
          <span
            aria-label={`Status: ${status}`}
            className={cn(
              "absolute bottom-0 right-0 rounded-full border-white",
              statusSizeMap[size],
              statusColorMap[status],
              // Square avatars: indicator sits at the corner, not on the curve
              shape === "square" && "translate-x-1/4 translate-y-1/4",
            )}
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

// ─── AvatarGroup ──────────────────────────────────────────────────────────────

export interface AvatarGroupProps {
  /** Avatar items to render */
  items: AvatarProps[]
  /** Max avatars shown before the overflow pill */
  max?: number
  size?: AvatarSize
  shape?: AvatarShape
  className?: string
}

// Negative margin pulls avatars together — scales with size
const groupSpacingMap: Record<AvatarSize, string> = {
  xs: "-ml-1.5",
  sm: "-ml-2",
  md: "-ml-2.5",
  lg: "-ml-3",
  xl: "-ml-4",
}

const AvatarGroup = ({
  items,
  max = 4,
  size = "md",
  shape = "circle",
  className,
}: AvatarGroupProps) => {
  const visible  = items.slice(0, max)
  const overflow = items.length - max

  return (
    <div
      className={cn("flex items-center", className)}
      role="group"
      aria-label={`${items.length} member${items.length !== 1 ? "s" : ""}`}
    >
      {visible.map((item, i) => (
        <Avatar
          key={i}
          {...item}
          size={size}
          shape={shape}
          className={cn(
            // Ring creates the separation between overlapping avatars
            "ring-2 ring-white",
            i > 0 && groupSpacingMap[size],
          )}
        />
      ))}

      {/* Overflow pill */}
      {overflow > 0 && (
        <div
          aria-label={`${overflow} more`}
          className={cn(
            "inline-flex items-center justify-center",
            "border-[1.5px] border-neutral-200 bg-neutral-100",
            "font-medium text-neutral-600 select-none",
            "ring-2 ring-white",
            containerSizeMap[size],
            shapeMap[shape],
            groupSpacingMap[size],
            // Overflow pill text is slightly smaller than initials
            size === "xs" ? "text-[9px]"
            : size === "sm" ? "text-[10px]"
            : "text-xs",
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}

AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup }