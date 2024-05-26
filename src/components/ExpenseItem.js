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
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
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
        <td><button onClick={event=> increaseAllocation(props.name)} style={{border: "none"}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCT73aQ-YQYGcc1Mfl2AGujWABLF_mIKt78g&usqp=CAU' alt ="+" style = {{width: "20px", height: "20px"}} /></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={{border: "none"}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDaG4wxRfqo_6V1WNDrMhdx37ds2AsuakBA&usqp=CAU' alt = "-" style = {{width: "20px", height: "20px"}} /></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
