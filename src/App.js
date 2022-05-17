import React from 'react';
import './App.css';
import { Header, Footer, Home, CakeDesign, Display } from './Components';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/" element={<CakeDesign />} />
      <Route exact path="/" element={<Display />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
