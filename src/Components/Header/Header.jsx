import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { HiMenuAlt4, HiX } from  'react-icons/hi';
import { useState } from 'react';
import { motion } from 'framer-motion'



const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="title">
                <h1 className='head-text'>Cakery</h1>
                <p className='p-text slogan'>Make & shape your cake</p>
                <div className="navbar-wrapper">
                    <div className="navbar-menu">
                        {/* Hamburger-menu icon */}
                        <HiMenuAlt4 onClick={() => setToggle(true)}/>
                        {/* if 'toggle' is true, the element right after && will appear in the output */}
                        { toggle && (
                            <motion.div
                            whileInView={{ x: [300,0], opacity: [0, 1] }}
                            transition={{ duration: 0.85, ease: "easeOut"}}>
                                {/* X-icon to close the menu */}
                                <HiX onClick={() => setToggle(false)} />
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/cakedesign">Cake Design</Link></li>
                                    <li><Link to="/display-cake">My Designs</Link></li>
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className='nav'>
                <Link to={"/"}><Button btnName={'Home'} /></Link>
                <Link to="/cakedesign"><Button btnName={'Cake Design'} /></Link>
                <Link to="/display-cake"><Button btnName={'My Designs'} /></Link>
            </div>
            
            
        </>
    )
}

export default Header