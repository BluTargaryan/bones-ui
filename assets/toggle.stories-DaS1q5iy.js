import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,H as r,I as i,L as a,M as o,P as s,V as c,a as l,d as u,i as d,o as f,r as p,u as ee,vt as m}from"./iframe-9JxUVdsE.js";import{B as te,E as ne,I as re,L as h,N as ie,P as ae,_ as oe,a as se,c as g,f as ce,h as le,i as ue,m as de,ot as _,p as fe,st as pe,t as me}from"./lucide-react-B1qhNnvJ.js";import{n as he,t as ge}from"./dist-DjoVkp9z.js";import{i as _e,n as ve,r as v,t as ye}from"./dist-DgR9_TfK.js";var y,b,x,S,C,be=t((()=>{y=e(m(),1),r(),ee(),s(),b=n(),x=`Toggle`,S=y.forwardRef((e,t)=>{let{pressed:n,defaultPressed:r,onPressedChange:i,...a}=e,[s,l]=u({prop:n,onChange:i,defaultProp:r??!1,caller:x});return(0,b.jsx)(o.button,{type:`button`,"aria-pressed":s,"data-state":s?`on`:`off`,"data-disabled":e.disabled?``:void 0,...a,ref:t,onClick:c(e.onClick,()=>{e.disabled||l(!s)})})}),S.displayName=x,C=S})),w,T,E,D,xe,O,k,A,j,Se,Ce,we,Te,M,N,P,F,Ee,De,Oe=t((()=>{w=e(m(),1),a(),s(),_e(),be(),ee(),ge(),T=n(),E=`ToggleGroup`,[D,xe]=i(E,[v]),O=v(),k=w.forwardRef((e,t)=>{let{type:n,...r}=e;if(n===`single`)return(0,T.jsx)(Se,{...r,ref:t});if(n===`multiple`)return(0,T.jsx)(Ce,{...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${E}\``)}),k.displayName=E,[A,j]=D(E),Se=w.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=u({prop:n,defaultProp:r??``,onChange:i,caller:E});return(0,T.jsx)(A,{scope:e.__scopeToggleGroup,type:`single`,value:w.useMemo(()=>o?[o]:[],[o]),onItemActivate:s,onItemDeactivate:w.useCallback(()=>s(``),[s]),children:(0,T.jsx)(M,{...a,ref:t})})}),Ce=w.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=u({prop:n,defaultProp:r??[],onChange:i,caller:E}),c=w.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=w.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,T.jsx)(A,{scope:e.__scopeToggleGroup,type:`multiple`,value:o,onItemActivate:c,onItemDeactivate:l,children:(0,T.jsx)(M,{...a,ref:t})})}),k.displayName=E,[we,Te]=D(E),M=w.forwardRef((e,t)=>{let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:a,dir:s,loop:c=!0,...l}=e,u=O(n),d=he(s),f={role:`group`,dir:d,...l};return(0,T.jsx)(we,{scope:n,rovingFocus:i,disabled:r,children:i?(0,T.jsx)(ve,{asChild:!0,...u,orientation:a,dir:d,loop:c,children:(0,T.jsx)(o.div,{...f,ref:t})}):(0,T.jsx)(o.div,{...f,ref:t})})}),N=`ToggleGroupItem`,P=w.forwardRef((e,t)=>{let n=j(N,e.__scopeToggleGroup),r=Te(N,e.__scopeToggleGroup),i=O(e.__scopeToggleGroup),a=n.value.includes(e.value),o=r.disabled||e.disabled,s={...e,pressed:a,disabled:o},c=w.useRef(null);return r.rovingFocus?(0,T.jsx)(ye,{asChild:!0,...i,focusable:!o,active:a,ref:c,children:(0,T.jsx)(F,{...s,ref:t})}):(0,T.jsx)(F,{...s,ref:t})}),P.displayName=N,F=w.forwardRef((e,t)=>{let{__scopeToggleGroup:n,value:r,...i}=e,a=j(N,n),o={role:`radio`,"aria-checked":e.pressed,"aria-pressed":void 0};return(0,T.jsx)(S,{...a.type===`single`?o:void 0,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})}),Ee=k,De=P})),I,L,R,z,B,V,H,ke=t((()=>{I=n(),L=e(m()),be(),Oe(),f(),d(),R=l([`inline-flex items-center justify-center gap-2`,`rounded-md border-[1.5px] font-medium`,`transition-colors duration-150`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2`,`disabled:pointer-events-none disabled:opacity-40`,`cursor-pointer select-none`],{variants:{variant:{default:[`border-transparent bg-transparent text-neutral-600`,`hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900`,`data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white`],outline:[`border-neutral-300 bg-white text-neutral-600`,`hover:bg-neutral-50 hover:text-neutral-900`,`data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white`],ghost:[`border-transparent bg-transparent text-neutral-600`,`hover:bg-neutral-100 hover:text-neutral-900`,`data-[state=on]:bg-neutral-100 data-[state=on]:text-neutral-900`]},size:{sm:`h-8  px-2.5 text-xs [&>svg]:h-3.5 [&>svg]:w-3.5`,md:`h-9  px-3   text-sm [&>svg]:h-4   [&>svg]:w-4`,lg:`h-10 px-4   text-sm [&>svg]:h-4   [&>svg]:w-4`,icon:`h-9  w-9    p-0     [&>svg]:h-4   [&>svg]:w-4`}},defaultVariants:{variant:`default`,size:`md`}}),z=L.forwardRef(({className:e,variant:t,size:n,...r},i)=>(0,I.jsx)(C,{ref:i,className:p(R({variant:t,size:n}),e),...r})),z.displayName=`Toggle`,B=L.createContext({variant:`default`,size:`md`}),V=L.forwardRef(({className:e,variant:t=`default`,size:n=`md`,children:r,...i},a)=>(0,I.jsx)(B.Provider,{value:{variant:t,size:n},children:(0,I.jsx)(Ee,{ref:a,className:p(`flex items-center gap-1`,e),...i,children:r})})),V.displayName=`ToggleGroup`,H=L.forwardRef(({className:e,variant:t,size:n,children:r,...i},a)=>{let o=L.useContext(B);return(0,I.jsx)(De,{ref:a,className:p(R({variant:t??o.variant,size:n??o.size}),e),...i,children:r})}),H.displayName=`ToggleGroupItem`,z.__docgenInfo={description:``,methods:[],displayName:`Toggle`,composes:[`VariantProps`]},V.__docgenInfo={description:``,methods:[],displayName:`ToggleGroup`,props:{variant:{defaultValue:{value:`"default"`,computed:!1},required:!1},size:{defaultValue:{value:`"md"`,computed:!1},required:!1}}},H.__docgenInfo={description:``,methods:[],displayName:`ToggleGroupItem`,composes:[`VariantProps`]}})),U,W,Ae,G,K,q,J,Y,X,Z,Q,$,je;t((()=>{U=n(),W=e(m()),me(),ke(),Ae={title:`UI/Toggle`,tags:[`autodocs`]},G={render:()=>(0,U.jsx)(z,{"aria-label":`Toggle bold`,children:(0,U.jsx)(_,{})})},K={render:()=>(0,U.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`default`,`outline`,`ghost`].map(e=>(0,U.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,U.jsx)(`span`,{className:`w-16 text-xs text-neutral-400`,children:e}),(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(z,{variant:e,"aria-label":`Unpressed`,children:(0,U.jsx)(_,{})}),(0,U.jsx)(z,{variant:e,defaultPressed:!0,"aria-label":`Pressed`,children:(0,U.jsx)(_,{})}),(0,U.jsx)(z,{variant:e,disabled:!0,"aria-label":`Disabled`,children:(0,U.jsx)(_,{})})]})]},e))})},q={render:()=>(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsxs)(z,{variant:`outline`,size:`md`,"aria-label":`Toggle dark mode`,children:[(0,U.jsx)(ne,{}),`Dark mode`]}),(0,U.jsxs)(z,{variant:`outline`,size:`md`,defaultPressed:!0,"aria-label":`Toggle notifications`,children:[(0,U.jsx)(pe,{}),`Notifications`]})]})},J={render:()=>{let[e,t]=(0,W.useState)(!1);return(0,U.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,U.jsxs)(z,{variant:`outline`,pressed:e,onPressedChange:t,"aria-label":`Toggle wifi`,children:[e?(0,U.jsx)(ue,{}):(0,U.jsx)(se,{}),e?`Connected`:`Disconnected`]}),(0,U.jsxs)(`span`,{className:`text-xs text-neutral-500`,children:[`State: `,(0,U.jsx)(`strong`,{children:e?`on`:`off`})]})]})}},Y={render:()=>{let[e,t]=(0,W.useState)(`left`);return(0,U.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,U.jsxs)(V,{type:`single`,variant:`outline`,value:e,onValueChange:e=>{e&&t(e)},"aria-label":`Text alignment`,children:[(0,U.jsx)(H,{value:`left`,"aria-label":`Align left`,children:(0,U.jsx)(ce,{})}),(0,U.jsx)(H,{value:`center`,"aria-label":`Align center`,children:(0,U.jsx)(le,{})}),(0,U.jsx)(H,{value:`right`,"aria-label":`Align right`,children:(0,U.jsx)(de,{})}),(0,U.jsx)(H,{value:`justify`,"aria-label":`Justify`,children:(0,U.jsx)(fe,{})})]}),(0,U.jsxs)(`span`,{className:`text-xs text-neutral-500`,children:[`Active: `,(0,U.jsx)(`strong`,{children:e})]})]})}},X={render:()=>{let[e,t]=(0,W.useState)([`bold`]);return(0,U.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,U.jsxs)(V,{type:`multiple`,variant:`outline`,value:e,onValueChange:t,"aria-label":`Text formatting`,children:[(0,U.jsx)(H,{value:`bold`,"aria-label":`Bold`,children:(0,U.jsx)(_,{})}),(0,U.jsx)(H,{value:`italic`,"aria-label":`Italic`,children:(0,U.jsx)(h,{})}),(0,U.jsx)(H,{value:`underline`,"aria-label":`Underline`,children:(0,U.jsx)(g,{})}),(0,U.jsx)(H,{value:`strikethrough`,"aria-label":`Strikethrough`,children:(0,U.jsx)(oe,{})})]}),(0,U.jsxs)(`span`,{className:`text-xs text-neutral-500`,children:[`Active: `,(0,U.jsx)(`strong`,{children:e.join(`, `)||`none`})]})]})}},Z={render:()=>{let[e,t]=(0,W.useState)(`left`),[n,r]=(0,W.useState)([]),[i,a]=(0,W.useState)(``);return(0,U.jsx)(`div`,{className:`flex w-fit flex-col gap-1 rounded-md border-[1.5px] border-neutral-200 bg-white p-1`,children:(0,U.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,U.jsxs)(V,{type:`multiple`,value:n,onValueChange:r,"aria-label":`Text formatting`,children:[(0,U.jsx)(H,{value:`bold`,size:`icon`,"aria-label":`Bold`,children:(0,U.jsx)(_,{})}),(0,U.jsx)(H,{value:`italic`,size:`icon`,"aria-label":`Italic`,children:(0,U.jsx)(h,{})}),(0,U.jsx)(H,{value:`underline`,size:`icon`,"aria-label":`Underline`,children:(0,U.jsx)(g,{})})]}),(0,U.jsx)(`div`,{className:`mx-1 h-5 w-px bg-neutral-200`,"aria-hidden":!0}),(0,U.jsxs)(V,{type:`single`,value:e,onValueChange:e=>{e&&t(e)},"aria-label":`Alignment`,children:[(0,U.jsx)(H,{value:`left`,size:`icon`,"aria-label":`Left`,children:(0,U.jsx)(ce,{})}),(0,U.jsx)(H,{value:`center`,size:`icon`,"aria-label":`Center`,children:(0,U.jsx)(le,{})}),(0,U.jsx)(H,{value:`right`,size:`icon`,"aria-label":`Right`,children:(0,U.jsx)(de,{})})]}),(0,U.jsx)(`div`,{className:`mx-1 h-5 w-px bg-neutral-200`,"aria-hidden":!0}),(0,U.jsxs)(V,{type:`single`,value:i,onValueChange:a,"aria-label":`List style`,children:[(0,U.jsx)(H,{value:`bullet`,size:`icon`,"aria-label":`Bullet list`,children:(0,U.jsx)(ie,{})}),(0,U.jsx)(H,{value:`ordered`,size:`icon`,"aria-label":`Ordered list`,children:(0,U.jsx)(ae,{})})]})]})})}},Q={render:()=>{let[e,t]=(0,W.useState)(`grid`);return(0,U.jsxs)(V,{type:`single`,variant:`outline`,value:e,onValueChange:e=>{e&&t(e)},"aria-label":`View mode`,children:[(0,U.jsx)(H,{value:`grid`,size:`icon`,"aria-label":`Grid view`,children:(0,U.jsx)(te,{})}),(0,U.jsx)(H,{value:`list`,size:`icon`,"aria-label":`List view`,children:(0,U.jsx)(re,{})})]})}},$={render:()=>(0,U.jsx)(`div`,{className:`flex flex-col gap-3`,children:[`sm`,`md`,`lg`,`icon`].map(e=>(0,U.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,U.jsx)(`span`,{className:`w-8 text-xs text-neutral-400`,children:e}),(0,U.jsxs)(V,{type:`multiple`,variant:`outline`,size:e,children:[(0,U.jsx)(H,{value:`b`,"aria-label":`Bold`,children:(0,U.jsx)(_,{})}),(0,U.jsx)(H,{value:`i`,"aria-label":`Italic`,children:(0,U.jsx)(h,{})}),(0,U.jsx)(H,{value:`u`,"aria-label":`Underline`,children:(0,U.jsx)(g,{})})]})]},e))})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(["default", "outline", "ghost"] as const).map(variant => <div key={variant} className="flex items-center gap-4">
          <span className="w-16 text-xs text-neutral-400">{variant}</span>
          <div className="flex items-center gap-2">
            <Toggle variant={variant} aria-label="Unpressed">
              <Bold />
            </Toggle>
            <Toggle variant={variant} defaultPressed aria-label="Pressed">
              <Bold />
            </Toggle>
            <Toggle variant={variant} disabled aria-label="Disabled">
              <Bold />
            </Toggle>
          </div>
        </div>)}
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Toggle variant="outline" size="md" aria-label="Toggle dark mode">
        <Moon />
        Dark mode
      </Toggle>
      <Toggle variant="outline" size="md" defaultPressed aria-label="Toggle notifications">
        <Bell />
        Notifications
      </Toggle>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div className="flex items-center gap-3">
        <Toggle variant="outline" pressed={on} onPressedChange={setOn} aria-label="Toggle wifi">
          {on ? <Wifi /> : <WifiOff />}
          {on ? "Connected" : "Disconnected"}
        </Toggle>
        <span className="text-xs text-neutral-500">
          State: <strong>{on ? "on" : "off"}</strong>
        </span>
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [align, setAlign] = useState("left");
    return <div className="flex flex-col gap-3">
        <ToggleGroup type="single" variant="outline" value={align} onValueChange={v => {
        if (v) setAlign(v);
      }} aria-label="Text alignment">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify" aria-label="Justify">
            <AlignJustify />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-neutral-500">
          Active: <strong>{align}</strong>
        </span>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formats, setFormats] = useState<string[]>(["bold"]);
    return <div className="flex flex-col gap-3">
        <ToggleGroup type="multiple" variant="outline" value={formats} onValueChange={setFormats} aria-label="Text formatting">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline />
          </ToggleGroupItem>
          <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
            <Strikethrough />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="text-xs text-neutral-500">
          Active: <strong>{formats.join(", ") || "none"}</strong>
        </span>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [align, setAlign] = useState("left");
    const [formats, setFormats] = useState<string[]>([]);
    const [list, setList] = useState("");
    return <div className="flex w-fit flex-col gap-1 rounded-md border-[1.5px] border-neutral-200 bg-white p-1">
        <div className="flex items-center gap-1">
          {/* Formatting — multi */}
          <ToggleGroup type="multiple" value={formats} onValueChange={setFormats} aria-label="Text formatting">
            <ToggleGroupItem value="bold" size="icon" aria-label="Bold"><Bold /></ToggleGroupItem>
            <ToggleGroupItem value="italic" size="icon" aria-label="Italic"><Italic /></ToggleGroupItem>
            <ToggleGroupItem value="underline" size="icon" aria-label="Underline"><Underline /></ToggleGroupItem>
          </ToggleGroup>

          <div className="mx-1 h-5 w-px bg-neutral-200" aria-hidden />

          {/* Alignment — single */}
          <ToggleGroup type="single" value={align} onValueChange={v => {
          if (v) setAlign(v);
        }} aria-label="Alignment">
            <ToggleGroupItem value="left" size="icon" aria-label="Left"><AlignLeft /></ToggleGroupItem>
            <ToggleGroupItem value="center" size="icon" aria-label="Center"><AlignCenter /></ToggleGroupItem>
            <ToggleGroupItem value="right" size="icon" aria-label="Right"><AlignRight /></ToggleGroupItem>
          </ToggleGroup>

          <div className="mx-1 h-5 w-px bg-neutral-200" aria-hidden />

          {/* List type — single */}
          <ToggleGroup type="single" value={list} onValueChange={setList} aria-label="List style">
            <ToggleGroupItem value="bullet" size="icon" aria-label="Bullet list"><List /></ToggleGroupItem>
            <ToggleGroupItem value="ordered" size="icon" aria-label="Ordered list"><ListOrdered /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState("grid");
    return <ToggleGroup type="single" variant="outline" value={view} onValueChange={v => {
      if (v) setView(v);
    }} aria-label="View mode">
        <ToggleGroupItem value="grid" size="icon" aria-label="Grid view">
          <Grid />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" size="icon" aria-label="List view">
          <LayoutList />
        </ToggleGroupItem>
      </ToggleGroup>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {(["sm", "md", "lg", "icon"] as const).map(size => <div key={size} className="flex items-center gap-4">
          <span className="w-8 text-xs text-neutral-400">{size}</span>
          <ToggleGroup type="multiple" variant="outline" size={size}>
            <ToggleGroupItem value="b" aria-label="Bold"><Bold /></ToggleGroupItem>
            <ToggleGroupItem value="i" aria-label="Italic"><Italic /></ToggleGroupItem>
            <ToggleGroupItem value="u" aria-label="Underline"><Underline /></ToggleGroupItem>
          </ToggleGroup>
        </div>)}
    </div>
}`,...$.parameters?.docs?.source}}},je=[`Default`,`Variants`,`WithLabel`,`Controlled`,`GroupSingle`,`GroupMultiple`,`Toolbar`,`ViewSwitcher`,`Sizes`]}))();export{J as Controlled,G as Default,X as GroupMultiple,Y as GroupSingle,$ as Sizes,Z as Toolbar,K as Variants,Q as ViewSwitcher,q as WithLabel,je as __namedExportsOrder,Ae as default};