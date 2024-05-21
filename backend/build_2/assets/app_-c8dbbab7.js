import{j as e,c as P,S as h,B as j,d as w,a as D,P as r,L as W,T as c,r as g,am as I,W as k}from"./index-17c328d3.js";import{C as T}from"./Card-b5c0bc83.js";import{C as S}from"./CardHeader-8a60d7cf.js";import{D as O}from"./Divider-77f7d4db.js";import{T as q,t as E,a as L,b as R,c as z,d as B,e as $,A as f}from"./app-widget-summary-582d1aed.js";import{a as F}from"./format-time-f0d5a107.js";import{C as G}from"./Container-4bc3410f.js";import{G as d}from"./Grid2-7a17d317.js";import{C as p}from"./CircularProgress-cd308a84.js";import"./format-number-c85e8ff0.js";const v=100;function b({title:t,subheader:o,list:s,...a}){return e.jsxs(T,{...a,children:[e.jsx(S,{title:t,subheader:o}),e.jsx(P,{children:e.jsx(h,{spacing:3,sx:{p:3,pr:0},children:s.map(n=>e.jsx(C,{news:n},n.id))})}),e.jsx(O,{sx:{borderStyle:"dashed"}}),e.jsx(j,{sx:{p:2,textAlign:"right"},children:e.jsx(w,{size:"small",color:"inherit",endIcon:e.jsx(D,{icon:"eva:arrow-ios-forward-fill"}),children:"Learn Survey Detail"})})]})}b.propTypes={title:r.string,subheader:r.string,list:r.array.isRequired};function C({news:t}){const{image:o,title:s,description:a,estimatedTime:n,questionsCount:m,isParticipated:x,surveyPath:i}=t;return e.jsxs(h,{direction:"row",alignItems:"center",spacing:2,position:"relative",onClick:()=>H(i),children:[e.jsx(j,{component:"img",alt:s,src:o,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0,objectFit:"contain"}}),x?e.jsx(j,{component:"img",position:"absolute",alt:s,src:"/assets/icons/flaticon/check.png",sx:{width:30,height:30,borderRadius:1.5,flexShrink:0,bottom:-10,left:10,objectFit:"contain"}}):"",e.jsxs(j,{sx:{minWidth:240,flexGrow:1},children:[e.jsx(W,{color:"inherit",variant:"subtitle2",underline:"hover",noWrap:!0,children:s}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:a})]}),e.jsxs(h,{direction:"column",sx:{maxWidth:v},children:[e.jsx(c,{variant:"caption",sx:{fontSize:18,textAlign:"center",fontWeight:900,flexShrink:0,color:"text.secondary"},children:m}),e.jsx(c,{variant:"caption",sx:{textAlign:"center",flexShrink:0,color:"text.secondary"},children:"Questions"})]}),e.jsxs(h,{direction:"column",sx:{maxWidth:v,pr:3},children:[e.jsxs(c,{variant:"caption",sx:{fontSize:18,fontWeight:900,textAlign:"center",flexShrink:0,color:"text.secondary"},children:[n,"min"]}),e.jsx(c,{variant:"caption",sx:{textAlign:"center",flexShrink:0,color:"text.secondary"},children:"ETA"})]})]})}C.propTypes={news:r.shape({image:r.string,title:r.string,description:r.string,postedAt:r.instanceOf(Date),surveyPath:r.string,isParticipated:r.bool,estimatedTime:r.number,questionsCount:r.number})};function H(t){console.log(1),window.location.href=t}function _({title:t,subheader:o,list:s,...a}){return e.jsxs(T,{...a,children:[e.jsx(S,{title:t,subheader:o}),e.jsx(q,{sx:{m:0,p:3,[`& .${E.root}::before`]:{flex:0,padding:0}},children:s.map((n,m)=>e.jsx(A,{item:n,lastTimeline:m===s.length-1},n.id))})]})}_.propTypes={list:r.array,subheader:r.string,title:r.string};function A({item:t,lastTimeline:o}){const{type:s,title:a,time:n}=t;return e.jsxs(L,{children:[e.jsxs(R,{children:[e.jsx(z,{color:s==="order1"&&"primary"||s==="order2"&&"success"||s==="order3"&&"info"||s==="order4"&&"warning"||"error"}),o?null:e.jsx(B,{})]}),e.jsxs($,{children:[e.jsx(c,{variant:"subtitle2",children:a}),e.jsx(c,{variant:"caption",sx:{color:"text.disabled"},children:F(n)})]})]})}A.propTypes={item:r.object,lastTimeline:r.bool};const u="en";function N(){const[t,o]=g.useState({}),[s,a]=g.useState(!0),n=localStorage.getItem("token");g.useEffect(()=>{(async()=>{try{const l=await fetch("https://leadershipsurvey.pythonanywhere.com/send_to_home/",{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({surveycount:5,language:u})});if(l.ok){const y=await l.json();console.log(y),o(y),a(!1)}}catch(l){console.error("Error fetching data:",l)}})()},[n]);const m=localStorage.getItem("name"),x=t.data?Object.values(t.data).filter(i=>i.isCompleted===1):[];return console.log(x),e.jsxs(G,{maxWidth:"xl",children:[e.jsxs(c,{variant:"h4",children:["Hi ",m,"  !"]}),e.jsx(c,{variant:"h4",sx:{mb:5},children:"Welcome To Survey Platform 👋"}),e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{xs:12,sm:6,md:4,children:s?e.jsx(p,{}):e.jsx(f,{title:"Total Surveys",total:t.meta.total_survey_count,color:"success",icon:e.jsx("img",{alt:"icon",src:"/assets/images/total2.png"}),usef:1})}),e.jsx(d,{xs:12,sm:6,md:3,children:s?e.jsx(p,{}):e.jsx(f,{title:"Done",total:t.meta.done_survey_count,color:"info",usef:0,icon:e.jsx("img",{alt:"icon",src:"/assets/images/Done1.png"})})}),e.jsx(d,{xs:12,sm:6,md:3,children:s?e.jsx(p,{}):e.jsx(f,{title:"not Done",total:t.meta.total_survey_count-t.meta.done_survey_count,usef:0,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/images/NotDone1.png"})})}),e.jsx(I,{}),e.jsx(d,{xs:12,md:6,lg:8,children:s?e.jsx(p,{}):e.jsx(b,{title:"Take Survey",list:Object.keys(t.data).map((i,l)=>(console.log(i),{id:t.data[i].survey_number,title:t.data[i].survey_title[u],description:t.data[i].survey_index_description[u],image:t.data[i].survey_img,isParticipated:t.data[i].isCompleted,estimatedTime:t.data[i].survey_ETAmin,questionsCount:t.data[i].questionsCount,surveyPath:`/${t.data[i].survey_name}`}))})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(_,{title:"Participated Timeline",list:x.map((i,l)=>({id:i.isCompleted,title:i.survey_title[u],type:`order${l+1}`,time:i.completedAt})),subheader:"Timeline of your Participated Surveys "})})]})]})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" Surveys "})}),e.jsx(N,{})]})}export{te as default};
