import './CustomTopping.scss';
import { ingredientsImages } from '../../../constants';
import { motion } from 'framer-motion';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';

const CustomTopping = ({idName}) => {
    const {pizzas, toggleIngredients, localStorageSaver} = useContext(PizzaContext);

    setTimeout(() => {
        localStorageSaver()
    }, 1000);

    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                {ingredientsImages.map((ingredient) => {
                    return (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    y: pizzas[ingredient.name] ? 0 : -200,
                                    opacity: pizzas[ingredient.name] ? 1 : 0,
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
                            { ingredient.category === "topping" && (
                                <label className="container-checkbox" htmlFor={ingredient.name} key={ingredient.name}>
                                    <img src={ingredient.src} alt={ingredient.name} height="15%" width="15%" />
                                    {ingredient.name}
                                    <input
                                        type="checkbox"
                                        checked={ pizzas[ingredient.name] }
                                        onChange={ toggleIngredients }
                                        id={ingredient.name}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            ) }
                        </>
                    )
                })}
            </div>
        </div>
        <NavigationDots active={idName} />
        </>
    )
}

export default CustomTopping;