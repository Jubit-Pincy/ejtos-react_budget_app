import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const decreaseAllocation = (name) => {
        const newCost = (props.cost - 10); // Ensures cost doesn't go negative
        dispatch({
          type: 'RED_EXPENSE', // Use RED_EXPENSE for decreasing allocation
          payload: { name: props.cost, cost: newCost }, // Provide name and new cost
        });
      };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        }); 

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
