// import React from 'react'
// import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import TypingFirstPage from './components/TypingFirstPage';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FeatureSection from './components/FeatureSection';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path='/' element={<LoginPage />} />
//         <Route path='/first-page' element={<TypingFirstPage />} />  */}
//         {/* <Route path='/' element={<Navbar />} />  */}
//         <Navbar />
//         <HeroSection />
//       <FeatureSection />
//       </Routes>
//     </Router>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import StartTyping from './components/StartTyping';
import LoginPage from './components/LoginPage'
import './App.css';
function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* <Navbar /> */}
      {/* <HeroSection />
      <FeatureSection /> */}
      <StartTyping />
      {/* <LoginPage /> */}
    </div>
  )
}

export default App
