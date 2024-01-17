import React, { useState } from "react";

const Counter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => (count ? setCount(count - 1) : count)}>
        decrement
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount(initialCount)}>reset</button>
    </div>
  );
};

export default Counter;
