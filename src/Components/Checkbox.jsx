import { useContext } from "react";
import PizzaContext from "../PizzaContext";

const Checkbox = ({ item, toggleIngredients }) => {
    const { pizzas } = useContext(PizzaContext);


    return (
        <button 
            className="container-checkbox" 
            key={item.src}
            id={item.name}
            onClick={ (event) => toggleIngredients(event, item) }
            style={ pizzas[item.name] ? {backgroundColor: "#E0D8B0"} : {backgroundColor: "var(--white-color)"} }
        >
            <img src={item.src2} alt={item.name} height="auto" width="20%" />
            <p className="item-name">{item.name}</p>
            <p className="price">${item.price}</p>
        </button>
    )
}

export default Checkbox