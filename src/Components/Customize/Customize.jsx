import './Customize.scss';
import { ingredients } from '../../constants';
import { motion } from 'framer-motion';

const Customize = () => {
  return (
    <div className='customize'>
        <div className='image-container'>
            <div className='inner-image-container'>
                {ingredients.map((ingredient) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: ingredients[ingredient.name] ? 100 : -100,
                                opacity: ingredients[ingredient.name] ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className={`ingredients ${ingredient.zIndex} ${ingredient.name}`}
                        >
                            <img src={ingredient.src} alt={ingredient.name} height="100%" width="100%" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
        <div className='checkboxes-container'>
            checkboxes
        </div>
    </div>
  )
}

export default Customize