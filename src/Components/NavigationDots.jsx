import React from 'react'
import { Link } from 'react-router-dom'

const NavigationDots = ({ active }) => {
  return (
    <div className='navigation'>
      {['base', 'sauce', 'topping', 'cheese', 'remarks' ].map((item, index) => (
        <Link 
          to={`/custom${item}`}
          key={item + index}
          className="navigation-dot" 
          style={active === item ? { backgroundColor: '#FD6F3B' } : {} } 
        >{index + 1}</Link>
      ))}

    </div>
  )
}

export default NavigationDots