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
        if (data) {
        setPizzas(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("pizzas", JSON.stringify(pizzas))
    }, [pizzas])

    return (
        <PizzaContext.Provider value={{pizzas, setPizzas}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaContext;