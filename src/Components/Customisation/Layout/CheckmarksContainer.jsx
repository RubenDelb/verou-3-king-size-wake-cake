import React from 'react'

const CheckmarksContainer = (props) => {
    return (
        <div className='checkboxes-container'>
            {props.children}
        </div>
    )
}

export default CheckmarksContainer