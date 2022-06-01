import React from 'react'
import { Link } from 'react-router-dom'
import stepsImages from '../constants/stepsImages'

const NavigationDots = ({ active }) => {
  return (
    <div className='navigation'>
      {stepsImages.map((item, index) => (
        <Link 
          to={ `/custom${item.name}` }
          key={ item.name + index }
          className="navigation-dot" 
          style={ active === item.name ? { backgroundColor: '#FD6F3B' } : {} } 
        >
          <img src={ item.src } alt={ item.name }/>
        </Link>
      ))}
    </div>
  )
}

export default NavigationDots