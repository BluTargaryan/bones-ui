import type { Meta, StoryObj } from "@storybook/react"
import { Bell, CreditCard, User, Lock, Wifi } from "lucide-react"
import { Tabs } from "./tabs"
import { Badge } from "@/app/components/ui/badge/badge"
import { Input } from "@/app/components/ui/input/input"
import { Button } from "@/app/components/ui/button/button"

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant:   { control: "select", options: ["underline", "pills", "boxed"] },
    size:      { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

// ─── Shared items ─────────────────────────────────────────────────────────────

const BASIC_ITEMS = [
  {
    value: "account",
    label: "Account",
    content: (
      <p className="text-sm text-neutral-600">
        Manage your account settings and preferences.
      </p>
    ),
  },
  {
    value: "billing",
    label: "Billing",
    content: (
      <p className="text-sm text-neutral-600">
        Update your billing information and view invoices.
      </p>
    ),
  },
  {
    value: "notifications",
    label: "Notifications",
    content: (
      <p className="text-sm text-neutral-600">
        Configure how and when you receive notifications.
      </p>
    ),
  },
]

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Underline: Story = {
  args: { items: BASIC_ITEMS, variant: "underline", defaultValue: "account" },
}

export const Pills: Story = {
  args: { items: BASIC_ITEMS, variant: "pills", defaultValue: "account" },
}

export const Boxed: Story = {
  args: { items: BASIC_ITEMS, variant: "boxed", defaultValue: "account" },
}

// ─── All variants side by side ────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      {(["underline", "pills", "boxed"] as const).map((variant) => (
        <div key={variant}>
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
            {variant}
          </p>
          <Tabs items={BASIC_ITEMS} variant={variant} defaultValue="account" />
        </div>
      ))}
    </div>
  ),
}

// ─── With adornments ──────────────────────────────────────────────────────────

export const WithAdornments: Story = {
  args: {
    variant: "underline",
    defaultValue: "inbox",
    items: [
      {
        value: "inbox",
        label: "Inbox",
        adornment: <Badge variant="default" size="sm">12</Badge>,
        content: <p className="text-sm text-neutral-600">Your inbox messages.</p>,
      },
      {
        value: "sent",
        label: "Sent",
        content: <p className="text-sm text-neutral-600">Messages you've sent.</p>,
      },
      {
        value: "drafts",
        label: "Drafts",
        adornment: <Badge variant="secondary" size="sm">3</Badge>,
        content: <p className="text-sm text-neutral-600">Your draft messages.</p>,
      },
      {
        value: "spam",
        label: "Spam",
        adornment: (
          <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
        ),
        content: <p className="text-sm text-neutral-600">Spam messages.</p>,
      },
    ],
  },
}

// ─── With icons ───────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  args: {
    variant: "pills",
    defaultValue: "profile",
    items: [
      {
        value: "profile",
        label: <><User className="h-3.5 w-3.5" />Profile</>,
        content: <p className="text-sm text-neutral-600">Edit your profile details.</p>,
      },
      {
        value: "billing",
        label: <><CreditCard className="h-3.5 w-3.5" />Billing</>,
        content: <p className="text-sm text-neutral-600">Manage billing and plans.</p>,
      },
      {
        value: "notifications",
        label: <><Bell className="h-3.5 w-3.5" />Alerts</>,
        content: <p className="text-sm text-neutral-600">Notification preferences.</p>,
      },
      {
        value: "security",
        label: <><Lock className="h-3.5 w-3.5" />Security</>,
        content: <p className="text-sm text-neutral-600">Password and 2FA settings.</p>,
      },
    ],
  },
}

// ─── Disabled tab ─────────────────────────────────────────────────────────────

export const WithDisabledTab: Story = {
  args: {
    variant: "underline",
    defaultValue: "general",
    items: [
      {
        value: "general",
        label: "General",
        content: <p className="text-sm text-neutral-600">General settings.</p>,
      },
      {
        value: "integrations",
        label: "Integrations",
        content: <p className="text-sm text-neutral-600">Third-party integrations.</p>,
      },
      {
        value: "enterprise",
        label: "Enterprise",
        disabled: true,
        adornment: <Badge variant="info" size="sm">Pro</Badge>,
        content: <p className="text-sm text-neutral-600">Enterprise features.</p>,
      },
    ],
  },
}

// ─── Full width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  args: {
    variant: "boxed",
    fullWidth: true,
    defaultValue: "monthly",
    items: [
      {
        value: "monthly",
        label: "Monthly",
        content: <p className="text-sm text-neutral-600">Billed every month.</p>,
      },
      {
        value: "annual",
        label: "Annual",
        adornment: <Badge variant="success" size="sm">20% off</Badge>,
        content: <p className="text-sm text-neutral-600">Billed once per year.</p>,
      },
    ],
  },
}

// ─── Rich content ─────────────────────────────────────────────────────────────

export const RichContent: Story = {
  render: () => (
    <Tabs
      variant="underline"
      defaultValue="profile"
      items={[
        {
          value: "profile",
          label: "Profile",
          content: (
            <div className="flex flex-col gap-4 max-w-sm">
              <Input label="Display name" defaultValue="Bones UI" />
              <Input label="Email" type="email" defaultValue="hello@bones-ui.dev" />
              <Button className="self-start">Save changes</Button>
            </div>
          ),
        },
        {
          value: "password",
          label: "Password",
          content: (
            <div className="flex flex-col gap-4 max-w-sm">
              <Input label="Current password" type="password" placeholder="••••••••" />
              <Input label="New password"     type="password" placeholder="••••••••" />
              <Input label="Confirm password" type="password" placeholder="••••••••" />
              <Button className="self-start">Update password</Button>
            </div>
          ),
        },
        {
          value: "danger",
          label: "Danger zone",
          content: (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-neutral-600">
                Once you delete your account, there is no going back.
              </p>
              <Button variant="destructive" className="self-start">
                Delete account
              </Button>
            </div>
          ),
        },
      ]}
    />
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p className="mb-2 text-xs text-neutral-400 uppercase tracking-wide">{size}</p>
          <Tabs
            size={size}
            variant="underline"
            defaultValue="one"
            items={[
              { value: "one",   label: "Overview", content: null },
              { value: "two",   label: "Analytics", content: null },
              { value: "three", label: "Settings",  content: null },
            ]}
          />
        </div>
      ))}
    </div>
  ),
}