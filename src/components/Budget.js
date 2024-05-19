import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newNumber = parseInt(event.target.value);
    if (!isNaN(newNumber)) {
      setNewBudget(newNumber);
      dispatch({ type: 'SET_BUDGET', payload: newNumber }); // Dispatch action to update context
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget} </span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
    </div>
  );
};

export default Budget;
