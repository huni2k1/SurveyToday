import React, { useState, useEffect } from 'react'
import './PastSurveyPage.css'
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';


const PastSurveyPage = (props) => {
  const navigate = useNavigate();
  const [createdSurveys, setCreatedSurveys] = useState([]);    
  const [completedSurveys, setCompletedSurveys] = useState([]);    
  const db = getDatabase();
  onValue(ref(db, 'createdSurvey'), (snapshot) => {
      const data = snapshot.val();
      const tmp1=[];
      for (let survey in data) {
          if(localStorage.getItem('user')==data[survey]["user"])
            tmp1.push(survey)
        }
      if(createdSurveys.length==0 && createdSurveys.length!=tmp1.length){
         setCreatedSurveys(tmp1)
      }
    })
  onValue(ref(db,'surveyResults/'),(snapshot)=>{
    const data=snapshot.val();
    const tmp2=[];
    for(const survey in data){
      for(const result in data[survey]){
        if(data[survey][result]["user"] == localStorage.getItem('user')){
          tmp2.push({survey:survey,result:result})
        }
      }
    }
    if(completedSurveys.length==0 && completedSurveys.length!=tmp2.length){
        setCompletedSurveys(tmp2)
   }
  })
  return (
    <div className="pastSurveysContainer">
      <div className="column1">
        <h2>Created Survey</h2>
        <ul className="createdSurveysList">
          {createdSurveys.map((value, index) => {
            return <li key={index}>
            <button onClick={()=>navigate("/homepage/modify/"+value)}>Survey#{value}</button>
            <button onClick={()=>navigate("/homepage/result/"+value)}>See Result</button>
            </li>
          })}
        </ul>
      </div>
      <div className="column2">
        <h2>Completed Survey</h2>
        <ul className="createdSurveysList">
          {completedSurveys.map((value, index) => {
            return <li key={index}>
            <button onClick={()=>navigate("/homepage/result/"+value["survey"]+"/"+value["result"])}>Completed Survey#{value["survey"]}</button>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default PastSurveyPage