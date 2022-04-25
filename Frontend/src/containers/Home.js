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
import DoSurveyPageID from './DoSurveyPageID'
import ModifySurveyPage from './ModifySurveyPage'
import ResultSurveyPage from './ResultSurveyPage'
import CompletionSurveyPage from './CompletionSurveyPage'
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
          <Route path="/dosurvey/:id" element={<DoSurveyPageID />} />
          <Route path="/pastsurveys" element={<PastSurveyPage />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/modify/:id" element={<ModifySurveyPage />} />
          <Route path="/result/:id" element={<ResultSurveyPage />} />
          <Route path="/result/:id1/:id2" element={<CompletionSurveyPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home