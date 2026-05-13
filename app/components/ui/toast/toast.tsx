"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import {
  X, CheckCircle2, AlertCircle,
  AlertTriangle, Info, Loader2,
} from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export type ToastVariant = "default" | "success" | "warning" | "destructive" | "info"

export interface ToastActionProps {
  label: string
  onClick: () => void
}

export interface ToastData {
  id: string
  variant?: ToastVariant
  title: string
  description?: string
  action?: ToastActionProps
  /** Auto-dismiss duration in ms. Set to Infinity to persist. */
  duration?: number
  loading?: boolean
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface ToastContextValue {
  toasts: ToastData[]
  toast: (data: Omit<ToastData, "id">) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

// ─── Variants ─────────────────────────────────────────────────────────────────

const toastVariants = cva(
  [
    "group pointer-events-auto relative flex w-full items-start gap-3",
    "overflow-hidden rounded-md border-[1.5px] bg-white p-4 shadow-lg",
    "transition-all duration-300",
    // Radix data attributes drive the enter/exit animation
    "data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=open]:fade-in-80",
    "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[state=closed]:fade-out-80",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out",
  ],
  {
    variants: {
      variant: {
        default:     "border-neutral-200",
        success:     "border-emerald-200",
        warning:     "border-amber-200",
        destructive: "border-red-200",
        info:        "border-blue-200",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

// Icon per variant
const variantIcon: Record<ToastVariant, React.ReactNode> = {
  default:     null,
  success:     <CheckCircle2  className="h-5 w-5 text-emerald-500" />,
  warning:     <AlertTriangle className="h-5 w-5 text-amber-500" />,
  destructive: <AlertCircle   className="h-5 w-5 text-red-500" />,
  info:        <Info          className="h-5 w-5 text-blue-500" />,
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface ToastProviderProps {
  children: React.ReactNode
  /** Where toasts appear. Default: bottom-right */
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
  /** Max toasts visible at once */
  maxVisible?: number
}

const positionStyles: Record<string, string> = {
  "top-left":      "top-4 left-4",
  "top-center":    "top-4 left-1/2 -translate-x-1/2",
  "top-right":     "top-4 right-4",
  "bottom-left":   "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right":  "bottom-4 right-4",
}

export const ToastProvider = ({
  children,
  position = "bottom-right",
  maxVisible = 5,
}: ToastProviderProps) => {
  const [toasts, setToasts] = React.useState<ToastData[]>([])

  const toast = React.useCallback(
    (data: Omit<ToastData, "id">): string => {
      const id = Math.random().toString(36).slice(2)
      setToasts((prev) => {
        const next = [{ ...data, id }, ...prev]
        // Trim to maxVisible — oldest drop off the bottom
        return next.slice(0, maxVisible)
      })
      return id
    },
    [maxVisible]
  )

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const dismissAll = React.useCallback(() => setToasts([]), [])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss, dismissAll }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}

        {/* Viewport — fixed overlay, renders the queue */}
        <ToastPrimitive.Viewport
          className={cn(
            "fixed z-100 flex max-h-screen w-[380px] flex-col gap-2",
            "focus:outline-none",
            positionStyles[position]
          )}
        />

        {/* Render each toast into the Radix Provider */}
        {toasts.map((t) => (
          <ToastItem key={t.id} data={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

// ─── Individual toast item ────────────────────────────────────────────────────

interface ToastItemProps {
  data: ToastData
  onDismiss: () => void
}

const ToastItem = ({ data, onDismiss }: ToastItemProps) => {
  const { id, variant = "default", title, description, action, duration = 5000, loading } = data

  const icon = loading
    ? <Loader2 className="h-5 w-5 animate-spin text-neutral-400" />
    : variantIcon[variant]

  return (
    <ToastPrimitive.Root
      duration={loading ? Infinity : duration}
      onOpenChange={(open: boolean) => { if (!open) onDismiss() }}
      className={cn(toastVariants({ variant }))}
    >
      {/* Icon */}
      {icon && (
        <span className="mt-0.5 shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <ToastPrimitive.Title className="text-sm font-semibold text-neutral-900 leading-snug">
          {title}
        </ToastPrimitive.Title>

        {description && (
          <ToastPrimitive.Description className="text-xs text-neutral-500 leading-snug">
            {description}
          </ToastPrimitive.Description>
        )}

        {/* Inline action */}
        {action && (
          <ToastPrimitive.Action
            altText={action.label}
            onClick={action.onClick}
            asChild
          >
            <button
              type="button"
              className={cn(
                "mt-1 w-fit text-xs font-medium underline underline-offset-2",
                "text-neutral-700 hover:text-neutral-900",
                "focus:outline-none focus:ring-1 focus:ring-neutral-400 rounded-sm",
              )}
            >
              {action.label}
            </button>
          </ToastPrimitive.Action>
        )}
      </div>

      {/* Close button */}
      <ToastPrimitive.Close
        aria-label="Dismiss notification"
        className={cn(
          "ml-auto mt-0.5 shrink-0 rounded-sm p-0.5",
          "text-neutral-400 opacity-0 transition-opacity",
          "hover:text-neutral-600",
          "focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-neutral-400",
          "group-hover:opacity-100",
        )}
      >
        <X className="h-4 w-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useToast = (): ToastContextValue => {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>")
  return ctx
}