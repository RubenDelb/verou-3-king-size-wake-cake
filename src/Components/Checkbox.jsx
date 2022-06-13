import { useContext } from "react";
import PizzaContext from "../PizzaContext";

const Checkbox = ({ item }) => {
    const { pizzas, toggleIngredients } = useContext(PizzaContext);


    return (
        <button 
            className="container-checkbox" 
            key={item.src}
            id={item.name}
            onClick={ (event) => toggleIngredients(event, item) }
        >
            <div style={ pizzas[item.name] ? { backgroundColor: "#60992D", boxShadow: "0px 0px 6px 0px #6FB134" } : { backgroundColor: "#DD4A48", boxShadow: "0px 0px 6px 0px #F3514F" } }/>
            <img src={item.src2} alt={item.name} height="auto" width="20%" />
            <p className="item-name">{item.name}</p>
            <p className="price">${item.price}</p>
        </button>
    )
}

export default Checkbox