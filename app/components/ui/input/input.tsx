import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Wrapper (the visible "box") ─────────────────────────────────────────────
// The wrapper gets the border/bg treatment; the <input> inside is borderless.
// This lets prefix/suffix slots sit inside the border naturally.

const inputWrapperVariants = cva(
  [
    "flex items-center gap-2",
    "w-full rounded-md border-[1.5px] bg-white px-3",
    "text-sm text-neutral-900",
    "transition-colors duration-150",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-neutral-900",
  ],
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-11 text-base",
      },
      state: {
        default: "border-neutral-300 hover:border-neutral-400",
        error:   "border-red-500 hover:border-red-500 focus-within:ring-red-500",
        disabled:"border-neutral-200 bg-neutral-50 cursor-not-allowed",
        loading: "border-neutral-300 bg-neutral-50",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface InputProps
extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix"> {
    
  /** Label rendered above the field */
  label?: string
  /** Helper text rendered below — replaced by errorMessage when present */
  helperText?: string
  /** Triggers error state and renders below the field */
  errorMessage?: string
  /** Shows a spinner inside the field and disables interaction */
  loading?: boolean
  /** Icon or text rendered before the input */
  prefix?: React.ReactNode
  /** Icon or text rendered after the input */
  suffix?: React.ReactNode
  /** Field size */
  size?: "sm" | "md" | "lg"
  /** Forwarded to the wrapper for layout control */
  containerClassName?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      loading = false,
      prefix,
      suffix,
      size = "md",
      disabled,
      id,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    // Generate a stable id if none provided (links label → input for a11y)
    const inputId = id ?? React.useId()
    const helperId = `${inputId}-helper`
    const errorId  = `${inputId}-error`

    const isDisabled = disabled || loading
    const hasError   = Boolean(errorMessage)

    const state = isDisabled
      ? "disabled"
      : loading
      ? "loading"
      : hasError
      ? "error"
      : "default"

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

        {/* Wrapper box */}
        <div className={inputWrapperVariants({ size, state })}>

          {/* Prefix slot */}
          {prefix && (
            <span
              className="shrink-0 text-neutral-400"
              aria-hidden="true"
            >
              {prefix}
            </span>
          )}

          {/* The actual <input> — unstyled, fills the box */}
          <input
            ref={ref}
            id={inputId}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "min-w-0 flex-1 bg-transparent",
              "placeholder:text-neutral-400",
              "focus:outline-none",
              "disabled:cursor-not-allowed disabled:text-neutral-400",
              className
            )}
            {...props}
          />

          {/* Suffix slot — spinner takes over when loading */}
          {loading ? (
            <Loader2
              className="h-4 w-4 shrink-0 animate-spin text-neutral-400"
              aria-hidden="true"
            />
          ) : hasError ? (
            <AlertCircle
              className="h-4 w-4 shrink-0 text-red-500"
              aria-hidden="true"
            />
          ) : suffix ? (
            <span
              className="shrink-0 text-neutral-400"
              aria-hidden="true"
            >
              {suffix}
            </span>
          ) : null}

        </div>

        {/* Helper / Error text */}
        {hasError ? (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-red-500"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={helperId}
            className="text-xs text-neutral-500"
          >
            {helperText}
          </p>
        ) : null}

      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }