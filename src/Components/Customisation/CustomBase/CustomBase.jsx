import AppWrap from '../../AppWrap'
import './CustomBase.scss'
import { motion } from 'framer-motion';
import baseImages from '../../../constants/baseImages';
import ImageContainer from '../Layout/ImageContainer';
import CheckmarksContainer from '../Layout/CheckmarksContainer';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import NavigationDots from '../../NavigationDots';


const CustomBase = ({idName}) => {
    const [bases, setBases] = useState({
        emptybase: false,
    });

    const {pizzas, setPizzas} = useContext(PizzaContext);

    useEffect(() => {
        const data = localStorage.getItem("bases");
        if (data) {
        setBases(JSON.parse(data));
        }
    }, []);

    const onChange = (event, name) => {
        let newBases = JSON.parse(JSON.stringify(bases));
        newBases[name] = event;
        setBases(newBases);
        localStorage.setItem("bases", JSON.stringify(newBases));
        let newPizza = pizzas;
        newPizza[name] = event;
        setPizzas(newPizza);
        console.log(pizzas);
    };

    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                { baseImages.map((base) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: bases[base.name] ? 0 : -200,
                                opacity: bases[base.name] ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className={`ingredients ${base.zIndex} ${base.name}`}
                            key={base.name}
                        >
                            <ImageContainer src={base.src} alt={base.name} />
                    </motion.div>

                    )
                })}
            </div>
            </div>

                <div className='checkboxes-container'>
                { baseImages.map((base) => {
                    return (
                        <>
                            { base.name === "pizzabase" ? "" : (
                                <label className="container-checkbox">
                                    {base.name}
                                    <input
                                        type="checkbox"
                                        checked={bases[base.name]}
                                        onChange={(event) =>
                                            onChange(event.currentTarget.checked, base.name)
                                        }
                                        // onClick={() => addPizza(base)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            )}
                        </>
                    )
                })}
            </div>
        </div>
        <NavigationDots active={idName} />
        </>

    )
}

export default CustomBase;