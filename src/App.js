import { useEffect, useState } from 'react';
import './App.scss';
import { Header, Footer, Home } from './Components';
import { Routes, Route } from 'react-router-dom';
import Customize from './Components/Customize/Customize';
import Checkout from './Components/Checkout/Checkout';

const App = () => {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize ingredients={ ingredients } setIngredients={ setIngredients }/>} />
        <Route path="/checkout" element={<Checkout ingredients={ingredients} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
