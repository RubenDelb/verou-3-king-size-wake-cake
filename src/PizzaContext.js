import React from 'react';
import { createContext, useState, useEffect } from 'react';
import cheeseImages from './constants/cheeseImages';

const PizzaContext = createContext();

export function PizzaProvider({children}){
    const [pizzas, setPizzas] = useState({
        Deeppan: false,
        Authentic: false,
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
            setPizzas(JSON.parse(data)) // set the useState to the same value as the localstorage, if it exists
        :
            localStorage.setItem("pizzas", JSON.stringify(pizzas)) 
            // If it doesn't exist in Localstorage, set to default-values
    }, []);

    const localStorageSaver = () => {
        localStorage.setItem("pizzas", JSON.stringify(pizzas));
    }

    const toggleIngredients = (e, item) => {
        const id = e.target.id;
        const checked = e.target.checked;
        cheeseImages.map((image) => {
            if (id === image.name) {
                // Set the value of the selected checkmark to the selected value (true or false)
                setPizzas(prevValue => ({ ...prevValue, [id]: checked }));
            }
            else if (image.category === item?.category) {
                // Set all the other values of the same category that has been selected to false, so only 1 can be chosen.
                setPizzas(prevValue => ({ ...prevValue, [image.name]: false }));
            }
        })
    };

    return (
        <PizzaContext.Provider value={{pizzas, toggleIngredients, localStorageSaver}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaContext;