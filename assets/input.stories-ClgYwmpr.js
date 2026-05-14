import{i as e}from"./preload-helper-DaCzexP6.js";import{$ as t}from"./iframe-9JxUVdsE.js";import{C as n,V as r,W as i,ct as a,t as o}from"./lucide-react-B1qhNnvJ.js";import{n as s,t as c}from"./input-Dhjy5eKX.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l=t(),o(),s(),u={title:`UI/Input`,component:c,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},d={args:{label:`Email address`,placeholder:`you@example.com`,helperText:`We'll never share your email.`}},f={args:{label:`Email address`,placeholder:`you@example.com`,defaultValue:`not-an-email`,errorMessage:`Please enter a valid email address.`}},p={args:{label:`Username`,placeholder:`your_username`,defaultValue:`bones_ui`,disabled:!0,helperText:`Username cannot be changed.`}},m={args:{label:`Search`,placeholder:`Checking availability…`,defaultValue:`bones-ui`,loading:!0}},h={args:{label:`Search`,placeholder:`Find anything…`,prefix:(0,l.jsx)(n,{className:`h-4 w-4`})}},g={args:{label:`Password`,type:`password`,placeholder:`Enter your password`,suffix:(0,l.jsx)(r,{className:`h-4 w-4 cursor-pointer`})}},_={args:{label:`Amount`,placeholder:`0.00`,prefix:(0,l.jsx)(i,{className:`h-4 w-4`}),helperText:`Enter amount in USD`}},v={args:{label:`Twitter handle`,placeholder:`yourhandle`,prefix:(0,l.jsx)(a,{className:`h-4 w-4`})}},y={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,l.jsx)(c,{size:`sm`,placeholder:`Small input`,label:`Small`}),(0,l.jsx)(c,{size:`md`,placeholder:`Medium input`,label:`Medium`}),(0,l.jsx)(c,{size:`lg`,placeholder:`Large input`,label:`Large`})]})},b={args:{label:`Email`,placeholder:`you@example.com`,defaultValue:`bad@@input`,suffix:(0,l.jsx)(a,{className:`h-4 w-4`}),errorMessage:`Invalid email — error icon replaces the suffix.`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    helperText: "We'll never share your email."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    defaultValue: "not-an-email",
    errorMessage: "Please enter a valid email address."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "your_username",
    defaultValue: "bones_ui",
    disabled: true,
    helperText: "Username cannot be changed."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Checking availability…",
    defaultValue: "bones-ui",
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Find anything…",
    prefix: <Search className="h-4 w-4" />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    suffix: <Eye className="h-4 w-4 cursor-pointer" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Amount",
    placeholder: "0.00",
    prefix: <DollarSign className="h-4 w-4" />,
    helperText: "Enter amount in USD"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Twitter handle",
    placeholder: "yourhandle",
    prefix: <AtSign className="h-4 w-4" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@example.com",
    defaultValue: "bad@@input",
    suffix: <AtSign className="h-4 w-4" />,
    errorMessage: "Invalid email — error icon replaces the suffix."
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithError`,`Disabled`,`Loading`,`WithPrefix`,`WithSuffix`,`WithTextPrefix`,`WithAtSignPrefix`,`Sizes`,`ErrorOverridesSuffix`]}))();export{d as Default,p as Disabled,b as ErrorOverridesSuffix,m as Loading,y as Sizes,v as WithAtSignPrefix,f as WithError,h as WithPrefix,g as WithSuffix,_ as WithTextPrefix,x as __namedExportsOrder,u as default};