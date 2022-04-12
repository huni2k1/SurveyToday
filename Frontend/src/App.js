import './App.css';
import Login from './containers/Login'
import Home from './containers/Home'
import { useEffect } from 'react';
import { Routes, Route, useNavigate,BrowserRouter } from 'react-router-dom';
import IntroductionPage from './containers/IntroductionPage';
import PastSurveyPage from './containers/PastSurveyPage';

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const User = localStorage.getItem('user')
    // if (!User) navigate('/login');
    // else navigate('/homepage')
  }, []);
  return (
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/homepage/*" element={<Home />}/>
    </Routes>
  );
}

export default App;
