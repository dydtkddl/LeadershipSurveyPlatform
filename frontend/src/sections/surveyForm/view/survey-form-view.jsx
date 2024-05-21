import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// import { AppView } from 'src/sections/overview/view_';
import { Grid, CircularProgress } from '@mui/material';

// import { NAV } from 'src/layouts/dashboard/config-layout';


import SurveyIndex from "../survey-index"
import SurveySendData from '../survey-send-data';
import AppTrafficBySite from '../survey-form-unit';

// ----------------------------------------------------------------------
const personal_structure = {
  "personal_information1": "",
  "personal_information2": "",
  "personal_information3": "",
  "personal_information4": "",
  "personal_information5": "",
  "personal_information6": "",
  "personal_information7": ""
}
const requestLanguage = "en";
export default function SurveyForm({ surveyname }) {
  let  initialUserAnswer = {}
  if (surveyname === "PersonalInformationSurvey" ){
    initialUserAnswer = personal_structure
  }
  const [currentQuestion, setCurrentQuestion] = useState(-1)
  const [userAnswer, setUserAnswer] = useState(initialUserAnswer)
  const [responde, setResponse] = useState({})
  const [isloading, setIsloading] = useState(true)
  const token = localStorage.getItem("token")
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_to_survey_form/", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ surveyname_: surveyname, language: requestLanguage })
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setResponse(data)
          setIsloading(false)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token, surveyname]);
  if (isloading) {
    return (
      <Grid xs={12} md={6} lg={4}>
        <CircularProgress />
      </Grid>
    )
  }

  

  console.log(currentQuestion)
  console.log(Object.keys(responde.data).length)
  if (currentQuestion < 0) {
    return (
      <Grid xs={12} md={6} lg={4}>
        <SurveyIndex
          title={responde.meta.survey_title[requestLanguage]}
          subtitle={responde.meta.survey_subtitle[requestLanguage]}
          surveyExplain={responde.meta.survey_index_description[requestLanguage]}
          surveyQuestions={responde.meta.question_counts}
          surveyETA={responde.meta.survey_ETAmin}
          surveyMainImg={responde.meta.survey_img}
          surveyParticipatedCount={responde.meta.participated_count}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      </Grid>
    );
  } 
  if (currentQuestion >=Object.keys(responde.data).length) {
    return (
      <Grid xs={12} md={6} lg={4}>
        <SurveySendData
            questionobjects={responde.data}
            requestLanguage={requestLanguage}
            title={responde.meta.survey_title[requestLanguage]}
            subtitle={responde.meta.survey_subtitle[requestLanguage]}
            currentQuestion={currentQuestion}
            userAnswer={userAnswer}
            surveyname = {surveyname}
      />
      </Grid>
    );
  }

  return (
    <Grid xs={12} md={6} lg={4}>
      {/* 이곳에 else 일 경우에 해당하는 코드를 넣어주세요 */}
      <AppTrafficBySite
        questionobjects={responde.data}
        requestLanguage={requestLanguage}
        title={responde.meta.survey_title[requestLanguage]}
        subtitle={responde.meta.survey_subtitle[requestLanguage]}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setUserAnswer={setUserAnswer}
        userAnswer={userAnswer}
        surveyname = {surveyname}
      />
    </Grid>
  );



}




SurveyForm.propTypes = {
  surveyname: PropTypes.string
}