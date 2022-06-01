import { useEffect, useState } from 'react';
import './App.scss';
import { Header, Footer, Home } from './Components';
import { Routes, Route } from 'react-router-dom';
import { CustomBase, CustomCheese, CustomRemarks, CustomSauce, CustomTopping } from './Components/Customisation';
import Checkout from './Components/Checkout/Checkout'
import { PizzaProvider } from './PizzaContext';



const App = () => {

  return (
    <div className="app">
      <Header />

      <PizzaProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custombase" element={<CustomBase idName='base'/>} />
          <Route path="/customsauce" element={<CustomSauce idName='sauce'/>} />
          <Route path="/customtopping" element={<CustomTopping idName='topping'/>} />
          <Route path="/customcheese" element={<CustomCheese idName='cheese'/>} />
          <Route path="/customremarks" element={<CustomRemarks idName='remarks'/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </PizzaProvider>
      <Footer />
    </div>
  );
}

export default App;
