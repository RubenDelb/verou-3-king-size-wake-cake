import stepsImages from '../../constants/stepsImages';
import Carousel from '../Carousel/Carousel';
import './Home.scss';


const Home = () => {
    return (
        <>
        <div className='home'>
            <Carousel />
            <div className='howTo'>
                <h2>How to?</h2> <br />
                <h3>Step 1:</h3>
                <img src={stepsImages[0].src} alt="pizzabase" />
                <p>Select your base.</p>
                <h3>Step 2:</h3>
                <img src={stepsImages[1].src} alt="sauce" />
                <p>Select your sauce. Are you an adventurous or traditional kind of person?</p>
                <h3>Step 3:</h3>
                <img src={stepsImages[2].src} alt="topping" />
                <p>Select your toping. All of them are possible.</p>
                <h3>Step 4:</h3>
                <img src={stepsImages[3].src} alt="cheese" />
                <p>Do you like cheese or your life is boring?</p>
                <h3>Step 5:</h3>
                <img src={stepsImages[4].src} alt="remarks" />
                <p>Let us know if you have a sensitive belly and we will take care of it.</p>
            </div>
        </div>
        </>

    )
}

export default Home