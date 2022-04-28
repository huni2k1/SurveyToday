

SurveyToday
User Manual

CSCI 387
Spring 2022
Group 8
Mason Glenn, Ninh Van, David Crews, Gracey Cobb

                       



Introduction

SurveyToday is a web application created for users to go in and have the ability to create and take different types of surveys for their own use. Users will be able to login to SurveyToday using a Google login and then proceed to create and take surveys to export to others to collect different types of data. Once clicking on the prompted “Sign in with google” button, the user will login with a pre-existing google account. After doing so, the user will be directed to the main Home page of the application. The sidebar on the left of the home page offers the time and date, how many surveys the user has created and completed from their account, and links to create a survey, do a survey, view the past created and completed surveys the user has done, a tutorial page for the user to use as a guide through the application, and a signout button.

Requirements and Instructions for Creating a Survey

One user type offered in the application is the Survey Creator. As a survey creator, the user can create surveys with various question types and restrictions to then be able to export using the Survey ID so that other users can take their survey. The creator will then be able to go back and look at the responses of their survey. 

Survey Create buttons: As a survey creator, the user will be able to create a survey through the “Create Survey” button. This button is found on the Home page and also on the left side bar. Once clicking on this button, the user will be directed to a Survey designer creation field.
![image](https://user-images.githubusercontent.com/63893969/165842818-2af51415-42b7-4a57-b47b-3da05379cea6.png)

Basic Survey Fields: The survey's primary fields allow the user to add a title, a description, and a logo to the survey. The role of these fields is to help personalize the survey and give users an idea of what the survey is about. For the logo, the user can upload a photo file from their computer.

![image](https://user-images.githubusercontent.com/63893969/165843031-8aacc7d8-e2d5-4cc7-8ad7-dddd0e98d46e.png)

Basic Question Options: The basic options for the survey questions are the text box for the question that the user is asking and the options for question type in the top left. The three question types are text response, checkbox, and radio group options. Directly below your question, you also have the option to add another question. The user has the ability to change the type of question for each question added to the survey.

![image](https://user-images.githubusercontent.com/63893969/165843168-ba2bfcfc-c963-4646-b78e-c964744f8e9a.png)   

Additional Question Options: The additional options for survey questions are to add another potential answer for the multiple choice questions (checkbox and radiogroup), to duplicate the current question, to modify more question settings, to require the question to be answered, or to delete the question. The user can also change the type of question in the question options at the bottom left. For radio group question type, the user can add as many answers as are necessary, a none option, and another option. For checkbox questions you can choose those same options with the addition of a select all option.

![image](https://user-images.githubusercontent.com/63893969/165843228-602eafc2-9594-4b53-9e39-59061c5a5e97.png)


Advanced Question Options: Clicking the settings button in the question options shows a menu that allows for further customization of your questions. This menu gives you the option to define logic for your survey (i.e. If your answer to question 1 is yes, go to question 2; if it is no go to question 3). The settings menu also lets you customize how the question appears and default values for the text responses. The goal of these settings is to give survey creators complete creative control over their surveys.

![image](https://user-images.githubusercontent.com/63893969/165843271-5bb2008c-ef91-4d59-80f4-135113b5d872.png)


Survey Preview: The “Preview” button at the top of the create survey page allows survey creators to view their survey as a user who is taking the survey. In the preview screen, survey creators can also answer survey questions as if they were a survey completer.

![image](https://user-images.githubusercontent.com/63893969/165843319-6e9bad61-936c-4491-9494-e662c4b83777.png)


Requirements and Instructions for Doing a Survey

Another user type offered in the application is the Survey Taker. As a survey taker, the user can take pre-created surveys using the given survey ID corresponding to that particular survey. The taker can then go and see what surveys they have completed in the past survey tab.
Do Survey Buttons: The user can navigate to the Do Survey page either by clicking the "Fill out a survey" button on the Home page or by selecting the "Do survey" button on the left column. Once clicking one of these buttons, the user will be directed to the Do survey page.

![image](https://user-images.githubusercontent.com/63893969/165843366-4c983490-9455-4892-9858-77725b1e404a.png)


Survey ID Search: The “Input the SurveyID” text box allows the user to input the surveyID of an already created survey. This ID will be an integer value. If a friend or colleague creates a survey, they can give you their survey ID for the user to fill it out. The user will then click the “Submit” button to be directed to the desired survey.

![image](https://user-images.githubusercontent.com/63893969/165843440-aa20d6c5-decb-4ab2-84a0-fc5376f7f6ae.png)
 
Completing Survey: Once the survey taker has entered the SurveyID, they can then fill out all the questions created by the survey creator. Once the survey doer is done, they click the complete button and the survey response is saved. This is an example survey that can be searched for (ID = 9).

![image](https://user-images.githubusercontent.com/63893969/165843491-6872bbe4-54cb-4ea5-921d-2164954067f7.png)

Past Surveys

Past Survey Button: For users to see responses to completed surveys they have created and also surveys they have taken, users can navigate to "Your Past Surveys” page with the button on the left bar.

![image](https://user-images.githubusercontent.com/63893969/165843540-a3e2a212-8f31-43c7-a8a4-e84f37334093.png)


Past Survey Table: This table, located on the past surveys page, shows the surveys that the user has both created and completed. Under the “Created Surveys” column, the user can see the SurveyID which correlates to their created survey and its responses. Under the “Completed Survey” column the user can see the SurveyIDs related to the surveys they have completed and taken. For example, for Survey#4, the surveyID that the survey taker will type in to take that survey is just 4. 

![image](https://user-images.githubusercontent.com/63893969/165843594-0bf5ab86-3feb-4d84-b983-da33804bbbf9.png)

Created Survey Response: By clicking on "See Result" for a created survey, a user can see total completions and select any of those completions to view the submitted response in a read-only mode. All of these responses are completely anonymous and the creator and takers have no way of knowing any ID on other users. 

![image](https://user-images.githubusercontent.com/63893969/165843634-4e3fac79-c1e1-4bf6-b331-918d82d07f9b.png)

Completed Survey Response: By clicking on a completed survey in the left column, a user can see their own submission to a created survey in a read-only mode. 

![image](https://user-images.githubusercontent.com/63893969/165843673-5435ced4-b7ac-4821-a00d-ae34e893cd91.png)

SurveyToday TechStack- Admin
Frontend: The frontend of SurveyToday was built using ReactJS for components and CSS for styling. This allowed us to easily create interactive components in our app without having to use HTML and JavaScript. Along with ReactJS, we also used CSS to style each page of the app. SurveyJS is a JavaScript library we found and used in Frontend development. 
Backend: The backend of SurveyToday was built using NOSQL Database for data storage. Firebase Realtime Database service is also used.
Database Setup: Below is the ERD used for SurveyToday. 
 

Additional Features

As briefly explained in the introduction, SurveyToday also offers a Tutorial page for additional help to users while using the application, and also a Google login for users to sign in and out of the application.
Tutorial Page: The tutorial page can be accessed on the left sidebar of the application by clicking the “Tutorial”  button. Once clicked, the user can view step by step instructions on how to create and take surveys, as well as how to view past created and completed surveys. These instructions include guided images to help the user visualize the steps. 
Sign In/Out: SurveyToday has implemented a Google login for users to use pre-existing Google accounts to login to the application. Once logged into the application, the user can log out at any time by clicking the “Sign Out” button on the left side bar. The users Survey history will be correlated with the Google account they chose to login with. 
Project URL
    To use the SurveyToday system. Navigate to: 
 	https://surveytoday-344704.web.app/login
Contact Information

SurveyToday Developer Contact Information:

Gracey Cobb: gmcobb@go.olemiss.edu
Mason Glenn: mdglenn@go.olemiss.edu
David Crews: dhcrews1@go.olemiss.edu
Ninh Van: vanhuuninh2001@gmail.com





