import React from 'react'

const ImageContainer = (props) => {
    return (
        <div className='image-container'>
            <div className='inner-image-container'>
                {props.children}
            </div>
        </div>
    )
}

export default ImageContainer