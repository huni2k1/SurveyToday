import React, { useState, useEffect} from 'react'
import { getDatabase, ref, onValue, set } from "firebase/database";
import './LeftColumn.css'
import logo from '../logo.png'
const LeftColumn = (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [weekDay, setWeekDay] = useState(week[date.getDay()]);
  const [temp, setTemp] = useState();
  const [day, setDay] = useState(months[date.getMonth()] +" "+ date.getDate() + " " + date.getFullYear());
  const [createdSurvey,setCreatedSurvey]= useState(0)
  const [completedSurvey,setCompletedSurvey]= useState(0)
  useEffect(() => {
    let currTime = date.getHours() + ":"
    if (date.getMinutes() < 10)
      currTime += "0" + date.getMinutes()
    else
      currTime += date.getMinutes()
    setTime(currTime)
  })
  const db = getDatabase();
  onValue(ref(db, 'createdSurvey'), (snapshot) => {
    const data = snapshot.val();
    let count=0;
    for(let survey in data){
      if(data[survey]["user"]==localStorage.getItem('user')){
        count++;
      }
    }
    if(createdSurvey!=count){
      setCreatedSurvey(count)
    }
  })
  onValue(ref(db,'surveyResults/'),(snapshot)=>{
    const data=snapshot.val();
    let count=0;
    for(const survey in data){
      for(const result in data[survey]){
        if(data[survey][result]["user"] == localStorage.getItem('user')){
          count++;
        }
      }
    }
    if(completedSurvey!=count){
      setCompletedSurvey(count)
    }
  })
  const handleLogout= ()=>{
    localStorage.removeItem("user");
  }
  return (
    <ul className="menu-list">
      <li className='logo-container'>
        <img id="logo" src={logo} alt="Name" />
      </li>
      <li className="first-item">
        <p>{time}, {day}</p>
        <p>Survey Completed: {completedSurvey}</p>
        <p>Created Survey: {createdSurvey}</p>
      </li>
      <li className="list-item">
        <a href="/homepage">Introduction</a>
      </li>
      <li className="list-item">
        <a href="/homepage/createsurvey">Create new survey</a>
      </li>
      <li className="list-item">
        <a href="/homepage/dosurvey">Do survey</a>
      </li>
      <li className="list-item">
        <a href="/homepage/pastsurveys">Your past surveys</a>
      </li>
      <li className="list-item">
        <a href="/homepage/tutorial">Tutorial</a>
      </li>
      <li className="list-item" id="last-item">
        <a href="/login" onClick={handleLogout}>Sign out</a>
      </li>
      <li className="list-item" id="last-item">
        <div>SurveyToday 2022</div>
      </li>

    </ul>
  )
}

export default LeftColumn