import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const database=getDatabase(firebase);