import React from 'react';
import { createContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export function PizzaProvider({children}){
    const [pizzas, setPizzas] = useState({
        emptybase: false,
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
        brocoli: false,
        eggplant: false,
        carrot: false,
        curry: false,
        pesto: false,
        tomatoSauce: false,
        spicy: false
    });

    useEffect(() => {
        const data = localStorage.getItem("pizzas");
        data ?
            setPizzas(JSON.parse(data))
        :
            localStorage.setItem("pizzas", JSON.stringify(pizzas))
    }, []);

    const localStorageSaver = () => {
        localStorage.setItem("pizzas", JSON.stringify(pizzas));
    }

    const toggleIngredients = (e) => {
        const id = e.target.id;
        const checked = e.target.checked;
        console.log(e.target.checked);
        setPizzas(prevValue => ({ ...prevValue, [id]: checked }));
    };

    return (
        <PizzaContext.Provider value={{pizzas, toggleIngredients, localStorageSaver}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaContext;