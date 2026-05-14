import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,B as r,C as i,D as a,F as o,H as s,I as c,L as l,M as u,P as d,R as ee,S as te,V as f,a as ne,d as re,f as p,h as ie,i as ae,k as oe,m as se,o as ce,p as le,r as m,u as ue,vt as h,z as de}from"./iframe-9JxUVdsE.js";import{d as fe,l as pe,r as me,t as he}from"./lucide-react-B1qhNnvJ.js";import{t as g}from"./button-CIM5Zm0m.js";import{t as ge}from"./button-gKHwm_05.js";import{a as _e,c as ve,i as ye,n as be,o as xe,r as Se,s as Ce,t as we}from"./es2015-CvDku_yR.js";import{t as Te}from"./input-Dhjy5eKX.js";import{t as Ee}from"./input-DVbzAquf.js";function De(e){let t=Oe(e),n=_.forwardRef((e,n)=>{let{children:r,...i}=e,a=_.Children.toArray(r),o=a.find(ke);if(o){let e=o.props.children,r=a.map(t=>t===o?_.Children.count(e)>1?_.Children.only(null):_.isValidElement(e)?e.props.children:null:t);return(0,Me.jsx)(t,{...i,ref:n,children:_.isValidElement(e)?_.cloneElement(e,void 0,r):null})}return(0,Me.jsx)(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}function Oe(e){let t=_.forwardRef((e,t)=>{let{children:n,...r}=e;if(_.isValidElement(n)){let e=je(n),i=Ae(r,n.props);return n.type!==_.Fragment&&(i.ref=t?ee(t,e):e),_.cloneElement(n,i)}return _.Children.count(n)>1?_.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}function ke(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ne}function Ae(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function je(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var _,Me,Ne,Pe=t((()=>{_=e(h(),1),de(),Me=n(),Ne=Symbol(`radix.slottable`)}));function v(e){return e?`open`:`closed`}var y,b,x,S,Fe,Ie,C,Le,Re,w,T,ze,E,Be,D,Ve,He,Ue,O,We,Ge,Ke,qe,k,A,j,M,N,P,F,Je,I,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,L,at=t((()=>{y=e(h(),1),s(),de(),l(),te(),ue(),oe(),xe(),ie(),le(),d(),Ce(),we(),ye(),Pe(),b=n(),x=`Dialog`,[S,Fe]=c(x),[Ie,C]=S(x),Le=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,c=y.useRef(null),l=y.useRef(null),[u,d]=re({prop:r,defaultProp:a??!1,onChange:o,caller:x});return(0,b.jsx)(Ie,{scope:t,triggerRef:c,contentRef:l,contentId:i(),titleId:i(),descriptionId:i(),open:u,onOpenChange:d,onOpenToggle:y.useCallback(()=>d(e=>!e),[d]),modal:s,children:n})},Le.displayName=x,Re=`DialogTrigger`,w=y.forwardRef((e,t)=>{let{__scopeDialog:n,...i}=e,a=C(Re,n),o=r(t,a.triggerRef);return(0,b.jsx)(u.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":a.open,"aria-controls":a.contentId,"data-state":v(a.open),...i,ref:o,onClick:f(e.onClick,a.onOpenToggle)})}),w.displayName=Re,T=`DialogPortal`,[ze,E]=S(T,{forceMount:void 0}),Be=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=C(T,t);return(0,b.jsx)(ze,{scope:t,forceMount:n,children:y.Children.map(r,e=>(0,b.jsx)(p,{present:n||a.open,children:(0,b.jsx)(se,{asChild:!0,container:i,children:e})}))})},Be.displayName=T,D=`DialogOverlay`,Ve=y.forwardRef((e,t)=>{let n=E(D,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=C(D,e.__scopeDialog);return a.modal?(0,b.jsx)(p,{present:r||a.open,children:(0,b.jsx)(Ue,{...i,ref:t})}):null}),Ve.displayName=D,He=De(`DialogOverlay.RemoveScroll`),Ue=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(D,n);return(0,b.jsx)(be,{as:He,allowPinchZoom:!0,shards:[i.contentRef],children:(0,b.jsx)(u.div,{"data-state":v(i.open),...r,ref:t,style:{pointerEvents:`auto`,...r.style}})})}),O=`DialogContent`,We=y.forwardRef((e,t)=>{let n=E(O,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=C(O,e.__scopeDialog);return(0,b.jsx)(p,{present:r||a.open,children:a.modal?(0,b.jsx)(Ge,{...i,ref:t}):(0,b.jsx)(Ke,{...i,ref:t})})}),We.displayName=O,Ge=y.forwardRef((e,t)=>{let n=C(O,e.__scopeDialog),i=y.useRef(null),a=r(t,n.contentRef,i);return y.useEffect(()=>{let e=i.current;if(e)return Se(e)},[]),(0,b.jsx)(qe,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:f(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:f(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:f(e.onFocusOutside,e=>e.preventDefault())})}),Ke=y.forwardRef((e,t)=>{let n=C(O,e.__scopeDialog),r=y.useRef(!1),i=y.useRef(!1);return(0,b.jsx)(qe,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),qe=y.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:s,...c}=e,l=C(O,n),u=y.useRef(null),d=r(t,u);return ve(),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_e,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:s,children:(0,b.jsx)(a,{role:`dialog`,id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":v(l.open),...c,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Ye,{titleId:l.titleId}),(0,b.jsx)(Ze,{contentRef:u,descriptionId:l.descriptionId})]})]})}),k=`DialogTitle`,A=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(k,n);return(0,b.jsx)(u.h2,{id:i.titleId,...r,ref:t})}),A.displayName=k,j=`DialogDescription`,M=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(j,n);return(0,b.jsx)(u.p,{id:i.descriptionId,...r,ref:t})}),M.displayName=j,N=`DialogClose`,P=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(N,n);return(0,b.jsx)(u.button,{type:`button`,...r,ref:t,onClick:f(e.onClick,()=>i.onOpenChange(!1))})}),P.displayName=N,F=`DialogTitleWarning`,[Je,I]=o(F,{contentName:O,titleName:k,docsSlug:`dialog`}),Ye=({titleId:e})=>{let t=I(F),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return y.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Xe=`DialogDescriptionWarning`,Ze=({contentRef:e,descriptionId:t})=>{let n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${I(Xe).contentName}}.`;return y.useEffect(()=>{let r=e.current?.getAttribute(`aria-describedby`);t&&r&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},Qe=Le,$e=w,et=Be,tt=Ve,nt=We,rt=A,it=M,L=P})),R,z,ot,B,V,H,U,W,G,K,st=t((()=>{R=n(),z=e(h()),at(),ce(),he(),ae(),ot=ne([`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2`,`flex flex-col`,`w-full rounded-lg border-[1.5px] border-neutral-200 bg-white shadow-lg`,`duration-200`,`data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,`data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`,`data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]`,`data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]`,`max-h-[90vh]`,`focus:outline-none`],{variants:{size:{sm:`max-w-sm`,md:`max-w-lg`,lg:`max-w-2xl`,xl:`max-w-4xl`,full:`max-w-[calc(100vw-2rem)]`}},defaultVariants:{size:`md`}}),B=({open:e,onOpenChange:t,trigger:n,size:r,children:i,modal:a=!0})=>(0,R.jsxs)(Qe,{open:e,onOpenChange:t,modal:a,children:[n&&(0,R.jsx)($e,{asChild:!0,children:n}),(0,R.jsxs)(et,{children:[(0,R.jsx)(tt,{className:m(`fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]`,`data-[state=open]:animate-in data-[state=open]:fade-in-0`,`data-[state=closed]:animate-out data-[state=closed]:fade-out-0`,`duration-200`)}),(0,R.jsx)(nt,{className:ot({size:r}),children:i})]})]}),B.displayName=`Modal`,V=({className:e,children:t,showClose:n=!0,...r})=>(0,R.jsxs)(`div`,{className:m(`flex shrink-0 items-start justify-between`,`border-b border-neutral-200 px-6 py-4`,e),...r,children:[(0,R.jsx)(`div`,{className:`flex flex-col gap-1`,children:t}),n&&(0,R.jsx)(L,{className:m(`ml-4 mt-0.5 shrink-0 rounded-md p-1`,`text-neutral-400 hover:text-neutral-600`,`border border-transparent hover:border-neutral-200`,`transition-colors duration-150`,`focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2`,`disabled:pointer-events-none`),"aria-label":`Close dialog`,children:(0,R.jsx)(me,{className:`h-4 w-4`,"aria-hidden":`true`})})]}),V.displayName=`ModalHeader`,H=z.forwardRef(({className:e,...t},n)=>(0,R.jsx)(rt,{ref:n,className:m(`text-base font-semibold text-neutral-900`,e),...t})),H.displayName=`ModalTitle`,U=z.forwardRef(({className:e,...t},n)=>(0,R.jsx)(it,{ref:n,className:m(`text-sm text-neutral-500`,e),...t})),U.displayName=`ModalDescription`,W=({className:e,...t})=>(0,R.jsx)(`div`,{className:m(`flex-1 overflow-y-auto px-6 py-4`,e),...t}),W.displayName=`ModalBody`,G=({className:e,...t})=>(0,R.jsx)(`div`,{className:m(`flex shrink-0 items-center justify-end gap-3`,`border-t border-neutral-200 px-6 py-4`,e),...t}),G.displayName=`ModalFooter`,K=L,B.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{open:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},trigger:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Trigger element — if provided, renders a DialogTrigger wrapper`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},modal:{required:!1,tsType:{name:`boolean`},description:`By default clicking outside or pressing Escape closes the modal.
Set to true to require explicit close (e.g. destructive confirmations).`,defaultValue:{value:`true`,computed:!1}}},composes:[`VariantProps`]},V.__docgenInfo={description:``,methods:[],displayName:`ModalHeader`,props:{showClose:{required:!1,tsType:{name:`boolean`},description:`Whether to render the ✕ close button`,defaultValue:{value:`true`,computed:!1}}}},H.__docgenInfo={description:``,methods:[],displayName:`ModalTitle`},U.__docgenInfo={description:``,methods:[],displayName:`ModalDescription`},W.__docgenInfo={description:``,methods:[],displayName:`ModalBody`},G.__docgenInfo={description:``,methods:[],displayName:`ModalFooter`}})),q,ct,lt,J,Y,X,Z,Q,$,ut;t((()=>{q=n(),ct=e(h()),he(),st(),ge(),Ee(),lt={title:`UI/Modal`,component:B,tags:[`autodocs`],parameters:{docs:{story:{inline:!1,iframeHeight:500}}}},J={render:()=>(0,q.jsxs)(B,{trigger:(0,q.jsx)(g,{children:`Open modal`}),children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{children:`Modal title`}),(0,q.jsx)(U,{children:`A short description of what this modal is for.`})]}),(0,q.jsx)(W,{children:(0,q.jsx)(`p`,{className:`text-sm text-neutral-700`,children:`Modal body content goes here. This area scrolls if content overflows.`})}),(0,q.jsxs)(G,{children:[(0,q.jsx)(K,{asChild:!0,children:(0,q.jsx)(g,{variant:`secondary`,children:`Cancel`})}),(0,q.jsx)(g,{children:`Confirm`})]})]})},Y={render:()=>{let[e,t]=(0,ct.useState)(!1);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(g,{onClick:()=>t(!0),children:`Open controlled`}),(0,q.jsxs)(B,{open:e,onOpenChange:t,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{children:`Controlled modal`}),(0,q.jsx)(U,{children:`Open state is managed by the parent.`})]}),(0,q.jsx)(W,{children:(0,q.jsx)(`p`,{className:`text-sm text-neutral-700`,children:`Useful when you need to control the modal from outside — form submission, async operations, etc.`})}),(0,q.jsx)(G,{children:(0,q.jsx)(g,{variant:`secondary`,onClick:()=>t(!1),children:`Close`})})]})]})}},X={render:()=>{let[e,t]=(0,ct.useState)(!1);return(0,q.jsxs)(B,{open:e,onOpenChange:t,trigger:(0,q.jsx)(g,{children:`Edit profile`}),children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{children:`Edit profile`}),(0,q.jsx)(U,{children:`Update your display name and email address.`})]}),(0,q.jsx)(W,{children:(0,q.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,q.jsx)(Te,{label:`Display name`,defaultValue:`Bones UI`}),(0,q.jsx)(Te,{label:`Email`,type:`email`,defaultValue:`hello@bones-ui.dev`})]})}),(0,q.jsxs)(G,{children:[(0,q.jsx)(K,{asChild:!0,children:(0,q.jsx)(g,{variant:`secondary`,children:`Cancel`})}),(0,q.jsx)(g,{onClick:()=>t(!1),children:`Save changes`})]})]})}},Z={render:()=>(0,q.jsxs)(B,{trigger:(0,q.jsx)(g,{variant:`destructive`,leftIcon:(0,q.jsx)(fe,{className:`h-4 w-4`}),children:`Delete account`}),children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{children:`Delete account`}),(0,q.jsx)(U,{children:`This action is permanent and cannot be undone.`})]}),(0,q.jsx)(W,{children:(0,q.jsxs)(`div`,{className:`flex gap-3 rounded-md border-[1.5px] border-red-200 bg-red-50 p-3`,children:[(0,q.jsx)(pe,{className:`mt-0.5 h-4 w-4 shrink-0 text-red-500`,"aria-hidden":`true`}),(0,q.jsx)(`p`,{className:`text-sm text-red-700`,children:`All your data, workspaces, and integrations will be permanently deleted. There is no recovery option.`})]})}),(0,q.jsxs)(G,{children:[(0,q.jsx)(K,{asChild:!0,children:(0,q.jsx)(g,{variant:`secondary`,children:`Cancel`})}),(0,q.jsx)(g,{variant:`destructive`,children:`Yes, delete my account`})]})]})},Q={render:()=>(0,q.jsxs)(B,{trigger:(0,q.jsx)(g,{children:`Terms of service`}),size:`md`,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{children:`Terms of Service`}),(0,q.jsx)(U,{children:`Last updated January 2025`})]}),(0,q.jsx)(W,{children:(0,q.jsx)(`div`,{className:`flex flex-col gap-3 text-sm text-neutral-700`,children:Array.from({length:12}).map((e,t)=>(0,q.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},t))})}),(0,q.jsxs)(G,{children:[(0,q.jsx)(K,{asChild:!0,children:(0,q.jsx)(g,{variant:`secondary`,children:`Decline`})}),(0,q.jsx)(g,{children:`Accept`})]})]})},$={render:()=>(0,q.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:[`sm`,`md`,`lg`,`xl`].map(e=>(0,q.jsxs)(B,{size:e,trigger:(0,q.jsxs)(g,{variant:`secondary`,children:[`Size: `,e]}),children:[(0,q.jsxs)(V,{children:[(0,q.jsxs)(H,{children:[`Size — `,e]}),(0,q.jsx)(U,{children:`max-w maps to: sm=384px · md=512px · lg=672px · xl=896px`})]}),(0,q.jsx)(W,{children:(0,q.jsx)(`p`,{className:`text-sm text-neutral-700`,children:`Body content here.`})}),(0,q.jsx)(G,{children:(0,q.jsx)(K,{asChild:!0,children:(0,q.jsx)(g,{children:`Close`})})})]},e))})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Modal trigger={<Button>Open modal</Button>}>
      <ModalHeader>
        <ModalTitle>Modal title</ModalTitle>
        <ModalDescription>
          A short description of what this modal is for.
        </ModalDescription>
      </ModalHeader>
      <ModalBody>
        <p className="text-sm text-neutral-700">
          Modal body content goes here. This area scrolls if content overflows.
        </p>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Confirm</Button>
      </ModalFooter>
    </Modal>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open controlled</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalHeader>
            <ModalTitle>Controlled modal</ModalTitle>
            <ModalDescription>
              Open state is managed by the parent.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">
              Useful when you need to control the modal from outside —
              form submission, async operations, etc.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Modal open={open} onOpenChange={setOpen} trigger={<Button>Edit profile</Button>}>
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <ModalDescription>
            Update your display name and email address.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input label="Display name" defaultValue="Bones UI" />
            <Input label="Email" type="email" defaultValue="hello@bones-ui.dev" />
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </ModalFooter>
      </Modal>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Modal trigger={<Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />}>Delete account</Button>}>
      <ModalHeader>
        <ModalTitle>Delete account</ModalTitle>
        <ModalDescription>
          This action is permanent and cannot be undone.
        </ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex gap-3 rounded-md border-[1.5px] border-red-200 bg-red-50 p-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
          <p className="text-sm text-red-700">
            All your data, workspaces, and integrations will be permanently deleted.
            There is no recovery option.
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button variant="destructive">Yes, delete my account</Button>
      </ModalFooter>
    </Modal>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Modal trigger={<Button>Terms of service</Button>} size="md">
      <ModalHeader>
        <ModalTitle>Terms of Service</ModalTitle>
        <ModalDescription>Last updated January 2025</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-3 text-sm text-neutral-700">
          {Array.from({
          length: 12
        }).map((_, i) => <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>)}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="secondary">Decline</Button>
        </ModalClose>
        <Button>Accept</Button>
      </ModalFooter>
    </Modal>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      {(["sm", "md", "lg", "xl"] as const).map(size => <Modal key={size} size={size} trigger={<Button variant="secondary">Size: {size}</Button>}>
          <ModalHeader>
            <ModalTitle>Size — {size}</ModalTitle>
            <ModalDescription>
              max-w maps to: sm=384px · md=512px · lg=672px · xl=896px
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">Body content here.</p>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </Modal>)}
    </div>
}`,...$.parameters?.docs?.source}}},ut=[`Default`,`Controlled`,`WithForm`,`Destructive`,`ScrollableBody`,`Sizes`]}))();export{Y as Controlled,J as Default,Z as Destructive,Q as ScrollableBody,$ as Sizes,X as WithForm,ut as __namedExportsOrder,lt as default};