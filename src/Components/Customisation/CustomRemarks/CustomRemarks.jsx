import { useNavigate } from 'react-router-dom';
import AppWrap from '../../AppWrap';
import Button from '../../Button/Button';
import './CustomRemarks.scss';

const CustomRemarks = () => {
  let navigate = useNavigate();

  return (
    <div>CustomRemarks
      <Button btnName='Checkout!' onClick={() => navigate('/checkout')}/>
    </div>
  )
}

export default AppWrap(CustomRemarks, 'remarks')