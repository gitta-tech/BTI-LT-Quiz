import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';
import ThankYou from './components/ThankYou';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </Router>
);

export default App;
