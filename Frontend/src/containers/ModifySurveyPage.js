import React,{useState} from 'react'
import { useParams, } from 'react-router-dom'
import { getDatabase, ref, onValue, set } from "firebase/database";
import * as SurveyCreator from "survey-creator-react";
//Import localization
import "survey-core/survey.i18n.js";
//Import Survey styles
import "survey-core/defaultV2.css";
import { surveyTimerFunctions } from 'survey-core';


const ModifySurveyPage = () => {
    let {id} = useParams();
    const [json,setJson]=useState()
    const db = getDatabase();
    const x = ref(db, 'createdSurvey/'+id);
    var options = {
      haveCommercialLicense: true, //Add this line
      questionTypes: ["text", "checkbox", "radiogroup"],
      showJSONEditorTab: false,
      pageEditMode: "single",
  };
    var survey = new SurveyCreator.SurveyCreator(options);
    const query= onValue(x, (snapshot) => {
      const data = snapshot.val();
      if(!json){
        setJson(data["content"])
      }
      else{
        survey.JSON=JSON.parse(json)
        console.log(data["content"])
      }
    })
  return <SurveyCreator.SurveyCreatorComponent creator={survey} />;
}

export default ModifySurveyPage