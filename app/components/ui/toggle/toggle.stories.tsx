import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Bold, Italic, Underline, Strikethrough,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Grid, LayoutList,
  Sun, Moon, Bell, BellOff, Wifi, WifiOff,
} from "lucide-react"
import { Toggle, ToggleGroup, ToggleGroupItem } from "./toggle"

const meta: Meta = {
  title: "UI/Toggle",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Single toggle — playground ───────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["default", "outline", "ghost"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <span className="w-16 text-xs text-neutral-400">{variant}</span>
          <div className="flex items-center gap-2">
            <Toggle variant={variant} aria-label="Unpressed">
              <Bold />
            </Toggle>
            <Toggle variant={variant} defaultPressed aria-label="Pressed">
              <Bold />
            </Toggle>
            <Toggle variant={variant} disabled aria-label="Disabled">
              <Bold />
            </Toggle>
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── With label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" size="md" aria-label="Toggle dark mode">
        <Moon />
        Dark mode
      </Toggle>
      <Toggle variant="outline" size="md" defaultPressed aria-label="Toggle notifications">
        <Bell />
        Notifications
      </Toggle>
    </div>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [on, setOn] = useState(false)
    return (
      <div className="flex items-center gap-3">
        <Toggle
          variant="outline"
          pressed={on}
          onPressedChange={setOn}
          aria-label="Toggle wifi"
        >
          {on ? <Wifi /> : <WifiOff />}
          {on ? "Connected" : "Disconnected"}
        </Toggle>
        <span className="text-xs text-neutral-500">
          State: <strong>{on ? "on" : "off"}</strong>
        </span>
      </div>
    )
  },
}

// ─── ToggleGroup — single select ──────────────────────────────────────────────

export const GroupSingle: Story = {
  render: () => {
    const [align, setAlign] = useState("left")
    return (
      <div className="flex flex-col gap-3">
        <ToggleGroup
          type="single"
          variant="outline"
          value={align}
          onValueChange={(v) => { if (v) setAlign(v) }}
          aria-label="Text alignment"
        >
          <ToggleGroupItem value="left"    aria-label="Align left">
            <AlignLeft />
          </ToggleGroupItem>
          <ToggleGroupItem value="center"  aria-label="Align center">
            <AlignCenter />
          </ToggleGroupItem>
          <ToggleGroupItem value="right"   aria-label="Align right">
            <AlignRight />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify" aria-label="Justify">
            <AlignJustify />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-neutral-500">
          Active: <strong>{align}</strong>
        </span>
      </div>
    )
  },
}

// ─── ToggleGroup — multi select ───────────────────────────────────────────────

export const GroupMultiple: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>(["bold"])
    return (
      <div className="flex flex-col gap-3">
        <ToggleGroup
          type="multiple"
          variant="outline"
          value={formats}
          onValueChange={setFormats}
          aria-label="Text formatting"
        >
          <ToggleGroupItem value="bold"          aria-label="Bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic"        aria-label="Italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline"     aria-label="Underline">
            <Underline />
          </ToggleGroupItem>
          <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
            <Strikethrough />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-neutral-500">
          Active: <strong>{formats.join(", ") || "none"}</strong>
        </span>
      </div>
    )
  },
}

// ─── Toolbar — realistic composition ─────────────────────────────────────────

export const Toolbar: Story = {
  render: () => {
    const [align,   setAlign]   = useState("left")
    const [formats, setFormats] = useState<string[]>([])
    const [list,    setList]    = useState("")

    return (
      <div className="flex w-fit flex-col gap-1 rounded-md border-[1.5px] border-neutral-200 bg-white p-1">
        <div className="flex items-center gap-1">
          {/* Formatting — multi */}
          <ToggleGroup
            type="multiple"
            value={formats}
            onValueChange={setFormats}
            aria-label="Text formatting"
          >
            <ToggleGroupItem value="bold"      size="icon" aria-label="Bold"><Bold /></ToggleGroupItem>
            <ToggleGroupItem value="italic"    size="icon" aria-label="Italic"><Italic /></ToggleGroupItem>
            <ToggleGroupItem value="underline" size="icon" aria-label="Underline"><Underline /></ToggleGroupItem>
          </ToggleGroup>

          <div className="mx-1 h-5 w-px bg-neutral-200" aria-hidden />

          {/* Alignment — single */}
          <ToggleGroup
            type="single"
            value={align}
            onValueChange={(v) => { if (v) setAlign(v) }}
            aria-label="Alignment"
          >
            <ToggleGroupItem value="left"   size="icon" aria-label="Left"><AlignLeft /></ToggleGroupItem>
            <ToggleGroupItem value="center" size="icon" aria-label="Center"><AlignCenter /></ToggleGroupItem>
            <ToggleGroupItem value="right"  size="icon" aria-label="Right"><AlignRight /></ToggleGroupItem>
          </ToggleGroup>

          <div className="mx-1 h-5 w-px bg-neutral-200" aria-hidden />

          {/* List type — single */}
          <ToggleGroup
            type="single"
            value={list}
            onValueChange={setList}
            aria-label="List style"
          >
            <ToggleGroupItem value="bullet"  size="icon" aria-label="Bullet list"><List /></ToggleGroupItem>
            <ToggleGroupItem value="ordered" size="icon" aria-label="Ordered list"><ListOrdered /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    )
  },
}

// ─── View switcher ────────────────────────────────────────────────────────────

export const ViewSwitcher: Story = {
  render: () => {
    const [view, setView] = useState("grid")
    return (
      <ToggleGroup
        type="single"
        variant="outline"
        value={view}
        onValueChange={(v) => { if (v) setView(v) }}
        aria-label="View mode"
      >
        <ToggleGroupItem value="grid" size="icon" aria-label="Grid view">
          <Grid />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" size="icon" aria-label="List view">
          <LayoutList />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(["sm", "md", "lg", "icon"] as const).map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-8 text-xs text-neutral-400">{size}</span>
          <ToggleGroup type="multiple" variant="outline" size={size}>
            <ToggleGroupItem value="b" aria-label="Bold"><Bold /></ToggleGroupItem>
            <ToggleGroupItem value="i" aria-label="Italic"><Italic /></ToggleGroupItem>
            <ToggleGroupItem value="u" aria-label="Underline"><Underline /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  ),
}