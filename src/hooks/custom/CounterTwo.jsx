import React from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [count, Increment, Decrement, Reset] = useCounter(10, 5);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>reset</button>
    </div>
  );
}

export default CounterTwo;
