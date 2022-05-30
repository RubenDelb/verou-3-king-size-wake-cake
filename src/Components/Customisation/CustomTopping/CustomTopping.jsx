import './CustomTopping.scss';
import { ingredientsImages } from '../../../constants';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Button from '../../Button/Button';
import AppWrap from '../../AppWrap';
import { useEffect, useState } from 'react';
import CustomLayout from '../Layout/ImageContainer';
import CustomCheckmarks from '../Layout/CheckmarksContainer';
import ImageContainer from '../Layout/ImageContainer';
import CheckmarksContainer from '../Layout/CheckmarksContainer';

const CustomTopping = () => {
    const [ingredients, setIngredients] = useState({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("ingredients"));
        if (data) {
        setIngredients(data);
        }
    }, []);

    const onChange = (event, name) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    };

    return (
        <>
            <ImageContainer>
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
            </ImageContainer>    
            <CheckmarksContainer>
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
            </CheckmarksContainer>
        </>
    )
}

export default AppWrap(CustomTopping, 'topping')