import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Shared content/item styles ───────────────────────────────────────────────

const contentStyles = cn(
  "z-50 min-w-[10rem] overflow-hidden",
  "rounded-md border-[1.5px] border-neutral-200 bg-white p-1 shadow-md",
  "data-[state=open]:animate-in   data-[state=open]:fade-in-0   data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=top]:slide-in-from-bottom-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "duration-150",
)

const itemStyles = cn(
  "relative flex cursor-pointer select-none items-center gap-2",
  "rounded-sm px-2 py-1.5 text-sm text-neutral-700 outline-none",
  "transition-colors duration-100",
  "focus:bg-neutral-100 focus:text-neutral-900",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
)

// ─── Root ─────────────────────────────────────────────────────────────────────

const DropdownMenu       = DropdownMenuPrimitive.Root
const DropdownMenuGroup  = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub    = DropdownMenuPrimitive.Sub

// ─── Trigger ──────────────────────────────────────────────────────────────────

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, ...props }, ref: React.Ref<HTMLButtonElement>) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={cn("outline-none", className)}
    {...props}
  />
))
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

// ─── Content ──────────────────────────────────────────────────────────────────

const DropdownMenuContent = React.forwardRef
  <React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(contentStyles, className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = "DropdownMenuContent"

// ─── Item ─────────────────────────────────────────────────────────────────────

interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  /** Left-side icon */
  icon?: React.ReactNode
  /** Keyboard shortcut label displayed on the right */
  shortcut?: string
  /** Shifts text and icon to red */
  destructive?: boolean
}

const DropdownMenuItem = React.forwardRef
  <React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, icon, shortcut, destructive = false, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      itemStyles,
      destructive && [
        "text-red-600",
        "focus:bg-red-50 focus:text-red-700",
      ],
      className
    )}
    {...props}
  >
    {/* Icon slot */}
    {icon && (
      <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4" aria-hidden="true">
        {icon}
      </span>
    )}

    {/* Label — grows to push shortcut right */}
    <span className="flex-1">{children}</span>

    {/* Keyboard shortcut */}
    {shortcut && (
      <span className="ml-auto text-xs tracking-widest text-neutral-400">
        {shortcut}
      </span>
    )}
  </DropdownMenuPrimitive.Item>
))
DropdownMenuItem.displayName = "DropdownMenuItem"

// ─── Checkbox item ────────────────────────────────────────────────────────────

const DropdownMenuCheckboxItem = React.forwardRef
  <React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(itemStyles, "pl-8", className)}
    checked={checked}
    {...props}
  >
    {/* Check indicator — occupies the left slot */}
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-3.5 w-3.5" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

// ─── Radio group + item ───────────────────────────────────────────────────────

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(itemStyles, "pl-8", className)}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

// ─── Label ────────────────────────────────────────────────────────────────────

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-xs font-medium text-neutral-400",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

// ─── Separator ────────────────────────────────────────────────────────────────

const DropdownMenuSeparator = React.forwardRef
  <React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-neutral-100", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

// ─── Submenu trigger ──────────────────────────────────────────────────────────

const DropdownMenuSubTrigger = React.forwardRef
  <React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    icon?: React.ReactNode
  }
>(({ className, icon, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      itemStyles,
      // Keep open state highlighted
      "data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-900",
      className
    )}
    {...props}
  >
    {icon && (
      <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4" aria-hidden="true">
        {icon}
      </span>
    )}
    <span className="flex-1">{children}</span>
    <ChevronRight className="ml-auto h-4 w-4 text-neutral-400" aria-hidden="true" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

// ─── Submenu content ──────────────────────────────────────────────────────────

const DropdownMenuSubContent = React.forwardRef
  <React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(contentStyles, className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}