import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import {Survey,Model} from "survey-core";
import * as SurveyReact from "survey-react-ui";
import { getDatabase, ref, onValue, set } from "firebase/database";
//Import localization
import "survey-core/survey.i18n.js";
//Import Survey styles
import "survey-core/defaultV2.css";

const DoSurveyPageID = () => {
  let {id} = useParams();
  let resultID;
  const [json,setJson]= useState();
  const db = getDatabase();
  const x = ref(db, 'createdSurvey/'+id);
  onValue(ref(db, 'surveyResults/'+id), (snapshot) => {
    const data = snapshot.val();
    if(data)
      resultID=Object.keys(data).length+1;
    else
      resultID=1;
    });
  onValue(x, (snapshot) => {
    const data = snapshot.val();
    if(!json){
      setJson(data["content"])
    }
  })
  var survey = new Model(json);
  survey.onComplete.add(function (sender, options) {
    set(ref(db, 'surveyResults/' + id + '/'+resultID), {
       content: sender.data,
       user:localStorage.getItem('user'),
    });
  });
  return (
    <SurveyReact.Survey model={survey} />
  )
}

export default DoSurveyPageID