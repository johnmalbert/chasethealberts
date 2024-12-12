// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Header component
import Home from './pages/Home';
import Japan from './pages/Japan';
import PNW from './pages/PNW';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Add the Header component here */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/pnw" element={<PNW />} />
          {/* Add other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
