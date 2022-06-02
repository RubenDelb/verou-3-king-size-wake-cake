import cheeseImages from '../../../constants/cheeseImages';
import { motion } from 'framer-motion';
import './CustomCheese.scss';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import Checkbox from '../../Checkbox';

const CustomCheese = ({idName}) => {
    const {pizzas, toggleIngredients, localStorageSaver} = useContext(PizzaContext);

    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                { cheeseImages.map((cheese) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: pizzas[cheese.name] ? 0 : -200,
                                opacity: pizzas[cheese.name] ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className={`ingredients ${cheese.zIndex} ${cheese.name}`}
                            key={cheese.name}
                        >
                            <img src={cheese.src} alt={cheese.name} height="100%" width="100%" />
                        </motion.div>
                    )
                })}
            </div>
            </div>

            <div className='checkboxes-container'>
                {cheeseImages.map((cheese) => {
                    return (
                        <>
                            { cheese.category === "cheese" && (
                                <Checkbox item={cheese} toggleIngredients={toggleIngredients} />
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

export default CustomCheese;