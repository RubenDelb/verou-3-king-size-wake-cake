import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import NavigationDots from '../../NavigationDots';
import './CustomRemarks.scss';
import { useContext } from 'react';
import PizzaContext from '../../../PizzaContext';
import cheeseImages from '../../../constants/cheeseImages';
import { motion } from 'framer-motion';

const CustomRemarks = ({idName}) => {
  let navigate = useNavigate();
  const {pizzas, toggleIngredients} = useContext(PizzaContext);

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
                                  y: pizzas[cheese.name] ? 0 : -200,
                                  opacity: pizzas[cheese.name] ? 1 : 0,
                              }}
                              transition={{ duration: 1 }}
                              className={`ingredients ${cheese.zIndex} ${cheese.name}`}
                              key={cheese.name}
                          >
                              <img src={cheese.src} alt={cheese.name} height="100%" width="100%" />
                          </motion.div>
                      )
            })}
          </div>
        </div>
    <div className='remarks'>
      <h2>Any remarks?</h2>
      <textarea name="remarks" id="textArea" cols="45" rows="10"></textarea>
    </div>
    <NavigationDots active={idName} />
    </div>
    </>
  )
}

export default CustomRemarks;