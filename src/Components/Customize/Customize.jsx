import './Customize.scss';
import { ingredientsImages } from '../../constants';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Customize = ( { ingredients, setIngredients } ) => {
    let navigate = useNavigate();

    const onChange = (event, name) => {
    console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    };

    return (
    <div className='customize'>
        <div className='image-container'>
            <div className='inner-image-container'>
                {ingredientsImages.map((ingredient) => {
                    return (
                        <>
                            { ingredient.name === "pizzabase" ? (
                                <motion.div transition={{ duration: 1 }} className="base">
                                    <img src={ingredient.src} alt="Pizza Base" height="100%" width="100%" />
                                </motion.div> ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        y: ingredients[ingredient.name] ? 100 : -100,
                                        opacity: ingredients[ingredient.name] ? 1 : 0,
                                    }}
                                    transition={{ duration: 1 }}
                                    className={`ingredients ${ingredient.zIndex} ${ingredient.name}`}
                                    key={ingredient.name}
                                >
                                    <img src={ingredient.src} alt={ingredient.name} height="100%" width="100%" />
                                </motion.div>)}
                        </>
                    )
                })}



            </div>
        </div>
        <div className='checkboxes-container'>
            {ingredientsImages.map((ingredient) => {
                return (
                    <>
                        { ingredient.name === "pizzabase" ? "" : (
                            <label className="container-checkbox">
                                {ingredient.name}
                                <input
                                    type="checkbox"
                                    checked={ingredients[ingredient.name]}
                                    onChange={(event) =>
                                        onChange(event.currentTarget.checked, ingredient.name)
                                    }
                                />
                                <span className="checkmark"></span>
                            </label>
                        )}
                    </>
                )
            })}
            <button onClick={() => navigate('/checkout')}>
                Checkout!
            </button>
        </div>
    </div>
  )
}

export default Customize