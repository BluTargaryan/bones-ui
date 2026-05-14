import * as React from "react"
import { Check, Minus } from "lucide-react"
import { cn } from "@/app/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, indeterminate, ...props }, ref) => {
    const innerRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => innerRef.current!)

    React.useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate ?? false
      }
    }, [indeterminate])

    return (
      <div className="relative flex h-4 w-4 cursor-pointer items-center justify-center">
        {/*
          opacity-0 (not sr-only) keeps the input physically over the visual box
          so clicks land on it. sr-only moves the element off-screen, making it
          un-clickable.
        */}
        <input
          type="checkbox"
          ref={innerRef}
          className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
          {...props}
        />
        {/*
          Icon visibility is driven from this div (a direct peer sibling of the
          input) via [&>svg]. Using peer-checked directly on the <svg> would not
          work because Tailwind's peer combinator (~) only matches siblings, not
          descendants of siblings.
        */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none flex h-4 w-4 shrink-0 items-center justify-center",
            "rounded-sm border-[1.5px] border-neutral-300 bg-white",
            "transition-colors duration-100",
            "peer-checked:border-neutral-900 peer-checked:bg-neutral-900",
            "peer-checked:[&>svg]:opacity-100",
            "peer-indeterminate:border-neutral-900 peer-indeterminate:bg-neutral-900",
            "peer-indeterminate:[&>svg]:opacity-100",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-900 peer-focus-visible:ring-offset-2",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
            className
          )}
        >
          {indeterminate
            ? <Minus className="h-2.5 w-2.5 text-white" />
            : <Check className="h-2.5 w-2.5 text-white opacity-0 transition-opacity duration-100" />
          }
        </div>
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
