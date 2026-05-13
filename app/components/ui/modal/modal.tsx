import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Content size variants ────────────────────────────────────────────────────

const modalContentVariants = cva(
  [
    // Positioning — centered in viewport
    "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
    // Structure
    "flex flex-col",
    "w-full rounded-lg border-[1.5px] border-neutral-200 bg-white shadow-lg",
    // Radix open/close animations via data attributes
    "duration-200",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
    "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
    // Max height — body scrolls, header/footer stay fixed
    "max-h-[90vh]",
    // Focus ring on the dialog itself (for a11y)
    "focus:outline-none",
  ],
  {
    variants: {
      size: {
        sm:   "max-w-sm",
        md:   "max-w-lg",
        lg:   "max-w-2xl",
        xl:   "max-w-4xl",
        full: "max-w-[calc(100vw-2rem)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

// ─── Sub-component types ──────────────────────────────────────────────────────

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to render the ✕ close button */
  showClose?: boolean
}

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
interface ModalBodyProps   extends React.HTMLAttributes<HTMLDivElement> {}

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface ModalProps
  extends VariantProps<typeof modalContentVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /** Trigger element — if provided, renders a DialogTrigger wrapper */
  trigger?: React.ReactNode
  children: React.ReactNode
  /**
   * By default clicking outside or pressing Escape closes the modal.
   * Set to true to require explicit close (e.g. destructive confirmations).
   */
  modal?: boolean
}

const Modal = ({
  open,
  onOpenChange,
  trigger,
  size,
  children,
  modal = true,
}: ModalProps) => (
  <DialogPrimitive.Root
    open={open}
    onOpenChange={onOpenChange}
    modal={modal}
  >
    {trigger && (
      <DialogPrimitive.Trigger asChild>
        {trigger}
      </DialogPrimitive.Trigger>
    )}

    <DialogPrimitive.Portal>
      {/* Overlay */}
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "duration-200",
        )}
      />

      {/* Content */}
      <DialogPrimitive.Content
        className={modalContentVariants({ size })}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
)

Modal.displayName = "Modal"

// ─── Header ───────────────────────────────────────────────────────────────────

const ModalHeader = ({
  className,
  children,
  showClose = true,
  ...props
}: ModalHeaderProps) => (
  <div
    className={cn(
      "flex shrink-0 items-start justify-between",
      "border-b border-neutral-200 px-6 py-4",
      className
    )}
    {...props}
  >
    <div className="flex flex-col gap-1">
      {children}
    </div>

    {showClose && (
      <DialogPrimitive.Close
        className={cn(
          "ml-4 mt-0.5 shrink-0 rounded-md p-1",
          "text-neutral-400 hover:text-neutral-600",
          "border border-transparent hover:border-neutral-200",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2",
          "disabled:pointer-events-none",
        )}
        aria-label="Close dialog"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </DialogPrimitive.Close>
    )}
  </div>
)

ModalHeader.displayName = "ModalHeader"

// ─── Title + Description (thin wrappers for Radix a11y) ──────────────────────

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-base font-semibold text-neutral-900", className)}
    {...props}
  />
))

ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-500", className)}
    {...props}
  />
))

ModalDescription.displayName = "ModalDescription"

// ─── Body ─────────────────────────────────────────────────────────────────────
// Scrollable — header and footer stay pinned

const ModalBody = ({ className, ...props }: ModalBodyProps) => (
  <div
    className={cn("flex-1 overflow-y-auto px-6 py-4", className)}
    {...props}
  />
)

ModalBody.displayName = "ModalBody"

// ─── Footer ───────────────────────────────────────────────────────────────────

const ModalFooter = ({ className, ...props }: ModalFooterProps) => (
  <div
    className={cn(
      "flex shrink-0 items-center justify-end gap-3",
      "border-t border-neutral-200 px-6 py-4",
      className
    )}
    {...props}
  />
)

ModalFooter.displayName = "ModalFooter"

// ─── Close helper — use inside Footer for a cancel button ─────────────────────

const ModalClose = DialogPrimitive.Close

export {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
}