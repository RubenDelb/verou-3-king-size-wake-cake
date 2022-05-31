import React from 'react';
import PizzaContext from '../../../PizzaContext';
import { useContext } from 'react';

const ImageContainer = ({src, alt}) => {
    const {pizzas} = useContext(PizzaContext);

    return (
        <div className='image-container'>
            <div className='inner-image-container'>
                <img src={src} alt={alt} height="100%" width="100%"/>
            </div>
        </div>
    )
}

export default ImageContainer;