import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularLocations from './components/PopularLocations';
import AllLocations from './components/AllLocations';
import Adventures from './components/Adventures';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <PopularLocations />  
            <Adventures />
          </>
        } />
        <Route path="/locations" element={<AllLocations />} />
      </Routes>
      <Footer />
      </>
   );
}

export default App;
