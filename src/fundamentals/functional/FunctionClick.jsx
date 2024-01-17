import React from "react";

const FunctionClick = () => {
  const handleClick = () => {
    console.log("button is clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default FunctionClick;
