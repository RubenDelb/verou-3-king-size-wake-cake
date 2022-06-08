import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PizzaContext from '../../PizzaContext';
import './Checkout.scss';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io'
import cheeseImages from '../../constants/cheeseImages';

const Checkout = () => {   
  // TODO: get ingredients from localstorage
    const {pizzas, toggleIngredients} = useContext(PizzaContext);

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='checkout'>
            <div className='checkout-container'>
                { success ? // If confirm is clicked then show
                    <div className='success-container'>
                        <h1 className='success-title'>We have successfully received you order, Thank you!</h1>
                    </div>
                    : // ELSE show
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

                        <div className="confirmation">
                            <h1 className='head-text'>
                                Your order:
                            </h1>
                            <table className='ingredients-table'>
                                <tbody>
                                    { Object.keys(pizzas).map((ingredient) => {
                                        return (
                                            pizzas[ingredient] && (
                                            <tr key={ingredient}>
                                                <td>
                                                    {ingredient[0].toUpperCase()}
                                                    {ingredient.substring(1)}
                                                </td>
                                                <td>
                                                    { cheeseImages.map((image) => {
                                                        if (image.name === ingredient) {
                                                            return ("$" + image.price)
                                                        }
                                                    }) }
                                                </td>
                                            </tr>
                                            )
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                }
                <div className="link-div">
                    <Link to={"/customremarks"} className="link"> 
                        <IoIosArrowBack className='arrow-back' />
                        Go Back  
                    </Link>
                    <Link to={"/checkout"} className='link' onClick={() => setSuccess(true)}>
                        Confirm
                        <IoMdCheckmark className='arrow-next' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout