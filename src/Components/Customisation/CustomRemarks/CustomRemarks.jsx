import { useNavigate } from 'react-router-dom';
import AppWrap from '../../AppWrap';
import Button from '../../Button/Button';
import NavigationDots from '../../NavigationDots';
import './CustomRemarks.scss';

const CustomRemarks = ({idName}) => {
  let navigate = useNavigate();

  return (
    <>
    <div>CustomRemarks
      <Button btnName='Checkout!' onClick={() => navigate('/checkout')}/>
    </div>
    <NavigationDots active={idName} />
    </>
  )
}

export default CustomRemarks;