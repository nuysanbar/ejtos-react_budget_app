import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency=()=>{
    const { dispatch } = useContext(AppContext);
    const submitCurrency=(event)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
 return (
    <div className='alert alert-info' style={{ marginLeft: '0rem' }}>
    <label  htmlFor="inputGroupSelect01">Currency</label>
    <select id="inputGroupSelect01" onChange={(event) => submitCurrency(event)}>
        <option defaultValue>Choose...</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="$" name="dollar">$ Dollar</option>
        <option value="€" name="euro">€ Euro</option>
        <option value="₹" name="ruppee">₹ Ruppee</option>
    </select>
  </div>
 )
}
export default Currency;