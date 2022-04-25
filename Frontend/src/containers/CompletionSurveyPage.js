import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDatabase, ref, onValue, set } from "firebase/database";
import {Survey,Model} from "survey-core";
import * as SurveyReact from "survey-react-ui";
const CompletionSurveyPage = () => {
  const {id1} = useParams()
  const {id2} = useParams()
  const [json,setJson]= useState();
  const [surveyData,setSurveyData]= useState()
  const db = getDatabase();
  onValue(ref(db, 'createdSurvey/'+id1), (snapshot) => {
    const data = snapshot.val();
    if(!json){
      setJson(data["content"])
    }
  })
  onValue(ref(db, 'surveyResults/'+id1+'/'+id2), (snapshot) => {
    const data = snapshot.val();
    if(!surveyData){
       setSurveyData(data["content"])
    }
    });
    var survey = new Model(json);
    survey.data=surveyData;
    survey.mode="display";
  return (
    <SurveyReact.Survey model={survey} />
  )
}

export default CompletionSurveyPage