
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [budget,setBudget]=useState(totalExpenses)
    const handleSubmit=(event)=>{
        setBudget(event.target.value)
        if(event.target.value > 20000) {
            alert("The budget cannot exceed £"+20000);
            // setBudget("");
            return;
        }
    }
    // if(budget < totalExpenses){
    //     alert("You cannot lower budget lower than spending");
    //     return;
    // }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                required='required'
                type='number'
                id='budget'
                step="10"
                max={20001}
                value={budget}
                style={{ marginLeft: '2rem' , size: 7,width:"100px"}}
                onChange={(e)=>handleSubmit(e)}>
            </input>
        </div>
    );
};
export default Budget;