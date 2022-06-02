const Checkbox = ({ item, toggleIngredients }) => {
    return (
        <button 
            className="container-checkbox" 
            key={item.name}
            id={item.name}
            onClick={ (event) => toggleIngredients(event, item) }
        >
            <img src={item.src2} alt={item.name} height="auto" width="20%" />
            <p>{item.name}</p>
        </button>
    )
}

export default Checkbox