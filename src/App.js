import { useEffect, useState } from 'react';
import './App.scss';
import { Header, Footer, Home } from './Components';
import { Routes, Route } from 'react-router-dom';
import { CustomBase, CustomCheese, CustomRemarks, CustomSauce, CustomTopping } from './Components/Customisation';
import Checkout from './Components/Checkout/Checkout'

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
        <Route path="/custombase" element={<CustomBase ingredients={ ingredients } setIngredients={ setIngredients }/>} />
        <Route path="/customsauce" element={<CustomSauce ingredients={ ingredients } setIngredients={ setIngredients }/>} />
        <Route path="/customtopping" element={<CustomTopping ingredients={ ingredients } setIngredients={ setIngredients }/>} />
        <Route path="/customcheese" element={<CustomCheese ingredients={ ingredients } setIngredients={ setIngredients }/>} />
        <Route path="/customremarks" element={<CustomRemarks ingredients={ ingredients } setIngredients={ setIngredients }/>} />
        <Route path="/checkout" element={<Checkout ingredients={ingredients} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
