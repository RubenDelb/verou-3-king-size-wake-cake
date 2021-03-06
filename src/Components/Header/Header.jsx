import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/pizzaverse.webp"
import { useState } from 'react';
import { HiMenuAlt4, HiX } from  'react-icons/hi';
import { motion } from 'framer-motion'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to={"/"} ><img src={Logo} alt="PizzaVerse-logo" height="100%" width="100%"/></Link> 
            </div>
            <button className='hamburger' id='hamburger' aria-label="Open the menu">
                <motion.div 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.6 }}
                    >
                {toggle ? (
                    
                        <HiX onClick={() => setToggle(false)} aria-hidden="true" />
                ) : (
                        <HiMenuAlt4 onClick={() => setToggle(true)} aria-hidden="true"/>
                    
                )}
                </motion.div>
            </button>
            <ul className={`navbar-links ${toggle ? 'show' : ''}`}>
                <Link to={"/"} key={'home'}  onClick={() => setToggle(false)} > <li>Home</li> </Link>
                <Link to="/custombase" key={'base'}  onClick={() => setToggle(false)} ><li>Customize pizza</li></Link>
                <Link to={"/checkout"} key={'checkout'}  onClick={() => setToggle(false)} ><li>Checkout</li></Link>
                {/* <Link to="/AddRecipe"><Button btnName={'Get Inspire'} /></Link> */}
            </ul>
            
            
        </nav>
    )
}

export default Header