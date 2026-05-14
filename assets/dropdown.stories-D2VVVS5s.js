import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,vt as r}from"./iframe-9JxUVdsE.js";import{A as i,D as a,E as o,F as s,G as c,H as l,J as u,K as d,S as f,U as p,d as m,g as h,k as g,r as _,s as v,st as y,t as b,w as x,x as S}from"./lucide-react-B1qhNnvJ.js";import{n as C,t as w}from"./button-CIM5Zm0m.js";import{a as T,c as E,d as D,f as O,i as k,l as A,m as j,n as M,o as N,p as P,r as F,s as I,t as L,u as R}from"./dropdown-ByEnJNBf.js";var z,B,V,H,U,W,G,K,q,J,Y;t((()=>{z=n(),B=e(r()),b(),j(),C(),V={title:`UI/Dropdown`,tags:[`autodocs`]},H={render:()=>(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsx)(w,{variant:`secondary`,children:`Open menu`})}),(0,z.jsxs)(F,{children:[(0,z.jsx)(T,{icon:(0,z.jsx)(v,{}),children:`Profile`}),(0,z.jsx)(T,{icon:(0,z.jsx)(f,{}),shortcut:`⌘,`,children:`Settings`}),(0,z.jsx)(T,{icon:(0,z.jsx)(c,{}),children:`Billing`}),(0,z.jsx)(A,{}),(0,z.jsx)(T,{icon:(0,z.jsx)(i,{}),destructive:!0,children:`Sign out`})]})]})})},U={render:()=>(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsx)(w,{variant:`outline`,children:`Account`})}),(0,z.jsxs)(F,{className:`w-52`,children:[(0,z.jsx)(N,{children:`My Account`}),(0,z.jsx)(A,{}),(0,z.jsxs)(k,{children:[(0,z.jsx)(T,{icon:(0,z.jsx)(v,{}),shortcut:`⇧⌘P`,children:`Profile`}),(0,z.jsx)(T,{icon:(0,z.jsx)(c,{}),shortcut:`⌘B`,children:`Billing`}),(0,z.jsx)(T,{icon:(0,z.jsx)(f,{}),shortcut:`⌘,`,children:`Settings`}),(0,z.jsx)(T,{icon:(0,z.jsx)(y,{}),shortcut:`⌘N`,children:`Notifications`})]}),(0,z.jsx)(A,{}),(0,z.jsx)(k,{children:(0,z.jsx)(T,{icon:(0,z.jsx)(i,{}),destructive:!0,shortcut:`⇧⌘Q`,children:`Sign out`})})]})]})})},W={render:()=>{let[e,t]=(0,B.useState)({toolbar:!0,statusBar:!1,activityBar:!0});return(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsx)(w,{variant:`secondary`,children:`View options`})}),(0,z.jsxs)(F,{className:`w-48`,children:[(0,z.jsx)(N,{children:`Panel visibility`}),(0,z.jsx)(A,{}),(0,z.jsx)(M,{checked:e.toolbar,onCheckedChange:e=>t(t=>({...t,toolbar:e})),children:`Toolbar`}),(0,z.jsx)(M,{checked:e.statusBar,onCheckedChange:e=>t(t=>({...t,statusBar:e})),children:`Status bar`}),(0,z.jsx)(M,{checked:e.activityBar,onCheckedChange:e=>t(t=>({...t,activityBar:e})),children:`Activity bar`})]})]})})}},G={render:()=>{let[e,t]=(0,B.useState)(`system`),n=[{value:`light`,label:`Light`,icon:(0,z.jsx)(h,{className:`h-4 w-4`})},{value:`dark`,label:`Dark`,icon:(0,z.jsx)(o,{className:`h-4 w-4`})},{value:`system`,label:`System`,icon:(0,z.jsx)(a,{className:`h-4 w-4`})}];return(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsxs)(w,{variant:`secondary`,children:[n.find(t=>t.value===e)?.icon,`Theme`]})}),(0,z.jsxs)(F,{className:`w-40`,children:[(0,z.jsx)(N,{children:`Appearance`}),(0,z.jsx)(A,{}),(0,z.jsx)(I,{value:e,onValueChange:t,children:n.map(e=>(0,z.jsx)(E,{value:e.value,children:e.label},e.value))})]})]})})}},K={render:()=>(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsx)(w,{variant:`secondary`,children:`Edit`})}),(0,z.jsxs)(F,{className:`w-44`,children:[(0,z.jsx)(T,{icon:(0,z.jsx)(d,{}),shortcut:`⌘C`,children:`Copy`}),(0,z.jsx)(T,{icon:(0,z.jsx)(x,{}),shortcut:`⌘X`,children:`Cut`}),(0,z.jsx)(T,{icon:(0,z.jsx)(u,{}),shortcut:`⌘V`,children:`Paste`}),(0,z.jsx)(A,{}),(0,z.jsxs)(R,{children:[(0,z.jsx)(O,{icon:(0,z.jsx)(S,{}),children:`Share`}),(0,z.jsxs)(D,{className:`w-40`,children:[(0,z.jsx)(T,{icon:(0,z.jsx)(s,{}),children:`Copy link`}),(0,z.jsx)(T,{icon:(0,z.jsx)(g,{}),children:`Email`}),(0,z.jsx)(A,{}),(0,z.jsx)(T,{icon:(0,z.jsx)(_,{}),children:`X`})]})]}),(0,z.jsx)(A,{}),(0,z.jsx)(T,{icon:(0,z.jsx)(p,{}),children:`Download`}),(0,z.jsx)(T,{icon:(0,z.jsx)(m,{}),destructive:!0,children:`Delete`})]})]})})},q={render:()=>(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsx)(w,{variant:`secondary`,children:`Actions`})}),(0,z.jsxs)(F,{className:`w-44`,children:[(0,z.jsx)(T,{icon:(0,z.jsx)(d,{}),children:`Duplicate`}),(0,z.jsx)(T,{icon:(0,z.jsx)(p,{}),disabled:!0,children:`Export (Pro only)`}),(0,z.jsx)(A,{}),(0,z.jsx)(T,{icon:(0,z.jsx)(S,{}),disabled:!0,children:`Share (Pro only)`}),(0,z.jsx)(A,{}),(0,z.jsx)(T,{icon:(0,z.jsx)(m,{}),destructive:!0,children:`Delete`})]})]})})},J={render:()=>(0,z.jsx)(`div`,{className:`flex justify-center p-12`,children:(0,z.jsxs)(L,{children:[(0,z.jsx)(P,{asChild:!0,children:(0,z.jsx)(w,{size:`icon`,variant:`ghost`,"aria-label":`More actions`,children:(0,z.jsx)(l,{className:`h-4 w-4`})})}),(0,z.jsxs)(F,{align:`end`,className:`w-40`,children:[(0,z.jsx)(T,{icon:(0,z.jsx)(f,{}),children:`Edit`}),(0,z.jsx)(T,{icon:(0,z.jsx)(d,{}),children:`Duplicate`}),(0,z.jsx)(A,{}),(0,z.jsx)(T,{icon:(0,z.jsx)(m,{}),destructive:!0,children:`Delete`})]})]})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center p-12">
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem icon={<User />} shortcut="⇧⌘P">Profile</DropdownMenuItem>
            <DropdownMenuItem icon={<CreditCard />} shortcut="⌘B">Billing</DropdownMenuItem>
            <DropdownMenuItem icon={<Settings />} shortcut="⌘,">Settings</DropdownMenuItem>
            <DropdownMenuItem icon={<Bell />} shortcut="⌘N">Notifications</DropdownMenuItem>
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState({
      toolbar: true,
      statusBar: false,
      activityBar: true
    });
    return <div className="flex justify-center p-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">View options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Panel visibility</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={state.toolbar} onCheckedChange={v => setState(s => ({
            ...s,
            toolbar: v
          }))}>
              Toolbar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={state.statusBar} onCheckedChange={v => setState(s => ({
            ...s,
            statusBar: v
          }))}>
              Status bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={state.activityBar} onCheckedChange={v => setState(s => ({
            ...s,
            activityBar: v
          }))}>
              Activity bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState("system");
    const options = [{
      value: "light",
      label: "Light",
      icon: <Sun className="h-4 w-4" />
    }, {
      value: "dark",
      label: "Dark",
      icon: <Moon className="h-4 w-4" />
    }, {
      value: "system",
      label: "System",
      icon: <Monitor className="h-4 w-4" />
    }];
    return <div className="flex justify-center p-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              {options.find(o => o.value === theme)?.icon}
              Theme
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              {options.map(o => <DropdownMenuRadioItem key={o.value} value={o.value}>
                  {o.label}
                </DropdownMenuRadioItem>)}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Edit</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem icon={<Copy />} shortcut="⌘C">Copy</DropdownMenuItem>
          <DropdownMenuItem icon={<Scissors />} shortcut="⌘X">Cut</DropdownMenuItem>
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center p-12">
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-center p-12">
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
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`WithGroups`,`WithCheckboxes`,`WithRadio`,`WithSubmenu`,`WithDisabledItems`,`IconTrigger`]}))();export{H as Default,J as IconTrigger,W as WithCheckboxes,q as WithDisabledItems,U as WithGroups,G as WithRadio,K as WithSubmenu,Y as __namedExportsOrder,V as default};