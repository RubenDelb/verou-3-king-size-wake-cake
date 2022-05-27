import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from "../../assets/logo/pizzaverse.png"

const Header = () => {
    return (
        <>
        <div className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to={"/"}><Button btnName={'Home'} /></Link>
                <Link to="/customize"><Button btnName={'Customize Pizza'} /></Link>
                {/* <Link to="/AddRecipe"><Button btnName={'Get Inspire'} /></Link> */}
            </div>
        </div>
        </>
    )
}

export default Header