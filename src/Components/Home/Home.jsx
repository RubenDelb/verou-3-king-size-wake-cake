import Carousel from '../Carousel/Carousel';
import './Home.scss';
import {  Base, Sauce, Topping, SayCheese, Notes} from './homeImg';

const Home = () => {
    return (
        <>
        <div className='home'>
            <p>Home</p>
            <Carousel />
            <div className='howTo'>
                <h2>How to?</h2> <br />
                <h3>Step 1:</h3>
                <img src={Base} alt="" />
                <p>Select your base.</p>
                <h3>Step 2:</h3>
                <img src={Sauce} alt="" />
                <p>Select your sauce. Are you an adventurous or traditional kind of person?</p>
                <h3>Step 3:</h3>
                <img src={Topping} alt="" />
                <p>Select your toping. All of them are possible.</p>
                <h3>Step 4:</h3>
                <img src={SayCheese} alt="" />
                <p>Do you like cheese or your life is boring?</p>
                <h3>Step 5:</h3>
                <img src={Notes} alt="" />
                <p>Let us know if you have a sensitive belly and we will take care of it.</p>
            </div>
        </div>
        </>

    )
}

export default Home