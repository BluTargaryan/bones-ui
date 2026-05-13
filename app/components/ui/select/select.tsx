import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cva } from "class-variance-authority"
import { Check, ChevronDown, ChevronUp, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectGroup {
  label?: string
  options: SelectOption[]
}

export interface SelectProps {
  /** Options as a flat list or grouped */
  options?: SelectOption[]
  groups?: SelectGroup[]
  /** Controlled value */
  value?: string
  /** Uncontrolled default */
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  label?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  loading?: boolean
  size?: "sm" | "md" | "lg"
  /** Forwarded to the trigger for layout control */
  className?: string
  containerClassName?: string
  id?: string
  name?: string
  required?: boolean
}

// ─── Trigger styles — mirrors Input wrapper exactly ───────────────────────────

const triggerVariants = cva(
  [
    "flex w-full items-center justify-between gap-2",
    "rounded-md border-[1.5px] bg-white px-3",
    "text-sm text-neutral-900",
    "transition-colors duration-150",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900",
    "disabled:cursor-not-allowed disabled:opacity-40",
    "cursor-pointer",
  ],
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-11 text-base",
      },
      state: {
        default:  "border-neutral-300 hover:border-neutral-400",
        error:    "border-red-500 hover:border-red-500 focus:ring-red-500",
        disabled: "border-neutral-200 bg-neutral-50",
        loading:  "border-neutral-300 bg-neutral-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
)

// ─── Root component ───────────────────────────────────────────────────────────

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      groups,
      value,
      defaultValue,
      onValueChange,
      placeholder = "Select an option…",
      label,
      helperText,
      errorMessage,
      disabled,
      loading = false,
      size = "md",
      className,
      containerClassName,
      id,
      name,
      required,
    },
    ref
  ) => {
    const inputId  = id ?? React.useId()
    const helperId = `${inputId}-helper`
    const errorId  = `${inputId}-error`

    const isDisabled = disabled || loading
    const hasError   = Boolean(errorMessage)

    const state = isDisabled ? "disabled"
                : loading    ? "loading"
                : hasError   ? "error"
                : "default"

    // Normalize: flat options → single unnamed group
    const resolvedGroups: SelectGroup[] = groups
      ? groups
      : options
      ? [{ options }]
      : []

    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>

        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium leading-none",
              isDisabled ? "text-neutral-400" : "text-neutral-700"
            )}
          >
            {label}
          </label>
        )}

        <SelectPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={isDisabled}
          name={name}
          required={required}
        >
          {/* Trigger */}
          <SelectPrimitive.Trigger
            ref={ref}
            id={inputId}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={cn(triggerVariants({ size, state }), className)}
          >
            <SelectPrimitive.Value placeholder={
              <span className="text-neutral-400">{placeholder}</span>
            } />

            {/* Right-side icon — spinner > error > chevron */}
            <span className="shrink-0 text-neutral-400" aria-hidden="true">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : hasError ? (
                <AlertCircle className="h-4 w-4 text-red-500" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </span>
          </SelectPrimitive.Trigger>

          {/* Portal — renders above everything, outside DOM flow */}
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              sideOffset={6}
              className={cn(
                "relative z-50 min-w-(--radix-select-trigger-width)",
                "max-h-72 overflow-hidden",
                "rounded-md border-[1.5px] border-neutral-200 bg-white shadow-md",
                // Radix animates open/close via data attributes
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                "data-[side=bottom]:slide-in-from-top-2",
                "data-[side=top]:slide-in-from-bottom-2",
              )}
            >
              {/* Scroll up button */}
              <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1 text-neutral-400">
                <ChevronUp className="h-4 w-4" />
              </SelectPrimitive.ScrollUpButton>

              <SelectPrimitive.Viewport className="p-1">
                {resolvedGroups.map((group, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    {/* Separator between groups (not before the first) */}
                    {groupIndex > 0 && (
                      <SelectPrimitive.Separator className="-mx-1 my-1 h-px bg-neutral-100" />
                    )}

                    <SelectPrimitive.Group>
                      {/* Optional group label */}
                      {group.label && (
                        <SelectPrimitive.Label className="px-2 py-1.5 text-xs font-medium text-neutral-400">
                          {group.label}
                        </SelectPrimitive.Label>
                      )}

                      {group.options.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectPrimitive.Group>
                  </React.Fragment>
                ))}
              </SelectPrimitive.Viewport>

              {/* Scroll down button */}
              <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1 text-neutral-400">
                <ChevronDown className="h-4 w-4" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {/* Helper / Error text */}
        {hasError ? (
          <p id={errorId} role="alert" className="text-xs text-red-500">
            {errorMessage}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-neutral-500">
            {helperText}
          </p>
        ) : null}

      </div>
    )
  }
)

Select.displayName = "Select"

// ─── SelectItem — exported for advanced composed usage ────────────────────────

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center",
      "rounded-sm py-1.5 pl-8 pr-2 text-sm text-neutral-900",
      "outline-none",
      "focus:bg-neutral-100",
      "data-disabled:pointer-events-none data-disabled:opacity-40",
    )}
    {...props}
  >
    {/* Check mark — only visible on the selected item */}
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-3.5 w-3.5" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = "SelectItem"

export { Select, SelectItem }