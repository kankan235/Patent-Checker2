(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5858:(e,t,s)=>{Promise.resolve().then(s.bind(s,6856))},6856:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var a=s(5155),l=s(2115);let r=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:"rounded-lg border bg-card text-card-foreground shadow-sm",...l})});r.displayName="Card";let n=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:"p-6 pt-0",...l})});n.displayName="CardContent";var i=s(2317);let c=l.forwardRef((e,t)=>{let{className:s,asChild:l=!1,...r}=e,n=l?i.DX:"button";return(0,a.jsx)(n,{ref:t,className:"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90",...r})});c.displayName="Button";let d=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,role:"alert",className:"relative w-full rounded-lg border p-4",...l})});d.displayName="Alert";let o=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:"text-sm [&_p]:leading-relaxed",...l})});o.displayName="AlertDescription";var u=s(1125);let m=u.bL,f=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(u.B8,{ref:t,className:"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",...l})});f.displayName=u.B8.displayName;let x=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(u.l9,{ref:t,className:"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",...l})});x.displayName=u.l9.displayName,l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(u.UC,{ref:t,className:"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",...l})}).displayName=u.UC.displayName;var h=s(6566);let p=h.bL;h.l9;let g=l.forwardRef((e,t)=>{let{className:s,children:l,...r}=e;return(0,a.jsxs)(h.ZL,{children:[(0,a.jsx)(h.hJ,{className:"fixed inset-0 z-50 bg-black/50"}),(0,a.jsx)(h.UC,{ref:t,className:"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",...r,children:l})]})});g.displayName=h.UC.displayName;let j=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:"flex flex-col space-y-1.5 text-center sm:text-left",...s})};j.displayName="DialogHeader";let b=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",...s})};b.displayName="DialogFooter";let N=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(h.hE,{ref:t,className:"text-lg font-semibold leading-none tracking-tight",...l})});N.displayName=h.hE.displayName;let v=()=>{let[e,t]=(0,l.useState)(""),[s,i]=(0,l.useState)(""),[u,h]=(0,l.useState)([]),[v,y]=(0,l.useState)("all"),[w,k]=(0,l.useState)(!1),[C,S]=(0,l.useState)([]),[E,R]=(0,l.useState)(!1),[_,O]=(0,l.useState)(""),A=e=>{let t=[],s=new Set,a=new Set,l=new Set,r=new Set;return e.split("，").forEach((e,n)=>{if(!e.trim())return;let i=e.split("-");if(2!==i.length){t.push("第".concat(n+1,"组映射格式错误：").concat(e));return}let[c,d]=i.map(e=>e.trim());if(!c||!d){t.push("第".concat(n+1,"组映射存在空值：").concat(e));return}if(!/^\d+$/.test(c)){t.push("第".concat(n+1,"组映射的标号不是有效数字：").concat(c));return}s.has(c)&&l.add(c),s.add(c),a.has(d)&&r.add(d),a.add(d)}),l.size>0&&t.push("发现重复的标号：".concat(Array.from(l).join(", "))),r.size>0&&t.push("发现重复的特征词：".concat(Array.from(r).join(", "))),t};(0,l.useEffect)(()=>{e.trim()?S(A(e)):S([])},[e]);let z=e=>{let t={},s={},a=new Set;return e.split("，").forEach(e=>{let[l,r]=e.split("-").map(e=>e.trim());l&&r&&(t[r]=l,s[l]=r,r.startsWith("第")&&a.add(r))}),{featureToNumber:t,numberToFeature:s,prefixFeatures:a}},D=(e,t,s)=>{let a=[];return Array.from(s).concat(Object.keys(t).filter(e=>!s.has(e))).sort((e,t)=>t.length-e.length).forEach(s=>{let l;let r=RegExp("".concat(s,"\\s*\\d+"),"g");for(;null!==(l=r.exec(e));){let r=l[0],n=r.match(/\d+/)[0],i=t[s];n!==i&&a.push({type:"feature",feature:s,foundNumber:n,expectedNumber:i,context:"...".concat(e.slice(Math.max(0,l.index-20),l.index+r.length+20),"..."),position:l.index,message:'特征词"'.concat(s,'"使用了错误的标号"').concat(n,'"，应使用"').concat(i,'"'),replacement:"".concat(s).concat(i)})}}),a},M=(e,t)=>{let s;let a=[],l=RegExp("(?<![.\\d])\\d+(?!\\d)","g");for(;null!==(s=l.exec(e));){let l=s[0];if(!t[l]){let r=Object.keys(t).filter(e=>e.startsWith(l)&&e!==l);r.length>0?a.push({type:"incomplete",number:l,possibleNumbers:r,context:"...".concat(e.slice(Math.max(0,s.index-20),s.index+l.length+20),"..."),position:s.index,message:'可能使用了不完整标号"'.concat(l,'"，完整标号可能是: ').concat(r.join(", ")),suggestions:r}):a.push({type:"undefined",number:l,context:"...".concat(e.slice(Math.max(0,s.index-20),s.index+l.length+20),"..."),position:s.index,message:'使用了未定义的标号"'.concat(l,'"')})}}return a},U=e=>{switch(e){case"feature":return"bg-yellow-50 border-yellow-200";case"incomplete":return"bg-orange-50 border-orange-200";case"undefined":return"bg-red-50 border-red-200";default:return""}},B=u.filter(e=>"all"===v||e.type===v);return(0,a.jsxs)("div",{className:"w-full max-w-4xl mx-auto space-y-4",children:[(0,a.jsx)(r,{children:(0,a.jsxs)(n,{className:"p-6 space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-2",children:"技术特征-标号对应关系"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("textarea",{className:"w-full h-32 p-2 border rounded-md ".concat(C.length>0?"border-red-300":""),value:e,onChange:e=>t(e.target.value),placeholder:"100-底盘，110-第一腔体..."}),C.length>0&&(0,a.jsx)(d,{className:"bg-red-50 border-red-200",children:(0,a.jsxs)(o,{children:[(0,a.jsx)("div",{className:"font-medium",children:"映射关系存在以下问题："}),(0,a.jsx)("ul",{className:"list-disc pl-4 mt-1",children:C.map((e,t)=>(0,a.jsx)("li",{children:e},t))})]})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-2",children:"需要审核的专利文本"}),(0,a.jsx)("textarea",{className:"w-full h-48 p-2 border rounded-md",value:s,onChange:e=>i(e.target.value),placeholder:"输入需要审核的专利文本..."})]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(c,{onClick:()=>{if(!s.trim()||!e.trim()||C.length>0){h([]),k(!0);return}let{featureToNumber:t,numberToFeature:a,prefixFeatures:l}=z(e);h([...D(s,t,l),...M(s,a)].sort((e,t)=>e.position-t.position).filter((e,t,s)=>{if(0===t)return!0;let a=s[t-1];return Math.abs(e.position-a.position)>20||e.type!==a.type})),k(!0)},className:"flex-1",disabled:!s.trim()||!e.trim()||C.length>0,children:"开始审核"}),u.length>0&&(0,a.jsx)(c,{onClick:()=>{let e=s,t=[];return[...u].sort((e,t)=>t.position-e.position).forEach(s=>{if("feature"===s.type&&s.replacement){let a=e.slice(0,s.position),l=e.slice(s.position+s.feature.length+s.foundNumber.length);e=a+s.replacement+l,t.push('将"'.concat(s.feature).concat(s.foundNumber,'"修正为"').concat(s.replacement,'"'))}}),O(e),R(!0),t},variant:"outline",className:"flex-1",children:"自动修正"})]}),w&&(0,a.jsx)("div",{className:"space-y-2",children:u.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{value:v,onValueChange:y,children:(0,a.jsxs)(f,{children:[(0,a.jsxs)(x,{value:"all",children:["全部问题 (",u.length,")"]}),(0,a.jsxs)(x,{value:"feature",children:["特征词 (",u.filter(e=>"feature"===e.type).length,")"]}),(0,a.jsxs)(x,{value:"incomplete",children:["不完整标号 (",u.filter(e=>"incomplete"===e.type).length,")"]}),(0,a.jsxs)(x,{value:"undefined",children:["未定义标号 (",u.filter(e=>"undefined"===e.type).length,")"]})]})}),(0,a.jsx)("div",{className:"space-y-2",children:B.map((e,t)=>(0,a.jsx)(d,{className:U(e.type),children:(0,a.jsxs)(o,{children:[(0,a.jsx)("div",{className:"font-medium",children:e.message}),(0,a.jsxs)("div",{className:"mt-1 text-sm opacity-75",children:["上下文：",e.context]})]})},t))})]}):(0,a.jsx)(d,{children:(0,a.jsx)(o,{className:"text-green-600",children:"未发现明显的标号使用错误"})})})]})}),(0,a.jsx)(p,{open:E,onOpenChange:R,children:(0,a.jsxs)(g,{children:[(0,a.jsx)(j,{children:(0,a.jsx)(N,{children:"自动修正结果"})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(d,{children:(0,a.jsx)(o,{children:"以下是修正后的文本，请仔细核对修改内容。"})}),(0,a.jsx)("textarea",{className:"w-full h-48 p-2 border rounded-md",value:_,onChange:e=>O(e.target.value),readOnly:!0})]}),(0,a.jsxs)(b,{className:"flex gap-2",children:[(0,a.jsx)(c,{variant:"outline",onClick:()=>R(!1),children:"关闭"}),(0,a.jsx)(c,{onClick:()=>{i(_),R(!1),k(!1),h([])},children:"应用修正"})]})]})})]})};function y(){return(0,a.jsx)("main",{className:"min-h-screen p-4",children:(0,a.jsx)(v,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[22,441,517,358],()=>t(5858)),_N_E=e.O()}]);