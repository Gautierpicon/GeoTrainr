import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import FlagsQuiz from './pages/FlagsQuiz';
import Homepage from './pages/Homepage';
import ScriptsQuiz from './pages/ScriptsQuiz';
import Settings from './pages/Settings';

import './theme.js';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/FlagFinder" element={<Homepage />} />
          <Route path="/flagsquiz" element={<FlagsQuiz />} />
          <Route path="/scriptsquiz" element={<ScriptsQuiz />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>
  )
}

export default App