import sauceImages from '../../../constants/sauceImages';
import AppWrap from '../../AppWrap';
import { motion } from 'framer-motion';
import CheckmarksContainer from '../Layout/CheckmarksContainer';
import ImageContainer from '../Layout/ImageContainer';
import './CustomSauce.scss';
import { useEffect, useState } from 'react';

const CustomSauce = () => {
    const [sauces, setSauces] = useState({
        curry: false,
        pesto: false,
        tomato: false,
        spicy: false
    });

    const [replicaSauces, setReplicaSauces] = useState({
        curry: false,
        pesto: false,
        tomato: false,
        spicy: false
    });

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
    };


    return (
        <>
            <ImageContainer>
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
                                <img src={sauce.src} alt={sauce.name} height="100%" width="100%" />
                            </motion.div>
                        </>
                    )
                })}
            </ImageContainer>
            <CheckmarksContainer>
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
            </CheckmarksContainer>
        </>
    )
}

export default AppWrap(CustomSauce, 'sauce')