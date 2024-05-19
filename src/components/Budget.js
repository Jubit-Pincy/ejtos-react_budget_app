import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newNumber = parseInt(event.target.value);
    if (!isNaN(newNumber)) {
      setNewBudget(newNumber);
      dispatch({ type: 'SET_BUDGET', payload: newNumber });
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
    </div>
  );
};

export default Budget;
