import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import './ResultSurveyPage.css'
const ResultSurveyPage = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [totalResult, setTotalResult] = useState(0);
  const db = getDatabase();
  onValue(ref(db, 'surveyResults/' + id), (snapshot) => {
    const data = snapshot.val();
    if (totalResult != Object.keys(data).length) {
      setTotalResult(Object.keys(data).length);
    }
  });
  let resultArr = [];
  for (let i = 1; i <= totalResult; i++) {
    resultArr.push(
      <li key={i}>
        <button onClick={() => {navigate("/homepage/result/"+id+"/"+i)}}>See Survey Completion#{i}</button>
      </li>)
  }
  return (
    <div>
      <h3>Total Completion: {totalResult}</h3>
      <ul className='completionList'>
        {resultArr}
      </ul>
    </div>
  )
}

export default ResultSurveyPage