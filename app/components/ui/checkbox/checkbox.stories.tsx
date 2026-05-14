import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Checkbox } from "./checkbox"

const meta: Meta = {
  title: "UI/Checkbox",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => <Checkbox aria-label="Accept terms" />,
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {([
        { label: "Unchecked",        checked: false, indeterminate: false, disabled: false },
        { label: "Checked",          checked: true,  indeterminate: false, disabled: false },
        { label: "Indeterminate",    checked: false, indeterminate: true,  disabled: false },
        { label: "Disabled",         checked: false, indeterminate: false, disabled: true  },
        { label: "Disabled checked", checked: true,  indeterminate: false, disabled: true  },
      ] as const).map(({ label, checked, indeterminate, disabled }) => (
        <label key={label} className="flex cursor-pointer items-center gap-2">
          <Checkbox
            defaultChecked={checked}
            indeterminate={indeterminate}
            disabled={disabled}
            aria-label={label}
          />
          <span className="text-sm text-neutral-700">{label}</span>
        </label>
      ))}
    </div>
  ),
}

// ─── Controlled — select all pattern ──────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const items = ["Design", "Development", "Testing", "Deployment"]
    const [checked, setChecked] = useState<string[]>(["Design"])

    const allChecked  = checked.length === items.length
    const someChecked = checked.length > 0 && !allChecked

    const toggleAll = () => setChecked(allChecked ? [] : [...items])
    const toggle    = (item: string) =>
      setChecked((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      )

    return (
      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-center gap-2 border-b border-neutral-100 pb-2">
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={toggleAll}
            aria-label="Select all"
          />
          <span className="text-sm font-medium text-neutral-900">Select all</span>
        </label>
        {items.map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-2 pl-1">
            <Checkbox
              checked={checked.includes(item)}
              onChange={() => toggle(item)}
              aria-label={item}
            />
            <span className="text-sm text-neutral-700">{item}</span>
          </label>
        ))}
        <p className="mt-1 text-xs text-neutral-400">
          Selected: <strong>{checked.join(", ") || "none"}</strong>
        </p>
      </div>
    )
  },
}
