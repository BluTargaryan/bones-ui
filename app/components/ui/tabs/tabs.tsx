import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export type TabsVariant = "underline" | "pills" | "boxed"

export interface TabItem {
  value: string
  label: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
  /** Optional badge/indicator rendered after the label */
  adornment?: React.ReactNode
}

export interface TabsProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "children"> {
  items: TabItem[]
  variant?: TabsVariant
  /** Stretches tabs to fill the full list width */
  fullWidth?: boolean
  /** Size of the tab triggers */
  size?: "sm" | "md" | "lg"
}

// ─── List variants ────────────────────────────────────────────────────────────

const listVariants = cva(
  "relative flex items-center",
  {
    variants: {
      variant: {
        underline: [
          "border-b border-neutral-200",
          "gap-0",
        ],
        pills: [
          "gap-1",
          "rounded-lg p-0",
        ],
        boxed: [
          "gap-1 rounded-lg border-[1.5px] border-neutral-200 bg-neutral-100 p-1",
        ],
      },
    },
    defaultVariants: { variant: "underline" },
  }
)

// ─── Trigger variants ─────────────────────────────────────────────────────────

const triggerVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 font-medium",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        underline: [
          // Sits on top of the list border-b
          "border-b-2 border-transparent -mb-px",
          "px-1 pb-2.5 pt-0 text-neutral-500",
          "hover:text-neutral-900",
          // Active state
          "data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900",
        ],
        pills: [
          "rounded-md px-3",
          "text-neutral-500",
          "hover:text-neutral-900 hover:bg-neutral-100",
          // Active state
          "data-[state=active]:bg-neutral-900 data-[state=active]:text-white",
        ],
        boxed: [
          "rounded-md px-3 flex-1",
          "text-neutral-500",
          "hover:text-neutral-700",
          // Active state — white card lifted from the gray tray
          "data-[state=active]:bg-white data-[state=active]:text-neutral-900",
          "data-[state=active]:border-[1.5px] data-[state=active]:border-neutral-200",
          "data-[state=active]:shadow-sm",
        ],
      },
      size: {
        sm: "h-8  text-xs",
        md: "h-9  text-sm",
        lg: "h-10 text-base",
      },
      fullWidth: {
        true:  "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant:   "underline",
      size:      "md",
      fullWidth: false,
    },
  }
)

// ─── Content variants ─────────────────────────────────────────────────────────

const contentVariants = cva(
  [
    "focus-visible:outline-none",
    // Radix mounts/unmounts content — animate in
    "data-[state=active]:animate-in data-[state=active]:fade-in-0",
    "duration-150",
  ],
  {
    variants: {
      variant: {
        underline: "pt-4",
        pills:     "pt-3",
        boxed:     "pt-3",
      },
    },
    defaultVariants: { variant: "underline" },
  }
)

// ─── Component ────────────────────────────────────────────────────────────────

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(
  (
    {
      items,
      variant = "underline",
      fullWidth = false,
      size = "md",
      className,
      ...props
    },
    ref
  ) => (
    <TabsPrimitive.Root
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      {/* Tab list */}
      <TabsPrimitive.List className={cn(listVariants({ variant }))}>
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={cn(
              triggerVariants({ variant, size, fullWidth }),
            )}
          >
            {item.label}

            {/* Adornment — badge, count, dot, etc. */}
            {item.adornment && (
              <span className="ml-0.5">{item.adornment}</span>
            )}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {/* Tab panels */}
      {items.map((item) => (
        <TabsPrimitive.Content
          key={item.value}
          value={item.value}
          className={contentVariants({ variant })}
        >
          {item.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
)

Tabs.displayName = "Tabs"

// ─── Primitives re-exported for composed usage ────────────────────────────────
// Advanced users can skip the `items` API and build custom tab layouts

const TabsRoot        = TabsPrimitive.Root
const TabsList        = TabsPrimitive.List
const TabsTrigger     = TabsPrimitive.Trigger
const TabsContent     = TabsPrimitive.Content

export {
  Tabs,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  triggerVariants as tabsTriggerVariants,
}