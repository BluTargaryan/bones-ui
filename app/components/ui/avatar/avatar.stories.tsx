import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarGroup } from "./avatar"

const meta: Meta = {
  title: "UI/Avatar",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Shared data ──────────────────────────────────────────────────────────────

const TEAM = [
  { name: "Alice Johnson",  src: "https://i.pravatar.cc/150?u=alice"  },
  { name: "Bob Smith",      src: "https://i.pravatar.cc/150?u=bob"    },
  { name: "Carol White",    src: "https://i.pravatar.cc/150?u=carol"  },
  { name: "David Lee",      src: "https://i.pravatar.cc/150?u=david"  },
  { name: "Eva Martinez",   src: "https://i.pravatar.cc/150?u=eva"    },
  { name: "Frank Chen",     src: "https://i.pravatar.cc/150?u=frank"  },
  { name: "Grace Kim",      src: "https://i.pravatar.cc/150?u=grace"  },
]

// ─── Fallback cascade ─────────────────────────────────────────────────────────

export const FallbackCascade: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-neutral-400">image → initials → icon</p>
      <div className="flex items-center gap-3">
        {/* 1. Image loads */}
        <Avatar src="https://i.pravatar.cc/150?u=alice" name="Alice Johnson" />
        {/* 2. Bad src → initials */}
        <Avatar src="https://broken.url/img.jpg" name="Bob Smith" />
        {/* 3. No src → initials */}
        <Avatar name="Carol White" />
        {/* 4. No src, no name → icon */}
        <Avatar />
      </div>
    </div>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(["circle", "square"] as const).map((shape) => (
        <div key={shape} className="flex flex-col gap-2">
          <p className="text-xs text-neutral-400">{shape}</p>
          <div className="flex items-end gap-3">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-1.5">
                <Avatar
                  src="https://i.pravatar.cc/150?u=alice"
                  name="Alice Johnson"
                  size={size}
                  shape={shape}
                />
                <span className="text-[10px] text-neutral-400">{size}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── Status indicators ────────────────────────────────────────────────────────

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(["circle", "square"] as const).map((shape) => (
        <div key={shape} className="flex flex-col gap-2">
          <p className="text-xs text-neutral-400">{shape}</p>
          <div className="flex items-center gap-4">
            {(["online", "away", "busy", "offline"] as const).map((status) => (
              <div key={status} className="flex flex-col items-center gap-1.5">
                <Avatar
                  src={`https://i.pravatar.cc/150?u=${status}`}
                  name={status}
                  status={status}
                  size="md"
                  shape={shape}
                />
                <span className="text-[10px] text-neutral-400">{status}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── Initials only ────────────────────────────────────────────────────────────

export const InitialsOnly: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {["Alice Johnson", "Bob S", "C", "David Lee-Wong"].map((name) => (
        <div key={name} className="flex flex-col items-center gap-1.5">
          <Avatar name={name} size="md" />
          <span className="text-[10px] text-neutral-400 max-w-[48px] text-center leading-tight">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}

// ─── AvatarGroup ──────────────────────────────────────────────────────────────

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-400">max=4 (3 overflow)</p>
        <AvatarGroup items={TEAM} max={4} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-400">max=5 (2 overflow)</p>
        <AvatarGroup items={TEAM} max={5} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-400">no overflow</p>
        <AvatarGroup items={TEAM.slice(0, 4)} max={4} />
      </div>
    </div>
  ),
}

// ─── AvatarGroup sizes ────────────────────────────────────────────────────────

export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-6 text-xs text-neutral-400">{size}</span>
          <AvatarGroup items={TEAM} max={4} size={size} />
        </div>
      ))}
    </div>
  ),
}

// ─── AvatarGroup shapes ───────────────────────────────────────────────────────

export const GroupShapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">circle</p>
        <AvatarGroup items={TEAM} max={5} shape="circle" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">square</p>
        <AvatarGroup items={TEAM} max={5} shape="square" />
      </div>
    </div>
  ),
}

// ─── In context — assignee row ────────────────────────────────────────────────

export const AssigneeRow: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-sm">
      {[
        { label: "Design review",  assignees: TEAM.slice(0, 3) },
        { label: "Backend API",    assignees: TEAM.slice(1, 6) },
        { label: "QA & testing",   assignees: TEAM.slice(2, 7) },
      ].map(({ label, assignees }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md border-[1.5px] border-neutral-200 px-4 py-3"
        >
          <span className="text-sm font-medium text-neutral-700">{label}</span>
          <AvatarGroup items={assignees} max={3} size="sm" />
        </div>
      ))}
    </div>
  ),
}

// ─── In context — user card ───────────────────────────────────────────────────

export const UserCard: Story = {
  render: () => (
    <div className="flex items-center gap-3 rounded-md border-[1.5px] border-neutral-200 p-4 w-fit">
      <Avatar
        src="https://i.pravatar.cc/150?u=alice"
        name="Alice Johnson"
        size="lg"
        status="online"
      />
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-neutral-900">Alice Johnson</p>
        <p className="text-xs text-neutral-500">Product Designer</p>
        <p className="text-xs text-emerald-600 font-medium">● Online</p>
      </div>
    </div>
  ),
}