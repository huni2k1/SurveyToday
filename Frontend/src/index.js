import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbdyaq9cW3OCEtDfhONmEwAlxyPa8k76s",
  authDomain: "surveytoday-344704.firebaseapp.com",
  databaseURL: "https://surveytoday-344704-default-rtdb.firebaseio.com",
  projectId: "surveytoday-344704",
  storageBucket: "surveytoday-344704.appspot.com",
  messagingSenderId: "785645022688",
  appId: "1:785645022688:web:76c41d2441341fda0fcf85"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db=getDatabase(firebase);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
