import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable,
  SkeletonButton,
} from "./skeleton"

const meta: Meta = {
  title: "UI/Skeleton",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// ─── Primitives ───────────────────────────────────────────────────────────────

export const Primitives: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">line</p>
        <Skeleton />
        <Skeleton className="w-3/4" />
        <Skeleton className="w-1/2" />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">block</p>
        <Skeleton variant="block" className="h-32 w-full" />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">circle</p>
        <div className="flex items-center gap-2">
          <Skeleton variant="circle" className="h-8  w-8"  />
          <Skeleton variant="circle" className="h-10 w-10" />
          <Skeleton variant="circle" className="h-12 w-12" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">pill</p>
        <div className="flex gap-2">
          <Skeleton variant="pill" className="w-16" />
          <Skeleton variant="pill" className="w-24" />
          <Skeleton variant="pill" className="w-12" />
        </div>
      </div>
    </div>
  ),
}

// ─── Text ─────────────────────────────────────────────────────────────────────

export const Text: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <SkeletonText lines={2} />
      <SkeletonText lines={3} />
      <SkeletonText lines={4} shortenLast={false} />
    </div>
  ),
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

export const AvatarStory: Story = {
  name: "Avatar",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" lines={3} />
    </div>
  ),
}

// ─── Cards ────────────────────────────────────────────────────────────────────

export const Cards: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <SkeletonCard />
      <SkeletonCard imageHeight="h-32" lines={2} />
      <SkeletonCard image={false} lines={4} />
    </div>
  ),
}

// ─── Table ────────────────────────────────────────────────────────────────────

export const TableStory: Story = {
  name: "Table",
  render: () => (
    <div className="flex flex-col gap-6">
      <SkeletonTable columns={4} rows={5} />
      <SkeletonTable columns={3} rows={3} header={false} />
    </div>
  ),
}

// ─── Buttons ──────────────────────────────────────────────────────────────────

export const Buttons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <SkeletonButton size="sm" />
      <SkeletonButton size="md" />
      <SkeletonButton size="lg" />
    </div>
  ),
}

// ─── Page section ─────────────────────────────────────────────────────────────

export const PageSection: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-64" />
        </div>
        <SkeletonButton size="md" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-md border-[1.5px] border-neutral-200 p-4"
          >
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-8    w-16" />
            <Skeleton className="h-3    w-24" />
          </div>
        ))}
      </div>

      {/* Table */}
      <SkeletonTable columns={4} rows={5} />
    </div>
  ),
}

// ─── Feed ─────────────────────────────────────────────────────────────────────

export const Feed: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-neutral-100 max-w-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="py-4 first:pt-0 last:pb-0">
          <SkeletonAvatar size="md" lines={2} />
        </div>
      ))}
    </div>
  ),
}

// ─── Live toggle ──────────────────────────────────────────────────────────────

export const LiveToggle: Story = {
  render: () => {
    const [loaded, setLoaded] = useState(false)

    return loaded ? (
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
            BU
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Bones UI</p>
            <p className="text-xs text-neutral-500">hello@bones-ui.dev</p>
          </div>
        </div>
        <p className="text-sm text-neutral-700">
          A minimal, composable design system built on Radix UI and CVA.
          White background. 1.5px border. Yours to extend.
        </p>
        <button
          className="w-fit text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-600"
          onClick={() => setLoaded(false)}
        >
          Reset
        </button>
      </div>
    ) : (
      <div className="flex flex-col gap-4 max-w-sm">
        <SkeletonAvatar size="md" lines={2} />
        <SkeletonText lines={3} />
        <button
          className="w-fit text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-600"
          onClick={() => setLoaded(true)}
        >
          Simulate load complete
        </button>
      </div>
    )
  },
}