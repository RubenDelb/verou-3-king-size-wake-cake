import { useEffect, useState } from 'react';
import './App.scss';
import { Header, Footer, Home } from './Components';
import { Routes, Route } from 'react-router-dom';
import { CustomBase, CustomCheese, CustomRemarks, CustomSauce, CustomTopping } from './Components/Customisation';
import Checkout from './Components/Checkout/Checkout'


const App = () => {

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custombase" element={<CustomBase />} />
        <Route path="/customsauce" element={<CustomSauce />} />
        <Route path="/customtopping" element={<CustomTopping />} />
        <Route path="/customcheese" element={<CustomCheese/>} />
        <Route path="/customremarks" element={<CustomRemarks/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
