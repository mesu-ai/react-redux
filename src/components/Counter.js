import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/Action';

const Counter = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();

    const handleIncrement=()=>{
        dispatch(incrementCounter());
    }
    const handleDecrement=()=>{
        dispatch(decrementCounter());
    }
    const handleReset=()=>{
        dispatch(resetCounter());
    }

    // console.log(count);

    


    return (
        <div>
            <p>{count}</p>

            <div>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>-</button>
            </div>


            
        </div>
    );
};

export default Counter;