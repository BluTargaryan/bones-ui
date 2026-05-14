import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,vt as r}from"./iframe-9JxUVdsE.js";import{b as i,i as a,q as o,t as s,v as c}from"./lucide-react-B1qhNnvJ.js";import{n as l,t as u}from"./badge-DkdOeWjg.js";var d,f,p,m,h,g,_,v,y,b,x,S;t((()=>{d=n(),f=e(r()),s(),l(),p={title:`UI/Badge`,component:u,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`outline`,`success`,`warning`,`destructive`,`info`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},dot:{control:`boolean`},dismissible:{control:`boolean`}}},m={args:{children:`Badge`,variant:`secondary`}},h={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(u,{variant:`default`,children:`Default`}),(0,d.jsx)(u,{variant:`secondary`,children:`Secondary`}),(0,d.jsx)(u,{variant:`outline`,children:`Outline`}),(0,d.jsx)(u,{variant:`success`,children:`Success`}),(0,d.jsx)(u,{variant:`warning`,children:`Warning`}),(0,d.jsx)(u,{variant:`destructive`,children:`Destructive`}),(0,d.jsx)(u,{variant:`info`,children:`Info`})]})},g={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(u,{size:`sm`,variant:`secondary`,children:`Small`}),(0,d.jsx)(u,{size:`md`,variant:`secondary`,children:`Medium`}),(0,d.jsx)(u,{size:`lg`,variant:`secondary`,children:`Large`})]})},_={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(u,{variant:`success`,dot:!0,children:`Active`}),(0,d.jsx)(u,{variant:`warning`,dot:!0,children:`Degraded`}),(0,d.jsx)(u,{variant:`destructive`,dot:!0,children:`Offline`}),(0,d.jsx)(u,{variant:`secondary`,dot:!0,children:`Idle`}),(0,d.jsx)(u,{variant:`info`,dot:!0,children:`Syncing`})]})},v={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(u,{variant:`success`,icon:(0,d.jsx)(a,{}),children:`Connected`}),(0,d.jsx)(u,{variant:`info`,icon:(0,d.jsx)(i,{}),children:`Verified`}),(0,d.jsx)(u,{variant:`warning`,icon:(0,d.jsx)(o,{}),children:`Pending`}),(0,d.jsx)(u,{variant:`default`,icon:(0,d.jsx)(c,{}),children:`Featured`})]})},y={render:()=>{let e=[`React`,`TypeScript`,`Tailwind`,`Radix UI`,`CVA`],[t,n]=(0,f.useState)(e);return(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:t.map(e=>(0,d.jsx)(u,{variant:`secondary`,dismissible:!0,onDismiss:()=>n(t=>t.filter(t=>t!==e)),children:e},e))}),t.length===0&&(0,d.jsx)(`button`,{className:`text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-600 w-fit`,onClick:()=>n(e),children:`Reset`})]})}},b={render:()=>(0,d.jsx)(`div`,{className:`flex flex-col gap-3 rounded-md border-[1.5px] border-neutral-200 p-4 w-fit`,children:[{label:`API`,status:`Operational`,variant:`success`},{label:`Auth`,status:`Degraded`,variant:`warning`},{label:`Database`,status:`Offline`,variant:`destructive`},{label:`CDN`,status:`Maintenance`,variant:`info`}].map(({label:e,status:t,variant:n})=>(0,d.jsxs)(`div`,{className:`flex items-center justify-between gap-8`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-neutral-700`,children:e}),(0,d.jsx)(u,{variant:n,dot:!0,size:`sm`,children:t})]},e))})},x={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold text-neutral-900`,children:`Billing`}),(0,d.jsx)(u,{variant:`info`,size:`sm`,children:`Beta`})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold text-neutral-900`,children:`Analytics`}),(0,d.jsx)(u,{variant:`default`,size:`sm`,children:`New`})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold text-neutral-900`,children:`Legacy API`}),(0,d.jsx)(u,{variant:`warning`,size:`sm`,children:`Deprecated`})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "secondary"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="sm" variant="secondary">Small</Badge>
      <Badge size="md" variant="secondary">Medium</Badge>
      <Badge size="lg" variant="secondary">Large</Badge>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Degraded</Badge>
      <Badge variant="destructive" dot>Offline</Badge>
      <Badge variant="secondary" dot>Idle</Badge>
      <Badge variant="info" dot>Syncing</Badge>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="success" icon={<Wifi />}>Connected</Badge>
      <Badge variant="info" icon={<ShieldCheck />}>Verified</Badge>
      <Badge variant="warning" icon={<Clock />}>Pending</Badge>
      <Badge variant="default" icon={<Star />}>Featured</Badge>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const INITIAL = ["React", "TypeScript", "Tailwind", "Radix UI", "CVA"];
    const [tags, setTags] = useState(INITIAL);
    return <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => <Badge key={tag} variant="secondary" dismissible onDismiss={() => setTags(prev => prev.filter(t => t !== tag))}>
              {tag}
            </Badge>)}
        </div>

        {tags.length === 0 && <button className="text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-600 w-fit" onClick={() => setTags(INITIAL)}>
            Reset
          </button>}
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 rounded-md border-[1.5px] border-neutral-200 p-4 w-fit">
      {[{
      label: "API",
      status: "Operational",
      variant: "success" as const
    }, {
      label: "Auth",
      status: "Degraded",
      variant: "warning" as const
    }, {
      label: "Database",
      status: "Offline",
      variant: "destructive" as const
    }, {
      label: "CDN",
      status: "Maintenance",
      variant: "info" as const
    }].map(({
      label,
      status,
      variant
    }) => <div key={label} className="flex items-center justify-between gap-8">
          <span className="text-sm font-medium text-neutral-700">{label}</span>
          <Badge variant={variant} dot size="sm">{status}</Badge>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900">Billing</h3>
        <Badge variant="info" size="sm">Beta</Badge>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900">Analytics</h3>
        <Badge variant="default" size="sm">New</Badge>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900">Legacy API</h3>
        <Badge variant="warning" size="sm">Deprecated</Badge>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`AllVariants`,`Sizes`,`WithDot`,`WithIcon`,`Dismissible`,`StatusIndicators`,`InContext`]}))();export{h as AllVariants,m as Default,y as Dismissible,x as InContext,g as Sizes,b as StatusIndicators,_ as WithDot,v as WithIcon,S as __namedExportsOrder,p as default};