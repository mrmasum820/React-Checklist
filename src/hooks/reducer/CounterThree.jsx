//multiple reducers

import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter One: {counter}</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <div>
        <h3>Counter Two: {counterTwo}</h3>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>reset</button>
      </div>
    </div>
  );
};

export default CounterThree;
