import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Trash2, AlertTriangle } from "lucide-react"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
} from "./modal"
import { Button } from "@/app/components/ui/button"
import { Input }  from "@/app/components/ui/input"

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    // Storybook renders modals in an iframe — Portal needs this
    docs: { story: { inline: false, iframeHeight: 500 } },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

// ─── Default (with trigger prop) ──────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Modal
      trigger={<Button>Open modal</Button>}
    >
      <ModalHeader>
        <ModalTitle>Modal title</ModalTitle>
        <ModalDescription>
          A short description of what this modal is for.
        </ModalDescription>
      </ModalHeader>
      <ModalBody>
        <p className="text-sm text-neutral-700">
          Modal body content goes here. This area scrolls if content overflows.
        </p>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Confirm</Button>
      </ModalFooter>
    </Modal>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open controlled</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalHeader>
            <ModalTitle>Controlled modal</ModalTitle>
            <ModalDescription>
              Open state is managed by the parent.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">
              Useful when you need to control the modal from outside —
              form submission, async operations, etc.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

// ─── Form inside modal ────────────────────────────────────────────────────────

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Modal
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Edit profile</Button>}
      >
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <ModalDescription>
            Update your display name and email address.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input label="Display name" defaultValue="Bones UI" />
            <Input label="Email" type="email" defaultValue="hello@bones-ui.dev" />
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </ModalFooter>
      </Modal>
    )
  },
}

// ─── Destructive confirmation ─────────────────────────────────────────────────

export const Destructive: Story = {
  render: () => (
    <Modal trigger={<Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />}>Delete account</Button>}>
      <ModalHeader>
        <ModalTitle>Delete account</ModalTitle>
        <ModalDescription>
          This action is permanent and cannot be undone.
        </ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex gap-3 rounded-md border-[1.5px] border-red-200 bg-red-50 p-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
          <p className="text-sm text-red-700">
            All your data, workspaces, and integrations will be permanently deleted.
            There is no recovery option.
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button variant="destructive">Yes, delete my account</Button>
      </ModalFooter>
    </Modal>
  ),
}

// ─── Scrollable body ──────────────────────────────────────────────────────────

export const ScrollableBody: Story = {
  render: () => (
    <Modal trigger={<Button>Terms of service</Button>} size="md">
      <ModalHeader>
        <ModalTitle>Terms of Service</ModalTitle>
        <ModalDescription>Last updated January 2025</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-3 text-sm text-neutral-700">
          {Array.from({ length: 12 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Decline</Button>
        </ModalClose>
        <Button>Accept</Button>
      </ModalFooter>
    </Modal>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Modal
          key={size}
          size={size}
          trigger={<Button variant="secondary">Size: {size}</Button>}
        >
          <ModalHeader>
            <ModalTitle>Size — {size}</ModalTitle>
            <ModalDescription>
              max-w maps to: sm=384px · md=512px · lg=672px · xl=896px
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">Body content here.</p>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </Modal>
      ))}
    </div>
  ),
}