import sauceImages from '../../../constants/sauceImages';
import { motion } from 'framer-motion';
import './CustomSauce.scss';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';

const CustomSauce = ({idName}) => {
    const {pizzas, toggleIngredients, localStorageSaver} = useContext(PizzaContext);

    setTimeout(() => {
        localStorageSaver()
    }, 1000);
    
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
                {sauceImages.map((sauce) => {
                    return (
                        <>
                            {sauce.category === "sauce" && (
                                <label className="container-checkbox" htmlFor={sauce.name} key={sauce.name}>
                                    {sauce.name}
                                    <input
                                        type="checkbox"
                                        name="sauce-selection"
                                        checked={ pizzas[sauce.name] }
                                        id={sauce.name}
                                        onChange={ toggleIngredients }
                                    />
                                    <span className="checkmark"></span>
                                </label>
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