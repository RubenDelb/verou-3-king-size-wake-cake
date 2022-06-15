import { Link } from 'react-router-dom';
import NavigationDots from '../../NavigationDots';
import './CustomRemarks.scss';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import cheeseImages from '../../../constants/cheeseImages';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { motion } from 'framer-motion';

const CustomRemarks = ({idName}) => {
    const { pizzas } = useContext(PizzaContext);

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
            <div className='remarks'>
                <h2>Any remarks?</h2>
                <textarea name="remarks" id="textArea" cols="25" rows="8"></textarea>
            </div>
            
        </div>
        <NavigationDots active={idName} />
            <div className="link-div">
                <Link to={"/customcheese"} className="link"> 
                    <IoIosArrowBack className='arrow-back' />
                    Cheese  
                </Link>
                <Link to={"/checkout"} className="link"> 
                    Checkout 
                    <IoIosArrowForward className='arrow-next' /> 
                </Link>
            </div>
        </>
    )
}

export default CustomRemarks;