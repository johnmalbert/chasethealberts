// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Landscapes from './pages/Landscapes';
import TakeAHike from './pages/TakeAHike';
import OurDogs from './pages/OurDogs';
import ParksPassport from './pages/ParksPassport';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Add the Header component here */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/landscapes" element={<Landscapes />} />
          <Route path="/our-dogs" element={<OurDogs />} />
          <Route path="/take-a-hike" element={<TakeAHike />} />
          <Route path="/parks-passport" element={<ParksPassport />} /> {/* Add the new route */}
          {/* Add other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
