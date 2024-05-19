import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  return (
    <div className='alert alert-primary'>
        <span>Currency </span>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="£">GBP (£)</option>
        <option value="$">USD ($)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
        
      </select>
    </div>
  );
};

export default Currency;