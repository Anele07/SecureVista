import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
