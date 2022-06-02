import sauceImages from '../../../constants/sauceImages';
import { motion } from 'framer-motion';
import './CustomSauce.scss';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import Checkbox from '../../Checkbox';

const CustomSauce = ({idName}) => {
    const {pizzas, toggleIngredients} = useContext(PizzaContext);
    
    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                {sauceImages.map((sauce) => {
                    return (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    y: pizzas[sauce.name] ? 0 : -200,
                                    opacity: pizzas[sauce.name] ? 1 : 0,
                                }}
                                transition={{ duration: 1 }}
                                className={`ingredients ${sauce.zIndex} ${sauce.name}`}
                                key={sauce.name}
                            >
                                <img src={sauce.src} alt={sauce.name} height="100%" width="100%" />
                            </motion.div>
                        </>
                    )
                })}
            </div>
            </div>

            <div className='checkboxes-container'>
                {sauceImages.map((item) => {
                    return (
                        <>
                            {item.category === "sauce" && (
                                <Checkbox item={item} toggleIngredients={toggleIngredients} />
                            )}
                        </>
                    )
                })}
            </div>
        </div>
        <NavigationDots active={idName} />
        </>
    )
}

export default CustomSauce;