import PropTypes from 'prop-types';
import { useState, useEffect  } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from  '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Link, CircularProgress } from '@mui/material';

import Iconify from 'src/components/iconify';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------
// const backgroundOpacity = "23";
const colors = [
  "#ff0000",
"#ff7f50",
"#ffd700",
"#00ff7f",
"#1e90ff",
]

const REPEAT_UNIT = 50;
const shirinkPercent = 3.3;
const questionBoxColor = "#ffffff"
export default function SurveySendData({ 
  currentQuestion 
  ,userAnswer ,
  requestLanguage,
  subtitle,
  questionobjects,
  surveyname,
  title,
  ...other })
  {
    const hreflink = "/Results/".concat(surveyname).concat("Result")

    const [isloading , setIsloading] = useState(true)

     useEffect(() => {
    const token = localStorage.getItem("token")
    const fetchData = async () => {
      try {
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/save_user_answer/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ surveyname_: surveyname, data : userAnswer })
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setIsloading(false)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userAnswer, surveyname]);
    const items = [];
    const unfilled = (<Box
      sx={{
        backgroundColor: "#e9ecec",
        flexGrow: 1,
        borderRadius: "15px",
        height: "10px",
        color: "#e9ecec",
      }}
    >
      -
    </Box>)
    for (let i = 0; i < currentQuestion; i+=1){
      if (questionobjects[Object.keys(questionobjects)[i]].value_type === "int"){
        items.push(( <Box
          sx={{
            backgroundColor: colors[userAnswer[Object.keys(questionobjects)[i]]-1],
            flexGrow: 1,
            borderRadius: "15px",
            height: "10px",
            color: colors[userAnswer[Object.keys(questionobjects)[i]]-1],
          }}
        >
          -
        </Box>))
      }
      else {
      items.push(( <Box
        sx={{
          backgroundColor:"#2ec7c1",
          flexGrow: 1,
          borderRadius: "15px",
          height: "10px",
          color: "#2ec7c1",
        }}
      >
        -
      </Box>))
      }
    }
    for (let i = 0; i < Object.keys(questionobjects).length-currentQuestion; i+=1){
      items.push(unfilled)
    }
    const chunkedItems = [];
    
    if (Object.keys(questionobjects).length > REPEAT_UNIT){
      for (let i = 0; i < items.length; i += REPEAT_UNIT) {
        chunkedItems.push(items.slice(i, i + REPEAT_UNIT));
      }
    }else{
      chunkedItems.push(items)
    }
    console.log(questionobjects[Object.keys(questionobjects)[0]].question_title)
    console.log(questionobjects[Object.keys(questionobjects)[1]])
    
  return (





    <Card {...other} sx = {{marginTop : 2, paddingTop : 5}}>
      <CardHeader
            title={
              <Stack direction="row" spacing={1} alignItems="center">
                <Iconify 
                  icon="ic:twotone-arrow-back-ios"
                  onClick = {()=>{window.location.reload();}}

                />
                <Box>
                {title}</Box>
              </Stack>
            }
            subheader={subtitle}
            sx={{ px: "10%" }}
          />
      <Stack direction = 'column'>
      {chunkedItems.map((chunk, index) => (
        <Stack key={index} direction="row" spacing={1} sx= {{mx : "10%", pt : 1,marginBottom : 1, justifyContent: 'center'}} display = "flex" >
          {chunk.map((item, idx) => (
            item
          ))}
        </Stack>
        
      ))}</Stack>

      
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx = {{backgroundColor : questionBoxColor,pt : 9,pb : 9,mt : 4,mx : "10%", px : 4,mb : 25,
        border : "3px solid #e9ecec", 
        borderRadius : 2,
        display: "flex",
        minHeight : "400px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"}} position = "relative" >
          {isloading ? <CircularProgress/> : <>
          <Typography id="modal-modal-description" textAlign="center"sx={{ mt: 2 }} variant = "h4">
            {surveyname}
          </Typography>
          <Typography id="modal-modal-title" textAlign="center" variant="h2" component="h2" >
                Thank you for Survey  
      <Iconify icon = "el:check" width = {40} sx = {{ml : 3, color : "#01f400 "}}/>
          </Typography></>
          }
         
      <Stack direction="row" justifyContent="center" spacing = {4} sx ={{mt : 10}}>
    <Button  onClick  = {()=>{window.loacation.href = "/"}}sx = {{width : "100%", mb : 5, px : 10}} variant='outlined'>
      <Link href = "/"  sx = {{color : "primary" , py :1, fontWeight : 800, fontSize : "17px"}}>Go Home</Link></Button>
    <Button  onClick  = {()=>{window.loacation.href = hreflink}}sx = {{width : "100%" , mb : 5, px : 10}} variant='contained'>
      <Link href = {hreflink}  sx = {{color : "#ffffff" , py :1}}>See results</Link></Button></Stack>
          {/* 뒤에 쉐도우로 여러장 있는듯한 이펙트를 위해 */}
          <Box position = "absolute" 
          sx = {{zIndex :"-1",
          backgroundColor : questionBoxColor,
          width : `calc(100% - ${2*shirinkPercent}%)`,
          height : "100%",
          bottom : `calc(${-1*shirinkPercent}%)`,
          left : `calc(${shirinkPercent}%)` ,
          border : "3px solid #e9ecec", 
          borderRadius : 2,
          }}>
          shadow
          </Box>    
          <Box position = "absolute" 
          sx = {{zIndex :"-2",
          width : `calc(100% - ${2*2*shirinkPercent}%)`,
          backgroundColor : questionBoxColor,
          height : "100%",
          bottom : `calc(${-1.7*shirinkPercent}%)`,
          left : `calc(${2* shirinkPercent}%)` ,
          border : "3px solid #e9ecec", 
          borderRadius : 2}}>
          shadow
          </Box>    
          
          
      </Box>
         










    
    </Card>
  );
}

SurveySendData.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  userAnswer : PropTypes.array.isRequired,
  requestLanguage : PropTypes.string,
  surveyname : PropTypes.string,
  questionobjects : PropTypes.any.isRequired,
  currentQuestion : PropTypes.number
};
