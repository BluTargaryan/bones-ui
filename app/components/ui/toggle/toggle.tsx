import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

// ─── Shared variants ──────────────────────────────────────────────────────────
// Both Toggle and ToggleGroup items share the same visual treatment

export const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md border-[1.5px] font-medium",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none",
  ],
  {
    variants: {
      variant: {
        // Default — border appears on hover, fills on press
        default: [
          "border-transparent bg-transparent text-neutral-600",
          "hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900",
          "data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white",
        ],
        // Outline — border always visible, fill on press
        outline: [
          "border-neutral-300 bg-white text-neutral-600",
          "hover:bg-neutral-50 hover:text-neutral-900",
          "data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white",
        ],
        // Ghost — no border ever, subtle bg on press
        ghost: [
          "border-transparent bg-transparent text-neutral-600",
          "hover:bg-neutral-100 hover:text-neutral-900",
          "data-[state=on]:bg-neutral-100 data-[state=on]:text-neutral-900",
        ],
      },
      size: {
        sm:   "h-8  px-2.5 text-xs [&>svg]:h-3.5 [&>svg]:w-3.5",
        md:   "h-9  px-3   text-sm [&>svg]:h-4   [&>svg]:w-4",
        lg:   "h-10 px-4   text-sm [&>svg]:h-4   [&>svg]:w-4",
        icon: "h-9  w-9    p-0     [&>svg]:h-4   [&>svg]:w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// ─── Toggle ───────────────────────────────────────────────────────────────────

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
))

Toggle.displayName = "Toggle"

// ─── ToggleGroup ──────────────────────────────────────────────────────────────
// Passes variant/size down via context so items don't repeat them

type ToggleGroupContextValue = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  variant: "default",
  size: "md",
})

// Single-select
export type ToggleGroupSingleProps =
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & { type: "single" }

// Multi-select
export type ToggleGroupMultipleProps =
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & { type: "multiple" }

export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant = "default", size = "md", children, ...props }, ref) => (
  <ToggleGroupContext.Provider value={{ variant, size }}>
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  </ToggleGroupContext.Provider>
))

ToggleGroup.displayName = "ToggleGroup"

// ─── ToggleGroupItem ──────────────────────────────────────────────────────────

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof toggleVariants> {}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant, size, children, ...props }, ref) => {
  const ctx = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          // Item-level props override group context
          variant: variant ?? ctx.variant,
          size: size ?? ctx.size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = "ToggleGroupItem"

export { Toggle, ToggleGroup, ToggleGroupItem }