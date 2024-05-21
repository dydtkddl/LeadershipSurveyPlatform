import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { SurveyForm } from 'src/sections/surveyForm/view';

// ----------------------------------------------------------------------

export default function SurveyFormPage({surveyname}) {
  return (
    <>
      <Helmet>
        <title> Take Survey </title>
      </Helmet>

      <SurveyForm surveyname = {surveyname} />
    </>
  );
}

SurveyFormPage.propTypes = {
  surveyname : PropTypes.string
}