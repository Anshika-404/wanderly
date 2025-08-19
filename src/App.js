// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularLocations from './components/PopularLocations';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularLocations />
      <Footer />
    </>
  );
}

export default App;
