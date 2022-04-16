import React from 'react'
import logo from '../logo.png'
import "./IntroductionPage.css"

const IntroductionPage = () => {
  return (
    <div>
      <h1 className="photo">
        <img id="logo" src={logo} alt="Name"/>
      </h1>
      <h1 className="Intro_Paragraph">
        With SurveyToday, users can create surveys for other users to fill out and can also fill out surveys that other users have created.
      </h1>
      <br />
      <li className="button">
        <a href="/homepage/createsurvey">Create a new survey</a>
      </li>
      <br />
      <li className="button">
        <a href="/homepage/dosurvey">Fill out a survey</a>
      </li>
    </div>
  )
}

export default IntroductionPage