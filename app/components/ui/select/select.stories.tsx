import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "./select"

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size:     { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    loading:  { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Select>

const TIMEZONES = [
  { value: "utc",   label: "UTC" },
  { value: "est",   label: "Eastern Time (EST)" },
  { value: "cst",   label: "Central Time (CST)" },
  { value: "mst",   label: "Mountain Time (MST)" },
  { value: "pst",   label: "Pacific Time (PST)" },
]

const GROUPED_OPTIONS = [
  {
    label: "North America",
    options: [
      { value: "est", label: "Eastern Time (EST)" },
      { value: "cst", label: "Central Time (CST)" },
      { value: "pst", label: "Pacific Time (PST)" },
    ],
  },
  {
    label: "Europe",
    options: [
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
    ],
  },
  {
    label: "Asia",
    options: [
      { value: "ist",  label: "India Standard Time (IST)" },
      { value: "jst",  label: "Japan Standard Time (JST)" },
      { value: "sgt",  label: "Singapore Time (SGT)" },
    ],
  },
]

// ─── Core ─────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: "Timezone",
    options: TIMEZONES,
    placeholder: "Pick a timezone…",
    helperText: "This affects how times are displayed across the app.",
  },
}

export const WithDefaultValue: Story = {
  args: {
    label: "Timezone",
    options: TIMEZONES,
    defaultValue: "est",
    helperText: "Your current timezone.",
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const WithError: Story = {
  args: {
    label: "Timezone",
    options: TIMEZONES,
    errorMessage: "Please select a timezone to continue.",
  },
}

export const Disabled: Story = {
  args: {
    label: "Timezone",
    options: TIMEZONES,
    defaultValue: "est",
    disabled: true,
    helperText: "Timezone is locked to your account region.",
  },
}

export const Loading: Story = {
  args: {
    label: "Country",
    placeholder: "Loading countries…",
    loading: true,
  },
}

export const DisabledOption: Story = {
  args: {
    label: "Timezone",
    options: [
      { value: "utc", label: "UTC" },
      { value: "est", label: "Eastern Time (EST)" },
      { value: "pst", label: "Pacific Time (PST) — unavailable", disabled: true },
    ],
    helperText: "Some timezones are unavailable on your plan.",
  },
}

// ─── Groups ───────────────────────────────────────────────────────────────────

export const Grouped: Story = {
  args: {
    label: "Timezone",
    groups: GROUPED_OPTIONS,
    placeholder: "Pick a timezone…",
    helperText: "Grouped by region.",
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Select size="sm" options={TIMEZONES} label="Small"  placeholder="Pick…" />
      <Select size="md" options={TIMEZONES} label="Medium" placeholder="Pick…" />
      <Select size="lg" options={TIMEZONES} label="Large"  placeholder="Pick…" />
    </div>
  ),
}