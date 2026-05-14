import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { MoreHorizontal, Trash2, Pencil, Eye } from "lucide-react"
import { DataTable } from "./data-table"
import { Badge }  from "@/app/components/ui/badge"
import { Avatar } from "@/app/components/ui/avatar"
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
} from "@/app/components/ui/dropdown"
import { Button } from "@/app/components/ui/button"

const meta: Meta = {
  title: "UI/DataTable",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Shared data ──────────────────────────────────────────────────────────────

type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  joined: string
  avatar: string
}

const USERS: User[] = [
  { id: "1", name: "Alice Johnson",  email: "alice@example.com",  role: "Admin",    status: "active",   joined: "2023-01-12", avatar: "https://i.pravatar.cc/150?u=alice"  },
  { id: "2", name: "Bob Smith",      email: "bob@example.com",    role: "Editor",   status: "active",   joined: "2023-03-05", avatar: "https://i.pravatar.cc/150?u=bob"    },
  { id: "3", name: "Carol White",    email: "carol@example.com",  role: "Viewer",   status: "inactive", joined: "2023-04-18", avatar: "https://i.pravatar.cc/150?u=carol"  },
  { id: "4", name: "David Lee",      email: "david@example.com",  role: "Editor",   status: "pending",  joined: "2023-06-22", avatar: "https://i.pravatar.cc/150?u=david"  },
  { id: "5", name: "Eva Martinez",   email: "eva@example.com",    role: "Admin",    status: "active",   joined: "2023-07-30", avatar: "https://i.pravatar.cc/150?u=eva"    },
  { id: "6", name: "Frank Chen",     email: "frank@example.com",  role: "Viewer",   status: "active",   joined: "2023-09-14", avatar: "https://i.pravatar.cc/150?u=frank"  },
  { id: "7", name: "Grace Kim",      email: "grace@example.com",  role: "Editor",   status: "inactive", joined: "2023-10-02", avatar: "https://i.pravatar.cc/150?u=grace"  },
  { id: "8", name: "Henry Park",     email: "henry@example.com",  role: "Viewer",   status: "active",   joined: "2023-11-19", avatar: "https://i.pravatar.cc/150?u=henry"  },
  { id: "9", name: "Isabel Torres",  email: "isabel@example.com", role: "Editor",   status: "pending",  joined: "2024-01-07", avatar: "https://i.pravatar.cc/150?u=isabel" },
  { id: "10", name: "James Wright",  email: "james@example.com",  role: "Viewer",   status: "active",   joined: "2024-02-28", avatar: "https://i.pravatar.cc/150?u=james"  },
  { id: "11", name: "Karen Scott",   email: "karen@example.com",  role: "Admin",    status: "active",   joined: "2024-03-15", avatar: "https://i.pravatar.cc/150?u=karen"  },
  { id: "12", name: "Leo Adams",     email: "leo@example.com",    role: "Viewer",   status: "inactive", joined: "2024-04-09", avatar: "https://i.pravatar.cc/150?u=leo"    },
]

const statusConfig = {
  active:   { variant: "success",     label: "Active"   },
  inactive: { variant: "secondary",   label: "Inactive" },
  pending:  { variant: "warning",     label: "Pending"  },
} as const

const COLUMNS = [
  {
    key: "name",
    header: "Name",
    sortable: true,
    cell: (row: User) => (
      <div className="flex items-center gap-2.5">
        <Avatar src={row.avatar} name={row.name} size="sm" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-neutral-900">{row.name}</span>
          <span className="text-xs text-neutral-500">{row.email}</span>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
    width: "w-28",
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    width: "w-28",
    cell: (row: User) => {
      const cfg = statusConfig[row.status]
      return <Badge variant={cfg.variant} dot size="sm">{cfg.label}</Badge>
    },
  },
  {
    key: "joined",
    header: "Joined",
    sortable: true,
    width: "w-32",
    cell: (row: User) => (
      <span className="text-neutral-500">
        {new Date(row.joined).toLocaleDateString("en-US", {
          month: "short", day: "numeric", year: "numeric",
        })}
      </span>
    ),
  },
]

const RowActions = (row: User) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" variant="ghost" className="h-7 w-7" aria-label="Row actions">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-36">
      <DropdownMenuItem icon={<Eye />}>View</DropdownMenuItem>
      <DropdownMenuItem icon={<Pencil />}>Edit</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem icon={<Trash2 />} destructive>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

// ─── Full featured ────────────────────────────────────────────────────────────

export const FullFeatured: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    return (
      <div className="flex flex-col gap-2">
        <DataTable
          columns={COLUMNS as any}
          data={USERS}
          selectable
          onSelectionChange={setSelectedKeys}
          rowActions={RowActions as any}
          pagination={{ pageSize: 5, pageSizeOptions: [5, 10, 20] }}
          toolbar
        />
        {selectedKeys.length > 0 && (
          <p className="text-xs text-neutral-500">
            Selected IDs: <strong>{selectedKeys.join(", ")}</strong>
          </p>
        )}
      </div>
    )
  },
}

// ─── Minimal ──────────────────────────────────────────────────────────────────

export const Minimal: Story = {
  render: () => (
    <DataTable
      columns={[
        { key: "name",   header: "Name",   sortable: true },
        { key: "role",   header: "Role",   sortable: true },
        { key: "joined", header: "Joined", sortable: true },
      ]}
      data={USERS.slice(0, 5) as any}
      toolbar={false}
    />
  ),
}

// ─── Loading ──────────────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => (
    <DataTable
      columns={COLUMNS as any}
      data={[]}
      loading
      selectable
      rowActions={RowActions as any}
      pagination={{ pageSize: 5 }}
      toolbar
    />
  ),
}

// ─── Empty state ──────────────────────────────────────────────────────────────

export const Empty: Story = {
  render: () => (
    <DataTable
      columns={COLUMNS as any}
      data={[]}
      emptyMessage="No team members"
      emptyDescription="Invite someone to get started."
      toolbar
      pagination={{ pageSize: 10 }}
    />
  ),
}

// ─── Clickable rows ───────────────────────────────────────────────────────────

export const ClickableRows: Story = {
  render: () => {
    const [clicked, setClicked] = useState<string | null>(null)
    return (
      <div className="flex flex-col gap-2">
        <DataTable
          columns={COLUMNS as any}
          data={USERS.slice(0, 6) as any}
          onRowClick={(row: any) => setClicked(row.name)}
          toolbar={false}
        />
        {clicked && (
          <p className="text-xs text-neutral-500">
            Clicked: <strong>{clicked}</strong>
          </p>
        )}
      </div>
    )
  },
}