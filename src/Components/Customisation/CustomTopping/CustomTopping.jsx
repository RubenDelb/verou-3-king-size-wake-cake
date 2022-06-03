import './CustomTopping.scss';
import ingredientsImages from '../../../constants/ingredientsImages';
import { motion } from 'framer-motion';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import Checkbox from '../../Checkbox';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const CustomTopping = ({idName}) => {
    const {pizzas, toggleIngredients} = useContext(PizzaContext);

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
                                <Checkbox item={ingredient} toggleIngredients={toggleIngredients} />
                            ) }
                        </>
                    )
                })}
            </div>
        </div>
        <NavigationDots active={idName} />
        <div className="link-div">
            <Link to={"/customsauce"} className="link"> 
                <IoIosArrowBack className='arrow-back' />
                Sauce  
            </Link>
            <Link to={"/customcheese"} className="link"> 
                Cheese 
                <IoIosArrowForward className='arrow-next' /> 
            </Link>
        </div>
        </>
    )
}

export default CustomTopping;