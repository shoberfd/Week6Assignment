import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // router 
import IntroPage from './IntroPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; 

function App() {
  return ( // sequence users go through: Intro -> Login -> Home (either A or B)
    <Router>
      <Routes> 
        <Route path="/" element={<IntroPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;