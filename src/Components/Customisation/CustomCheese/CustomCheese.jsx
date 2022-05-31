import { useEffect, useState } from 'react';
import cheeseImages from '../../../constants/cheeseImages';
import AppWrap from '../../AppWrap';
import { motion } from 'framer-motion';
import CheckmarksContainer from '../Layout/CheckmarksContainer';
import ImageContainer from '../Layout/ImageContainer';
import './CustomCheese.scss';
import NavigationDots from '../../NavigationDots';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';

const CustomCheese = ({idName}) => {
    const [cheeses, setCheeses] = useState({
        cheese: false,
    });

    useEffect(() => {
        const data = localStorage.getItem("cheeses");
        if (data) {
        setCheeses(JSON.parse(data));
        }
    }, []);

    const onChange = (event, name) => {
        let newCheeses = JSON.parse(JSON.stringify(cheeses));
        newCheeses[name] = event;
        setCheeses(newCheeses);
        localStorage.setItem("cheeses", JSON.stringify(newCheeses));
    };


    return (
        <>
        <div className="customize">
            <div className='image-container'>
            <div className='inner-image-container'>
                { cheeseImages.map((cheese) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: cheeses[cheese.name] ? 0 : -200,
                                opacity: cheeses[cheese.name] ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className={`ingredients ${cheese.zIndex} ${cheese.name}`}
                            key={cheese.name}
                        >
                            <ImageContainer src={cheese.src} alt={cheese.name} height="100%" width="100%" />
                        </motion.div>
                    )
                })}
            </div>
            </div>

            <div className='checkboxes-container'>
                {cheeseImages.map((cheese) => {
                    return (
                        <>
                            <label className="container-checkbox">
                                {cheese.name}
                                <input
                                    type="checkbox"
                                    checked={cheeses[cheese.name]}
                                    onChange={(event) =>
                                        onChange(event.currentTarget.checked, cheese.name)
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

export default CustomCheese;