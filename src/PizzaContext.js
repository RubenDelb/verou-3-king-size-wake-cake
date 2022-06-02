import { createContext, useState, useEffect } from 'react';
import cheeseImages from './constants/cheeseImages';

const PizzaContext = createContext();

export function PizzaProvider({children}){
    const [pizzas, setPizzas] = useState({
        Deeppan: true,
        Authentic: false,
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
        broccoli: false,
        eggplant: false,
        bacon: false,
        corn: false,
        onion: false,
        scampi: false,
        pepper: false,
        pepperoni: false,
        shrimp: false,
        carrot: false,
        curry: false,
        pesto: false,
        tomatoSauce: true,
        spicy: false
    });

    useEffect(() => {
        const data = localStorage.getItem("pizzas");
        data ?
            setPizzas(JSON.parse(data)) // set the useState to the same value as the localstorage object
        :
            // If it doesn't exist in localstorage, set to default-values
            localStorage.setItem("pizzas", JSON.stringify(pizzas)) 
    }, []);

    const toggleIngredients = (e, item) => {
        const id = e.target.id;
        cheeseImages.map((image) => {
            // Check if the clicked button id is the same as the image
            if (id === image.name) {
                // This is to prevent that there would be no dough, or no sauce
                if (pizzas[id] === false || item?.category === 'topping') {
                    // Set the value of the selected ingredient to the opposite value (true or false)
                    setPizzas(prevValue => ({ ...prevValue, [id]: !pizzas[id] }));
                }
            }
            else if (image.category === item?.category && item?.category !== "topping") {
                // Set all the other values of the same category that has been selected to false, so only 1 can be chosen.
                // Not for the toppings!
                setPizzas(prevValue => ({ ...prevValue, [image.name]: false }));
            }
        })
    };

    setTimeout(() => {
        localStorage.setItem("pizzas", JSON.stringify(pizzas));
    }, 100);

    return (
        <PizzaContext.Provider value={{pizzas, toggleIngredients}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaContext;