import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Check, ChevronDown, Loader2, AlertCircle, Search, X } from "lucide-react"
import { cn } from "@/app/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
  /** Rendered after the label — badge, hint, etc. */
  adornment?: React.ReactNode
}

export interface ComboboxGroup {
  label?: string
  options: ComboboxOption[]
}

interface ComboboxBaseProps {
  options?: ComboboxOption[]
  groups?: ComboboxGroup[]
  placeholder?: string
  searchPlaceholder?: string
  label?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  loading?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
  containerClassName?: string
  id?: string
  /** Message shown when no options match the search query */
  emptyMessage?: string
}

export interface ComboboxSingleProps extends ComboboxBaseProps {
  multiple?: false
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export interface ComboboxMultipleProps extends ComboboxBaseProps {
  multiple: true
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

export type ComboboxProps = ComboboxSingleProps | ComboboxMultipleProps

// ─── Trigger height matches Input/Select ──────────────────────────────────────

const sizeMap = { sm: "h-8 text-xs", md: "h-9 text-sm", lg: "h-11 text-base" }

// ─── Component ────────────────────────────────────────────────────────────────

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      groups,
      placeholder = "Select…",
      searchPlaceholder = "Search…",
      label,
      helperText,
      errorMessage,
      disabled,
      loading = false,
      size = "md",
      className,
      containerClassName,
      id,
      emptyMessage = "No results found.",
      multiple = false,
      ...props
    },
    ref
  ) => {
    const inputId  = id ?? React.useId()
    const helperId = `${inputId}-helper`
    const errorId  = `${inputId}-error`

    const isDisabled = disabled || loading
    const hasError   = Boolean(errorMessage)

    // ── Selection state ───────────────────────────────────────────────────────

    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const searchRef  = React.useRef<HTMLInputElement>(null)
    const listRef    = React.useRef<HTMLUListElement>(null)
    const [focusedIndex, setFocusedIndex] = React.useState(-1)

    // Normalise value to always work with arrays internally
    const [selected, setSelected] = React.useState<string[]>(() => {
      if (multiple) {
        const v = (props as ComboboxMultipleProps)
        return v.defaultValue ?? v.value ?? []
      } else {
        const v = (props as ComboboxSingleProps)
        const val = v.defaultValue ?? v.value
        return val ? [val] : []
      }
    })

    // Sync controlled value
    React.useEffect(() => {
      if (multiple) {
        const v = (props as ComboboxMultipleProps).value
        if (v !== undefined) setSelected(v)
      } else {
        const v = (props as ComboboxSingleProps).value
        if (v !== undefined) setSelected(v ? [v] : [])
      }
    }, [
      multiple
        ? (props as ComboboxMultipleProps).value
        : (props as ComboboxSingleProps).value,
    ])

    // ── Options normalisation ─────────────────────────────────────────────────

    const resolvedGroups: ComboboxGroup[] = groups
      ? groups
      : options
      ? [{ options }]
      : []

    const allOptions = resolvedGroups.flatMap((g) => g.options)

    // ── Filtering ─────────────────────────────────────────────────────────────

    const filtered: ComboboxGroup[] = resolvedGroups
      .map((g) => ({
        ...g,
        options: g.options.filter((o) =>
          o.label.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((g) => g.options.length > 0)

    const flatFiltered = filtered.flatMap((g) => g.options)

    // ── Selection helpers ─────────────────────────────────────────────────────

    const isSelected = (value: string) => selected.includes(value)

    const toggle = (value: string) => {
      let next: string[]
      if (multiple) {
        next = isSelected(value)
          ? selected.filter((v) => v !== value)
          : [...selected, value]
      } else {
        next = isSelected(value) ? [] : [value]
      }
      setSelected(next)
      if (multiple) {
        ;(props as ComboboxMultipleProps).onValueChange?.(next)
      } else {
        ;(props as ComboboxSingleProps).onValueChange?.(next[0] ?? "")
        setOpen(false)
      }
    }

    const clearAll = (e: React.MouseEvent) => {
      e.stopPropagation()
      setSelected([])
      if (multiple) {
        ;(props as ComboboxMultipleProps).onValueChange?.([])
      } else {
        ;(props as ComboboxSingleProps).onValueChange?.("")
      }
    }

    // ── Keyboard navigation ───────────────────────────────────────────────────

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setFocusedIndex((i) => Math.min(i + 1, flatFiltered.length - 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setFocusedIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (focusedIndex >= 0 && flatFiltered[focusedIndex]) {
          const opt = flatFiltered[focusedIndex]
          if (!opt.disabled) toggle(opt.value)
        }
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }

    // Scroll focused item into view
    React.useEffect(() => {
      if (!listRef.current || focusedIndex < 0) return
      const items = listRef.current.querySelectorAll<HTMLLIElement>("[data-option]")
      items[focusedIndex]?.scrollIntoView({ block: "nearest" })
    }, [focusedIndex])

    // Reset focus index and query when closed
    React.useEffect(() => {
      if (!open) {
        setQuery("")
        setFocusedIndex(-1)
      } else {
        // Auto-focus search on open
        requestAnimationFrame(() => searchRef.current?.focus())
      }
    }, [open])

    // ── Trigger label ─────────────────────────────────────────────────────────

    const triggerLabel = () => {
      if (selected.length === 0) return null
      if (!multiple) {
        return allOptions.find((o) => o.value === selected[0])?.label
      }
      if (selected.length === 1) {
        return allOptions.find((o) => o.value === selected[0])?.label
      }
      return `${selected.length} selected`
    }

    const label_ = triggerLabel()

    // ── State for trigger border ──────────────────────────────────────────────

    const triggerState = isDisabled
      ? "border-neutral-200 bg-neutral-50 cursor-not-allowed opacity-40"
      : hasError
      ? "border-red-500 hover:border-red-500"
      : "border-neutral-300 hover:border-neutral-400"

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

        <PopoverPrimitive.Root open={open} onOpenChange={isDisabled ? undefined : setOpen}>
          {/* Trigger */}
          <PopoverPrimitive.Trigger asChild>
            <button
              ref={ref}
              id={inputId}
              type="button"
              disabled={isDisabled}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-invalid={hasError}
              aria-describedby={
                hasError ? errorId : helperText ? helperId : undefined
              }
              className={cn(
                "flex w-full items-center justify-between gap-2",
                "rounded-md border-[1.5px] bg-white px-3",
                "transition-colors duration-150",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900",
                sizeMap[size],
                triggerState,
                className
              )}
            >
              {/* Value display */}
              <span
                className={cn(
                  "flex-1 truncate text-left",
                  label_ ? "text-neutral-900" : "text-neutral-400"
                )}
              >
                {label_ ?? placeholder}
              </span>

              {/* Right icons */}
              <span className="flex shrink-0 items-center gap-1 text-neutral-400">
                {/* Clear button — only when something is selected */}
                {selected.length > 0 && !loading && (
                  <span
                    role="button"
                    aria-label="Clear selection"
                    tabIndex={0}
                    onClick={clearAll}
                    onKeyDown={(e) => e.key === "Enter" && clearAll(e as any)}
                    className={cn(
                      "rounded-sm p-0.5",
                      "hover:bg-neutral-200 hover:text-neutral-600",
                      "focus:outline-none focus:ring-1 focus:ring-neutral-400",
                    )}
                  >
                    <X className="h-3.5 w-3.5" />
                  </span>
                )}

                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : hasError ? (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                ) : (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-150",
                      open && "rotate-180"
                    )}
                  />
                )}
              </span>
            </button>
          </PopoverPrimitive.Trigger>

          {/* Content */}
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={6}
              style={{ width: "var(--radix-popover-trigger-width)" }}
              className={cn(
                "z-50 overflow-hidden",
                "rounded-md border-[1.5px] border-neutral-200 bg-white shadow-md",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                "data-[side=bottom]:slide-in-from-top-2",
                "data-[side=top]:slide-in-from-bottom-2",
                "duration-150",
              )}
            >
              {/* Search input */}
              <div className="flex items-center gap-2 border-b border-neutral-200 px-3 py-2">
                <Search className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setFocusedIndex(0)
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={searchPlaceholder}
                  aria-label="Search options"
                  aria-controls={`${inputId}-listbox`}
                  className={cn(
                    "flex-1 bg-transparent text-sm text-neutral-900",
                    "placeholder:text-neutral-400",
                    "focus:outline-none",
                  )}
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => { setQuery(""); setFocusedIndex(-1) }}
                    aria-label="Clear search"
                    className="text-neutral-400 hover:text-neutral-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Option list */}
              <ul
                ref={listRef}
                id={`${inputId}-listbox`}
                role="listbox"
                aria-multiselectable={multiple}
                className="max-h-64 overflow-y-auto p-1"
              >
                {filtered.length === 0 ? (
                  <li className="px-3 py-6 text-center text-sm text-neutral-400">
                    {emptyMessage}
                  </li>
                ) : (
                  filtered.map((group, gi) => (
                    <React.Fragment key={gi}>
                      {gi > 0 && (
                        <li
                          role="separator"
                          className="-mx-1 my-1 h-px bg-neutral-100"
                          aria-hidden
                        />
                      )}

                      {group.label && (
                        <li
                          role="presentation"
                          className="px-2 py-1.5 text-xs font-medium text-neutral-400"
                        >
                          {group.label}
                        </li>
                      )}

                      {group.options.map((option) => {
                        const flatIdx = flatFiltered.findIndex(
                          (o) => o.value === option.value
                        )
                        const isFocused = flatIdx === focusedIndex
                        const checked   = isSelected(option.value)

                        return (
                          <li
                            key={option.value}
                            data-option
                            role="option"
                            aria-selected={checked}
                            aria-disabled={option.disabled}
                            onClick={() => !option.disabled && toggle(option.value)}
                            onMouseEnter={() => setFocusedIndex(flatIdx)}
                            className={cn(
                              "relative flex cursor-pointer select-none items-center gap-2",
                              "rounded-sm px-2 py-1.5 text-sm outline-none",
                              "transition-colors duration-100",
                              isFocused && "bg-neutral-100 text-neutral-900",
                              !isFocused && "text-neutral-700",
                              option.disabled && "pointer-events-none opacity-40",
                            )}
                          >
                            {/* Checkbox well — always reserves space */}
                            <span
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center",
                                "rounded-sm border-[1.5px]",
                                "transition-colors duration-100",
                                checked
                                  ? "border-neutral-900 bg-neutral-900 text-white"
                                  : "border-neutral-300 bg-white",
                              )}
                              aria-hidden
                            >
                              {checked && <Check className="h-3 w-3" />}
                            </span>

                            <span className="flex-1 truncate">{option.label}</span>

                            {option.adornment && (
                              <span className="ml-auto shrink-0">
                                {option.adornment}
                              </span>
                            )}
                          </li>
                        )
                      })}
                    </React.Fragment>
                  ))
                )}
              </ul>

              {/* Multi-select footer */}
              {multiple && selected.length > 0 && (
                <div className="flex items-center justify-between border-t border-neutral-200 px-3 py-2">
                  <span className="text-xs text-neutral-500">
                    {selected.length} selected
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected([])
                      ;(props as ComboboxMultipleProps).onValueChange?.([])
                    }}
                    className="text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>

        {/* Helper / Error */}
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

Combobox.displayName = "Combobox"

export { Combobox }