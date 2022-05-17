import React from 'react';
import './App.css';
import { Header, Footer, Home, Design, Display, Circle, Square } from './Components';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/" element={<Design />} />
      <Route exact path="/" element={<Display />} />
      </Routes>
      
      <Square />
      <Circle />
      <Footer />
    </div>
  );
}

export default App;
