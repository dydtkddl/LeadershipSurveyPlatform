import{P as t,j as e,B as x,S as p,T as u,c as S,L as w,r as g,d as O,a6 as T,W as k}from"./index-fe2074e7.js";import{u as W,C as A}from"./use-chart-95665413.js";import{C as j}from"./Card-291243a4.js";import{C as D}from"./CardHeader-103e5cf6.js";import{a as I}from"./format-number-03624a88.js";import{D as P}from"./Divider-0fff4b5f.js";import{C as R}from"./Container-f877de5f.js";import{G as f}from"./Grid2-2e8bb44f.js";import{C as L}from"./CircularProgress-3c9cf238.js";function y({max:s,title:a,subheader:r,chart:o,...n}){const{labels:l,colors:c,series:i,options:d}=o;console.log(s);const h=W({colors:c,plotOptions:{bar:{columnWidth:"30%"}},fill:{type:i.map(m=>m.fill)},labels:l,yaxis:{min:0,tickAmount:s},tooltip:{shared:!0,intersect:!1,y:{formatter:m=>typeof m<"u"?`${m.toFixed(0)} people`:m}},...d});return e.jsxs(j,{...n,children:[e.jsx(D,{title:a}),e.jsx(x,{sx:{p:3,pb:1},children:e.jsx(A,{dir:"ltr",type:"line",series:i,options:h,width:"100%",height:200})})]})}y.propTypes={chart:t.object,subheader:t.string,title:t.string,max:t.number};function b({title:s,total:a,icon:r,color:o="primary",sx:n,usef:l,...c}){return e.jsxs(j,{component:p,spacing:3,direction:"row",sx:{px:5,py:1,borderRadius:2,justifyContent:"center",...n},...c,children:[r&&e.jsx(x,{sx:{width:64,height:64},children:r}),e.jsxs(p,{direction:"row",spacing:2,sx:{textAlign:"center",justifyContent:"center"},children:[e.jsx(u,{variant:"h4",sx:{color:"text.disabled"},children:s}),l?e.jsx(u,{variant:"h4",children:I(a)}):e.jsx(u,{variant:"h4",children:a})]})]})}b.propTypes={color:t.string,icon:t.oneOfType([t.element,t.string]),sx:t.object,title:t.string,total:t.number,usef:t.bool};const B=100;function C({image:s,subheader:a,list:r,sort:o,...n}){return console.log(r),e.jsxs(j,{...n,children:[e.jsx(S,{children:e.jsx(p,{spacing:3,sx:{p:3,pr:0},children:r.map((l,c)=>(console.log(l),e.jsx(v,{news:l,image:s},c)))})}),e.jsx(P,{sx:{borderStyle:"dashed"}})]})}C.propTypes={subheader:t.string,list:t.any.isRequired,sort:t.array.isRequired,image:t.string};function v({news:s}){const{image:a,title:r,date:o,total:n}=s;return console.log(Object.keys(o)),console.log(Object.values(o)),e.jsxs(p,{direction:"column",children:[e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,position:"relative",justifyContent:"left",children:[e.jsx(x,{component:"img",alt:r,src:a,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0,objectFit:"contain"}}),e.jsx(x,{sx:{minWidth:240},children:e.jsx(w,{color:"inherit",href:`/adminpage/${r}Result`,variant:"subtitle2",underline:"hover",noWrap:!0,children:r})}),e.jsx(p,{direction:"column",sx:{maxWidth:B},children:e.jsx(b,{title:"Total",total:n,color:"success",usef:1})})]}),e.jsx(y,{title:"Daily Hits",subheader:"Daily Hits",chart:{labels:Object.keys(o),series:[{name:"Daily Hits",type:"column",fill:"solid",data:Object.values(o)}]},max:Math.max.apply(null,Object.values(o))})]})}v.propTypes={news:t.shape({title:t.string,image:t.string,total:t.number,date:t.object}),image:t.string};const E="en",F=5;function H(){const[s,a]=g.useState({}),[r,o]=g.useState(!0),n=localStorage.getItem("token"),l=()=>{localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("admin"),window.location.reload()};g.useEffect(()=>{(async()=>{try{const d=await fetch("https://leadershipsurvey.pythonanywhere.com/send_to_adminpage/",{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({language:E,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})});if(d.ok){const h=await d.json();console.log(h),a(h),o(!1)}}catch(d){console.error("Error fetching data:",d)}})()},[n]);const c=s.data?Object.values(s.data).filter(i=>i.isCompleted===1):[];return console.log(c),e.jsxs(R,{maxWidth:"xl",children:[e.jsxs(u,{variant:"h4",sx:{mb:5},children:["Admin Page 👋 ",e.jsx(O,{variant:"contained",onClick:l,children:"admin logout"})]}),e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(T,{}),e.jsx(f,{xs:12,md:12,lg:12,children:r?e.jsx(L,{}):e.jsx(C,{list:s.data.sort.slice(1,F).map(i=>(console.log(i),{title:s.data[i].title,date:s.data[i].date,total:s.data[i].meta.total,image:s.data[i].image})),sort:s.data.sort})})]})]})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" SignUp "})}),e.jsx(H,{})]})}export{V as default};