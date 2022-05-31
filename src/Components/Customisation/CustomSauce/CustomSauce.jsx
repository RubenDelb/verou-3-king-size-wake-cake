import sauceImages from '../../../constants/sauceImages';
import AppWrap from '../../AppWrap';
import { motion } from 'framer-motion';
import CheckmarksContainer from '../Layout/CheckmarksContainer';
import ImageContainer from '../Layout/ImageContainer';
import './CustomSauce.scss';
import { useEffect, useState } from 'react';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';

const CustomSauce = ({idName}) => {
    const [sauces, setSauces] = useState({
        curry: false,
        pesto: false,
        tomatoSauce: false,
        spicy: false
    });

    const [prevPizza, setPrevPizza] = useState ({})

    useEffect(() => {
        setPrevPizza(pizzas)
        console.log('Hello');
    }, [])

    const [replicaSauces, setReplicaSauces] = useState({
        curry: false,
        pesto: false,
        tomatoSauce: false,
        spicy: false
    });

    const {pizzas, setPizzas} = useContext(PizzaContext);

    useEffect(() => {
        const data = localStorage.getItem("sauces");
        if (data) {
        setSauces(JSON.parse(data));
        }
    }, []);

    const onChange = (event, name) => {
        let newSauces = JSON.parse(JSON.stringify(replicaSauces));
        newSauces[name] = event;
        setSauces(newSauces);
        localStorage.setItem("sauces", JSON.stringify(newSauces));
        prevPizza[name] = event;
        setPizzas(prevPizza);
        console.log(pizzas);
    };


    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                {sauceImages.map((sauce) => {
                    return (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    y: sauces[sauce.name] ? 0 : -200,
                                    opacity: sauces[sauce.name] ? 1 : 0,
                                }}
                                transition={{ duration: 1 }}
                                className={`ingredients ${sauce.zIndex} ${sauce.name}`}
                                key={sauce.name}
                            >
                                <ImageContainer src={sauce.src} alt={sauce.name} />
                            </motion.div>
                        </>
                    )
                })}
            </div>
            </div>

            <div className='checkboxes-container'>
                {sauceImages.map((sauce) => {
                    return (
                        <>
                            <label className="container-checkbox">
                                {sauce.name}
                                <input
                                    type="radio"
                                    name="sauce-selection"
                                    checked={sauces[sauce.name]}
                                    onChange={ (event) =>
                                        onChange(event.currentTarget.checked, sauce.name)
                                    }
                                />
                                <span className="checkmark"></span>
                            </label>
                        </>
                    )
                })}
            </div>
        </div>
        <NavigationDots active={idName} />
        </>
    )
}

export default CustomSauce;