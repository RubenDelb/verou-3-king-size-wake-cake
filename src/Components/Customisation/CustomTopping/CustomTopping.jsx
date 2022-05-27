import './CustomTopping.scss';
import { ingredientsImages } from '../../../constants';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Button from '../../Button/Button';
import AppWrap from '../../AppWrap';
import { useEffect, useState } from 'react';

const CustomTopping = () => {
    const [ingredients, setIngredients] = useState({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
    });

    console.log(ingredients);

    useEffect(() => {
        const data = localStorage.getItem("ingredients");
        if (data) {
        setIngredients(JSON.parse(data));
        }
    }, []);


    console.log(ingredients);

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
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        y: ingredients[ingredient.name] ? 0 : -200,
                                        opacity: ingredients[ingredient.name] ? 1 : 0,
                                    }}
                                    transition={{ duration: 1 }}
                                    className={`ingredients ${ingredient.zIndex} ${ingredient.name}`}
                                    key={ingredient.name}
                                >
                                    <img src={ingredient.src} alt={ingredient.name} height="100%" width="100%" />
                                </motion.div>
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
            </div>
        </div>
    )
}

export default AppWrap(CustomTopping, 'topping')