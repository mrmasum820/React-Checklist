import React from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [count, Increment, Decrement, Reset] = useCounter(0, 1);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>reset</button>
    </div>
  );
}

export default CounterOne;
