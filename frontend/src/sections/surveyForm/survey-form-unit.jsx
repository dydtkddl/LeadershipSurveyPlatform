// import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import Iconify from 'src/components/iconify';

import { labeldata } from "../../components/form-labels"
// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------
const backgroundOpacity = "23";
// const colors = [
//   "#ff0000",
//   "#ff7f50",
//   "#ffd700",
//   "#00ff7f",
//   "#1e90ff",
// ]

const REPEAT_UNIT = 50;
const shirinkPercent = 3.3;
const questionBoxColor = "#ffffff"
export default function AppTrafficBySite({
  currentQuestion
  , setCurrentQuestion
  , setUserAnswer
  , userAnswer,
  questionobjects,
  title,
  requestLanguage,
  subtitle,
  surveyname,
  ...other }) {

  if (currentQuestion === Object.keys(questionobjects).length) {
    const token = localStorage.getItem("token")
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/send_user_answer/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ surveyname_: surveyname, data: userAnswer })
        });
        if (response.ok) {
          // const data = await response.json();

        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }


  console.log(requestLanguage)
  console.log(currentQuestion)
  const saveAnswer = (value) => {
    const newDic = { ...userAnswer };
    newDic[Object.keys(questionobjects)[currentQuestion]] = value;
    setUserAnswer(newDic);
    console.log(123, userAnswer, newDic)
    setCurrentQuestion(currentQuestion + 1)
  };

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
  // const filled = ( <Box
  //   sx={{
  //     backgroundColor: "#2ec7c1",
  //     flexGrow: 1,
  //     borderRadius: "15px",
  //     height: "10px",
  //     color: "#2ec7c1",
  //   }}
  // >
  //   -
  // </Box>)

  for (let i = 0; i < currentQuestion; i += 1) {
    if (questionobjects[Object.keys(questionobjects)[i]].value_type === "int") {
      items.push((<Box
        sx={{
          // backgroundColor: colors[userAnswer[Object.keys(questionobjects)[i]] - 1],
          backgroundColor: "#2ec7c1",
          flexGrow: 1,
          borderRadius: "15px",
          height: "10px",
          // color: colors[userAnswer[Object.keys(questionobjects)[i]] - 1],
          color: "#2ec7c1",
        }}
      >
        -
      </Box>))
    }
    else {
      items.push((<Box
        sx={{
          backgroundColor: "#2ec7c1",
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
  for (let i = 0; i < Object.keys(questionobjects).length - currentQuestion; i += 1) {
    items.push(unfilled)
  }
  const chunkedItems = [];

  if (Object.keys(questionobjects).length > REPEAT_UNIT) {
    for (let i = 0; i < items.length; i += REPEAT_UNIT) {
      chunkedItems.push(items.slice(i, i + REPEAT_UNIT));
    }
  } else {
    chunkedItems.push(items)
  }
  console.log(questionobjects[Object.keys(questionobjects)[0]].question_title)
  console.log(questionobjects[Object.keys(questionobjects)[1]])
  const currentQ = questionobjects[Object.keys(questionobjects)[currentQuestion]]
  const current_value_type = currentQ.question_label
  console.log(current_value_type)
  const isStringInput = (current_value_type === "stringinput")
  const isrequired = currentQ.question_required
  const handleKeyPress = (event) => {
    // keyCode가 13이면 엔터 키를 의미합니다.
    if (event.keyCode === 13) {
      console.log('엔터 키가 눌렸습니다.');
      // 여기에 엔터 키가 눌렸을 때 실행될 로직을 추가합니다.

      saveAnswer(event.target.value)
      event.target.value = ""
      setCurrentQuestion(currentQuestion + 1)

    }
  };
  return (





    <Card {...other} sx={{ marginTop: 2, paddingTop: 5 }}>
      <CardHeader
        title={
          <Stack direction="row" spacing={1} alignItems="center">
            <Iconify
              icon="ic:twotone-arrow-back-ios"
              onClick={() => { window.location.reload(); }}
              width = {45}
            />
            <Box>
              <Typography variant = "h2">{title}</Typography>
              </Box>
          </Stack>
        }
        subheader={subtitle}
        sx={{ px: "10%" }}
      />
      


      <Divider sx={{ borderStyle: 'dashed' ,my : 1}} />
      <Typography fontSize = {13}color="#ff333f" position='absolute' left="10%">{currentQ.question_notice[requestLanguage]}</Typography>
      <Box sx={{
        backgroundColor: questionBoxColor, pt: 2, mt: 7, mx: "10%", px: 4, mb : 10, pb  : 2,
        border: "3px solid #e9ecec",
        borderRadius: 2,
        display: "flex",
        minHeight: "600px",
        flexDirection: "column",
        alignItems: "space-around",
        justifyContent: "space-between"
      }} position="relative" >
        <Typography id="modal-modal-title" textAlign="center" variant="h4" component="h2">
        👉  {questionobjects[Object.keys(questionobjects)[currentQuestion]].question_title[requestLanguage]}
        </Typography>
        <Stack direction="column">
        <Typography id="modal-modal-description" textAlign="center" variant = "h4" sx={{ mt: 2, mb : 5 }}>
          {questionobjects[Object.keys(questionobjects)[currentQuestion]].question_basic[requestLanguage]}
        </Typography>
         <Typography id="modal-modal-description" textAlign="center">
           {questionobjects[Object.keys(questionobjects)[currentQuestion]].question_details[requestLanguage]}
         </Typography>
         </Stack>
        {isStringInput ? <Box
           sx={{
            maxWidth : "900px",
            width: "100%",
            // minWidth : "500px",
            p: 3,
            pt: 4,
            // position :"absolute",
            display: 'grid',
            ml: "50%",
            transform: "translate(-50%, 0%)",
            // left: "50%",
            // transform: `translate(-50%, -50%)`
          }}
        >
          <Grid container>
            <Grid item xs = {8} sx= {{pb : 5}}>
            <Typography variant="body1" fontWeight={800}>Please enter the value and press Enter Or Click Next Button    👉</Typography>
          </Grid>
            <Grid item xs = {4}>
            <Button color="info" onClick = {() => {setCurrentQuestion(currentQuestion+1)}} variant="contained" fullWidth>Next</Button>
          </Grid>
              <Grid item xs = {12}>
              <TextField fullWidth required={isrequired} label="Answer Here! (≧∇≦)" onKeyDown={handleKeyPress} />
              </Grid>
          </Grid>
        </Box>
          :
          <Box
            sx={{
              maxWidth : "900px",
              width: "100%",
              // minWidth : "500px",
              p: 3,
              // pt: 4,
              gap: 2.5,
              // position :"absolute",
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              justifyContent: 'center', // 중앙 정렬 추가,
              ml: "50%",
            transform: "translate(-50%, 0%)",
              // margin: 'auto', // 가운데 정렬을 위해 추가
              // top: "80%",
              // left: "50%",
              // transform: `translate(-50%, -50%)`
            }}
          >

            {labeldata[current_value_type].map((site, index) => (

              <Paper
                key={site.name}
                variant="outlined"
                value={site.value}
                onClick={() => saveAnswer(site.value)}
                sx={{ py: 1.5,  textAlign: 'center', borderStyle: 'dashed', backgroundColor: site.color + backgroundOpacity }}
              >
                <Box sx={{ mb: 1 }}><Iconify icon={site.icon} color={site.color} width={32} /></Box>

                {/* <Typography variant="h6">{fShortenNumber(site.value)}</Typography> */}

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {site.name}
                </Typography>

              </Paper>
            ))}

          </Box>}





        {/* 뒤에 쉐도우로 여러장 있는듯한 이펙트를 위해 */}
        <Box position="absolute"
          sx={{
            zIndex: "-1",
            backgroundColor: questionBoxColor,
            width: `calc(100% - ${2 * shirinkPercent}%)`,
            height: "100%",
            bottom: `calc(${-1 * shirinkPercent}%)`,
            left: `calc(${shirinkPercent}%)`,
            border: "3px solid #e9ecec",
            borderRadius: 2,
          }}>
          shadow
        </Box>
        <Box position="absolute"
          sx={{
            zIndex: "-2",
            width: `calc(100% - ${2 * 2 * shirinkPercent}%)`,
            backgroundColor: questionBoxColor,
            height: "100%",
            bottom: `calc(${-1.7 * shirinkPercent}%)`,
            left: `calc(${2 * shirinkPercent}%)`,
            border: "3px solid #e9ecec",
            borderRadius: 2
          }}>
          shadow
        </Box>
      </Box>
        <Stack direction='column' width = "100%">
        {surveyname === "JMLeadershipEvaluationSurvey" ? <>.</> : <>
        
        {chunkedItems.map((chunk, index) => (
          <Stack key={index} direction="row" spacing={1} sx={{ mx: "10%", pb: 0, marginBottom: 1, justifyContent: 'center' }} display="flex" >
            {chunk.map((item, idx) => (
              item
            ))}
          </Stack>

        ))}
        
        </>}
        </Stack>
          
















    </Card>
  );
}

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  currentQuestion: PropTypes.array.isRequired,
  userAnswer: PropTypes.array.isRequired,
  questionobjects: PropTypes.array.isRequired,
  setCurrentQuestion: PropTypes.any.isRequired,
  setUserAnswer: PropTypes.any.isRequired,
  requestLanguage: PropTypes.string,
  surveyname: PropTypes.string,


};
