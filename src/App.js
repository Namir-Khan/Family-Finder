// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import LanguageSelector from './components/LanguageSelector';
import Home from './components/Home';
import MemberPage from './components/MemberPage';

// Define the App component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for different pages */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="" element={<LanguageSelector />} />
        <Route exact path="/member" element={<MemberPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;