import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PizzaContext from '../../PizzaContext';
import './Checkout.scss';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';
import cheeseImages from '../../constants/cheeseImages';
import OrderConf from '../Checkout/order-done.png';
import Success from '../Checkout/success.png';

const Checkout = () => {   
    const { pizzas } = useContext(PizzaContext);
    const [ success, setSuccess ] = useState(false);
    const [ currentTime, setCurrentTime ] = useState('');
    let totalPrice = 0;
    
    const getConfirmationTime = () => {
        setSuccess(true);
        const date = new Date();
        date.setMinutes(date.getMinutes() + 30);
        const hour = date.getHours();
        const minutes = date.getMinutes();
        setCurrentTime(hour + ":" + minutes)
    }

    return (
        <div className='checkout'>
            <div className='checkout-container'>
                { success ? // If confirm is clicked then show
                    <div className='success-container'>
                        <div className="wrapper">
                            <div className='success-box'>
                                <img src={Success} alt="" height="100%" width="100%" />
                                <h2 className='success-title'>We have successfully received your order. <br /> Thank you!</h2>
                                <img src={OrderConf} alt="" height="100%" width="100%" />
                                <h4>Your order will be ready for pick-up @ {currentTime}</h4>
                            </div>
                        </div>
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

                        <div className="confirmation-container">
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
                                                                totalPrice += image.price
                                                                return ("$" + image.price)
                                                            }
                                                        }) }
                                                    </td>
                                                </tr>
                                                )
                                            )
                                        })}
                                        <tr className='total-price'>
                                            <td>
                                                Total Price
                                            </td>
                                            <td>
                                                ${totalPrice}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
                { success ? [] :
                <div className="link-div">
                    <Link to={"/customremarks"} className="link"> 
                        <IoIosArrowBack className='arrow-back' />
                        Go Back  
                    </Link>
                    <Link to={"/checkout"} className='link' onClick={getConfirmationTime}>
                        Confirm
                        <IoMdCheckmark className='arrow-next' />
                    </Link>
                </div>
                }
            </div>
        </div>
    )
}

export default Checkout