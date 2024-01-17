import React, { useContext } from "react";
import { CounterContext } from "../../App";

const ComponentA = () => {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      ComponentA - {counterContext.counterValue}
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

export default ComponentA;

/**
 * import { createContext, useReducer } from "react";
 */

/**
 * export const CounterContext = createContext();

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

const [counter, dispatch] = useReducer(reducer, initialState);

<CounterContext.Provider
        value={{ counterValue: counter, counterDispatch: dispatch }}
      >
        Counter: {counter}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
 */
