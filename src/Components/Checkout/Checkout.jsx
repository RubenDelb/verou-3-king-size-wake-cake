import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PizzaContext from '../../PizzaContext';
import './Checkout.scss';

const Checkout = () => {   
  // TODO: get ingredients from localstorage
  const {pizzas, toggleIngredients} = useContext(PizzaContext);

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
                { Object.keys(pizzas).map((ingredient) => {
                  return (
                    pizzas[ingredient] && (
                      <p>{ingredient}</p>
                    ) 
                  )
                  // return (
                  //   <div>Hey</div>
                  //   // ingredients[ingredient] && (
                  //   //   <li>
                  //   //     {ingredient[0].toUpperCase()}
                  //   //     {ingredient.substring(1)}
                  //   //   </li>
                  //   // )
                  // )
                }) }
              </ul>
            </>
          }
          <div className="link-div">
            <button className='link' onClick={() => setSuccess(true)}>
              Confirm
            </button>
            <button className='link' onClick={() => navigate('/customcheese')}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout