import React from "react";

const Greet = ({ name, children }) => {
  // console.log(props);
  // const { name, children } = props;
  return (
    <div>
      <h2>Hello, {name}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Greet;

/**
 * <Greet name="Bruce">
        <p>This is children props</p>
      </Greet>
      <Greet name="Diana">
        <button>action</button>
      </Greet>
 */
