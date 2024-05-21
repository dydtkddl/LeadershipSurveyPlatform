import{r as k,k as K,l as O,s as T,_ as x,n as _,u as I,af as L,o as D,j as N,p as U,ag as S,ah as b,q as Z}from"./index-f5f7178f.js";const A=k.createContext(),z=A;function F(e){return K("MuiGrid",e)}const q=[0,1,2,3,4,5,6,7,8,9,10],H=["column-reverse","column","row-reverse","row"],J=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=O("MuiGrid",["root","container","item","zeroMinWidth",...q.map(e=>`spacing-xs-${e}`),...H.map(e=>`direction-xs-${e}`),...J.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),Q=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function X({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((t,r)=>{let s={};if(n[r]&&(i=n[r]),!i)return t;if(i===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=S({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[r]:a;if(u==null)return t;const l=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const o=e.spacing(n.columnSpacing);if(o!=="0px"){const p=`calc(${l} + ${m(o)})`;c={flexBasis:p,maxWidth:p}}}s=x({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[r]===0?Object.assign(t,s):t[e.breakpoints.up(r)]=s,t},{})}function Y({theme:e,ownerState:n}){const i=S({values:n.direction,breakpoints:e.breakpoints.values});return b({theme:e},i,t=>{const r={flexDirection:t};return t.indexOf("column")===0&&(r[`& > .${$.item}`]={maxWidth:"none"}),r})}function B({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(r=>{i===""&&n[r]!==0&&(i=r)});const t=Object.keys(e).sort((r,s)=>e[r]-e[s]);return t.slice(0,t.indexOf(i))}function ee({theme:e,ownerState:n}){const{container:i,rowSpacing:t}=n;let r={};if(i&&t!==0){const s=S({values:t,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=B({breakpoints:e.breakpoints.values,values:s})),r=b({theme:e},s,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{marginTop:`-${m(o)}`,[`& > .${$.item}`]:{paddingTop:m(o)}}:(c=a)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return r}function ne({theme:e,ownerState:n}){const{container:i,columnSpacing:t}=n;let r={};if(i&&t!==0){const s=S({values:t,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=B({breakpoints:e.breakpoints.values,values:s})),r=b({theme:e},s,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{width:`calc(100% + ${m(o)})`,marginLeft:`-${m(o)}`,[`& > .${$.item}`]:{paddingLeft:m(o)}}:(c=a)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return r}function re(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return n.forEach(r=>{const s=e[r];Number(s)>0&&t.push(i[`spacing-${r}-${String(s)}`])}),t}const te=T("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:t,direction:r,item:s,spacing:a,wrap:u,zeroMinWidth:l,breakpoints:c}=i;let o=[];t&&(o=re(a,c,n));const p=[];return c.forEach(d=>{const f=i[d];f&&p.push(n[`grid-${d}-${String(f)}`])}),[n.root,t&&n.container,s&&n.item,l&&n.zeroMinWidth,...o,r!=="row"&&n[`direction-xs-${String(r)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...p]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Y,ee,ne,X);function ie(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(t=>{const r=e[t];if(Number(r)>0){const s=`spacing-${t}-${String(r)}`;i.push(s)}}),i}const se=e=>{const{classes:n,container:i,direction:t,item:r,spacing:s,wrap:a,zeroMinWidth:u,breakpoints:l}=e;let c=[];i&&(c=ie(s,l));const o=[];l.forEach(d=>{const f=e[d];f&&o.push(`grid-${d}-${String(f)}`)});const p={root:["root",i&&"container",r&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...o]};return Z(p,F,n)},oe=k.forwardRef(function(n,i){const t=_({props:n,name:"MuiGrid"}),{breakpoints:r}=I(),s=L(t),{className:a,columns:u,columnSpacing:l,component:c="div",container:o=!1,direction:p="row",item:d=!1,rowSpacing:f,spacing:w=0,wrap:M="wrap",zeroMinWidth:V=!1}=s,v=D(s,Q),j=f||w,E=l||w,P=k.useContext(z),G=o?u||12:P,W={},y=x({},v);r.keys.forEach(h=>{v[h]!=null&&(W[h]=v[h],delete y[h])});const C=x({},s,{columns:G,container:o,direction:p,item:d,rowSpacing:j,columnSpacing:E,wrap:M,zeroMinWidth:V,spacing:w},W,{breakpoints:r.keys}),R=se(C);return N.jsx(z.Provider,{value:G,children:N.jsx(te,x({ownerState:C,className:U(R.root,a),as:c,ref:i},y))})}),ce=oe;export{ce as G};
