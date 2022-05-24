import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => {
    return (
        <>
        <div className='header'>
            <h1 className='title'>Custom Pizza</h1>
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