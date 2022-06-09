import stepsImages from '../../constants/stepsImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './SwiperCarousel.scss';


const SwiperCarousel = () => {
    return (

        <div className="carousel">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                breakpoints= {{
                    // when window width is >= 600px
                    600: {
                    slidesPerView: 2,
                    },
                    1000: {
                    slidesPerView: 3,
                    },
                    1600: {
                    slidesPerView: 4,
                    },
                    2000: {
                    slidesPerView: 5,
                    }}
                }
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                
            >
            
                    {stepsImages.map((image) => {
                        return(
                            <SwiperSlide className="inner-carousel" key={image.name}>
                                <div className="item" key={image.name}>
                                    <img src={image.src} alt={image.name}/>
                                </div>
                                <div className="text">
                                    <h1>{image.title}</h1>
                                    <h6>{ image.description }</h6>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            
            </Swiper>
        </div>
    )
}

export default SwiperCarousel