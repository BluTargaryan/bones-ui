# BonesUI

A minimal, composable React design system built on [Radix UI](https://radix-ui.com) primitives
and [CVA](https://cva.style). White background. 1.5px border. Yours to extend.

## Install

```bash
npm install bones-ui
```

## Peer dependencies

```bash
npm install tailwindcss react react-dom
```

## Tailwind setup

Add the BonesUI source to your `tailwind.config.ts` content paths
so Tailwind includes the component classes:

```ts
// tailwind.config.ts
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/bones-ui/dist/**/*.{js,mjs}",  // ← add this
  ],
}
```

Add the shimmer animation:

```ts
theme: {
  extend: {
    keyframes: {
      shimmer: {
        "0%":   { backgroundPosition: "-400px 0" },
        "100%": { backgroundPosition: "400px 0"  },
      },
    },
    animation: {
      shimmer: "shimmer 1.4s ease-in-out infinite",
    },
  },
},
```

## Provider setup

Wrap your app once:

```tsx
import { TooltipProvider } from "bones-ui"
import { ToastProvider }   from "bones-ui"

export default function RootLayout({ children }) {
  return (
    <TooltipProvider>
      <ToastProvider position="bottom-right">
        {children}
      </ToastProvider>
    </TooltipProvider>
  )
}
```

## Usage

```tsx
import { Button, Badge, Card, CardHeader, CardTitle, CardBody } from "bones-ui"

export function Example() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardBody className="flex gap-2">
        <Button>Primary</Button>
        <Badge variant="success" dot>Live</Badge>
      </CardBody>
    </Card>
  )
}
```

## Components

| Component   | Description                                     |
|-------------|-------------------------------------------------|
| Button      | 5 variants, loading, error, icon slots          |
| Input       | Label, helper text, prefix/suffix, error        |
| Select      | Grouped options, searchable, all states         |
| Modal       | Compound slots, sizes, focus trap               |
| Tooltip     | 3 variants, sides, disabled trigger support     |
| Badge       | 7 variants, dot, icon, dismissible              |
| Tabs        | Underline / pills / boxed, adornments           |
| Dropdown    | Groups, checkboxes, radio, submenus, shortcuts  |
| Toggle      | Single + ToggleGroup, single/multi select       |
| Combobox    | Search, single/multi, grouped, async-ready      |
| Toast       | 5 variants, actions, loading, imperative hook   |
| Skeleton    | Primitives + Text, Avatar, Card, Table, Button  |
| Avatar      | Image→initials→icon cascade, status, group     |
| Card        | Compound slots, interactive, image, disabled    |
| DataTable   | Sort, select, search, pagination, row actions   |
| Checkbox    | Checked, indeterminate, disabled, controlled    |


## Storybook

[blutargaryan.github.io/bones-ui](https://blutargaryan.github.io/bones-ui)

## License

MIT