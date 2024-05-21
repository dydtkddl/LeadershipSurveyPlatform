import{r as c,k as O,l as D,s as w,_ as l,n as z,o as H,j as t,p as $,q as E,m as U,H as pt,v as Z,J as dt,t as ce,u as Lo,I as J,K as Io,N as ut,M as Ue,f as He,O as gt,Q as mt,e as ht,T as le,P as b,S as No,E as ft,a as Y,b as bt,x as xt,B as vt,g as Tt,h as yt,R as Ct,w as wt,U as lo,V as xe,X as Pt,d as Rt,c as jt,W as $t}from"./index-fe2074e7.js";import{l as co,L as St}from"./label-d1863696.js";import{f as ve}from"./index-cb482739.js";import{C as Ao}from"./Checkbox-2cc05697.js";import{I as Mt}from"./InputAdornment-3ae69e13.js";import{P as Bo}from"./Popper-5b44dafc.js";import{C as kt}from"./Container-f877de5f.js";import{C as Lt}from"./Card-291243a4.js";const It=c.createContext(),_o=It;function Nt(e){return O("MuiTable",e)}D("MuiTable",["root","stickyHeader"]);const At=["className","component","padding","size","stickyHeader"],Bt=e=>{const{classes:o,stickyHeader:n}=e;return E({root:["root",n&&"stickyHeader"]},Nt,o)},_t=w("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>l({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":l({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),po="table",Ut=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTable"}),{className:r,component:i=po,padding:p="normal",size:d="medium",stickyHeader:a=!1}=s,g=H(s,At),m=l({},s,{component:i,padding:p,size:d,stickyHeader:a}),f=Bt(m),P=c.useMemo(()=>({padding:p,size:d,stickyHeader:a}),[p,d,a]);return t.jsx(_o.Provider,{value:P,children:t.jsx(_t,l({as:i,role:i===po?null:"table",ref:n,className:$(f.root,r),ownerState:m},g))})}),Ht=Ut,Ft=c.createContext(),Ce=Ft;function Ot(e){return O("MuiTableBody",e)}D("MuiTableBody",["root"]);const Dt=["className","component"],zt=e=>{const{classes:o}=e;return E({root:["root"]},Ot,o)},Et=w("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),Wt={variant:"body"},uo="tbody",Vt=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTableBody"}),{className:r,component:i=uo}=s,p=H(s,Dt),d=l({},s,{component:i}),a=zt(d);return t.jsx(Ce.Provider,{value:Wt,children:t.jsx(Et,l({className:$(a.root,r),as:i,ref:n,role:i===uo?null:"rowgroup",ownerState:d},p))})}),Kt=Vt;function qt(e){return O("MuiTableContainer",e)}D("MuiTableContainer",["root"]);const Xt=["className","component"],Gt=e=>{const{classes:o}=e;return E({root:["root"]},qt,o)},Jt=w("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),Yt=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTableContainer"}),{className:r,component:i="div"}=s,p=H(s,Xt),d=l({},s,{component:i}),a=Gt(d);return t.jsx(Jt,l({ref:n,as:i,className:$(a.root,r),ownerState:d},p))}),Qt=Yt;function Zt(e){return O("MuiTableCell",e)}const en=D("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),on=en,tn=["align","className","component","padding","scope","size","sortDirection","variant"],nn=e=>{const{classes:o,variant:n,align:s,padding:r,size:i,stickyHeader:p}=e,d={root:["root",n,p&&"stickyHeader",s!=="inherit"&&`align${U(s)}`,r!=="normal"&&`padding${U(r)}`,`size${U(i)}`]};return E(d,Zt,o)},sn=w("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${U(n.size)}`],n.padding!=="normal"&&o[`padding${U(n.padding)}`],n.align!=="inherit"&&o[`align${U(n.align)}`],n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>l({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?pt(Z(e.palette.divider,1),.88):dt(Z(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},o.variant==="body"&&{color:(e.vars||e).palette.text.primary},o.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${on.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),rn=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTableCell"}),{align:r="inherit",className:i,component:p,padding:d,scope:a,size:g,sortDirection:m,variant:f}=s,P=H(s,tn),x=c.useContext(_o),L=c.useContext(Ce),N=L&&L.variant==="head";let y;p?y=p:y=N?"th":"td";let C=a;y==="td"?C=void 0:!C&&N&&(C="col");const v=f||L&&L.variant,R=l({},s,{align:r,component:y,padding:d||(x&&x.padding?x.padding:"normal"),size:g||(x&&x.size?x.size:"medium"),sortDirection:m,stickyHeader:v==="head"&&x&&x.stickyHeader,variant:v}),h=nn(R);let T=null;return m&&(T=m==="asc"?"ascending":"descending"),t.jsx(sn,l({as:y,ref:n,className:$(h.root,i),"aria-sort":T,scope:C,ownerState:R},P))}),k=rn,go=ce(t.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),mo=ce(t.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),ho=ce(t.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),fo=ce(t.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");var bo,xo,vo,To,yo,Co,wo,Po;const an=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],ln=c.forwardRef(function(o,n){const{backIconButtonProps:s,count:r,getItemAriaLabel:i,nextIconButtonProps:p,onPageChange:d,page:a,rowsPerPage:g,showFirstButton:m,showLastButton:f}=o,P=H(o,an),x=Lo(),L=v=>{d(v,0)},N=v=>{d(v,a-1)},y=v=>{d(v,a+1)},C=v=>{d(v,Math.max(0,Math.ceil(r/g)-1))};return t.jsxs("div",l({ref:n},P,{children:[m&&t.jsx(J,{onClick:L,disabled:a===0,"aria-label":i("first",a),title:i("first",a),children:x.direction==="rtl"?bo||(bo=t.jsx(ho,{})):xo||(xo=t.jsx(fo,{}))}),t.jsx(J,l({onClick:N,disabled:a===0,color:"inherit","aria-label":i("previous",a),title:i("previous",a)},s,{children:x.direction==="rtl"?vo||(vo=t.jsx(mo,{})):To||(To=t.jsx(go,{}))})),t.jsx(J,l({onClick:y,disabled:r!==-1?a>=Math.ceil(r/g)-1:!1,color:"inherit","aria-label":i("next",a),title:i("next",a)},p,{children:x.direction==="rtl"?yo||(yo=t.jsx(go,{})):Co||(Co=t.jsx(mo,{}))})),f&&t.jsx(J,{onClick:C,disabled:a>=Math.ceil(r/g)-1,"aria-label":i("last",a),title:i("last",a),children:x.direction==="rtl"?wo||(wo=t.jsx(fo,{})):Po||(Po=t.jsx(ho,{}))})]}))}),cn=ln;function pn(e){return O("MuiTablePagination",e)}const dn=D("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),ie=dn;var Ro;const un=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],gn=w(k,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),mn=w(Io,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,o)=>l({[`& .${ie.actions}`]:o.actions},o.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${ie.actions}`]:{flexShrink:0,marginLeft:20}})),hn=w("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,o)=>o.spacer})({flex:"1 1 100%"}),fn=w("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,o)=>o.selectLabel})(({theme:e})=>l({},e.typography.body2,{flexShrink:0})),bn=w(ut,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,o)=>l({[`& .${ie.selectIcon}`]:o.selectIcon,[`& .${ie.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${ie.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),xn=w(Ue,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,o)=>o.menuItem})({}),vn=w("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,o)=>o.displayedRows})(({theme:e})=>l({},e.typography.body2,{flexShrink:0}));function Tn({from:e,to:o,count:n}){return`${e}–${o} of ${n!==-1?n:`more than ${o}`}`}function yn(e){return`Go to ${e} page`}const Cn=e=>{const{classes:o}=e;return E({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},pn,o)},wn=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTablePagination"}),{ActionsComponent:r=cn,backIconButtonProps:i,className:p,colSpan:d,component:a=k,count:g,getItemAriaLabel:m=yn,labelDisplayedRows:f=Tn,labelRowsPerPage:P="Rows per page:",nextIconButtonProps:x,onPageChange:L,onRowsPerPageChange:N,page:y,rowsPerPage:C,rowsPerPageOptions:v=[10,25,50,100],SelectProps:R={},showFirstButton:h=!1,showLastButton:T=!1}=s,S=H(s,un),j=s,M=Cn(j),K=R.native?"option":xn;let _;(a===k||a==="td")&&(_=d||1e3);const Pe=He(R.id),pe=He(R.labelId),de=()=>g===-1?(y+1)*C:C===-1?g:Math.min(g,(y+1)*C);return t.jsx(gn,l({colSpan:_,ref:n,as:a,ownerState:j,className:$(M.root,p)},S,{children:t.jsxs(mn,{className:M.toolbar,children:[t.jsx(hn,{className:M.spacer}),v.length>1&&t.jsx(fn,{className:M.selectLabel,id:pe,children:P}),v.length>1&&t.jsx(bn,l({variant:"standard"},!R.variant&&{input:Ro||(Ro=t.jsx(gt,{}))},{value:C,onChange:N,id:Pe,labelId:pe},R,{classes:l({},R.classes,{root:$(M.input,M.selectRoot,(R.classes||{}).root),select:$(M.select,(R.classes||{}).select),icon:$(M.selectIcon,(R.classes||{}).icon)}),children:v.map(A=>c.createElement(K,l({},!mt(K)&&{ownerState:j},{className:M.menuItem,key:A.label?A.label:A,value:A.value?A.value:A}),A.label?A.label:A))})),t.jsx(vn,{className:M.displayedRows,children:f({from:g===0?0:y*C+1,to:de(),count:g===-1?-1:g,page:y})}),t.jsx(r,{className:M.actions,backIconButtonProps:i,count:g,nextIconButtonProps:x,onPageChange:L,page:y,rowsPerPage:C,showFirstButton:h,showLastButton:T,getItemAriaLabel:m})]})}))}),Pn=wn,re=[...Array(24)].map((e,o)=>({id:ve.string.uuid(),avatarUrl:`/assets/images/avatars/avatar_${o+1}.jpg`,name:ve.person.fullName(),company:ve.company.name(),isVerified:ve.datatype.boolean(),status:co.sample(["active","banned"]),role:co.sample(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}));function Rn(e){return O("MuiTableRow",e)}const jn=D("MuiTableRow",["root","selected","hover","head","footer"]),jo=jn,$n=["className","component","hover","selected"],Sn=e=>{const{classes:o,selected:n,hover:s,head:r,footer:i}=e;return E({root:["root",n&&"selected",s&&"hover",r&&"head",i&&"footer"]},Rn,o)},Mn=w("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.head&&o.head,n.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${jo.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${jo.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Z(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Z(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),$o="tr",kn=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTableRow"}),{className:r,component:i=$o,hover:p=!1,selected:d=!1}=s,a=H(s,$n),g=c.useContext(Ce),m=l({},s,{component:i,hover:p,selected:d,head:g&&g.variant==="head",footer:g&&g.variant==="footer"}),f=Sn(m);return t.jsx(Mn,l({as:i,ref:n,className:$(f.root,r),role:i===$o?null:"row",ownerState:m},a))}),we=kn;function Uo({query:e}){return t.jsx(we,{children:t.jsx(k,{align:"center",colSpan:6,sx:{py:3},children:t.jsxs(ht,{sx:{textAlign:"center"},children:[t.jsx(le,{variant:"h6",paragraph:!0,children:"Not found"}),t.jsxs(le,{variant:"body2",children:["No results found for  ",t.jsxs("strong",{children:['"',e,'"']}),".",t.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}Uo.propTypes={query:b.string};function Ho({selected:e,name:o,avatarUrl:n,company:s,role:r,isVerified:i,status:p,handleClick:d}){const[a,g]=c.useState(null),m=P=>{g(P.currentTarget)},f=()=>{g(null)};return t.jsxs(t.Fragment,{children:[t.jsxs(we,{hover:!0,tabIndex:-1,role:"checkbox",selected:e,children:[t.jsx(k,{padding:"checkbox",children:t.jsx(Ao,{disableRipple:!0,checked:e,onChange:d})}),t.jsx(k,{component:"th",scope:"row",padding:"none",children:t.jsxs(No,{direction:"row",alignItems:"center",spacing:2,children:[t.jsx(ft,{alt:o,src:n}),t.jsx(le,{variant:"subtitle2",noWrap:!0,children:o})]})}),t.jsx(k,{children:s}),t.jsx(k,{children:r}),t.jsx(k,{align:"center",children:i?"Yes":"No"}),t.jsx(k,{children:t.jsx(St,{color:p==="banned"&&"error"||"success",children:p})}),t.jsx(k,{align:"right",children:t.jsx(J,{onClick:m,children:t.jsx(Y,{icon:"eva:more-vertical-fill"})})})]}),t.jsxs(bt,{open:!!a,anchorEl:a,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[t.jsxs(Ue,{onClick:f,children:[t.jsx(Y,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),t.jsxs(Ue,{onClick:f,sx:{color:"error.main"},children:[t.jsx(Y,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}Ho.propTypes={avatarUrl:b.any,company:b.any,handleClick:b.func,isVerified:b.any,name:b.any,role:b.any,selected:b.any,status:b.string};function Ln(e){return O("MuiTableHead",e)}D("MuiTableHead",["root"]);const In=["className","component"],Nn=e=>{const{classes:o}=e;return E({root:["root"]},Ln,o)},An=w("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),Bn={variant:"head"},So="thead",_n=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTableHead"}),{className:r,component:i=So}=s,p=H(s,In),d=l({},s,{component:i}),a=Nn(d);return t.jsx(Ce.Provider,{value:Bn,children:t.jsx(An,l({as:i,className:$(a.root,r),ref:n,role:i===So?null:"rowgroup",ownerState:d},p))})}),Un=_n,Hn=ce(t.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function Fn(e){return O("MuiTableSortLabel",e)}const On=D("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),Be=On,Dn=["active","children","className","direction","hideSortIcon","IconComponent"],zn=e=>{const{classes:o,direction:n,active:s}=e,r={root:["root",s&&"active"],icon:["icon",`iconDirection${U(n)}`]};return E(r,Fn,o)},En=w(xt,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${Be.icon}`]:{opacity:.5}},[`&.${Be.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${Be.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),Wn=w("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.icon,o[`iconDirection${U(n.direction)}`]]}})(({theme:e,ownerState:o})=>l({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),Vn=c.forwardRef(function(o,n){const s=z({props:o,name:"MuiTableSortLabel"}),{active:r=!1,children:i,className:p,direction:d="asc",hideSortIcon:a=!1,IconComponent:g=Hn}=s,m=H(s,Dn),f=l({},s,{active:r,direction:d,hideSortIcon:a,IconComponent:g}),P=zn(f);return t.jsxs(En,l({className:$(P.root,p),component:"span",disableRipple:!0,ownerState:f,ref:n},m,{children:[i,a&&!r?null:t.jsx(Wn,{as:g,className:$(P.icon),ownerState:f})]}))}),Kn=Vn,qn={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Xn(e,o,n){return e?Math.max(0,(1+e)*o-n):0}function Mo(e,o,n){return e[n]===null?1:o[n]===null||o[n]<e[n]?-1:o[n]>e[n]?1:0}function Gn(e,o){return e==="desc"?(n,s)=>Mo(n,s,o):(n,s)=>-Mo(n,s,o)}function Jn({inputData:e,comparator:o,filterName:n}){const s=e.map((r,i)=>[r,i]);return s.sort((r,i)=>{const p=o(r[0],i[0]);return p!==0?p:r[1]-i[1]}),e=s.map(r=>r[0]),n&&(e=e.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),e}function Fo({order:e,orderBy:o,rowCount:n,headLabel:s,numSelected:r,onRequestSort:i,onSelectAllClick:p}){const d=a=>g=>{i(g,a)};return t.jsx(Un,{children:t.jsxs(we,{children:[t.jsx(k,{padding:"checkbox",children:t.jsx(Ao,{indeterminate:r>0&&r<n,checked:n>0&&r===n,onChange:p})}),s.map(a=>t.jsx(k,{align:a.align||"left",sortDirection:o===a.id?e:!1,sx:{width:a.width,minWidth:a.minWidth},children:t.jsxs(Kn,{hideSortIcon:!0,active:o===a.id,direction:o===a.id?e:"asc",onClick:d(a.id),children:[a.label,o===a.id?t.jsx(vt,{sx:{...qn},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))]})})}Fo.propTypes={order:b.oneOf(["asc","desc"]),orderBy:b.string,rowCount:b.number,headLabel:b.array,numSelected:b.number,onRequestSort:b.func,onSelectAllClick:b.func};function Oo({emptyRows:e,height:o}){return e?t.jsx(we,{sx:{...o&&{height:o*e}},children:t.jsx(k,{colSpan:9})}):null}Oo.propTypes={emptyRows:b.number,height:b.number};function Yn(e){return O("MuiTooltip",e)}const Qn=D("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),V=Qn,Zn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function es(e){return Math.round(e*1e5)/1e5}const os=e=>{const{classes:o,disableInteractive:n,arrow:s,touch:r,placement:i}=e,p={popper:["popper",!n&&"popperInteractive",s&&"popperArrow"],tooltip:["tooltip",s&&"tooltipArrow",r&&"touch",`tooltipPlacement${U(i.split("-")[0])}`],arrow:["arrow"]};return E(p,Yn,o)},ts=w(Bo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.popper,!n.disableInteractive&&o.popperInteractive,n.arrow&&o.popperArrow,!n.open&&o.popperClose]}})(({theme:e,ownerState:o,open:n})=>l({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${V.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${V.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${V.arrow}`]:l({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${V.arrow}`]:l({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),ns=w("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.tooltip,n.touch&&o.touch,n.arrow&&o.tooltipArrow,o[`tooltipPlacement${U(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>l({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Z(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${es(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${V.popper}[data-popper-placement*="left"] &`]:l({transformOrigin:"right center"},o.isRtl?l({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):l({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${V.popper}[data-popper-placement*="right"] &`]:l({transformOrigin:"left center"},o.isRtl?l({marginRight:"14px"},o.touch&&{marginRight:"24px"}):l({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${V.popper}[data-popper-placement*="top"] &`]:l({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${V.popper}[data-popper-placement*="bottom"] &`]:l({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),ss=w("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Z(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Te=!1,_e=null,ae={x:0,y:0};function ye(e,o){return n=>{o&&o(n),e(n)}}const rs=c.forwardRef(function(o,n){var s,r,i,p,d,a,g,m,f,P,x,L,N,y,C,v,R,h,T;const S=z({props:o,name:"MuiTooltip"}),{arrow:j=!1,children:M,components:K={},componentsProps:_={},describeChild:Pe=!1,disableFocusListener:pe=!1,disableHoverListener:de=!1,disableInteractive:A=!1,disableTouchListener:zo=!1,enterDelay:Fe=100,enterNextDelay:Oe=0,enterTouchDelay:Eo=700,followCursor:Re=!1,id:Wo,leaveDelay:De=0,leaveTouchDelay:Vo=1500,onClose:ze,onOpen:Ee,open:Ko,placement:We="bottom",PopperComponent:je,PopperProps:q={},slotProps:X={},slots:ue={},title:Q,TransitionComponent:qo=lo,TransitionProps:Xo}=S,Ve=H(S,Zn),W=c.isValidElement(M)?M:t.jsx("span",{children:M}),$e=Lo(),Go=$e.direction==="rtl",[ee,Ke]=c.useState(),[Se,Jo]=c.useState(null),ge=c.useRef(!1),Me=A||Re,me=c.useRef(),he=c.useRef(),G=c.useRef(),qe=c.useRef(),[Yo,Xe]=Tt({controlled:Ko,default:!1,name:"Tooltip",state:"open"});let F=Yo;const ke=He(Wo),oe=c.useRef(),fe=c.useCallback(()=>{oe.current!==void 0&&(document.body.style.WebkitUserSelect=oe.current,oe.current=void 0),clearTimeout(qe.current)},[]);c.useEffect(()=>()=>{clearTimeout(me.current),clearTimeout(he.current),clearTimeout(G.current),fe()},[fe]);const Ge=u=>{clearTimeout(_e),Te=!0,Xe(!0),Ee&&!F&&Ee(u)},be=yt(u=>{clearTimeout(_e),_e=setTimeout(()=>{Te=!1},800+De),Xe(!1),ze&&F&&ze(u),clearTimeout(me.current),me.current=setTimeout(()=>{ge.current=!1},$e.transitions.duration.shortest)}),Le=u=>{ge.current&&u.type!=="touchstart"||(ee&&ee.removeAttribute("title"),clearTimeout(he.current),clearTimeout(G.current),Fe||Te&&Oe?he.current=setTimeout(()=>{Ge(u)},Te?Oe:Fe):Ge(u))},Je=u=>{clearTimeout(he.current),clearTimeout(G.current),G.current=setTimeout(()=>{be(u)},De)},{isFocusVisibleRef:Ye,onBlur:Qo,onFocus:Zo,ref:et}=Ct(),[,Qe]=c.useState(!1),Ze=u=>{Qo(u),Ye.current===!1&&(Qe(!1),Je(u))},eo=u=>{ee||Ke(u.currentTarget),Zo(u),Ye.current===!0&&(Qe(!0),Le(u))},oo=u=>{ge.current=!0;const I=W.props;I.onTouchStart&&I.onTouchStart(u)},to=Le,no=Je,ot=u=>{oo(u),clearTimeout(G.current),clearTimeout(me.current),fe(),oe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",qe.current=setTimeout(()=>{document.body.style.WebkitUserSelect=oe.current,Le(u)},Eo)},tt=u=>{W.props.onTouchEnd&&W.props.onTouchEnd(u),fe(),clearTimeout(G.current),G.current=setTimeout(()=>{be(u)},Vo)};c.useEffect(()=>{if(!F)return;function u(I){(I.key==="Escape"||I.key==="Esc")&&be(I)}return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[be,F]);const nt=wt(W.ref,et,Ke,n);!Q&&Q!==0&&(F=!1);const Ie=c.useRef(),st=u=>{const I=W.props;I.onMouseMove&&I.onMouseMove(u),ae={x:u.clientX,y:u.clientY},Ie.current&&Ie.current.update()},te={},Ne=typeof Q=="string";Pe?(te.title=!F&&Ne&&!de?Q:null,te["aria-describedby"]=F?ke:null):(te["aria-label"]=Ne?Q:null,te["aria-labelledby"]=F&&!Ne?ke:null);const B=l({},te,Ve,W.props,{className:$(Ve.className,W.props.className),onTouchStart:oo,ref:nt},Re?{onMouseMove:st}:{}),ne={};zo||(B.onTouchStart=ot,B.onTouchEnd=tt),de||(B.onMouseOver=ye(to,B.onMouseOver),B.onMouseLeave=ye(no,B.onMouseLeave),Me||(ne.onMouseOver=to,ne.onMouseLeave=no)),pe||(B.onFocus=ye(eo,B.onFocus),B.onBlur=ye(Ze,B.onBlur),Me||(ne.onFocus=eo,ne.onBlur=Ze));const rt=c.useMemo(()=>{var u;let I=[{name:"arrow",enabled:!!Se,options:{element:Se,padding:4}}];return(u=q.popperOptions)!=null&&u.modifiers&&(I=I.concat(q.popperOptions.modifiers)),l({},q.popperOptions,{modifiers:I})},[Se,q]),se=l({},S,{isRtl:Go,arrow:j,disableInteractive:Me,placement:We,PopperComponentProp:je,touch:ge.current}),Ae=os(se),so=(s=(r=ue.popper)!=null?r:K.Popper)!=null?s:ts,ro=(i=(p=(d=ue.transition)!=null?d:K.Transition)!=null?p:qo)!=null?i:lo,ao=(a=(g=ue.tooltip)!=null?g:K.Tooltip)!=null?a:ns,io=(m=(f=ue.arrow)!=null?f:K.Arrow)!=null?m:ss,at=xe(so,l({},q,(P=X.popper)!=null?P:_.popper,{className:$(Ae.popper,q==null?void 0:q.className,(x=(L=X.popper)!=null?L:_.popper)==null?void 0:x.className)}),se),it=xe(ro,l({},Xo,(N=X.transition)!=null?N:_.transition),se),lt=xe(ao,l({},(y=X.tooltip)!=null?y:_.tooltip,{className:$(Ae.tooltip,(C=(v=X.tooltip)!=null?v:_.tooltip)==null?void 0:C.className)}),se),ct=xe(io,l({},(R=X.arrow)!=null?R:_.arrow,{className:$(Ae.arrow,(h=(T=X.arrow)!=null?T:_.arrow)==null?void 0:h.className)}),se);return t.jsxs(c.Fragment,{children:[c.cloneElement(W,B),t.jsx(so,l({as:je??Bo,placement:We,anchorEl:Re?{getBoundingClientRect:()=>({top:ae.y,left:ae.x,right:ae.x,bottom:ae.y,width:0,height:0})}:ee,popperRef:Ie,open:ee?F:!1,id:ke,transition:!0},ne,at,{popperOptions:rt,children:({TransitionProps:u})=>t.jsx(ro,l({timeout:$e.transitions.duration.shorter},u,it,{children:t.jsxs(ao,l({},lt,{children:[Q,j?t.jsx(io,l({},ct,{ref:Jo})):null]}))}))}))]})}),ko=rs;function Do({numSelected:e,filterName:o,onFilterName:n}){return t.jsxs(Io,{sx:{height:96,display:"flex",justifyContent:"space-between",p:s=>s.spacing(0,1,0,3),...e>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[e>0?t.jsxs(le,{component:"div",variant:"subtitle1",children:[e," selected"]}):t.jsx(Pt,{value:o,onChange:n,placeholder:"Search user...",startAdornment:t.jsx(Mt,{position:"start",children:t.jsx(Y,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e>0?t.jsx(ko,{title:"Delete",children:t.jsx(J,{children:t.jsx(Y,{icon:"eva:trash-2-fill"})})}):t.jsx(ko,{title:"Filter list",children:t.jsx(J,{children:t.jsx(Y,{icon:"ic:round-filter-list"})})})]})}Do.propTypes={numSelected:b.number,filterName:b.string,onFilterName:b.func};function as(){const[e,o]=c.useState(0),[n,s]=c.useState("asc"),[r,i]=c.useState([]),[p,d]=c.useState("name"),[a,g]=c.useState(""),[m,f]=c.useState(5),P=(h,T)=>{T!==""&&(s(p===T&&n==="asc"?"desc":"asc"),d(T))},x=h=>{if(h.target.checked){const T=re.map(S=>S.name);i(T);return}i([])},L=(h,T)=>{const S=r.indexOf(T);let j=[];S===-1?j=j.concat(r,T):S===0?j=j.concat(r.slice(1)):S===r.length-1?j=j.concat(r.slice(0,-1)):S>0&&(j=j.concat(r.slice(0,S),r.slice(S+1))),i(j)},N=(h,T)=>{o(T)},y=h=>{o(0),f(parseInt(h.target.value,10))},C=h=>{o(0),g(h.target.value)},v=Jn({inputData:re,comparator:Gn(n,p),filterName:a}),R=!v.length&&!!a;return t.jsxs(kt,{children:[t.jsxs(No,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[t.jsx(le,{variant:"h4",children:"Users"}),t.jsx(Rt,{variant:"contained",color:"inherit",startIcon:t.jsx(Y,{icon:"eva:plus-fill"}),children:"New User"})]}),t.jsxs(Lt,{children:[t.jsx(Do,{numSelected:r.length,filterName:a,onFilterName:C}),t.jsx(jt,{children:t.jsx(Qt,{sx:{overflow:"unset"},children:t.jsxs(Ht,{sx:{minWidth:800},children:[t.jsx(Fo,{order:n,orderBy:p,rowCount:re.length,numSelected:r.length,onRequestSort:P,onSelectAllClick:x,headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),t.jsxs(Kt,{children:[v.slice(e*m,e*m+m).map(h=>t.jsx(Ho,{name:h.name,role:h.role,status:h.status,company:h.company,avatarUrl:h.avatarUrl,isVerified:h.isVerified,selected:r.indexOf(h.name)!==-1,handleClick:T=>L(T,h.name)},h.id)),t.jsx(Oo,{height:77,emptyRows:Xn(e,m,re.length)}),R&&t.jsx(Uo,{query:a})]})]})})}),t.jsx(Pn,{page:e,component:"div",count:re.length,rowsPerPage:m,onPageChange:N,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:y})]})]})}function hs(){return t.jsxs(t.Fragment,{children:[t.jsx($t,{children:t.jsx("title",{children:" User  "})}),t.jsx(as,{})]})}export{hs as default};
