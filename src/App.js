import React from 'react';
import './App.scss';
import { Header, Footer, Home, CakeDesign, Display, Carousel } from './components';
import { Routes, Route } from 'react-router-dom';
import Customize from './components/Customize/Customize';

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
