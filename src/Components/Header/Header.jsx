import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const Header = () => {
    return (
        <>
        <h1>Cakery</h1>
        <div className='nav'>
            <Link to={"/"}><Button btnName={'Home'} /></Link>
            <Link to="/cakedesign"><Button btnName={'Cake Design'} /></Link>
            <Link to="/display-cake"><Button btnName={'My Designs'} /></Link>
        </div>
        </>
    )
}

export default Header