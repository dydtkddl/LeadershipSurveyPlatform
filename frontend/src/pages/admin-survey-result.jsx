import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Button from "@mui/material/Button"
import { ResultUN17Goal } from 'src/sections/adminResultUN17Goal/view'
// import { ResultPersonalSurvey } from 'src/sections/adminResultPersonalSurvey/view'
import { ResultInclusiveSurvey } from 'src/sections/adminResultInclusiveSurvey/view'
import { ResultLeadershipSurvey } from 'src/sections/adminResultLeadershipSurvey/view'
import { ResultJMLeadershipSurvey } from 'src/sections/adminResultJMLeadershipSurvey/view'

// ----------------------------------------------------------------------

export default function SurveyResultPage({surveyname}) {
  const adminLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
      localStorage.removeItem('admin');
      window.location.reload()
  }
  let renderResult = ""
  if (surveyname === "LeadershipSurvey"){
    renderResult = (<ResultLeadershipSurvey  surveyname = {surveyname}/>)
  }
  if (surveyname === "InclusiveLeadershipSurvey"){
    renderResult = (<ResultInclusiveSurvey  surveyname = {surveyname}/>)

  }
  if (surveyname === "JMLeadershipEvaluationSurvey"){
    renderResult = (<ResultJMLeadershipSurvey  surveyname = {surveyname}/>)

  }
  if (surveyname === "UN17Goal"){
    renderResult = (<ResultUN17Goal  surveyname = {surveyname}/>)

  }
  // if (surveyname === "PersonalInformationSurvey"){
  //   renderResult = (<ResultPersonalSurvey  surveyname = {surveyname}/>)

  // }
  return (
    <>
      <Helmet>
        <title> surveyResult  </title>
      </Helmet>
  
  <Button variant = "contained" color = "secondary" onClick ={()=>{window.location.href = "/adminpage"}}sx = {{ml : 5}}>뒤로가기</Button>
  <Button variant = "contained" onClick ={adminLogout}sx = {{ml : 5}}>admin logout</Button>
      {renderResult}
    </>
  );
}

SurveyResultPage.propTypes = {
  surveyname : PropTypes.string
}