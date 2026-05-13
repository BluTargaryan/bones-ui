import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  User, Settings, CreditCard, LogOut, Bell,
  Copy, Scissors, Clipboard, Download,
  Moon, Sun, Monitor, Trash2, MoreHorizontal,
  Share2, Link, Mail, XIcon
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./dropdown"
import { Button } from "@/app/components/ui/button/button"

const meta: Meta = {
  title: "UI/Dropdown",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem icon={<User />}>Profile</DropdownMenuItem>
          <DropdownMenuItem icon={<Settings />} shortcut="⌘,">Settings</DropdownMenuItem>
          <DropdownMenuItem icon={<CreditCard />}>Billing</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<LogOut />} destructive>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// ─── With label groups ────────────────────────────────────────────────────────

export const WithGroups: Story = {
  render: () => (
    <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem icon={<User />}       shortcut="⇧⌘P">Profile</DropdownMenuItem>
            <DropdownMenuItem icon={<CreditCard />} shortcut="⌘B">Billing</DropdownMenuItem>
            <DropdownMenuItem icon={<Settings />}   shortcut="⌘,">Settings</DropdownMenuItem>
            <DropdownMenuItem icon={<Bell />}       shortcut="⌘N">Notifications</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem icon={<LogOut />} destructive shortcut="⇧⌘Q">
              Sign out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// ─── Checkbox items ───────────────────────────────────────────────────────────

export const WithCheckboxes: Story = {
  render: () => {
    const [state, setState] = useState({
      toolbar:    true,
      statusBar:  false,
      activityBar: true,
    })

    return (
      <div className="flex justify-center p-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">View options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Panel visibility</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={state.toolbar}
              onCheckedChange={(v) => setState((s) => ({ ...s, toolbar: v }))}
            >
              Toolbar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={state.statusBar}
              onCheckedChange={(v) => setState((s) => ({ ...s, statusBar: v }))}
            >
              Status bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={state.activityBar}
              onCheckedChange={(v) => setState((s) => ({ ...s, activityBar: v }))}
            >
              Activity bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

// ─── Radio items ──────────────────────────────────────────────────────────────

export const WithRadio: Story = {
  render: () => {
    const [theme, setTheme] = useState("system")
    const options = [
      { value: "light",  label: "Light",  icon: <Sun  className="h-4 w-4" /> },
      { value: "dark",   label: "Dark",   icon: <Moon className="h-4 w-4" /> },
      { value: "system", label: "System", icon: <Monitor className="h-4 w-4" /> },
    ]

    return (
      <div className="flex justify-center p-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              {options.find((o) => o.value === theme)?.icon}
              Theme
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              {options.map((o) => (
                <DropdownMenuRadioItem key={o.value} value={o.value}>
                  {o.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

// ─── Submenu ──────────────────────────────────────────────────────────────────

export const WithSubmenu: Story = {
  render: () => (
    <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Edit</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem icon={<Copy />}      shortcut="⌘C">Copy</DropdownMenuItem>
          <DropdownMenuItem icon={<Scissors />}  shortcut="⌘X">Cut</DropdownMenuItem>
          <DropdownMenuItem icon={<Clipboard />} shortcut="⌘V">Paste</DropdownMenuItem>
          <DropdownMenuSeparator />

          {/* Submenu */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger icon={<Share2 />}>
              Share
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-40">
              <DropdownMenuItem icon={<Link />}>Copy link</DropdownMenuItem>
              <DropdownMenuItem icon={<Mail />}>Email</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem icon={<XIcon />}>X</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<Download />}>Download</DropdownMenuItem>
          <DropdownMenuItem icon={<Trash2 />} destructive>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// ─── Disabled items ───────────────────────────────────────────────────────────

export const WithDisabledItems: Story = {
  render: () => (
    <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem icon={<Copy />}>Duplicate</DropdownMenuItem>
          <DropdownMenuItem icon={<Download />} disabled>
            Export (Pro only)
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<Share2 />} disabled>
            Share (Pro only)
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<Trash2 />} destructive>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// ─── Icon trigger (…) ─────────────────────────────────────────────────────────

export const IconTrigger: Story = {
  render: () => (
    <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" aria-label="More actions">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem icon={<Settings />}>Edit</DropdownMenuItem>
          <DropdownMenuItem icon={<Copy />}>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<Trash2 />} destructive>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}