import React from 'react'
import './home.css'
import LeftColumn from '../components/LeftColumn'
import Navbar from '../components/Navbar'
import { Routes, Route } from 'react-router-dom'
import IntroductionPage from './IntroductionPage'
import CreateSurveyPage from './CreateSurveyPage'
import DoSurveyPage from './DoSurveyPage'
import PastSurveyPage from './PastSurveyPage'
import Tutorial from './Tutorial'
const Home = () => {
  return (

    <div id="container">
      <Navbar></Navbar>
      <div id="wrapper">
        <LeftColumn></LeftColumn>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/createsurvey" element={<CreateSurveyPage />} />
          <Route path="/dosurvey" element={<DoSurveyPage />} />
          <Route path="/pastsurveys" element={<PastSurveyPage />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home