import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterDecrement, CounterIncrement } from '../Redux/actions/CounterAction';

export default function Counter() {
    const dispatch=useDispatch();
    const counter=useSelector(state=>state.CounterReducer.counter);
  return (
    <div>
        <h2>Counter</h2>
        <div>{counter}</div>
        <button onClick={()=>dispatch(CounterIncrement())}>Increment</button>
        <button onClick={()=>dispatch(CounterDecrement())}>Decrement</button>
    </div>
  )
}
