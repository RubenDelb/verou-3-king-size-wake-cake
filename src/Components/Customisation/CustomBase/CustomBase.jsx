import './CustomBase.scss'
import { motion } from 'framer-motion';
import baseImages from '../../../constants/baseImages';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import NavigationDots from '../../NavigationDots';


const CustomBase = ({idName}) => {
    const {pizzas, toggleIngredients, localStorageSaver} = useContext(PizzaContext);

    setTimeout(() => {
        localStorageSaver()
    }, 1000);

    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                { baseImages.map((base) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: pizzas[base.name] ? 0 : -200,
                                opacity: pizzas[base.name] ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className={`ingredients ${base.zIndex} ${base.name}`}
                            key={base.name}
                        >
                            <img src={base.src} alt={base.name} height="100%" width="100%" />
                    </motion.div>

                    )
                })}
            </div>
            </div>

                <div className='checkboxes-container'>
                { baseImages.map((item) => {
                    return (
                        <>
                            <label className="container-checkbox">
                                {item.name}
                                <input
                                    type="checkbox"
                                    checked={ pizzas[item.name] } 
                                    id={item.name}
                                    onChange={ (event) => toggleIngredients(event, item) }
                                    // onClick={() => addPizza(item)}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </>
                    )
                })}
            </div>
        </div>
        <NavigationDots active={idName} />
        </>

    )
}

export default CustomBase;