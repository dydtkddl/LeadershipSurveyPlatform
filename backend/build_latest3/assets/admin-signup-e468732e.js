import{u as m,r as x,j as e,S as o,G as d,B as f,a2 as j,v as w,a3 as y,L as S,a as b,T as C,W as T}from"./index-fe2074e7.js";import{L as v}from"./LoadingButton-285d0c7b.js";import{C as D}from"./Card-291243a4.js";import"./CircularProgress-3c9cf238.js";function F(){const p=m(),[n,u]=x.useState({userid:"",password:""}),r=i=>{const{name:l,value:c}=i.target,t={...n,[l]:c};u(t)},h=async i=>{if(i.preventDefault(),["userid","password"].some(s=>!n[s])){window.alert("Please fill in all required fields.");return}const t={...n};try{console.log(t);const s=await fetch("https://leadershipsurvey.pythonanywhere.com/adminsignup_backend/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await s.json();a.message==="EXISTS_ID"?(console.log(a),window.alert("The same ID exists")):a.message==="success"?(window.alert("success"),window.location.href="/adminsignin"):console.log("서버오류 : ",s.status)}catch(s){console.error("오류:",s)}},g=e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:3,children:[e.jsx(d,{label:"ID",name:"userid",margin:"dense",required:!0,fullWidth:!0,onChange:r}),e.jsx(d,{label:"PassWord",type:"password",name:"password",required:!0,fullWidth:!0,onChange:r,margin:"dense"}),e.jsx(d,{label:"Password Confirm",type:"password",name:"passwordConfirm",required:!0,fullWidth:!0,margin:"dense",onChange:r,error:n.ispasswordMatch===!1,helperText:n.errormessage})]}),e.jsx(v,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:h,sx:{mt:3},children:"SignIn"})]});return e.jsxs(f,{sx:{...j({color:w(p.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(y,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(o,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(D,{sx:{p:5,width:1,maxWidth:420},children:[e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",position:"relative",children:[e.jsx(S,{href:"signin",children:e.jsx(b,{position:"absolute",sx:{top:9},icon:"ic:twotone-arrow-back-ios"})}),e.jsx(C,{variant:"h4",sx:{pl:2,pb:5},children:"Sign Up"})]}),e.jsx("form",{children:g})]})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" SignUp "})}),e.jsx(F,{})]})}export{E as default};