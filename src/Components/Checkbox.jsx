import { useContext } from "react";
import PizzaContext from "../PizzaContext";

const Checkbox = ({ item, toggleIngredients }) => {
    const { pizzas } = useContext(PizzaContext);


    return (
        <button 
            className="container-checkbox" 
            key={item.name}
            id={item.name}
            onClick={ (event) => toggleIngredients(event, item) }
            style={ pizzas[item.name] ? {backgroundColor: "#E0D8B0"} : {backgroundColor: "var(--white-color)"} }
        >
            <img src={item.src2} alt={item.name} height="auto" width="20%" />
            <p>{item.name}</p>
        </button>
    )
}

export default Checkbox