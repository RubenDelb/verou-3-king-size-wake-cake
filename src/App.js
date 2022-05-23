import React from 'react';
import './App.scss';
import { Header, Footer, Home, CakeDesign, Display, Carousel } from './Components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakedesign" element={<CakeDesign />} />
        <Route path="/display-cake" element={<Display />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
