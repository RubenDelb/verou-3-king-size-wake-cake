import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['base', 'sauce', 'topping', 'cheese', 'remarks' ].map((item, index) => (
        <a 
          href={`/custom${item}`}
          key={item + index}
          className="app__navigation-dot" 
          style={active === item ? { backgroundColor: '#FD6F3B' } : {} } 
        > {index} </a>
      ))}

    </div>
  )
}

export default NavigationDots