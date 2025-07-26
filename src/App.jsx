
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HeroSection from './components/HeroSection'
import StartTyping from './components/StartTyping';
import MultiPlayer from './components/MultiPlayer';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/heroSection' element={<HeroSection />} />
        <Route path='/startTyping' element={<StartTyping />} />
        <Route path='/multiPlayer' element={<MultiPlayer />} />


      </Routes>
    </Router>
  );
}

export default App;
