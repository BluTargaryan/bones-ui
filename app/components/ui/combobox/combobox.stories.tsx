import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Badge } from "@/app/components/ui/badge/badge"
import { Combobox } from "./combobox"

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    size:     { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    loading:  { control: "boolean" },
    multiple: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

// ─── Shared data ──────────────────────────────────────────────────────────────

const FRAMEWORKS = [
  { value: "next",    label: "Next.js" },
  { value: "remix",   label: "Remix" },
  { value: "astro",   label: "Astro" },
  { value: "nuxt",    label: "Nuxt" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "gatsby",  label: "Gatsby" },
]

const TIMEZONES = [
  {
    label: "Americas",
    options: [
      { value: "est", label: "Eastern Time (EST)" },
      { value: "cst", label: "Central Time (CST)" },
      { value: "mst", label: "Mountain Time (MST)" },
      { value: "pst", label: "Pacific Time (PST)" },
    ],
  },
  {
    label: "Europe",
    options: [
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
      { value: "eet", label: "Eastern European Time (EET)" },
    ],
  },
  {
    label: "Asia & Pacific",
    options: [
      { value: "ist", label: "India Standard Time (IST)" },
      { value: "cst_asia", label: "China Standard Time (CST)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
      { value: "aest", label: "Australian Eastern (AEST)" },
    ],
  },
]

const TAGS = [
  { value: "react",      label: "React",      adornment: <Badge variant="info"    size="sm">Frontend</Badge> },
  { value: "node",       label: "Node.js",    adornment: <Badge variant="success" size="sm">Backend</Badge>  },
  { value: "postgres",   label: "PostgreSQL", adornment: <Badge variant="secondary" size="sm">DB</Badge>     },
  { value: "redis",      label: "Redis",      adornment: <Badge variant="secondary" size="sm">Cache</Badge>  },
  { value: "docker",     label: "Docker",     adornment: <Badge variant="warning" size="sm">Infra</Badge>    },
  { value: "kubernetes", label: "Kubernetes", adornment: <Badge variant="warning" size="sm">Infra</Badge>    },
]

// ─── Single select ────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    placeholder: "Select a framework…",
    helperText: "The framework your project is built with.",
  },
}

// ─── Controlled single ────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="flex flex-col gap-3 w-72">
        <Combobox
          label="Framework"
          options={FRAMEWORKS}
          value={value}
          onValueChange={setValue}
          placeholder="Select a framework…"
        />
        <p className="text-xs text-neutral-500">
          Selected: <strong>{value || "none"}</strong>
        </p>
      </div>
    )
  },
}

// ─── Multi-select ─────────────────────────────────────────────────────────────

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])
    return (
      <div className="flex flex-col gap-3 w-80">
        <Combobox
          multiple
          label="Tech stack"
          options={FRAMEWORKS}
          value={values}
          onValueChange={setValues}
          placeholder="Pick frameworks…"
          helperText="Select all that apply."
        />
        <p className="text-xs text-neutral-500">
          Selected: <strong>{values.join(", ") || "none"}</strong>
        </p>
      </div>
    )
  },
}

// ─── Grouped ──────────────────────────────────────────────────────────────────

export const Grouped: Story = {
  args: {
    label: "Timezone",
    groups: TIMEZONES,
    placeholder: "Select a timezone…",
    helperText: "Grouped by region.",
  },
}

// ─── With adornments ──────────────────────────────────────────────────────────

export const WithAdornments: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])
    return (
      <div className="w-80">
        <Combobox
          multiple
          label="Technologies"
          options={TAGS}
          value={values}
          onValueChange={setValues}
          placeholder="Add technologies…"
        />
      </div>
    )
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const WithError: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    errorMessage: "Please select a framework to continue.",
  },
}

export const Disabled: Story = {
  args: {
    label: "Framework",
    options: FRAMEWORKS,
    defaultValue: "next",
    disabled: true,
    helperText: "Framework is locked after project creation.",
  },
}

export const Loading: Story = {
  args: {
    label: "Country",
    options: [],
    loading: true,
    placeholder: "Loading…",
  },
}

// ─── Empty state ──────────────────────────────────────────────────────────────

export const EmptyState: Story = {
  args: {
    label: "Framework",
    options: [],
    emptyMessage: "No frameworks found.",
    placeholder: "Select a framework…",
  },
}

// ─── Disabled options ─────────────────────────────────────────────────────────

export const DisabledOptions: Story = {
  args: {
    label: "Plan",
    placeholder: "Select a plan…",
    helperText: "Enterprise plan requires contacting sales.",
    options: [
      { value: "free",       label: "Free" },
      { value: "pro",        label: "Pro" },
      { value: "enterprise", label: "Enterprise", disabled: true },
    ],
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Combobox size="sm" options={FRAMEWORKS} label="Small"  placeholder="Pick…" />
      <Combobox size="md" options={FRAMEWORKS} label="Medium" placeholder="Pick…" />
      <Combobox size="lg" options={FRAMEWORKS} label="Large"  placeholder="Pick…" />
    </div>
  ),
}