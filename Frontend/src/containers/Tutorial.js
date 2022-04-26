import React from 'react'
import buttons from '../images/CreateButton.png'
import basics from '../images/BasicSurveyFields.png'
import basicQuestions from '../images/BasicQuestionOptions.png'
import additionalOptions from '../images/AdditionalQuestionOptions.png'
import settings from '../images/QuestionSettings.png'
import preview from '../images/CreateSurveyPreview.png'
import doButtons from '../images/DoButton.png'
import surveyID from '../images/DoSurveyID.png'
import completeSurvey from '../images/completeSurvey.png'
import pastSurveyButton from '../images/PastSurveyButton.png'
import pastSurveyTables from '../images/PastSurveyTables.png'
import surveyResponseSelection from '../images/SurveyResponseSelection.png'
import surveyResponseView from '../images/SurveyResponseView.png'
import surveyCompleteResponse from '../images/SurveyCompleteResponse.png'
import "./Tutorial.css"

const Tutorial = () => {
  return (
    <div>
      <div id="toc_container">
        <p class="toc_title">Contents</p>
        <ul class="toc_list">
          <li><a href="#First_Point_Header">1. Create Survey</a>
            <ul>
              <li><a href="#Create_Buttons">1.1 Survey Create Buttons</a></li>
              <li><a href="#Basic_Create_Fields">1.2 Basic Survey Fields</a></li>
              <li><a href="#Basic_Question_Options">1.3 Basic Question Options</a></li>
              <li><a href="#Additional_Question_Options">1.4 Additional Question Options</a></li>
              <li><a href="#Advanced_Question_Settings">1.5 Advanced Question Settings</a></li>
              <li><a href="#Survey_Preview">1.6 Survey Preview</a></li>
            </ul>
          </li>
          <li><a href="#Second_Point_Header">2. Do Survey</a>
            <ul>
              <li><a href="#Do_Survey_Buttons">2.1 Do Survey Buttons</a></li>
              <li><a href="#Survey_ID">2.2 Survey ID Search</a></li>
              <li><a href="#completeSurvey">2.3 Completing Survey</a></li>
            </ul>
          </li>
          <li><a href="#Third_Point_Header">3. Past Surveys</a></li>
            <ul>
              <li><a href="#pastButton">3.1 Past Survey Button</a></li>
              <li><a href="#pastTable">3.2 Past Survey Table</a></li>
              <li><a href="#createResponse">3.3 Created Survey Response</a></li>
              <li><a href="#completeResponse">3.4 Completed Survey Response</a></li>
            </ul>
        </ul>
      </div>
      <p/>
      <div>
          <h2 id="First_Point_Header">1. Create Survey</h2>
          <ul>
            <li id="Create_Buttons">
            <p>
              Create Survey Buttons
              <div><img src = {buttons} width="60%" height="60%" alt = "buttons"/></div>
              <p>Either of these buttons will direct the user to the create survey page.</p>
            </p>
            </li>
            <li id="Basic_Create_Fields">
            <p>
              Basic Survey Fields
              <div><img src = {basics} width="60%" height="60%" alt = "basics"/></div>
              <p>These are your survey's primary fields. With these, you can add a title, 
                a description, and a logo to your survey. The role of these fields is to help
                personalize your survey and give users an idea of what the survey is about.
              </p>
            </p>
            </li>
            <li id="Basic_Question_Options">
            <p>
              Basic Question Options 
              <div><img src = {basicQuestions} width="60%" height="60%" alt="basicQuestions"/></div>
              <p>The basic options for your questions are the text box for the question that you
                are asking and the options for question type in the top left. The three question types
                are text response, checkbox, and radio group options. Directly below your question, you 
                also have the option to add another question. 
              </p>
            </p>
            </li>
            <li id="Additional_Question_Options">
            <p>
              Additional Question Options 
              <div><img src = {additionalOptions} width="60%" height="60%" alt="additionalOptions"/></div>
              <p>The additional options for your questions are to add another potential answer for the multiple
                choice questions (checkbox and radiogroup), to duplicate the current question, to modify more 
                question settings, to require the question to be answered, or to delete the question. You can also
                change the type of question in the question options at the bottom left. For radio group question type,
                you can add as many answers as are necessary, a none option, and an other option. For checkbox questions
                you can choose those same options with the addition of a select all option.
              </p>
            </p>
            </li>
            <li id="Advanced_Question_Settings">
            <p>
              Advanced Question Settings 
              <div><img src = {settings} width="60%" height="60%" alt="settings"/></div>
              <p>Clicking the settings button in the question options shows a menu that allows for further customization
                of your questions. This menu gives you the option to define logic for your survey (i.e. If your answer to 
                question 1 is yes, go to question 2; if it is no go to question 3). The settings menu also lets you customize
                how the question appears and default values for the text responses. The goal of these settings is to give survey
                creators complete creative control over their surveys.
              </p>
            </p>
            </li>
            <li id="Survey_Preview">
            <p>
              Survey Preview 
              <div><img src = {preview} width="60%" height="60%" alt="preview"/></div>
              <p>The Preview button allows survey creators to view their survey as a user who is taking the survey.
                In the preview screen, survey creators can also answer survey questions as if they were a survey completer.
              </p>
            </p>
            </li>
          </ul>
          <h2 id="Second_Point_Header">2. Do Survey</h2>
          <ul>
            <li id = "Do_Survey_Buttons">
            <p>
              Do Survey Buttons
              <div><img src = {doButtons} width="60%" height="60%" alt="doButtons"/></div>
              <p>You can navigate to the Do Survey page either by clicking the "Fill out a survey" button on the Home page
                or by selecting the "Do survey" button on the left column
              </p>
            </p>
            </li>
            <li id = "Survey_ID">
            <p>
              Survey ID Search
              <div><img src = {surveyID} width="60%" height="60%" alt="surveyID"/></div>
              <p>Here you can input the surveyID of an already created survey. This ID will be an integer value. If a friend
                or colleague creates a suvey, they can give you their survey ID for you to fill it out. 
              </p>
            </p>
            </li>
            <li id = "completeSurvey">
            <p>
              Completing Survey
              <div><img src = {completeSurvey} width="60%" height="60%" alt="completeSurvey"/></div>
              <p>
                This is an example survey that can be searched for (ID = 9). Here, the user can fill out all the questions created
                by the survey creator. Once the survey doer is done, they click the complete button and the survey response is saved.
              </p>
            </p>
            </li>
          </ul>
          <h2 id="Third_Point_Header">3. Past Surveys</h2>
          <ul>
            <li id = "pastButton">
            <p>
              Past Survey Button
              <div><img src = {pastSurveyButton} width="60%" height="60%" alt="pastButton"/></div>
              <p>
                To see responses to completed surveys, users can navigate to "Your Past Surveys" page with the button on the left
                bar. 
              </p>
            </p>
            </li>
            <li id = "pastTable">
            <p>
              Past Survey Table 
              <div><img src = {pastSurveyTables} width="60%" height="60%" alt="pastTable"/></div>
              <p>
                This table shows the surveys that the user has created on the left with the option to go to view the whole survey on the left
                and the option to view user responses on the right. On the right column of the table, users can see their past responses to surveys
                and review those responses.
              </p>
            </p>
            </li>
            <li id = "createResponse">
            <p>
              Created Survey Response 
              <div><img src = {surveyResponseSelection} width="50%" height="60%" alt="responseSelection"/><img src = {surveyResponseView} width="42.5%" height="50%" alt="responseView"/></div>
              <p>
                By clicking on "See Result" for a created survey, a user can see total completions and select any of those completions
                to view the submitted response in a read-only mode. 
              </p>
            </p>
            </li>
            <li id = "completeResponse">
            <p>
              Completed Survey Response
              <div><img src = {surveyCompleteResponse} width="50%" height="60%" alt="completeResponse"></img></div>
              <p>
                By clicking on a completed survey in the left column, a user can see their own submission to a created survey in a read-only
                mode.
              </p>
            </p>
            </li>
          </ul>
      </div>
    </div>  
  )
}

export default Tutorial
