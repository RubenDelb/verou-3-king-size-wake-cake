import cheeseImages from '../../../constants/cheeseImages';
import { motion } from 'framer-motion';
import './CustomCheese.scss';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import Checkbox from '../../Checkbox';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';


const CustomCheese = ({idName}) => {
    const {pizzas, toggleIngredients} = useContext(PizzaContext);

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
        <div className="link-div">
            <Link to={"/customtopping"} className="link"> 
                <IoIosArrowBack className='arrow-back' />
                Toppings  
            </Link>
            <Link to={"/customremarks"} className="link"> 
                Remarks 
                <IoIosArrowForward className='arrow-next' /> 
            </Link>
        </div>

        </>
    )
}

export default CustomCheese;