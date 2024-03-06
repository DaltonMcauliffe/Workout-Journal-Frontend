import React, { useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Goals from './Pages/Goals';
import Header from './Components/Header';
import Home from './Pages/Home';
import Workout from './Pages/Workout';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Goals' element={<Goals />} />
      <Route path='/Workout' element={<Workout />} />
    </Routes>
   <Footer />
    </>
  );
}

export default App;
