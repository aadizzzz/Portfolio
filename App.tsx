
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SplitNGoCaseStudy from './components/SplitNGoCaseStudy';
import ToolboxCaseStudy from './components/ToolboxCaseStudy';
import HoneypotCaseStudy from './components/HoneypotCaseStudy';
import GymOSCaseStudy from './components/GymOSCaseStudy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/splitngo" element={<SplitNGoCaseStudy />} />
        <Route path="/case-study/toolbox" element={<ToolboxCaseStudy />} />
        <Route path="/case-study/honeypot" element={<HoneypotCaseStudy />} />
        <Route path="/case-study/gym-os" element={<GymOSCaseStudy />} />
      </Routes>
    </Router>
  );
};

export default App;
