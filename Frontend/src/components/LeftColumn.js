import React, { useState, useEffect} from 'react'
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
  useEffect(() => {
    let currTime = date.getHours() + ":"
    if (date.getMinutes() < 10)
      currTime += "0" + date.getMinutes()
    else
      currTime += date.getMinutes()
    setTime(currTime)
  })
  return (
    <ul className="menu-list">
      <li className='logo-container'>
        <img id="logo" src={logo} alt="Name" />
      </li>
      <li className='list-item'>
        <p>{time}, {day}</p>
        <p>Survey Completed:0</p>
        <p>Activating Survey:0</p>
      </li>
      <li className="list-item">
        <a>Introduction</a>
      </li>
      <li className="list-item">
        <a>Create new survey</a>
      </li>
      <li className="list-item">
        <a>Do survey</a>
      </li>
      <li className="list-item">
        <a>Your past surveys</a>
      </li>
      <li className="list-item">
        <a>Tutorial</a>
      </li>
      <li className="list-item">
        <a>Account Setting</a>
      </li>
      <li className="list-item" id="last-item">
        <a>Sign out</a>
      </li>
      <li className="list-item" id="last-item">
        <div>SurveyToday 2022</div>
      </li>

    </ul>
  )
}

export default LeftColumn