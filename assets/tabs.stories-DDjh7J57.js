import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,C as r,H as i,I as a,L as o,M as s,P as c,S as l,V as u,a as d,d as f,f as p,i as ee,o as m,p as te,r as h,u as ne,vt as g}from"./iframe-9JxUVdsE.js";import{G as re,j as ie,s as ae,st as oe,t as se}from"./lucide-react-B1qhNnvJ.js";import{n as ce,t as _}from"./badge-DkdOeWjg.js";import{n as le,t as v}from"./button-CIM5Zm0m.js";import{n as ue,t as de}from"./dist-DjoVkp9z.js";import{i as fe,n as pe,r as me,t as he}from"./dist-DgR9_TfK.js";import{n as ge,t as y}from"./input-Dhjy5eKX.js";function b(e,t){return`${e}-trigger-${t}`}function x(e,t){return`${e}-content-${t}`}var S,C,w,T,_e,E,ve,D,O,k,A,j,M,N,P,F,I,L,R,ye=t((()=>{S=e(g(),1),i(),o(),fe(),te(),c(),de(),ne(),l(),C=n(),w=`Tabs`,[T,_e]=a(w,[me]),E=me(),[ve,D]=T(w),O=S.forwardRef((e,t)=>{let{__scopeTabs:n,value:i,onValueChange:a,defaultValue:o,orientation:c=`horizontal`,dir:l,activationMode:u=`automatic`,...d}=e,p=ue(l),[ee,m]=f({prop:i,onChange:a,defaultProp:o??``,caller:w});return(0,C.jsx)(ve,{scope:n,baseId:r(),value:ee,onValueChange:m,orientation:c,dir:p,activationMode:u,children:(0,C.jsx)(s.div,{dir:p,"data-orientation":c,...d,ref:t})})}),O.displayName=w,k=`TabsList`,A=S.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...i}=e,a=D(k,n),o=E(n);return(0,C.jsx)(pe,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,C.jsx)(s.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})}),A.displayName=k,j=`TabsTrigger`,M=S.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=D(j,n),c=E(n),l=b(o.baseId,r),d=x(o.baseId,r),f=r===o.value;return(0,C.jsx)(he,{asChild:!0,...c,focusable:!i,active:f,children:(0,C.jsx)(s.button,{type:`button`,role:`tab`,"aria-selected":f,"aria-controls":d,"data-state":f?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:l,...a,ref:t,onMouseDown:u(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?o.onValueChange(r):e.preventDefault()}),onKeyDown:u(e.onKeyDown,e=>{[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:u(e.onFocus,()=>{let e=o.activationMode!==`manual`;!f&&!i&&e&&o.onValueChange(r)})})})}),M.displayName=j,N=`TabsContent`,P=S.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,c=D(N,n),l=b(c.baseId,r),u=x(c.baseId,r),d=r===c.value,f=S.useRef(d);return S.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,C.jsx)(p,{present:i||d,children:({present:n})=>(0,C.jsx)(s.div,{"data-state":d?`active`:`inactive`,"data-orientation":c.orientation,role:`tabpanel`,"aria-labelledby":l,hidden:!n,id:u,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:f.current?`0s`:void 0},children:n&&a})})}),P.displayName=N,F=O,I=A,L=M,R=P})),z,be,xe,Se,Ce,B,we=t((()=>{z=n(),be=e(g()),ye(),m(),ee(),xe=d(`relative flex items-center`,{variants:{variant:{underline:[`border-b border-neutral-200`,`gap-0`],pills:[`gap-1`,`rounded-lg p-0`],boxed:[`gap-1 rounded-lg border-[1.5px] border-neutral-200 bg-neutral-100 p-1`]}},defaultVariants:{variant:`underline`}}),Se=d([`relative inline-flex items-center justify-center gap-2 font-medium`,`transition-colors duration-150`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2`,`disabled:pointer-events-none disabled:opacity-40`,`cursor-pointer select-none whitespace-nowrap`],{variants:{variant:{underline:[`border-b-2 border-transparent -mb-px`,`px-1 pb-2.5 pt-0 text-neutral-500`,`hover:text-neutral-900`,`data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900`],pills:[`rounded-md px-3`,`text-neutral-500`,`hover:text-neutral-900 hover:bg-neutral-100`,`data-[state=active]:bg-neutral-900 data-[state=active]:text-white`],boxed:[`rounded-md px-3 flex-1`,`text-neutral-500`,`hover:text-neutral-700`,`data-[state=active]:bg-white data-[state=active]:text-neutral-900`,`data-[state=active]:border-[1.5px] data-[state=active]:border-neutral-200`,`data-[state=active]:shadow-sm`]},size:{sm:`h-8  text-xs`,md:`h-9  text-sm`,lg:`h-10 text-base`},fullWidth:{true:`flex-1`,false:``}},defaultVariants:{variant:`underline`,size:`md`,fullWidth:!1}}),Ce=d([`focus-visible:outline-none`,`data-[state=active]:animate-in data-[state=active]:fade-in-0`,`duration-150`],{variants:{variant:{underline:`pt-4`,pills:`pt-3`,boxed:`pt-3`}},defaultVariants:{variant:`underline`}}),B=be.forwardRef(({items:e,variant:t=`underline`,fullWidth:n=!1,size:r=`md`,className:i,...a},o)=>(0,z.jsxs)(F,{ref:o,className:h(`w-full`,i),...a,children:[(0,z.jsx)(I,{className:h(xe({variant:t})),children:e.map(e=>(0,z.jsxs)(L,{value:e.value,disabled:e.disabled,className:h(Se({variant:t,size:r,fullWidth:n})),children:[e.label,e.adornment&&(0,z.jsx)(`span`,{className:`ml-0.5`,children:e.adornment})]},e.value))}),e.map(e=>(0,z.jsx)(R,{value:e.value,className:Ce({variant:t}),children:e.content},e.value))]})),B.displayName=`Tabs`,B.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"underline" | "pills" | "boxed"`,elements:[{name:`literal`,value:`"underline"`},{name:`literal`,value:`"pills"`},{name:`literal`,value:`"boxed"`}]},description:``,defaultValue:{value:`"underline"`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Stretches tabs to fill the full list width`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Size of the tab triggers`,defaultValue:{value:`"md"`,computed:!1}}},composes:[`Omit`]}})),V,Te,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{V=n(),se(),we(),ce(),ge(),le(),Te={title:`UI/Tabs`,component:B,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`underline`,`pills`,`boxed`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},fullWidth:{control:`boolean`}}},H=[{value:`account`,label:`Account`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Manage your account settings and preferences.`})},{value:`billing`,label:`Billing`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Update your billing information and view invoices.`})},{value:`notifications`,label:`Notifications`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Configure how and when you receive notifications.`})}],U={args:{items:H,variant:`underline`,defaultValue:`account`}},W={args:{items:H,variant:`pills`,defaultValue:`account`}},G={args:{items:H,variant:`boxed`,defaultValue:`account`}},K={render:()=>(0,V.jsx)(`div`,{className:`flex flex-col gap-10`,children:[`underline`,`pills`,`boxed`].map(e=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400`,children:e}),(0,V.jsx)(B,{items:H,variant:e,defaultValue:`account`})]},e))})},q={args:{variant:`underline`,defaultValue:`inbox`,items:[{value:`inbox`,label:`Inbox`,adornment:(0,V.jsx)(_,{variant:`default`,size:`sm`,children:`12`}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Your inbox messages.`})},{value:`sent`,label:`Sent`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Messages you've sent.`})},{value:`drafts`,label:`Drafts`,adornment:(0,V.jsx)(_,{variant:`secondary`,size:`sm`,children:`3`}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Your draft messages.`})},{value:`spam`,label:`Spam`,adornment:(0,V.jsx)(`span`,{className:`inline-block h-2 w-2 rounded-full bg-red-500`}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Spam messages.`})}]}},J={args:{variant:`pills`,defaultValue:`profile`,items:[{value:`profile`,label:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ae,{className:`h-3.5 w-3.5`}),`Profile`]}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Edit your profile details.`})},{value:`billing`,label:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(re,{className:`h-3.5 w-3.5`}),`Billing`]}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Manage billing and plans.`})},{value:`notifications`,label:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(oe,{className:`h-3.5 w-3.5`}),`Alerts`]}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Notification preferences.`})},{value:`security`,label:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ie,{className:`h-3.5 w-3.5`}),`Security`]}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Password and 2FA settings.`})}]}},Y={args:{variant:`underline`,defaultValue:`general`,items:[{value:`general`,label:`General`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`General settings.`})},{value:`integrations`,label:`Integrations`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Third-party integrations.`})},{value:`enterprise`,label:`Enterprise`,disabled:!0,adornment:(0,V.jsx)(_,{variant:`info`,size:`sm`,children:`Pro`}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Enterprise features.`})}]}},X={args:{variant:`boxed`,fullWidth:!0,defaultValue:`monthly`,items:[{value:`monthly`,label:`Monthly`,content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Billed every month.`})},{value:`annual`,label:`Annual`,adornment:(0,V.jsx)(_,{variant:`success`,size:`sm`,children:`20% off`}),content:(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Billed once per year.`})}]}},Z={render:()=>(0,V.jsx)(B,{variant:`underline`,defaultValue:`profile`,items:[{value:`profile`,label:`Profile`,content:(0,V.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-sm`,children:[(0,V.jsx)(y,{label:`Display name`,defaultValue:`Bones UI`}),(0,V.jsx)(y,{label:`Email`,type:`email`,defaultValue:`hello@bones-ui.dev`}),(0,V.jsx)(v,{className:`self-start`,children:`Save changes`})]})},{value:`password`,label:`Password`,content:(0,V.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-sm`,children:[(0,V.jsx)(y,{label:`Current password`,type:`password`,placeholder:`••••••••`}),(0,V.jsx)(y,{label:`New password`,type:`password`,placeholder:`••••••••`}),(0,V.jsx)(y,{label:`Confirm password`,type:`password`,placeholder:`••••••••`}),(0,V.jsx)(v,{className:`self-start`,children:`Update password`})]})},{value:`danger`,label:`Danger zone`,content:(0,V.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,V.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Once you delete your account, there is no going back.`}),(0,V.jsx)(v,{variant:`destructive`,className:`self-start`,children:`Delete account`})]})}]})},Q={render:()=>(0,V.jsx)(`div`,{className:`flex flex-col gap-8`,children:[`sm`,`md`,`lg`].map(e=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`mb-2 text-xs text-neutral-400 uppercase tracking-wide`,children:e}),(0,V.jsx)(B,{size:e,variant:`underline`,defaultValue:`one`,items:[{value:`one`,label:`Overview`,content:null},{value:`two`,label:`Analytics`,content:null},{value:`three`,label:`Settings`,content:null}]})]},e))})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    items: BASIC_ITEMS,
    variant: "underline",
    defaultValue: "account"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    items: BASIC_ITEMS,
    variant: "pills",
    defaultValue: "account"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    items: BASIC_ITEMS,
    variant: "boxed",
    defaultValue: "account"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">
      {(["underline", "pills", "boxed"] as const).map(variant => <div key={variant}>
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
            {variant}
          </p>
          <Tabs items={BASIC_ITEMS} variant={variant} defaultValue="account" />
        </div>)}
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "underline",
    defaultValue: "inbox",
    items: [{
      value: "inbox",
      label: "Inbox",
      adornment: <Badge variant="default" size="sm">12</Badge>,
      content: <p className="text-sm text-neutral-600">Your inbox messages.</p>
    }, {
      value: "sent",
      label: "Sent",
      content: <p className="text-sm text-neutral-600">Messages you've sent.</p>
    }, {
      value: "drafts",
      label: "Drafts",
      adornment: <Badge variant="secondary" size="sm">3</Badge>,
      content: <p className="text-sm text-neutral-600">Your draft messages.</p>
    }, {
      value: "spam",
      label: "Spam",
      adornment: <span className="inline-block h-2 w-2 rounded-full bg-red-500" />,
      content: <p className="text-sm text-neutral-600">Spam messages.</p>
    }]
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "pills",
    defaultValue: "profile",
    items: [{
      value: "profile",
      label: <><User className="h-3.5 w-3.5" />Profile</>,
      content: <p className="text-sm text-neutral-600">Edit your profile details.</p>
    }, {
      value: "billing",
      label: <><CreditCard className="h-3.5 w-3.5" />Billing</>,
      content: <p className="text-sm text-neutral-600">Manage billing and plans.</p>
    }, {
      value: "notifications",
      label: <><Bell className="h-3.5 w-3.5" />Alerts</>,
      content: <p className="text-sm text-neutral-600">Notification preferences.</p>
    }, {
      value: "security",
      label: <><Lock className="h-3.5 w-3.5" />Security</>,
      content: <p className="text-sm text-neutral-600">Password and 2FA settings.</p>
    }]
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "underline",
    defaultValue: "general",
    items: [{
      value: "general",
      label: "General",
      content: <p className="text-sm text-neutral-600">General settings.</p>
    }, {
      value: "integrations",
      label: "Integrations",
      content: <p className="text-sm text-neutral-600">Third-party integrations.</p>
    }, {
      value: "enterprise",
      label: "Enterprise",
      disabled: true,
      adornment: <Badge variant="info" size="sm">Pro</Badge>,
      content: <p className="text-sm text-neutral-600">Enterprise features.</p>
    }]
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "boxed",
    fullWidth: true,
    defaultValue: "monthly",
    items: [{
      value: "monthly",
      label: "Monthly",
      content: <p className="text-sm text-neutral-600">Billed every month.</p>
    }, {
      value: "annual",
      label: "Annual",
      adornment: <Badge variant="success" size="sm">20% off</Badge>,
      content: <p className="text-sm text-neutral-600">Billed once per year.</p>
    }]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs variant="underline" defaultValue="profile" items={[{
    value: "profile",
    label: "Profile",
    content: <div className="flex flex-col gap-4 max-w-sm">
              <Input label="Display name" defaultValue="Bones UI" />
              <Input label="Email" type="email" defaultValue="hello@bones-ui.dev" />
              <Button className="self-start">Save changes</Button>
            </div>
  }, {
    value: "password",
    label: "Password",
    content: <div className="flex flex-col gap-4 max-w-sm">
              <Input label="Current password" type="password" placeholder="••••••••" />
              <Input label="New password" type="password" placeholder="••••••••" />
              <Input label="Confirm password" type="password" placeholder="••••••••" />
              <Button className="self-start">Update password</Button>
            </div>
  }, {
    value: "danger",
    label: "Danger zone",
    content: <div className="flex flex-col gap-3">
              <p className="text-sm text-neutral-600">
                Once you delete your account, there is no going back.
              </p>
              <Button variant="destructive" className="self-start">
                Delete account
              </Button>
            </div>
  }]} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {(["sm", "md", "lg"] as const).map(size => <div key={size}>
          <p className="mb-2 text-xs text-neutral-400 uppercase tracking-wide">{size}</p>
          <Tabs size={size} variant="underline" defaultValue="one" items={[{
        value: "one",
        label: "Overview",
        content: null
      }, {
        value: "two",
        label: "Analytics",
        content: null
      }, {
        value: "three",
        label: "Settings",
        content: null
      }]} />
        </div>)}
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Underline`,`Pills`,`Boxed`,`AllVariants`,`WithAdornments`,`WithIcons`,`WithDisabledTab`,`FullWidth`,`RichContent`,`Sizes`]}))();export{K as AllVariants,G as Boxed,X as FullWidth,W as Pills,Z as RichContent,Q as Sizes,U as Underline,q as WithAdornments,Y as WithDisabledTab,J as WithIcons,$ as __namedExportsOrder,Te as default};