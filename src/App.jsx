import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import FlagsQuiz from './components/FlagsQuiz';
import Homepage from './pages/Homepage';
import ScriptsQuiz from './pages/ScriptsQuiz';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flagsquiz" element={<FlagsQuiz />} />
          <Route path="/scriptsquiz" element={<ScriptsQuiz />} />
        </Routes>
    </Router>
  )
}

export default App