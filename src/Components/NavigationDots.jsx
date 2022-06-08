import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import stepsImages from '../constants/stepsImages'

const NavigationDots = ({ active }) => {
  return (
    <div className='navigation'>
      {stepsImages.map((item, index) => (
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{
              y: active ? 0 : -200,
              opacity: active === item.name ? 1 : 0.2,
          }}
          transition={{ duration: 1 }}
          key={item.name}
        >
          <Link
            to={ `/custom${item.name}` }
            className="navigation-dot"
            // style={ active === item.name ? { backgroundColor: '#FD6F3B' } : {} }
          >
            <img src={ item.src }
              alt={ item.name }
              // style={ active === item.name ? { width: '50px', height: '50px' } : {} }
            />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default NavigationDots