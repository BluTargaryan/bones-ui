"use client"

import * as React from "react"
import {
  ChevronUp, ChevronDown, ChevronsUpDown,
  ChevronLeft, ChevronRight,
  ChevronsLeft, ChevronsRight,
  Search, SlidersHorizontal, X,
  Inbox,
} from "lucide-react"
import { cn } from "@/app/lib/utils"
import { Button }       from "@/app/components/ui/button"
import { Input }        from "@/app/components/ui/input"
import { Badge }        from "@/app/components/ui/badge"
import { SkeletonTable } from "@/app/components/ui/skeleton"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown"
import { Checkbox } from "@/app/components/ui/checkbox"

// ─── Types ────────────────────────────────────────────────────────────────────

export type SortDirection = "asc" | "desc" | null

export interface ColumnDef<TData> {
  /** Unique key — must match a key in TData or be a custom id */
  key: string
  header: string
  /** Custom cell renderer. Receives the full row. */
  cell?: (row: TData) => React.ReactNode
  /** Enables sort on this column */
  sortable?: boolean
  /** Tailwind width class e.g. "w-48" */
  width?: string
  /** Align cell content */
  align?: "left" | "center" | "right"
}

export interface PaginationConfig {
  pageSize?: number
  pageSizeOptions?: number[]
}

export interface DataTableProps<TData extends Record<string, unknown>> {
  columns: ColumnDef<TData>[]
  data: TData[]
  /** Row key accessor — defaults to "id" */
  rowKey?: keyof TData
  loading?: boolean
  /** Enables the row selection checkboxes */
  selectable?: boolean
  onSelectionChange?: (selectedKeys: string[]) => void
  /** Makes rows clickable */
  onRowClick?: (row: TData) => void
  /** Row-level action menu items */
  rowActions?: (row: TData) => React.ReactNode
  /** Show the search + column visibility toolbar */
  toolbar?: boolean
  pagination?: PaginationConfig
  /** Message shown when data is empty */
  emptyMessage?: string
  emptyDescription?: string
  className?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const alignClass = {
  left:   "text-left",
  center: "text-center",
  right:  "text-right",
}

const getValue = <TData extends Record<string, unknown>>(
  row: TData,
  key: string
): unknown => key.split(".").reduce<unknown>((acc, k) => {
  if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[k]
  return undefined
}, row)

// ─── Component ────────────────────────────────────────────────────────────────

function DataTable<TData extends Record<string, unknown>>({
  columns,
  data,
  rowKey = "id" as keyof TData,
  loading = false,
  selectable = false,
  onSelectionChange,
  onRowClick,
  rowActions,
  toolbar = true,
  pagination: paginationConfig,
  emptyMessage = "No data",
  emptyDescription = "There's nothing here yet.",
  className,
}: DataTableProps<TData>) {

  // ── State ─────────────────────────────────────────────────────────────────

  const [search,     setSearch]     = React.useState("")
  const [sortKey,    setSortKey]    = React.useState<string | null>(null)
  const [sortDir,    setSortDir]    = React.useState<SortDirection>(null)
  const [selected,   setSelected]   = React.useState<Set<string>>(new Set())
  const [page,       setPage]       = React.useState(1)
  const [pageSize,   setPageSize]   = React.useState(
    paginationConfig?.pageSize ?? 10
  )
  const [hiddenCols, setHiddenCols] = React.useState<Set<string>>(new Set())

  const pageSizeOptions = paginationConfig?.pageSizeOptions ?? [10, 20, 50]
  const hasPagination   = Boolean(paginationConfig)

  // ── Visible columns ───────────────────────────────────────────────────────

  const visibleColumns = React.useMemo(
    () => columns.filter((c) => !hiddenCols.has(c.key)),
    [columns, hiddenCols]
  )

  // ── Filter ────────────────────────────────────────────────────────────────

  const filtered = React.useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter((row) =>
      columns.some((col) => {
        const val = getValue(row, col.key)
        return String(val ?? "").toLowerCase().includes(q)
      })
    )
  }, [data, search, columns])

  // ── Sort ──────────────────────────────────────────────────────────────────

  const sorted = React.useMemo(() => {
    if (!sortKey || !sortDir) return filtered
    return [...filtered].sort((a, b) => {
      const av = getValue(a, sortKey)
      const bv = getValue(b, sortKey)
      const as = String(av ?? "").toLowerCase()
      const bs = String(bv ?? "").toLowerCase()
      const n  = !isNaN(Number(av)) && !isNaN(Number(bv))
      const cmp = n
        ? Number(av) - Number(bv)
        : as < bs ? -1 : as > bs ? 1 : 0
      return sortDir === "asc" ? cmp : -cmp
    })
  }, [filtered, sortKey, sortDir])

  // ── Pagination ────────────────────────────────────────────────────────────

  const totalPages  = Math.max(1, Math.ceil(sorted.length / pageSize))
  const currentPage = Math.min(page, totalPages)

  const paginated = React.useMemo(() => {
    if (!hasPagination) return sorted
    const start = (currentPage - 1) * pageSize
    return sorted.slice(start, start + pageSize)
  }, [sorted, currentPage, pageSize, hasPagination])

  // Reset to page 1 on search/sort
  React.useEffect(() => { setPage(1) }, [search, sortKey, sortDir, pageSize])

  // ── Sort handler ──────────────────────────────────────────────────────────

  const handleSort = (key: string) => {
    if (sortKey !== key) {
      setSortKey(key)
      setSortDir("asc")
    } else if (sortDir === "asc") {
      setSortDir("desc")
    } else {
      setSortKey(null)
      setSortDir(null)
    }
  }

  // ── Selection ─────────────────────────────────────────────────────────────

  const rowKeyStr  = (row: TData) => String(row[rowKey] ?? "")
  const pageKeys   = paginated.map(rowKeyStr)
  const allChecked = pageKeys.length > 0 && pageKeys.every((k) => selected.has(k))
  const someChecked = pageKeys.some((k) => selected.has(k)) && !allChecked

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (allChecked) {
        pageKeys.forEach((k) => next.delete(k))
      } else {
        pageKeys.forEach((k) => next.add(k))
      }
      onSelectionChange?.([...next])
      return next
    })
  }

  const toggleRow = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      onSelectionChange?.([...next])
      return next
    })
  }

  // ── Column visibility ─────────────────────────────────────────────────────

  const toggleColumn = (key: string) => {
    setHiddenCols((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className={cn("flex flex-col gap-3", className)}>

      {/* ── Toolbar ─────────────────────────────────────────────────────── */}
      {toolbar && (
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-1 items-center gap-2">
            {/* Search */}
            <div className="relative w-64">
              <Input
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                prefix={<Search className="h-3.5 w-3.5" />}
                suffix={
                  search
                    ? (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="text-neutral-400 hover:text-neutral-600"
                        aria-label="Clear search"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )
                    : undefined
                }
                size="sm"
                containerClassName="w-full"
              />
            </div>

            {/* Selection count badge */}
            {selectable && selected.size > 0 && (
              <Badge variant="secondary" size="sm">
                {selected.size} selected
              </Badge>
            )}
          </div>

          {/* Column visibility */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<SlidersHorizontal className="h-3.5 w-3.5" />}
              >
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {columns.map((col) => (
                <DropdownMenuCheckboxItem
                  key={col.key}
                  checked={!hiddenCols.has(col.key)}
                  onCheckedChange={() => toggleColumn(col.key)}
                  // Always keep at least one column visible
                  disabled={
                    !hiddenCols.has(col.key) && visibleColumns.length === 1
                  }
                >
                  {col.header}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {/* ── Table ───────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-md border-[1.5px] border-neutral-200">
        {loading ? (
          <SkeletonTable
            columns={visibleColumns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0)}
            rows={pageSize}
            header
            className="rounded-none border-0"
          />
        ) : (
          <table className="w-full border-collapse text-sm">

            {/* Head */}
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                {/* Selection header */}
                {selectable && (
                  <th className="w-10 px-4 py-3">
                    <Checkbox
                      checked={allChecked}
                      indeterminate={someChecked}
                      onChange={toggleAll}
                      aria-label="Select all rows"
                    />
                  </th>
                )}

                {visibleColumns.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      "px-4 py-3 font-medium text-neutral-500",
                      col.width,
                      alignClass[col.align ?? "left"],
                      col.sortable && "cursor-pointer select-none hover:text-neutral-900 transition-colors",
                    )}
                    onClick={col.sortable ? () => handleSort(col.key) : undefined}
                    aria-sort={
                      sortKey === col.key
                        ? sortDir === "asc" ? "ascending" : "descending"
                        : col.sortable ? "none" : undefined
                    }
                  >
                    <div
                      className={cn(
                        "inline-flex items-center gap-1.5",
                        alignClass[col.align ?? "left"],
                        col.align === "right" && "flex-row-reverse",
                      )}
                    >
                      {col.header}
                      {col.sortable && (
                        <span className="shrink-0 text-neutral-300" aria-hidden>
                          {sortKey === col.key ? (
                            sortDir === "asc"
                              ? <ChevronUp   className="h-3.5 w-3.5 text-neutral-700" />
                              : <ChevronDown className="h-3.5 w-3.5 text-neutral-700" />
                          ) : (
                            <ChevronsUpDown className="h-3.5 w-3.5" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}

                {/* Actions header — empty, no label needed */}
                {rowActions && <th className="w-10 px-4 py-3" />}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={
                      visibleColumns.length +
                      (selectable ? 1 : 0) +
                      (rowActions ? 1 : 0)
                    }
                  >
                    <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
                      <Inbox className="h-8 w-8 text-neutral-300" aria-hidden />
                      <p className="text-sm font-medium text-neutral-700">
                        {emptyMessage}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {search
                          ? `No results for "${search}"`
                          : emptyDescription
                        }
                      </p>
                      {search && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSearch("")}
                        >
                          Clear search
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                paginated.map((row) => {
                  const key        = rowKeyStr(row)
                  const isSelected = selected.has(key)

                  return (
                    <tr
                      key={key}
                      onClick={onRowClick ? () => onRowClick(row) : undefined}
                      className={cn(
                        "border-b border-neutral-100 last:border-0",
                        "transition-colors duration-100",
                        onRowClick && "cursor-pointer hover:bg-neutral-50",
                        isSelected && "bg-neutral-50",
                      )}
                    >
                      {/* Selection cell */}
                      {selectable && (
                        <td
                          className="w-10 px-4 py-3"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Checkbox
                            checked={isSelected}
                            onChange={() => toggleRow(key)}
                            aria-label={`Select row ${key}`}
                          />
                        </td>
                      )}

                      {/* Data cells */}
                      {visibleColumns.map((col) => (
                        <td
                          key={col.key}
                          className={cn(
                            "px-4 py-3 text-neutral-700",
                            col.width,
                            alignClass[col.align ?? "left"],
                          )}
                        >
                          {col.cell
                            ? col.cell(row)
                            : String(getValue(row, col.key) ?? "—")
                          }
                        </td>
                      ))}

                      {/* Actions cell */}
                      {rowActions && (
                        <td
                          className="w-10 px-4 py-3"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {rowActions(row)}
                        </td>
                      )}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Pagination ──────────────────────────────────────────────────── */}
      {hasPagination && !loading && sorted.length > 0 && (
        <div className="flex items-center justify-between gap-4">
          {/* Result count */}
          <p className="text-xs text-neutral-500 shrink-0">
            {selected.size > 0
              ? `${selected.size} of ${sorted.length} selected`
              : `${sorted.length} result${sorted.length !== 1 ? "s" : ""}`
            }
          </p>

          <div className="flex items-center gap-4">
            {/* Page size */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500 shrink-0">Rows</span>
              <div className="flex items-center gap-1">
                {pageSizeOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => setPageSize(n)}
                    className={cn(
                      "h-7 min-w-[1.75rem] rounded-md px-2 text-xs font-medium",
                      "border-[1.5px] transition-colors duration-100",
                      pageSize === n
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Page controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage(1)}
                disabled={currentPage === 1}
                aria-label="First page"
                className="h-7 w-7"
              >
                <ChevronsLeft className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="h-7 w-7"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>

              <span className="min-w-[5rem] text-center text-xs text-neutral-600">
                {currentPage} / {totalPages}
              </span>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="h-7 w-7"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage(totalPages)}
                disabled={currentPage === totalPages}
                aria-label="Last page"
                className="h-7 w-7"
              >
                <ChevronsRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

DataTable.displayName = "DataTable"

export { DataTable }