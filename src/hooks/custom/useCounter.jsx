import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const Increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const Decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const Reset = () => {
    setCount(initialCount);
  };

  return [count, Increment, Decrement, Reset];
}

export default useCounter;
