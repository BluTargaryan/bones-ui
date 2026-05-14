import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { ArrowRight, MoreHorizontal, Star, Users, TrendingUp, Zap } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardImage,
} from "./card"
import { Button }       from "@/app/components/ui/button"
import { Badge }        from "@/app/components/ui/badge"
import { Avatar }       from "@/app/components/ui/avatar"
import { SkeletonCard } from "@/app/components/ui/skeleton"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown"
import { cn } from "@/app/lib/utils"

const meta: Meta = {
  title: "UI/Card",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A short description of what this card contains.</CardDescription>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-neutral-600">
          Card body content. Add any components here — forms, data, media.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {(["default", "ghost", "elevated"] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
            <CardDescription>
              {variant === "default"  && "1.5px border, white bg"}
              {variant === "ghost"    && "No border, transparent bg"}
              {variant === "elevated" && "Shadow, no border"}
            </CardDescription>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-neutral-500">Card body content.</p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
}

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null)

    const plans = [
      { id: "free",  label: "Free",       desc: "For personal projects",     price: "$0/mo"  },
      { id: "pro",   label: "Pro",        desc: "For professional teams",    price: "$12/mo" },
      { id: "teams", label: "Teams",      desc: "For growing organisations", price: "$29/mo" },
    ]

    return (
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              interactive
              onClick={() => setSelected(plan.id)}
              className={cn(
                "transition-all",
                selected === plan.id
                  ? "border-neutral-900 ring-1 ring-neutral-900"
                  : ""
              )}
            >
              <CardHeader>
                <CardTitle className="text-sm">{plan.label}</CardTitle>
                <CardDescription>{plan.desc}</CardDescription>
              </CardHeader>
              <CardBody>
                <p className="text-lg font-semibold text-neutral-900">
                  {plan.price}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
        <p className="text-xs text-neutral-400">
          Selected: <strong>{selected ?? "none"}</strong>
        </p>
      </div>
    )
  },
}

// ─── With image ───────────────────────────────────────────────────────────────

export const WithImage: Story = {
  render: () => (
    <Card className="w-72 overflow-hidden">
      <CardImage
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
        alt="Abstract gradient"
        height="h-40"
      />
      <CardHeader>
        <CardTitle>Cover image</CardTitle>
        <CardDescription>Image bleeds to card edges, radius is preserved.</CardDescription>
      </CardHeader>
      <CardFooter divided>
        <Button size="sm" variant="secondary">View</Button>
      </CardFooter>
    </Card>
  ),
}

// ─── Divided slots ────────────────────────────────────────────────────────────

export const Divided: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader divided>
        <CardTitle>Invoice #1042</CardTitle>
        <CardDescription>Due October 31, 2025</CardDescription>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2">
          {[
            { label: "Design work",  amount: "$1,200" },
            { label: "Development",  amount: "$3,400" },
            { label: "Hosting (1y)", amount: "$240"   },
          ].map(({ label, amount }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-neutral-600">{label}</span>
              <span className="font-medium text-neutral-900">{amount}</span>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter divided className="justify-between">
        <span className="text-sm font-semibold text-neutral-900">Total</span>
        <span className="text-sm font-semibold text-neutral-900">$4,840</span>
      </CardFooter>
    </Card>
  ),
}

// ─── Stat card ────────────────────────────────────────────────────────────────

export const StatCards: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Total users",    value: "12,483", delta: "+12%",  icon: Users,      color: "text-blue-500"    },
        { label: "Revenue",        value: "$48,200", delta: "+8.1%", icon: TrendingUp, color: "text-emerald-500" },
        { label: "Active now",     value: "1,429",  delta: "+3%",   icon: Zap,        color: "text-amber-500"   },
      ].map(({ label, value, delta, icon: Icon, color }) => (
        <Card key={label}>
          <CardBody>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-neutral-500">{label}</p>
                <p className="text-2xl font-semibold text-neutral-900">{value}</p>
              </div>
              <div className={cn("rounded-md bg-neutral-100 p-2", color)}>
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              <span className="font-medium text-emerald-600">{delta}</span>
              {" "}from last month
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
}

// ─── Team member card ─────────────────────────────────────────────────────────

export const TeamMemberCard: Story = {
  render: () => (
    <Card className="w-64">
      <CardBody className="flex flex-col items-center gap-3 py-6 text-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=alice"
          name="Alice Johnson"
          size="xl"
          status="online"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-900">Alice Johnson</p>
          <p className="text-xs text-neutral-500">Product Designer</p>
        </div>
        <Badge variant="success" dot size="sm">Online</Badge>
      </CardBody>
      <CardFooter divided className="justify-center gap-2">
        <Button size="sm" variant="secondary">Message</Button>
        <Button size="sm">View profile</Button>
      </CardFooter>
    </Card>
  ),
}

// ─── With context menu ────────────────────────────────────────────────────────

export const WithContextMenu: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>Project Alpha</CardTitle>
            <CardDescription>Last updated 2 hours ago</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="More options">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between">
          <Badge variant="info" dot>In progress</Badge>
          <span className="text-xs text-neutral-500">4 of 12 tasks</span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
          <div className="h-full w-1/3 rounded-full bg-neutral-900" />
        </div>
      </CardBody>
      <CardFooter divided className="justify-between">
        <Avatar
          src="https://i.pravatar.cc/150?u=alice"
          name="Alice Johnson"
          size="sm"
        />
        <Button size="sm" variant="ghost" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
          Open
        </Button>
      </CardFooter>
    </Card>
  ),
}

// ─── Loading state ────────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <SkeletonCard lines={3} />
      <SkeletonCard lines={3} />
      <SkeletonCard lines={3} />
    </div>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Card interactive disabled className="w-72">
      <CardHeader>
        <CardTitle>Locked card</CardTitle>
        <CardDescription>This card is non-interactive.</CardDescription>
      </CardHeader>
      <CardBody>
        <Badge variant="warning" size="sm">Upgrade required</Badge>
      </CardBody>
    </Card>
  ),
}