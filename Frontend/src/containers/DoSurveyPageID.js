import React from 'react'
import { useParams } from 'react-router-dom'
import {Survey,Model} from "survey-core";
import * as SurveyReact from "survey-react-ui";
//Import localization
import "survey-core/survey.i18n.js";
//Import Survey styles
import "survey-core/defaultV2.css";

const DoSurveyPageID = () => {
  let {id} = useParams();
  const json={};
  json['surveyId']=id;
  var survey = new Model(json);
  return (
    <SurveyReact.Survey model={survey} />
  )
}

export default DoSurveyPageID