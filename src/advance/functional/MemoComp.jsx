import React from "react";

const MemoComp = ({ name }) => {
  console.log("Rendering memo component");
  return <div>Functional Memo {name}</div>;
};

export default MemoComp;
