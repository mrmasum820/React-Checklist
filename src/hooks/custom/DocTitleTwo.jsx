import React from "react";
import useDocTitle from "./useDocTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useDocTitle();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
};

export default DocTitleTwo;
