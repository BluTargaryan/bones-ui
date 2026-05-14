import{i as e}from"./preload-helper-DaCzexP6.js";import{$ as t,n,t as r}from"./iframe-9JxUVdsE.js";import{K as i,R as a,S as o,d as s,t as c}from"./lucide-react-B1qhNnvJ.js";import{t as l}from"./button-CIM5Zm0m.js";import{t as u}from"./button-gKHwm_05.js";var d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{d=t(),c(),n(),u(),f={title:`UI/Tooltip`,component:r,tags:[`autodocs`],argTypes:{side:{control:`select`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`select`,options:[`start`,`center`,`end`]},variant:{control:`select`,options:[`dark`,`light`,`danger`]},disabled:{control:`boolean`},showArrow:{control:`boolean`},delayDuration:{control:`number`}}},p={render:e=>(0,d.jsx)(`div`,{className:`flex items-center justify-center p-16`,children:(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{variant:`secondary`,children:`Hover me`})})}),args:{content:`This is a tooltip`,side:`top`,variant:`dark`}},m={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center gap-6 p-16`,children:[(0,d.jsx)(r,{content:`Dark tooltip`,variant:`dark`,children:(0,d.jsx)(l,{variant:`secondary`,size:`sm`,children:`Dark`})}),(0,d.jsx)(r,{content:`Light tooltip`,variant:`light`,children:(0,d.jsx)(l,{variant:`secondary`,size:`sm`,children:`Light`})}),(0,d.jsx)(r,{content:`Destructive action`,variant:`danger`,children:(0,d.jsx)(l,{variant:`ghost`,size:`sm`,children:`Danger`})})]})},h={render:()=>(0,d.jsx)(`div`,{className:`grid grid-cols-2 gap-4 p-16 w-fit mx-auto`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,d.jsx)(r,{content:`Side: ${e}`,side:e,showArrow:!0,children:(0,d.jsx)(l,{variant:`outline`,size:`sm`,className:`w-28`,children:e})},e))})},g={render:()=>(0,d.jsx)(`div`,{className:`flex items-center justify-center p-16`,children:(0,d.jsx)(r,{content:`Tooltip with directional arrow`,showArrow:!0,side:`bottom`,children:(0,d.jsx)(l,{variant:`secondary`,children:`Show arrow`})})})},_={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center justify-center gap-6 p-16`,children:[(0,d.jsx)(r,{content:`You need admin access to delete`,children:(0,d.jsx)(l,{variant:`destructive`,disabled:!0,children:`Delete`})}),(0,d.jsx)(r,{content:`Upgrade to Pro to export`,children:(0,d.jsx)(l,{variant:`secondary`,disabled:!0,leftIcon:(0,d.jsx)(i,{className:`h-4 w-4`}),children:`Export`})})]})},v={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center gap-3 p-16`,children:[(0,d.jsx)(r,{content:`Settings`,side:`bottom`,children:(0,d.jsx)(l,{size:`icon`,variant:`ghost`,"aria-label":`Settings`,children:(0,d.jsx)(o,{className:`h-4 w-4`})})}),(0,d.jsx)(r,{content:`Delete permanently`,variant:`danger`,side:`bottom`,children:(0,d.jsx)(l,{size:`icon`,variant:`ghost`,"aria-label":`Delete`,children:(0,d.jsx)(s,{className:`h-4 w-4`})})}),(0,d.jsx)(r,{content:`More information`,side:`bottom`,children:(0,d.jsx)(l,{size:`icon`,variant:`ghost`,"aria-label":`Info`,children:(0,d.jsx)(a,{className:`h-4 w-4`})})})]})},y={render:()=>(0,d.jsx)(`div`,{className:`flex items-center justify-center p-16`,children:(0,d.jsx)(r,{side:`right`,sideOffset:10,content:(0,d.jsxs)(`div`,{className:`flex flex-col gap-1 max-w-[180px]`,children:[(0,d.jsx)(`span`,{className:`font-medium`,children:`Keyboard shortcut`}),(0,d.jsxs)(`span`,{className:`text-neutral-400`,children:[`Press`,` `,(0,d.jsx)(`kbd`,{className:`rounded border border-neutral-600 px-1 py-0.5 text-[10px]`,children:`⌘K`}),` `,`to open the command palette.`]})]}),children:(0,d.jsx)(l,{variant:`secondary`,children:`Rich tooltip`})})})},b={render:()=>(0,d.jsx)(`div`,{className:`flex items-center justify-center p-16`,children:(0,d.jsx)(r,{content:`No delay`,delayDuration:0,children:(0,d.jsx)(l,{variant:`secondary`,children:`Instant`})})})},x={render:()=>(0,d.jsx)(`div`,{className:`flex items-center justify-center p-16`,children:(0,d.jsx)(r,{content:`You won't see this`,disabled:!0,children:(0,d.jsx)(l,{variant:`secondary`,children:`No tooltip here`})})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center justify-center p-16">
      <Tooltip {...args}>
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
    </div>,
  args: {
    content: "This is a tooltip",
    side: "top",
    variant: "dark"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-16">
      <Tooltip content="Dark tooltip" variant="dark">
        <Button variant="secondary" size="sm">Dark</Button>
      </Tooltip>

      <Tooltip content="Light tooltip" variant="light">
        <Button variant="secondary" size="sm">Light</Button>
      </Tooltip>

      <Tooltip content="Destructive action" variant="danger">
        <Button variant="ghost" size="sm">Danger</Button>
      </Tooltip>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 p-16 w-fit mx-auto">
      {(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} content={\`Side: \${side}\`} side={side} showArrow>
          <Button variant="outline" size="sm" className="w-28">
            {side}
          </Button>
        </Tooltip>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center p-16">
      <Tooltip content="Tooltip with directional arrow" showArrow side="bottom">
        <Button variant="secondary">Show arrow</Button>
      </Tooltip>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-6 p-16">
      <Tooltip content="You need admin access to delete">
        <Button variant="destructive" disabled>
          Delete
        </Button>
      </Tooltip>

      <Tooltip content="Upgrade to Pro to export">
        <Button variant="secondary" disabled leftIcon={<Copy className="h-4 w-4" />}>
          Export
        </Button>
      </Tooltip>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3 p-16">
      <Tooltip content="Settings" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Settings">
          <Settings className="h-4 w-4" />
        </Button>
      </Tooltip>

      <Tooltip content="Delete permanently" variant="danger" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Delete">
          <Trash2 className="h-4 w-4" />
        </Button>
      </Tooltip>

      <Tooltip content="More information" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Info">
          <Info className="h-4 w-4" />
        </Button>
      </Tooltip>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center p-16">
      <Tooltip side="right" sideOffset={10} content={<div className="flex flex-col gap-1 max-w-[180px]">
            <span className="font-medium">Keyboard shortcut</span>
            <span className="text-neutral-400">
              Press{" "}
              <kbd className="rounded border border-neutral-600 px-1 py-0.5 text-[10px]">
                ⌘K
              </kbd>{" "}
              to open the command palette.
            </span>
          </div>}>
        <Button variant="secondary">Rich tooltip</Button>
      </Tooltip>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center p-16">
      <Tooltip content="No delay" delayDuration={0}>
        <Button variant="secondary">Instant</Button>
      </Tooltip>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center p-16">
      <Tooltip content="You won't see this" disabled>
        <Button variant="secondary">No tooltip here</Button>
      </Tooltip>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Variants`,`Sides`,`WithArrow`,`OnDisabledButton`,`OnIconButton`,`RichContent`,`Instant`,`DisabledTooltip`]}))();export{p as Default,x as DisabledTooltip,b as Instant,_ as OnDisabledButton,v as OnIconButton,y as RichContent,h as Sides,m as Variants,g as WithArrow,S as __namedExportsOrder,f as default};