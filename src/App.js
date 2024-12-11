// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header component
import Home from './pages/Home';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Add the Header component here */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
