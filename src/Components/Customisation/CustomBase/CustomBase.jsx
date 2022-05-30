import AppWrap from '../../AppWrap'
import './CustomBase.scss'
import { motion } from 'framer-motion';
import baseImages from '../../../constants/baseImages';
import ImageContainer from '../Layout/ImageContainer';
import CheckmarksContainer from '../Layout/CheckmarksContainer';
import { useEffect, useState } from 'react';

const CustomBase = () => {
    const [bases, setBases] = useState({
        emptybase: false,
    });

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
    };

    return (
        <>
            <ImageContainer>
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
                            <img src={base.src} alt={base.name} height="100%" width="100%" />
                    </motion.div>

                    )
                })}
            </ImageContainer>

            <CheckmarksContainer>
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
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            )}
                        </>
                    )
                })}
            </CheckmarksContainer>
        </>
        
    )
}

export default AppWrap(CustomBase, 'base');