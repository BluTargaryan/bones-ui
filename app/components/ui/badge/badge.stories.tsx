import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Wifi, ShieldCheck, Clock, Star } from "lucide-react"
import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "success", "warning", "destructive", "info"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    dot:        { control: "boolean" },
    dismissible:{ control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { children: "Badge", variant: "secondary" },
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm" variant="secondary">Small</Badge>
      <Badge size="md" variant="secondary">Medium</Badge>
      <Badge size="lg" variant="secondary">Large</Badge>
    </div>
  ),
}

// ─── Dot indicator ────────────────────────────────────────────────────────────

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success"     dot>Active</Badge>
      <Badge variant="warning"     dot>Degraded</Badge>
      <Badge variant="destructive" dot>Offline</Badge>
      <Badge variant="secondary"   dot>Idle</Badge>
      <Badge variant="info"        dot>Syncing</Badge>
    </div>
  ),
}

// ─── With icon ────────────────────────────────────────────────────────────────

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" icon={<Wifi />}>Connected</Badge>
      <Badge variant="info"    icon={<ShieldCheck />}>Verified</Badge>
      <Badge variant="warning" icon={<Clock />}>Pending</Badge>
      <Badge variant="default" icon={<Star />}>Featured</Badge>
    </div>
  ),
}

// ─── Dismissible ─────────────────────────────────────────────────────────────

export const Dismissible: Story = {
  render: () => {
    const INITIAL = ["React", "TypeScript", "Tailwind", "Radix UI", "CVA"]
    const [tags, setTags] = useState(INITIAL)

    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              dismissible
              onDismiss={() => setTags((prev) => prev.filter((t) => t !== tag))}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {tags.length === 0 && (
          <button
            className="text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-600 w-fit"
            onClick={() => setTags(INITIAL)}
          >
            Reset
          </button>
        )}
      </div>
    )
  },
}

// ─── Status indicators ────────────────────────────────────────────────────────
// Real-world usage pattern

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-3 rounded-md border-[1.5px] border-neutral-200 p-4 w-fit">
      {[
        { label: "API",      status: "Operational",   variant: "success"     as const },
        { label: "Auth",     status: "Degraded",      variant: "warning"     as const },
        { label: "Database", status: "Offline",       variant: "destructive" as const },
        { label: "CDN",      status: "Maintenance",   variant: "info"        as const },
      ].map(({ label, status, variant }) => (
        <div key={label} className="flex items-center justify-between gap-8">
          <span className="text-sm font-medium text-neutral-700">{label}</span>
          <Badge variant={variant} dot size="sm">{status}</Badge>
        </div>
      ))}
    </div>
  ),
}

// ─── In context — e.g. alongside a heading ────────────────────────────────────

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900">Billing</h3>
        <Badge variant="info" size="sm">Beta</Badge>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900">Analytics</h3>
        <Badge variant="default" size="sm">New</Badge>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900">Legacy API</h3>
        <Badge variant="warning" size="sm">Deprecated</Badge>
      </div>
    </div>
  ),
}