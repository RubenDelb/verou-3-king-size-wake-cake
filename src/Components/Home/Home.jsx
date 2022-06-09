import stepsImages from '../../constants/stepsImages';
import './Home.scss';
import homePizzas from '../../constants/homePizzas';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';


const Home = () => {
    return (
        <>
        <div className='home'>
            <SwiperCarousel />
            <div className='howTo'>
                <h2>Need inspiration? Take a look...</h2> 
                <br />
                <div className="container">
                    <div className='card'>
                        <div className='card-front'>
                            <img src={homePizzas[0].src} alt="pizzabase" />
                        </div>
                        <div className='card-back'>
                            <h3>Our egg-celent pizzas will melt your heart</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-front'>
                            <img src={homePizzas[1].src} alt="sauce" />
                        </div>
                        <div className='card-back'>
                            <h3>Sometime less is more</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-front'>
                            <img src={homePizzas[2].src} alt="topping" />
                        </div>
                        <div className='card-back'>
                            <h3>Be wise when choosing your sauce</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-front'>
                            <img src={homePizzas[3].src} alt="cheese" />
                        </div>
                        <div className='card-back'>
                            <h3>Love comes in all shapes </h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-front'>
                            <img src={homePizzas[4].src} alt="remarks" />
                        </div>
                        <div className='card-back'>
                            <h3>Meat me halfway</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-front'>
                            <img src={homePizzas[5].src} alt="remarks" />
                        </div>
                        <div className='card-back'>
                            <h3>There's one for everyone, even for the pineapple connoisseur</h3>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        </>

    )
}

export default Home