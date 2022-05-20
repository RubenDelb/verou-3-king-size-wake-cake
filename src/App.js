import React from 'react';
import './App.css';
import { Header, Footer, Home, CakeDesign, Display, Carousel } from './Components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Carousel />
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
