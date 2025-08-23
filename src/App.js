import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularLocations from './components/PopularLocations';
import AllLocations from './components/AllLocations';
import Adventures from './components/Adventures';
import Services from './components/Services';
import Reviews from "./components/Reviews";
import Footer from './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact.js";

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
            <Services />
            <Reviews />
          </>
        } />
        <Route path="/locations" element={<AllLocations />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
      </>
   );
}

export default App;
