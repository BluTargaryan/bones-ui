import type { Meta, StoryObj } from "@storybook/react"
import { Mail, ArrowRight, Trash2 } from "lucide-react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    isError: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// --- Core variants ---

export const Primary: Story = {
  args: { children: "Continue", variant: "primary" },
}

export const Secondary: Story = {
  args: { children: "Cancel", variant: "secondary" },
}

export const Outline: Story = {
  args: { children: "Export", variant: "outline" },
}

export const Ghost: Story = {
  args: { children: "Learn more", variant: "ghost" },
}

export const Destructive: Story = {
  args: { children: "Delete account", variant: "destructive" },
}

// --- States ---

export const Loading: Story = {
  args: { children: "Saving…", loading: true },
}

export const Disabled: Story = {
  args: { children: "Submit", disabled: true },
}

export const ErrorState: Story = {
  args: { children: "Retry", isError: true, variant: "outline" },
}

// --- With icons ---

export const WithLeftIcon: Story = {
  args: {
    children: "Send email",
    leftIcon: <Mail className="h-4 w-4" />,
  },
}

export const WithRightIcon: Story = {
  args: {
    children: "Next step",
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
}

export const IconOnly: Story = {
  args: {
    size: "icon",
    variant: "ghost",
    children: <Trash2 className="h-4 w-4" />,
    "aria-label": "Delete",
  },
}

// --- All variants at a glance ---

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}