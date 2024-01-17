import React, { useContext } from "react";
import { CounterContext } from "../../App";

const ComponentD = () => {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      ComponentD - {counterContext.counterValue}
      <button onClick={() => counterContext.counterDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => counterContext.counterDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => counterContext.counterDispatch("reset")}>
        reset
      </button>
    </div>
  );
};

export default ComponentD;
