import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { ResultUN17Goal } from 'src/sections/ResultUN17Goal/view'
import { ResultPersonalSurvey } from 'src/sections/ResultPersonalSurvey/view'
import { ResultInclusiveSurvey } from 'src/sections/ResultInclusiveSurvey/view'
import { ResultLeadershipSurvey } from 'src/sections/ResultLeadershipSurvey/view'
import { ResultJMLeadershipSurvey } from 'src/sections/ResultJMLeadershipSurvey/view'

// ----------------------------------------------------------------------

export default function SurveyResultPage({surveyname}) {
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
  if (surveyname === "PersonalInformationSurvey"){
    renderResult = (<ResultPersonalSurvey  surveyname = {surveyname}/>)

  }
  return (
    <>
      <Helmet>
        <title> surveyResult  </title>
      </Helmet>
      
      {renderResult}
    </>
  );
}

SurveyResultPage.propTypes = {
  surveyname : PropTypes.string
}