import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/Navbar';
import FlagsQuiz from './pages/FlagsQuiz';
import Homepage from './pages/Homepage';
import ScriptsQuiz from './pages/ScriptsQuiz';
import Settings from './pages/Settings';

import './components/Settings/Theme/theme.js';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flagsquiz" element={<FlagsQuiz />} />
          <Route path="/scriptsquiz" element={<ScriptsQuiz />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  )
}

export default App