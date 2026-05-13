import type { Meta, StoryObj } from "@storybook/react"
import { Search, Eye, EyeOff, AtSign, DollarSign } from "lucide-react"
import { Input } from "./input"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading:  { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Input>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    helperText: "We'll never share your email.",
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const WithError: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    defaultValue: "not-an-email",
    errorMessage: "Please enter a valid email address.",
  },
}

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "your_username",
    defaultValue: "bones_ui",
    disabled: true,
    helperText: "Username cannot be changed.",
  },
}

export const Loading: Story = {
  args: {
    label: "Search",
    placeholder: "Checking availability…",
    defaultValue: "bones-ui",
    loading: true,
  },
}

// ─── Prefix / Suffix ──────────────────────────────────────────────────────────

export const WithPrefix: Story = {
  args: {
    label: "Search",
    placeholder: "Find anything…",
    prefix: <Search className="h-4 w-4" />,
  },
}

export const WithSuffix: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    suffix: <Eye className="h-4 w-4 cursor-pointer" />,
  },
}

export const WithTextPrefix: Story = {
  args: {
    label: "Amount",
    placeholder: "0.00",
    prefix: <DollarSign className="h-4 w-4" />,
    helperText: "Enter amount in USD",
  },
}

export const WithAtSignPrefix: Story = {
  args: {
    label: "Twitter handle",
    placeholder: "yourhandle",
    prefix: <AtSign className="h-4 w-4" />,
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input"  label="Large" />
    </div>
  ),
}

// ─── Error overrides suffix ───────────────────────────────────────────────────

export const ErrorOverridesSuffix: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    defaultValue: "bad@@input",
    suffix: <AtSign className="h-4 w-4" />,
    errorMessage: "Invalid email — error icon replaces the suffix.",
  },
}