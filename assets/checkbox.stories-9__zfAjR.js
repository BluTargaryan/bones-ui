import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,vt as r}from"./iframe-9JxUVdsE.js";import{n as i,t as a}from"./checkbox-D2mCN3CP.js";var o,s,c,l,u,d,f;t((()=>{o=n(),s=e(r()),i(),c={title:`UI/Checkbox`,tags:[`autodocs`]},l={render:()=>(0,o.jsx)(a,{"aria-label":`Accept terms`})},u={render:()=>(0,o.jsx)(`div`,{className:`flex flex-col gap-3`,children:[{label:`Unchecked`,checked:!1,indeterminate:!1,disabled:!1},{label:`Checked`,checked:!0,indeterminate:!1,disabled:!1},{label:`Indeterminate`,checked:!1,indeterminate:!0,disabled:!1},{label:`Disabled`,checked:!1,indeterminate:!1,disabled:!0},{label:`Disabled checked`,checked:!0,indeterminate:!1,disabled:!0}].map(({label:e,checked:t,indeterminate:n,disabled:r})=>(0,o.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2`,children:[(0,o.jsx)(a,{defaultChecked:t,indeterminate:n,disabled:r,"aria-label":e}),(0,o.jsx)(`span`,{className:`text-sm text-neutral-700`,children:e})]},e))})},d={render:()=>{let e=[`Design`,`Development`,`Testing`,`Deployment`],[t,n]=(0,s.useState)([`Design`]),r=t.length===e.length,i=t.length>0&&!r,c=()=>n(r?[]:[...e]),l=e=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,o.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,o.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 border-b border-neutral-100 pb-2`,children:[(0,o.jsx)(a,{checked:r,indeterminate:i,onChange:c,"aria-label":`Select all`}),(0,o.jsx)(`span`,{className:`text-sm font-medium text-neutral-900`,children:`Select all`})]}),e.map(e=>(0,o.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 pl-1`,children:[(0,o.jsx)(a,{checked:t.includes(e),onChange:()=>l(e),"aria-label":e}),(0,o.jsx)(`span`,{className:`text-sm text-neutral-700`,children:e})]},e)),(0,o.jsxs)(`p`,{className:`mt-1 text-xs text-neutral-400`,children:[`Selected: `,(0,o.jsx)(`strong`,{children:t.join(`, `)||`none`})]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Checkbox aria-label="Accept terms" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {([{
      label: "Unchecked",
      checked: false,
      indeterminate: false,
      disabled: false
    }, {
      label: "Checked",
      checked: true,
      indeterminate: false,
      disabled: false
    }, {
      label: "Indeterminate",
      checked: false,
      indeterminate: true,
      disabled: false
    }, {
      label: "Disabled",
      checked: false,
      indeterminate: false,
      disabled: true
    }, {
      label: "Disabled checked",
      checked: true,
      indeterminate: false,
      disabled: true
    }] as const).map(({
      label,
      checked,
      indeterminate,
      disabled
    }) => <label key={label} className="flex cursor-pointer items-center gap-2">
          <Checkbox defaultChecked={checked} indeterminate={indeterminate} disabled={disabled} aria-label={label} />
          <span className="text-sm text-neutral-700">{label}</span>
        </label>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ["Design", "Development", "Testing", "Deployment"];
    const [checked, setChecked] = useState<string[]>(["Design"]);
    const allChecked = checked.length === items.length;
    const someChecked = checked.length > 0 && !allChecked;
    const toggleAll = () => setChecked(allChecked ? [] : [...items]);
    const toggle = (item: string) => setChecked(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    return <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-center gap-2 border-b border-neutral-100 pb-2">
          <Checkbox checked={allChecked} indeterminate={someChecked} onChange={toggleAll} aria-label="Select all" />
          <span className="text-sm font-medium text-neutral-900">Select all</span>
        </label>
        {items.map(item => <label key={item} className="flex cursor-pointer items-center gap-2 pl-1">
            <Checkbox checked={checked.includes(item)} onChange={() => toggle(item)} aria-label={item} />
            <span className="text-sm text-neutral-700">{item}</span>
          </label>)}
        <p className="mt-1 text-xs text-neutral-400">
          Selected: <strong>{checked.join(", ") || "none"}</strong>
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`States`,`Controlled`]}))();export{d as Controlled,l as Default,u as States,f as __namedExportsOrder,c as default};