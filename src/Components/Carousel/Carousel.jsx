import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import stepsImages from "../../constants/stepsImages";

import "./Carousel.scss";

const Carousel = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <motion.div 
            ref={carousel}  
            className="carousel" 
        >
            <motion.div 
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                dragElastic={0.2}
                whileTap={{ cursor: "grabbing"}}
                onDragEnd={
                    (event, info) => console.log(info.point.x)
                }
                dragMomentum={false}
                className="inner-carousel"
            >
                {stepsImages.map((image) => {
                    return(
                        <>
                            <div className="item" key={image.name}> 
                                <img src={image.src} alt="" />
                            </div>
                            <div className="text">
                                <h1>{image.title}</h1>
                                <h6>{ image.description }</h6>
                            </div>
                        </>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default Carousel