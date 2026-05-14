import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{$ as n,a as r,i,o as a,r as o,vt as s}from"./iframe-9JxUVdsE.js";import{t as c}from"./avatar-BB1edVgm.js";import{H as l,lt as u,n as d,o as f,t as p,u as m}from"./lucide-react-B1qhNnvJ.js";import{t as h}from"./badge-DkdOeWjg.js";import{t as g}from"./button-CIM5Zm0m.js";import{t as _}from"./button-gKHwm_05.js";import{i as v,n as y,r as b,t as x}from"./dropdown-x-CXLl1C.js";import{i as S}from"./skeleton-D8hA5jLX.js";import{a as C,l as w,p as T,r as E,t as D}from"./dropdown-ByEnJNBf.js";var O,k,A,j,M,N,P,F,I,L,R=t((()=>{O=n(),k=e(s()),a(),i(),A=r([`flex flex-col rounded-lg`,`text-neutral-900`,`transition-all duration-150`],{variants:{variant:{default:`border-[1.5px] border-neutral-200 bg-white`,ghost:`border-[1.5px] border-transparent bg-transparent`,elevated:`border-[1.5px] border-transparent bg-white shadow-md`},interactive:{true:[`cursor-pointer`,`hover:border-neutral-300 hover:shadow-sm`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2`,`active:scale-[0.995]`],false:``}},compoundVariants:[{variant:`elevated`,interactive:!0,class:`hover:shadow-lg hover:border-transparent`},{variant:`ghost`,interactive:!0,class:`hover:bg-neutral-50 hover:border-neutral-200`}],defaultVariants:{variant:`default`,interactive:!1}}),j=k.forwardRef(({className:e,variant:t,interactive:n=!1,loading:r=!1,disabled:i=!1,children:a,onClick:s,...c},l)=>(0,O.jsx)(`div`,{ref:l,role:n?`button`:void 0,tabIndex:n&&!i?0:void 0,"aria-disabled":i||void 0,"aria-busy":r||void 0,onClick:n&&!i&&!r?s:void 0,onKeyDown:n&&!i&&!r?e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s?.(e))}:void 0,className:o(A({variant:t,interactive:n&&!i&&!r}),i&&`cursor-not-allowed opacity-50`,r&&`cursor-wait`,e),...c,children:a})),j.displayName=`Card`,M=k.forwardRef(({className:e,divided:t=!1,...n},r)=>(0,O.jsx)(`div`,{ref:r,className:o(`flex flex-col gap-1.5 px-5 pt-5 pb-4`,t&&`border-b border-neutral-200`,e),...n})),M.displayName=`CardHeader`,N=k.forwardRef(({className:e,...t},n)=>(0,O.jsx)(`h3`,{ref:n,className:o(`text-base font-semibold leading-snug text-neutral-900`,e),...t})),N.displayName=`CardTitle`,P=k.forwardRef(({className:e,...t},n)=>(0,O.jsx)(`p`,{ref:n,className:o(`text-sm text-neutral-500 leading-snug`,e),...t})),P.displayName=`CardDescription`,F=k.forwardRef(({className:e,...t},n)=>(0,O.jsx)(`div`,{ref:n,className:o(`flex-1 px-5 pb-4 pt-0 first:pt-5 last:pb-5`,e),...t})),F.displayName=`CardBody`,I=k.forwardRef(({className:e,divided:t=!1,...n},r)=>(0,O.jsx)(`div`,{ref:r,className:o(`flex items-center px-5 pb-5 pt-0 first:pt-5`,t&&`border-t border-neutral-200 pt-4`,e),...n})),I.displayName=`CardFooter`,L=k.forwardRef(({className:e,src:t,alt:n,height:r=`h-48`,position:i=`top`,...a},s)=>(0,O.jsx)(`div`,{ref:s,className:o(`overflow-hidden`,i===`top`&&`rounded-t-[calc(0.5rem-1.5px)]`,i===`bottom`&&`rounded-b-[calc(0.5rem-1.5px)]`,r,e),...a,children:(0,O.jsx)(`img`,{src:t,alt:n,className:`h-full w-full object-cover`})})),L.displayName=`CardImage`,j.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{interactive:{required:!1,tsType:{name:`boolean`},description:`Makes the entire card a focusable, clickable surface`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Renders a skeleton overlay — compose with SkeletonCard for full effect`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables interactive state without changing visual opacity`,defaultValue:{value:`false`,computed:!1}}},composes:[`VariantProps`]},M.__docgenInfo={description:``,methods:[],displayName:`CardHeader`,props:{divided:{required:!1,tsType:{name:`boolean`},description:`Renders a bottom border separating header from body`,defaultValue:{value:`false`,computed:!1}}}},N.__docgenInfo={description:``,methods:[],displayName:`CardTitle`},P.__docgenInfo={description:``,methods:[],displayName:`CardDescription`},F.__docgenInfo={description:``,methods:[],displayName:`CardBody`},I.__docgenInfo={description:``,methods:[],displayName:`CardFooter`,props:{divided:{required:!1,tsType:{name:`boolean`},description:`Renders a top border separating footer from body`,defaultValue:{value:`false`,computed:!1}}}},L.__docgenInfo={description:``,methods:[],displayName:`CardImage`,props:{src:{required:!0,tsType:{name:`string`},description:``},alt:{required:!0,tsType:{name:`string`},description:``},height:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"h-48"`,computed:!1}},position:{required:!1,tsType:{name:`union`,raw:`"top" | "bottom"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``,defaultValue:{value:`"top"`,computed:!1}}}}})),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{z=n(),B=e(s()),p(),R(),_(),v(),b(),y(),x(),i(),V={title:`UI/Card`,tags:[`autodocs`]},H={render:()=>(0,z.jsxs)(j,{className:`w-80`,children:[(0,z.jsxs)(M,{children:[(0,z.jsx)(N,{children:`Card title`}),(0,z.jsx)(P,{children:`A short description of what this card contains.`})]}),(0,z.jsx)(F,{children:(0,z.jsx)(`p`,{className:`text-sm text-neutral-600`,children:`Card body content. Add any components here — forms, data, media.`})}),(0,z.jsx)(I,{children:(0,z.jsx)(g,{size:`sm`,children:`Action`})})]})},U={render:()=>(0,z.jsx)(`div`,{className:`grid grid-cols-3 gap-4`,children:[`default`,`ghost`,`elevated`].map(e=>(0,z.jsxs)(j,{variant:e,children:[(0,z.jsxs)(M,{children:[(0,z.jsx)(N,{children:e}),(0,z.jsxs)(P,{children:[e===`default`&&`1.5px border, white bg`,e===`ghost`&&`No border, transparent bg`,e===`elevated`&&`Shadow, no border`]})]}),(0,z.jsx)(F,{children:(0,z.jsx)(`p`,{className:`text-sm text-neutral-500`,children:`Card body content.`})})]},e))})},W={render:()=>{let[e,t]=(0,B.useState)(null);return(0,z.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,z.jsx)(`div`,{className:`grid grid-cols-3 gap-3`,children:[{id:`free`,label:`Free`,desc:`For personal projects`,price:`$0/mo`},{id:`pro`,label:`Pro`,desc:`For professional teams`,price:`$12/mo`},{id:`teams`,label:`Teams`,desc:`For growing organisations`,price:`$29/mo`}].map(n=>(0,z.jsxs)(j,{interactive:!0,onClick:()=>t(n.id),className:o(`transition-all`,e===n.id?`border-neutral-900 ring-1 ring-neutral-900`:``),children:[(0,z.jsxs)(M,{children:[(0,z.jsx)(N,{className:`text-sm`,children:n.label}),(0,z.jsx)(P,{children:n.desc})]}),(0,z.jsx)(F,{children:(0,z.jsx)(`p`,{className:`text-lg font-semibold text-neutral-900`,children:n.price})})]},n.id))}),(0,z.jsxs)(`p`,{className:`text-xs text-neutral-400`,children:[`Selected: `,(0,z.jsx)(`strong`,{children:e??`none`})]})]})}},G={render:()=>(0,z.jsxs)(j,{className:`w-72 overflow-hidden`,children:[(0,z.jsx)(L,{src:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80`,alt:`Abstract gradient`,height:`h-40`}),(0,z.jsxs)(M,{children:[(0,z.jsx)(N,{children:`Cover image`}),(0,z.jsx)(P,{children:`Image bleeds to card edges, radius is preserved.`})]}),(0,z.jsx)(I,{divided:!0,children:(0,z.jsx)(g,{size:`sm`,variant:`secondary`,children:`View`})})]})},K={render:()=>(0,z.jsxs)(j,{className:`w-80`,children:[(0,z.jsxs)(M,{divided:!0,children:[(0,z.jsx)(N,{children:`Invoice #1042`}),(0,z.jsx)(P,{children:`Due October 31, 2025`})]}),(0,z.jsx)(F,{children:(0,z.jsx)(`div`,{className:`flex flex-col gap-2`,children:[{label:`Design work`,amount:`$1,200`},{label:`Development`,amount:`$3,400`},{label:`Hosting (1y)`,amount:`$240`}].map(({label:e,amount:t})=>(0,z.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,z.jsx)(`span`,{className:`text-neutral-600`,children:e}),(0,z.jsx)(`span`,{className:`font-medium text-neutral-900`,children:t})]},e))})}),(0,z.jsxs)(I,{divided:!0,className:`justify-between`,children:[(0,z.jsx)(`span`,{className:`text-sm font-semibold text-neutral-900`,children:`Total`}),(0,z.jsx)(`span`,{className:`text-sm font-semibold text-neutral-900`,children:`$4,840`})]})]})},q={render:()=>(0,z.jsx)(`div`,{className:`grid grid-cols-3 gap-4`,children:[{label:`Total users`,value:`12,483`,delta:`+12%`,icon:f,color:`text-blue-500`},{label:`Revenue`,value:`$48,200`,delta:`+8.1%`,icon:m,color:`text-emerald-500`},{label:`Active now`,value:`1,429`,delta:`+3%`,icon:d,color:`text-amber-500`}].map(({label:e,value:t,delta:n,icon:r,color:i})=>(0,z.jsx)(j,{children:(0,z.jsxs)(F,{children:[(0,z.jsxs)(`div`,{className:`flex items-start justify-between`,children:[(0,z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,z.jsx)(`p`,{className:`text-xs font-medium text-neutral-500`,children:e}),(0,z.jsx)(`p`,{className:`text-2xl font-semibold text-neutral-900`,children:t})]}),(0,z.jsx)(`div`,{className:o(`rounded-md bg-neutral-100 p-2`,i),children:(0,z.jsx)(r,{className:`h-4 w-4`})})]}),(0,z.jsxs)(`p`,{className:`mt-3 text-xs text-neutral-500`,children:[(0,z.jsx)(`span`,{className:`font-medium text-emerald-600`,children:n}),` `,`from last month`]})]})},e))})},J={render:()=>(0,z.jsxs)(j,{className:`w-64`,children:[(0,z.jsxs)(F,{className:`flex flex-col items-center gap-3 py-6 text-center`,children:[(0,z.jsx)(c,{src:`https://i.pravatar.cc/150?u=alice`,name:`Alice Johnson`,size:`xl`,status:`online`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`p`,{className:`text-sm font-semibold text-neutral-900`,children:`Alice Johnson`}),(0,z.jsx)(`p`,{className:`text-xs text-neutral-500`,children:`Product Designer`})]}),(0,z.jsx)(h,{variant:`success`,dot:!0,size:`sm`,children:`Online`})]}),(0,z.jsxs)(I,{divided:!0,className:`justify-center gap-2`,children:[(0,z.jsx)(g,{size:`sm`,variant:`secondary`,children:`Message`}),(0,z.jsx)(g,{size:`sm`,children:`View profile`})]})]})},Y={render:()=>(0,z.jsxs)(j,{className:`w-80`,children:[(0,z.jsx)(M,{children:(0,z.jsxs)(`div`,{className:`flex items-start justify-between`,children:[(0,z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,z.jsx)(N,{children:`Project Alpha`}),(0,z.jsx)(P,{children:`Last updated 2 hours ago`})]}),(0,z.jsxs)(D,{children:[(0,z.jsx)(T,{asChild:!0,children:(0,z.jsx)(g,{size:`icon`,variant:`ghost`,"aria-label":`More options`,children:(0,z.jsx)(l,{className:`h-4 w-4`})})}),(0,z.jsxs)(E,{align:`end`,children:[(0,z.jsx)(C,{children:`Edit`}),(0,z.jsx)(C,{children:`Duplicate`}),(0,z.jsx)(w,{}),(0,z.jsx)(C,{destructive:!0,children:`Delete`})]})]})]})}),(0,z.jsxs)(F,{children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,z.jsx)(h,{variant:`info`,dot:!0,children:`In progress`}),(0,z.jsx)(`span`,{className:`text-xs text-neutral-500`,children:`4 of 12 tasks`})]}),(0,z.jsx)(`div`,{className:`mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100`,children:(0,z.jsx)(`div`,{className:`h-full w-1/3 rounded-full bg-neutral-900`})})]}),(0,z.jsxs)(I,{divided:!0,className:`justify-between`,children:[(0,z.jsx)(c,{src:`https://i.pravatar.cc/150?u=alice`,name:`Alice Johnson`,size:`sm`}),(0,z.jsx)(g,{size:`sm`,variant:`ghost`,rightIcon:(0,z.jsx)(u,{className:`h-3.5 w-3.5`}),children:`Open`})]})]})},X={render:()=>(0,z.jsxs)(`div`,{className:`grid grid-cols-3 gap-4`,children:[(0,z.jsx)(S,{lines:3}),(0,z.jsx)(S,{lines:3}),(0,z.jsx)(S,{lines:3})]})},Z={render:()=>(0,z.jsxs)(j,{interactive:!0,disabled:!0,className:`w-72`,children:[(0,z.jsxs)(M,{children:[(0,z.jsx)(N,{children:`Locked card`}),(0,z.jsx)(P,{children:`This card is non-interactive.`})]}),(0,z.jsx)(F,{children:(0,z.jsx)(h,{variant:`warning`,size:`sm`,children:`Upgrade required`})})]})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A short description of what this card contains.</CardDescription>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-neutral-600">
          Card body content. Add any components here — forms, data, media.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {(["default", "ghost", "elevated"] as const).map(variant => <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
            <CardDescription>
              {variant === "default" && "1.5px border, white bg"}
              {variant === "ghost" && "No border, transparent bg"}
              {variant === "elevated" && "Shadow, no border"}
            </CardDescription>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-neutral-500">Card body content.</p>
          </CardBody>
        </Card>)}
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const plans = [{
      id: "free",
      label: "Free",
      desc: "For personal projects",
      price: "$0/mo"
    }, {
      id: "pro",
      label: "Pro",
      desc: "For professional teams",
      price: "$12/mo"
    }, {
      id: "teams",
      label: "Teams",
      desc: "For growing organisations",
      price: "$29/mo"
    }];
    return <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-3">
          {plans.map(plan => <Card key={plan.id} interactive onClick={() => setSelected(plan.id)} className={cn("transition-all", selected === plan.id ? "border-neutral-900 ring-1 ring-neutral-900" : "")}>
              <CardHeader>
                <CardTitle className="text-sm">{plan.label}</CardTitle>
                <CardDescription>{plan.desc}</CardDescription>
              </CardHeader>
              <CardBody>
                <p className="text-lg font-semibold text-neutral-900">
                  {plan.price}
                </p>
              </CardBody>
            </Card>)}
        </div>
        <p className="text-xs text-neutral-400">
          Selected: <strong>{selected ?? "none"}</strong>
        </p>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-72 overflow-hidden">
      <CardImage src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80" alt="Abstract gradient" height="h-40" />
      <CardHeader>
        <CardTitle>Cover image</CardTitle>
        <CardDescription>Image bleeds to card edges, radius is preserved.</CardDescription>
      </CardHeader>
      <CardFooter divided>
        <Button size="sm" variant="secondary">View</Button>
      </CardFooter>
    </Card>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader divided>
        <CardTitle>Invoice #1042</CardTitle>
        <CardDescription>Due October 31, 2025</CardDescription>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2">
          {[{
          label: "Design work",
          amount: "$1,200"
        }, {
          label: "Development",
          amount: "$3,400"
        }, {
          label: "Hosting (1y)",
          amount: "$240"
        }].map(({
          label,
          amount
        }) => <div key={label} className="flex justify-between text-sm">
              <span className="text-neutral-600">{label}</span>
              <span className="font-medium text-neutral-900">{amount}</span>
            </div>)}
        </div>
      </CardBody>
      <CardFooter divided className="justify-between">
        <span className="text-sm font-semibold text-neutral-900">Total</span>
        <span className="text-sm font-semibold text-neutral-900">$4,840</span>
      </CardFooter>
    </Card>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[{
      label: "Total users",
      value: "12,483",
      delta: "+12%",
      icon: Users,
      color: "text-blue-500"
    }, {
      label: "Revenue",
      value: "$48,200",
      delta: "+8.1%",
      icon: TrendingUp,
      color: "text-emerald-500"
    }, {
      label: "Active now",
      value: "1,429",
      delta: "+3%",
      icon: Zap,
      color: "text-amber-500"
    }].map(({
      label,
      value,
      delta,
      icon: Icon,
      color
    }) => <Card key={label}>
          <CardBody>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-neutral-500">{label}</p>
                <p className="text-2xl font-semibold text-neutral-900">{value}</p>
              </div>
              <div className={cn("rounded-md bg-neutral-100 p-2", color)}>
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              <span className="font-medium text-emerald-600">{delta}</span>
              {" "}from last month
            </p>
          </CardBody>
        </Card>)}
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-64">
      <CardBody className="flex flex-col items-center gap-3 py-6 text-center">
        <Avatar src="https://i.pravatar.cc/150?u=alice" name="Alice Johnson" size="xl" status="online" />
        <div>
          <p className="text-sm font-semibold text-neutral-900">Alice Johnson</p>
          <p className="text-xs text-neutral-500">Product Designer</p>
        </div>
        <Badge variant="success" dot size="sm">Online</Badge>
      </CardBody>
      <CardFooter divided className="justify-center gap-2">
        <Button size="sm" variant="secondary">Message</Button>
        <Button size="sm">View profile</Button>
      </CardFooter>
    </Card>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>Project Alpha</CardTitle>
            <CardDescription>Last updated 2 hours ago</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="More options">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between">
          <Badge variant="info" dot>In progress</Badge>
          <span className="text-xs text-neutral-500">4 of 12 tasks</span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
          <div className="h-full w-1/3 rounded-full bg-neutral-900" />
        </div>
      </CardBody>
      <CardFooter divided className="justify-between">
        <Avatar src="https://i.pravatar.cc/150?u=alice" name="Alice Johnson" size="sm" />
        <Button size="sm" variant="ghost" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
          Open
        </Button>
      </CardFooter>
    </Card>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      <SkeletonCard lines={3} />
      <SkeletonCard lines={3} />
      <SkeletonCard lines={3} />
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Card interactive disabled className="w-72">
      <CardHeader>
        <CardTitle>Locked card</CardTitle>
        <CardDescription>This card is non-interactive.</CardDescription>
      </CardHeader>
      <CardBody>
        <Badge variant="warning" size="sm">Upgrade required</Badge>
      </CardBody>
    </Card>
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Variants`,`Interactive`,`WithImage`,`Divided`,`StatCards`,`TeamMemberCard`,`WithContextMenu`,`Loading`,`Disabled`]}))();export{H as Default,Z as Disabled,K as Divided,W as Interactive,X as Loading,q as StatCards,J as TeamMemberCard,U as Variants,Y as WithContextMenu,G as WithImage,Q as __namedExportsOrder,V as default};