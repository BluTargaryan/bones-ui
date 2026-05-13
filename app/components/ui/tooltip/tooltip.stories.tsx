import type { Meta, StoryObj } from "@storybook/react"
import { Settings, Trash2, Info, Copy } from "lucide-react"
import { Tooltip } from "./tooltip"
import { Button } from "@/app/components/ui/button"
// import { Badge }  from "@/components/ui/badge"  // coming soon — stub if needed

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    side:    { control: "select", options: ["top", "right", "bottom", "left"] },
    align:   { control: "select", options: ["start", "center", "end"] },
    variant: { control: "select", options: ["dark", "light", "danger"] },
    disabled:    { control: "boolean" },
    showArrow:   { control: "boolean" },
    delayDuration: { control: "number" },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center justify-center p-16">
      <Tooltip  {...args}>
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
    </div>
  ),
  args: { content: "This is a tooltip", side: "top", variant: "dark" },
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-16">
      <Tooltip content="Dark tooltip" variant="dark">
        <Button variant="secondary" size="sm">Dark</Button>
      </Tooltip>

      <Tooltip content="Light tooltip" variant="light">
        <Button variant="secondary" size="sm">Light</Button>
      </Tooltip>

      <Tooltip content="Destructive action" variant="danger">
        <Button variant="ghost" size="sm">Danger</Button>
      </Tooltip>
    </div>
  ),
}

// ─── Sides ────────────────────────────────────────────────────────────────────

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-16 w-fit mx-auto">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={`Side: ${side}`} side={side} showArrow>
          <Button variant="outline" size="sm" className="w-28">
            {side}
          </Button>
        </Tooltip>
      ))}
    </div>
  ),
}

// ─── With arrow ───────────────────────────────────────────────────────────────

export const WithArrow: Story = {
  render: () => (
    <div className="flex items-center justify-center p-16">
      <Tooltip
        content="Tooltip with directional arrow"
        showArrow
        side="bottom"
      >
        <Button variant="secondary">Show arrow</Button>
      </Tooltip>
    </div>
  ),
}

// ─── On a disabled button ─────────────────────────────────────────────────────
// This is the key pattern — wrapping disabled elements

export const OnDisabledButton: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 p-16">
      <Tooltip content="You need admin access to delete">
        <Button variant="destructive" disabled>
          Delete
        </Button>
      </Tooltip>

      <Tooltip content="Upgrade to Pro to export">
        <Button variant="secondary" disabled leftIcon={<Copy className="h-4 w-4"/>}>
          Export
        </Button>
      </Tooltip>
    </div>
  ),
}

// ─── On icon button ───────────────────────────────────────────────────────────

export const OnIconButton: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-16">
      <Tooltip content="Settings" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Settings">
          <Settings className="h-4 w-4" />
        </Button>
      </Tooltip>

      <Tooltip content="Delete permanently" variant="danger" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Delete">
          <Trash2 className="h-4 w-4" />
        </Button>
      </Tooltip>

      <Tooltip content="More information" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Info">
          <Info className="h-4 w-4" />
        </Button>
      </Tooltip>
    </div>
  ),
}

// ─── Rich content ─────────────────────────────────────────────────────────────

export const RichContent: Story = {
  render: () => (
    <div className="flex items-center justify-center p-16">
      <Tooltip
        side="right"
        sideOffset={10}
        content={
          <div className="flex flex-col gap-1 max-w-[180px]">
            <span className="font-medium">Keyboard shortcut</span>
            <span className="text-neutral-400">
              Press{" "}
              <kbd className="rounded border border-neutral-600 px-1 py-0.5 text-[10px]">
                ⌘K
              </kbd>{" "}
              to open the command palette.
            </span>
          </div>
        }
      >
        <Button variant="secondary">Rich tooltip</Button>
      </Tooltip>
    </div>
  ),
}

// ─── Instant (no delay) ───────────────────────────────────────────────────────

export const Instant: Story = {
  render: () => (
    <div className="flex items-center justify-center p-16">
      <Tooltip content="No delay" delayDuration={0}>
        <Button variant="secondary">Instant</Button>
      </Tooltip>
    </div>
  ),
}

// ─── Disabled tooltip ─────────────────────────────────────────────────────────

export const DisabledTooltip: Story = {
  render: () => (
    <div className="flex items-center justify-center p-16">
      <Tooltip content="You won't see this" disabled>
        <Button variant="secondary">No tooltip here</Button>
      </Tooltip>
    </div>
  ),
}