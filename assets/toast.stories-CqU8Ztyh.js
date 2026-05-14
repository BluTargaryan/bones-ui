import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,A as r,B as i,E as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,Q as p,T as m,V as h,a as ee,c as g,d as _,f as v,h as y,i as te,j as b,k as ne,l as x,m as S,o as C,p as re,r as w,u as T,vt as E,w as ie,z as D}from"./iframe-9JxUVdsE.js";import{M as O,R as ae,X as oe,Z as se,l as ce,r as le,t as ue}from"./lucide-react-B1qhNnvJ.js";import{n as de,t as k}from"./button-CIM5Zm0m.js";import{n as fe,t as pe}from"./dist-Dw4OnP25.js";function me(e){let t=[];return Array.from(e.childNodes).forEach(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent&&t.push(e.textContent),ge(e)){let n=e.ariaHidden||e.hidden||e.style.display===`none`,r=e.dataset.radixToastAnnounceExclude===``;if(!n)if(r){let n=e.dataset.radixToastAnnounceAlt;n&&t.push(n)}else t.push(...me(e))}}),t}function A(e,t,n,{discrete:r}){let i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?u(i,a):i.dispatchEvent(a)}function he(e=()=>{}){let t=b(e);m(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}function ge(e){return e.nodeType===e.ELEMENT_NODE}function _e(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ve(e){let t=document.activeElement;return e.some(e=>e===t?!0:(e.focus(),document.activeElement!==t))}var j,ye,M,N,P,be,xe,Se,Ce,we,F,Te,Ee,De,I,L,Oe,ke,R,z,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,B,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt=t((()=>{j=e(E(),1),ye=e(p(),1),o(),D(),fe(),c(),ne(),y(),re(),f(),r(),T(),ie(),x(),M=n(),N=`ToastProvider`,[P,be,xe]=pe(`Toast`),[Se,Ce]=s(`Toast`,[xe]),[we,F]=Se(N),Te=e=>{let{__scopeToast:t,label:n=`Notification`,duration:r=5e3,swipeDirection:i=`right`,swipeThreshold:a=50,children:o}=e,[s,c]=j.useState(null),[l,u]=j.useState(0),d=j.useRef(!1),f=j.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${N}\`. Expected non-empty \`string\`.`),(0,M.jsx)(P.Provider,{scope:t,children:(0,M.jsx)(we,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:l,viewport:s,onViewportChange:c,onToastAdd:j.useCallback(()=>u(e=>e+1),[]),onToastRemove:j.useCallback(()=>u(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:f,children:o})})},Te.displayName=N,Ee=`ToastViewport`,De=[`F8`],I=`toast.viewportPause`,L=`toast.viewportResume`,Oe=j.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=De,label:o=`Notifications ({hotkey})`,...s}=e,c=F(Ee,n),u=be(n),d=j.useRef(null),f=j.useRef(null),p=j.useRef(null),m=j.useRef(null),h=i(t,m,c.onViewportChange),ee=r.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),g=c.toastCount>0;j.useEffect(()=>{let e=e=>{r.length!==0&&r.every(t=>e[t]||e.code===t)&&m.current?.focus()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[r]),j.useEffect(()=>{let e=d.current,t=m.current;if(g&&e&&t){let n=()=>{if(!c.isClosePausedRef.current){let e=new CustomEvent(I);t.dispatchEvent(e),c.isClosePausedRef.current=!0}},r=()=>{if(c.isClosePausedRef.current){let e=new CustomEvent(L);t.dispatchEvent(e),c.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||r()},a=()=>{e.contains(document.activeElement)||r()};return e.addEventListener(`focusin`,n),e.addEventListener(`focusout`,i),e.addEventListener(`pointermove`,n),e.addEventListener(`pointerleave`,a),window.addEventListener(`blur`,n),window.addEventListener(`focus`,r),()=>{e.removeEventListener(`focusin`,n),e.removeEventListener(`focusout`,i),e.removeEventListener(`pointermove`,n),e.removeEventListener(`pointerleave`,a),window.removeEventListener(`blur`,n),window.removeEventListener(`focus`,r)}}},[g,c.isClosePausedRef]);let _=j.useCallback(({tabbingDirection:e})=>{let t=u().map(t=>{let n=t.ref.current,r=[n,..._e(n)];return e===`forwards`?r:r.reverse()});return(e===`forwards`?t.reverse():t).flat()},[u]);return j.useEffect(()=>{let e=m.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if(t.key===`Tab`&&!n){let n=document.activeElement,r=t.shiftKey;if(t.target===e&&r){f.current?.focus();return}let i=_({tabbingDirection:r?`backwards`:`forwards`}),a=i.findIndex(e=>e===n);ve(i.slice(a+1))?t.preventDefault():r?f.current?.focus():p.current?.focus()}};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)}},[u,_]),(0,M.jsxs)(a,{ref:d,role:`region`,"aria-label":o.replace(`{hotkey}`,ee),tabIndex:-1,style:{pointerEvents:g?void 0:`none`},children:[g&&(0,M.jsx)(R,{ref:f,onFocusFromOutsideViewport:()=>{ve(_({tabbingDirection:`forwards`}))}}),(0,M.jsx)(P.Slot,{scope:n,children:(0,M.jsx)(l.ol,{tabIndex:-1,...s,ref:h})}),g&&(0,M.jsx)(R,{ref:p,onFocusFromOutsideViewport:()=>{ve(_({tabbingDirection:`backwards`}))}})]})}),Oe.displayName=Ee,ke=`ToastFocusProxy`,R=j.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=F(ke,n);return(0,M.jsx)(g,{tabIndex:0,...i,ref:t,style:{position:`fixed`},onFocus:e=>{let t=e.relatedTarget;a.viewport?.contains(t)||r()}})}),R.displayName=ke,z=`Toast`,Ae=`toast.swipeStart`,je=`toast.swipeMove`,Me=`toast.swipeCancel`,Ne=`toast.swipeEnd`,Pe=j.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...o}=e,[s,c]=_({prop:r,defaultProp:i??!0,onChange:a,caller:z});return(0,M.jsx)(v,{present:n||s,children:(0,M.jsx)(Le,{open:s,...o,ref:t,onClose:()=>c(!1),onPause:b(e.onPause),onResume:b(e.onResume),onSwipeStart:h(e.onSwipeStart,e=>{e.currentTarget.setAttribute(`data-swipe`,`start`)}),onSwipeMove:h(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute(`data-swipe`,`move`),e.currentTarget.style.setProperty(`--radix-toast-swipe-move-x`,`${t}px`),e.currentTarget.style.setProperty(`--radix-toast-swipe-move-y`,`${n}px`)}),onSwipeCancel:h(e.onSwipeCancel,e=>{e.currentTarget.setAttribute(`data-swipe`,`cancel`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`)}),onSwipeEnd:h(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute(`data-swipe`,`end`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),e.currentTarget.style.setProperty(`--radix-toast-swipe-end-x`,`${t}px`),e.currentTarget.style.setProperty(`--radix-toast-swipe-end-y`,`${n}px`),c(!1)})})})}),Pe.displayName=z,[Fe,Ie]=Se(z,{onClose(){}}),Le=j.forwardRef((e,t)=>{let{__scopeToast:n,type:r=`foreground`,duration:a,open:o,onClose:s,onEscapeKeyDown:c,onPause:u,onResume:f,onSwipeStart:p,onSwipeMove:m,onSwipeCancel:ee,onSwipeEnd:g,..._}=e,v=F(z,n),[y,te]=j.useState(null),ne=i(t,e=>te(e)),x=j.useRef(null),S=j.useRef(null),C=a||v.duration,re=j.useRef(0),w=j.useRef(C),T=j.useRef(0),{onToastAdd:E,onToastRemove:ie}=v,D=b(()=>{y?.contains(document.activeElement)&&v.viewport?.focus(),s()}),O=j.useCallback(e=>{!e||e===1/0||(window.clearTimeout(T.current),re.current=new Date().getTime(),T.current=window.setTimeout(D,e))},[D]);j.useEffect(()=>{let e=v.viewport;if(e){let t=()=>{O(w.current),f?.()},n=()=>{let e=new Date().getTime()-re.current;w.current-=e,window.clearTimeout(T.current),u?.()};return e.addEventListener(I,n),e.addEventListener(L,t),()=>{e.removeEventListener(I,n),e.removeEventListener(L,t)}}},[v.viewport,C,u,f,O]),j.useEffect(()=>{o&&!v.isClosePausedRef.current&&O(C)},[o,C,v.isClosePausedRef,O]),j.useEffect(()=>(E(),()=>ie()),[E,ie]);let ae=j.useMemo(()=>y?me(y):null,[y]);return v.viewport?(0,M.jsxs)(M.Fragment,{children:[ae&&(0,M.jsx)(Re,{__scopeToast:n,role:`status`,"aria-live":r===`foreground`?`assertive`:`polite`,children:ae}),(0,M.jsx)(Fe,{scope:n,onClose:D,children:ye.createPortal((0,M.jsx)(P.ItemSlot,{scope:n,children:(0,M.jsx)(d,{asChild:!0,onEscapeKeyDown:h(c,()=>{v.isFocusedToastEscapeKeyDownRef.current||D(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,M.jsx)(l.li,{tabIndex:0,"data-state":o?`open`:`closed`,"data-swipe-direction":v.swipeDirection,..._,ref:ne,style:{userSelect:`none`,touchAction:`none`,...e.style},onKeyDown:h(e.onKeyDown,e=>{e.key===`Escape`&&(c?.(e.nativeEvent),e.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:h(e.onPointerDown,e=>{e.button===0&&(x.current={x:e.clientX,y:e.clientY})}),onPointerMove:h(e.onPointerMove,e=>{if(!x.current)return;let t=e.clientX-x.current.x,n=e.clientY-x.current.y,r=!!S.current,i=[`left`,`right`].includes(v.swipeDirection),a=[`left`,`up`].includes(v.swipeDirection)?Math.min:Math.max,o=i?a(0,t):0,s=i?0:a(0,n),c=e.pointerType===`touch`?10:2,l={x:o,y:s},u={originalEvent:e,delta:l};r?(S.current=l,A(je,m,u,{discrete:!1})):qe(l,v.swipeDirection,c)?(S.current=l,A(Ae,p,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>c||Math.abs(n)>c)&&(x.current=null)}),onPointerUp:h(e.onPointerUp,e=>{let t=S.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),S.current=null,x.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};qe(t,v.swipeDirection,v.swipeThreshold)?A(Ne,g,r,{discrete:!0}):A(Me,ee,r,{discrete:!0}),n.addEventListener(`click`,e=>e.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),Re=e=>{let{__scopeToast:t,children:n,...r}=e,i=F(z,t),[a,o]=j.useState(!1),[s,c]=j.useState(!1);return he(()=>o(!0)),j.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),s?null:(0,M.jsx)(S,{asChild:!0,children:(0,M.jsx)(g,{...r,children:a&&(0,M.jsxs)(M.Fragment,{children:[i.label,` `,n]})})})},ze=`ToastTitle`,Be=j.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,M.jsx)(l.div,{...r,ref:t})}),Be.displayName=ze,Ve=`ToastDescription`,He=j.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,M.jsx)(l.div,{...r,ref:t})}),He.displayName=Ve,Ue=`ToastAction`,We=j.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,M.jsx)(Ke,{altText:n,asChild:!0,children:(0,M.jsx)(B,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ue}\`. Expected non-empty \`string\`.`),null)}),We.displayName=Ue,Ge=`ToastClose`,B=j.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,i=Ie(Ge,n);return(0,M.jsx)(Ke,{asChild:!0,children:(0,M.jsx)(l.button,{type:`button`,...r,ref:t,onClick:h(e.onClick,i.onClose)})})}),B.displayName=Ge,Ke=j.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...i}=e;return(0,M.jsx)(l.div,{"data-radix-toast-announce-exclude":``,"data-radix-toast-announce-alt":r||void 0,...i,ref:t})}),qe=(e,t,n=0)=>{let r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return t===`left`||t===`right`?a&&r>n:!a&&i>n},Je=Te,Ye=Oe,Xe=Pe,Ze=Be,Qe=He,$e=We,et=B})),V,H,U,nt,rt,it,W,at,G,ot=t((()=>{V=n(),H=e(E()),tt(),C(),ue(),te(),U=H.createContext(null),nt=ee([`group pointer-events-auto relative flex w-full items-start gap-3`,`overflow-hidden rounded-md border-[1.5px] bg-white p-4 shadow-lg`,`transition-all duration-300`,`data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=open]:fade-in-80`,`data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[state=closed]:fade-out-80`,`data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]`,`data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform`,`data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out`],{variants:{variant:{default:`border-neutral-200`,success:`border-emerald-200`,warning:`border-amber-200`,destructive:`border-red-200`,info:`border-blue-200`}},defaultVariants:{variant:`default`}}),rt={default:null,success:(0,V.jsx)(oe,{className:`h-5 w-5 text-emerald-500`}),warning:(0,V.jsx)(ce,{className:`h-5 w-5 text-amber-500`}),destructive:(0,V.jsx)(se,{className:`h-5 w-5 text-red-500`}),info:(0,V.jsx)(ae,{className:`h-5 w-5 text-blue-500`})},it={"top-left":`top-4 left-4`,"top-center":`top-4 left-1/2 -translate-x-1/2`,"top-right":`top-4 right-4`,"bottom-left":`bottom-4 left-4`,"bottom-center":`bottom-4 left-1/2 -translate-x-1/2`,"bottom-right":`bottom-4 right-4`},W=({children:e,position:t=`bottom-right`,maxVisible:n=5})=>{let[r,i]=H.useState([]),a=H.useCallback(e=>{let t=Math.random().toString(36).slice(2);return i(r=>[{...e,id:t},...r].slice(0,n)),t},[n]),o=H.useCallback(e=>{i(t=>t.filter(t=>t.id!==e))},[]),s=H.useCallback(()=>i([]),[]);return(0,V.jsx)(U.Provider,{value:{toasts:r,toast:a,dismiss:o,dismissAll:s},children:(0,V.jsxs)(Je,{swipeDirection:`right`,children:[e,(0,V.jsx)(Ye,{className:w(`fixed z-100 flex max-h-screen w-[380px] flex-col gap-2`,`focus:outline-none`,it[t])}),r.map(e=>(0,V.jsx)(at,{data:e,onDismiss:()=>o(e.id)},e.id))]})})},at=({data:e,onDismiss:t})=>{let{id:n,variant:r=`default`,title:i,description:a,action:o,duration:s=5e3,loading:c}=e,l=c?(0,V.jsx)(O,{className:`h-5 w-5 animate-spin text-neutral-400`}):rt[r];return(0,V.jsxs)(Xe,{duration:c?1/0:s,onOpenChange:e=>{e||t()},className:w(nt({variant:r})),children:[l&&(0,V.jsx)(`span`,{className:`mt-0.5 shrink-0`,"aria-hidden":`true`,children:l}),(0,V.jsxs)(`div`,{className:`flex flex-1 flex-col gap-1 min-w-0`,children:[(0,V.jsx)(Ze,{className:`text-sm font-semibold text-neutral-900 leading-snug`,children:i}),a&&(0,V.jsx)(Qe,{className:`text-xs text-neutral-500 leading-snug`,children:a}),o&&(0,V.jsx)($e,{altText:o.label,onClick:o.onClick,asChild:!0,children:(0,V.jsx)(`button`,{type:`button`,className:w(`mt-1 w-fit text-xs font-medium underline underline-offset-2`,`text-neutral-700 hover:text-neutral-900`,`focus:outline-none focus:ring-1 focus:ring-neutral-400 rounded-sm`),children:o.label})})]}),(0,V.jsx)(et,{"aria-label":`Dismiss notification`,className:w(`ml-auto mt-0.5 shrink-0 rounded-sm p-0.5`,`text-neutral-400 opacity-0 transition-opacity`,`hover:text-neutral-600`,`focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-neutral-400`,`group-hover:opacity-100`),children:(0,V.jsx)(le,{className:`h-4 w-4`})})]})},G=()=>{let e=H.useContext(U);if(!e)throw Error(`useToast must be used inside <ToastProvider>`);return e},W.__docgenInfo={description:``,methods:[],displayName:`ToastProvider`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`,elements:[{name:`literal`,value:`"top-left"`},{name:`literal`,value:`"top-center"`},{name:`literal`,value:`"top-right"`},{name:`literal`,value:`"bottom-left"`},{name:`literal`,value:`"bottom-center"`},{name:`literal`,value:`"bottom-right"`}]},description:`Where toasts appear. Default: bottom-right`,defaultValue:{value:`"bottom-right"`,computed:!1}},maxVisible:{required:!1,tsType:{name:`number`},description:`Max toasts visible at once`,defaultValue:{value:`5`,computed:!1}}}}})),K,st,q,J,Y,X,Z,Q,$,ct;t((()=>{K=n(),ot(),de(),st={title:`UI/Toast`,tags:[`autodocs`],decorators:[e=>(0,K.jsx)(W,{children:(0,K.jsx)(e,{})})]},q=({label:e,fn:t})=>{let{toast:n}=G();return(0,K.jsx)(k,{variant:`secondary`,onClick:()=>t(n),children:e})},J={render:()=>(0,K.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,K.jsx)(q,{label:`Default`,fn:e=>e({title:`Heads up`,description:`Something happened.`})}),(0,K.jsx)(q,{label:`Success`,fn:e=>e({variant:`success`,title:`Changes saved`,description:`Your profile has been updated.`})}),(0,K.jsx)(q,{label:`Warning`,fn:e=>e({variant:`warning`,title:`Approaching limit`,description:`You've used 90% of your storage.`})}),(0,K.jsx)(q,{label:`Destructive`,fn:e=>e({variant:`destructive`,title:`Something went wrong`,description:`Your changes could not be saved.`})}),(0,K.jsx)(q,{label:`Info`,fn:e=>e({variant:`info`,title:`Update available`,description:`A new version of the app is ready.`})})]})},Y={render:()=>(0,K.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,K.jsx)(q,{label:`Undo action`,fn:e=>e({variant:`default`,title:`Email archived`,action:{label:`Undo`,onClick:()=>console.log(`Undo!`)}})}),(0,K.jsx)(q,{label:`With retry`,fn:e=>e({variant:`destructive`,title:`Export failed`,description:`Check your connection and try again.`,action:{label:`Retry`,onClick:()=>console.log(`Retry!`)}})})]})},X={render:()=>(0,K.jsx)(()=>{let{toast:e,dismiss:t}=G();return(0,K.jsx)(k,{variant:`secondary`,onClick:()=>{let n=e({loading:!0,title:`Uploading file…`,description:`This may take a moment.`});setTimeout(()=>{t(n),e({variant:`success`,title:`Upload complete!`})},3e3)},children:`Start upload`})},{})},Z={render:()=>(0,K.jsx)(()=>{let{toast:e,dismissAll:t}=G();return(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(k,{variant:`secondary`,onClick:()=>{e({title:`Toast 1`,variant:`success`}),e({title:`Toast 2`,variant:`info`}),e({title:`Toast 3`,variant:`warning`})},children:`Fire 3 toasts`}),(0,K.jsx)(k,{variant:`outline`,onClick:t,children:`Dismiss all`})]})},{})},Q={render:()=>(0,K.jsx)(`div`,{className:`grid grid-cols-3 gap-3`,children:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`].map(e=>(0,K.jsx)(W,{position:e,children:(0,K.jsx)(q,{label:e,fn:t=>t({title:e,description:`Toast from this position.`})})},e))})},$={render:()=>(0,K.jsx)(q,{label:`Persistent toast`,fn:e=>e({variant:`warning`,title:`Action required`,description:`Please verify your email to continue.`,duration:1/0,action:{label:`Resend email`,onClick:()=>{}}})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <ToastTrigger label="Default" fn={t => t({
      title: "Heads up",
      description: "Something happened."
    })} />
      <ToastTrigger label="Success" fn={t => t({
      variant: "success",
      title: "Changes saved",
      description: "Your profile has been updated."
    })} />
      <ToastTrigger label="Warning" fn={t => t({
      variant: "warning",
      title: "Approaching limit",
      description: "You've used 90% of your storage."
    })} />
      <ToastTrigger label="Destructive" fn={t => t({
      variant: "destructive",
      title: "Something went wrong",
      description: "Your changes could not be saved."
    })} />
      <ToastTrigger label="Info" fn={t => t({
      variant: "info",
      title: "Update available",
      description: "A new version of the app is ready."
    })} />
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <ToastTrigger label="Undo action" fn={t => t({
      variant: "default",
      title: "Email archived",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo!")
      }
    })} />
      <ToastTrigger label="With retry" fn={t => t({
      variant: "destructive",
      title: "Export failed",
      description: "Check your connection and try again.",
      action: {
        label: "Retry",
        onClick: () => console.log("Retry!")
      }
    })} />
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const WithHook = () => {
      const {
        toast,
        dismiss
      } = useToast();
      const handleClick = () => {
        const id = toast({
          loading: true,
          title: "Uploading file…",
          description: "This may take a moment."
        });
        // Simulate async completion
        setTimeout(() => {
          dismiss(id);
          toast({
            variant: "success",
            title: "Upload complete!"
          });
        }, 3000);
      };
      return <Button variant="secondary" onClick={handleClick}>Start upload</Button>;
    };
    return <WithHook />;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const WithHook = () => {
      const {
        toast,
        dismissAll
      } = useToast();
      return <div className="flex gap-3">
          <Button variant="secondary" onClick={() => {
          toast({
            title: "Toast 1",
            variant: "success"
          });
          toast({
            title: "Toast 2",
            variant: "info"
          });
          toast({
            title: "Toast 3",
            variant: "warning"
          });
        }}>
            Fire 3 toasts
          </Button>
          <Button variant="outline" onClick={dismissAll}>
            Dismiss all
          </Button>
        </div>;
    };
    return <WithHook />;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-3">
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map(pos => <ToastProvider key={pos} position={pos}>
          <ToastTrigger label={pos} fn={t => t({
        title: pos,
        description: "Toast from this position."
      })} />
        </ToastProvider>)}
    </div>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <ToastTrigger label="Persistent toast" fn={t => t({
    variant: "warning",
    title: "Action required",
    description: "Please verify your email to continue.",
    duration: Infinity,
    action: {
      label: "Resend email",
      onClick: () => {}
    }
  })} />
}`,...$.parameters?.docs?.source}}},ct=[`AllVariants`,`WithAction`,`Loading`,`DismissAll`,`Positions`,`Persistent`]}))();export{J as AllVariants,Z as DismissAll,X as Loading,$ as Persistent,Q as Positions,Y as WithAction,ct as __namedExportsOrder,st as default};