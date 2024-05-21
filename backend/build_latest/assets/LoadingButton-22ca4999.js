import{l as $,k as b,s as v,d as m,_ as d,m as c,r as C,n as E,o as y,f as R,j as g,q as j}from"./index-3f864ce5.js";import{C as M}from"./CircularProgress-792fe92d.js";function W(n){return b("MuiLoadingButton",n)}const z=$("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),i=z,U=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],_=n=>{const{loading:o,loadingPosition:t,classes:a}=n,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(t)}`],endIcon:[o&&`endIconLoading${c(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(t)}`]},l=j(r,W,a);return d({},a,l)},k=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",F=v(m,{shouldForwardProp:n=>k(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),q=v("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${c(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),N=C.forwardRef(function(o,t){const a=E({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:h,loading:e=!1,loadingIndicator:u,loadingPosition:x="center",variant:I="text"}=a,B=y(a,U),L=R(h),p=u??g.jsx(M,{"aria-labelledby":L,color:"inherit",size:16}),s=d({},a,{disabled:l,loading:e,loadingIndicator:p,loadingPosition:x,variant:I}),P=_(s),f=e?g.jsx(q,{className:P.loadingIndicator,ownerState:s,children:p}):null;return g.jsxs(F,d({disabled:l||e,id:L,ref:t},B,{variant:I,classes:P,ownerState:s,children:[s.loadingPosition==="end"?r:f,s.loadingPosition==="end"?f:r]}))}),D=N;export{D as L};
