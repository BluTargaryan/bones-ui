import type { Meta, StoryObj } from "@storybook/react"
import { ToastProvider, useToast } from "./toast"
import { Button } from "@/app/components/ui/button/button"

const meta: Meta = {
  title: "UI/Toast",
  tags: ["autodocs"],
  // Every story needs the provider
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

// ─── Helper — trigger button connected to the hook ────────────────────────────

const ToastTrigger = ({
  label,
  fn,
}: {
  label: string
  fn: (toast: ReturnType<typeof useToast>["toast"]) => void
}) => {
  const { toast } = useToast()
  return (
    <Button variant="secondary" onClick={() => fn(toast)}>
      {label}
    </Button>
  )
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <ToastTrigger
        label="Default"
        fn={(t) => t({ title: "Heads up", description: "Something happened." })}
      />
      <ToastTrigger
        label="Success"
        fn={(t) =>
          t({
            variant: "success",
            title: "Changes saved",
            description: "Your profile has been updated.",
          })
        }
      />
      <ToastTrigger
        label="Warning"
        fn={(t) =>
          t({
            variant: "warning",
            title: "Approaching limit",
            description: "You've used 90% of your storage.",
          })
        }
      />
      <ToastTrigger
        label="Destructive"
        fn={(t) =>
          t({
            variant: "destructive",
            title: "Something went wrong",
            description: "Your changes could not be saved.",
          })
        }
      />
      <ToastTrigger
        label="Info"
        fn={(t) =>
          t({
            variant: "info",
            title: "Update available",
            description: "A new version of the app is ready.",
          })
        }
      />
    </div>
  ),
}

// ─── With action ──────────────────────────────────────────────────────────────

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <ToastTrigger
        label="Undo action"
        fn={(t) =>
          t({
            variant: "default",
            title: "Email archived",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo!"),
            },
          })
        }
      />
      <ToastTrigger
        label="With retry"
        fn={(t) =>
          t({
            variant: "destructive",
            title: "Export failed",
            description: "Check your connection and try again.",
            action: {
              label: "Retry",
              onClick: () => console.log("Retry!"),
            },
          })
        }
      />
    </div>
  ),
}

// ─── Loading ──────────────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => {
    const WithHook = () => {
      const { toast, dismiss } = useToast()
      const handleClick = () => {
        const id = toast({
          loading: true,
          title: "Uploading file…",
          description: "This may take a moment.",
        })
        // Simulate async completion
        setTimeout(() => {
          dismiss(id)
          toast({ variant: "success", title: "Upload complete!" })
        }, 3000)
      }
      return <Button variant="secondary" onClick={handleClick}>Start upload</Button>
    }
    return <WithHook />
  },
}

// ─── Dismiss all ──────────────────────────────────────────────────────────────

export const DismissAll: Story = {
  render: () => {
    const WithHook = () => {
      const { toast, dismissAll } = useToast()
      return (
        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => {
              toast({ title: "Toast 1", variant: "success" })
              toast({ title: "Toast 2", variant: "info" })
              toast({ title: "Toast 3", variant: "warning" })
            }}
          >
            Fire 3 toasts
          </Button>
          <Button variant="outline" onClick={dismissAll}>
            Dismiss all
          </Button>
        </div>
      )
    }
    return <WithHook />
  },
}

// ─── Positions ────────────────────────────────────────────────────────────────

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      {(
        [
          "top-left", "top-center", "top-right",
          "bottom-left", "bottom-center", "bottom-right",
        ] as const
      ).map((pos) => (
        <ToastProvider key={pos} position={pos}>
          <ToastTrigger
            label={pos}
            fn={(t) => t({ title: pos, description: "Toast from this position." })}
          />
        </ToastProvider>
      ))}
    </div>
  ),
}

// ─── Persistent (no auto-dismiss) ─────────────────────────────────────────────

export const Persistent: Story = {
  render: () => (
    <ToastTrigger
      label="Persistent toast"
      fn={(t) =>
        t({
          variant: "warning",
          title: "Action required",
          description: "Please verify your email to continue.",
          duration: Infinity,
          action: { label: "Resend email", onClick: () => {} },
        })
      }
    />
  ),
}