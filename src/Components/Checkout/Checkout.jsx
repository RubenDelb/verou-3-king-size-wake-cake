import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Checkout.scss';

const Checkout = ({ ingredients }) => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='checkout'>
      <div className='checkout-container'>
        <div>
          { success ? // If confirm is clicked then show :
            <div>
              <h1>We have successfully received you order, Thank you!</h1>
            </div>
            : // ELSE show
            <>
              <h1 className='head-text'>
                My Ingredients:
              </h1>
              <ul>
                { Object.keys(ingredients).map((ingredient) => {
                  return (
                    ingredients[ingredient] && (
                      <li>
                        {ingredient[0].toUpperCase()}
                        {ingredient.substring(1)}
                      </li>
                    )
                  )
                }) }
              </ul>
            </>
          }
          <Button btnName='Confirm' onClick={() => setSuccess(true)}/>
          <Button btnName='Go Back' onClick={() => navigate('/customize')}/>
        </div>
      </div>
    </div>
  )
}

export default Checkout