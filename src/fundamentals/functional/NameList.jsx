import React from "react";

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];

  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}

      {nameList}
    </div>
  );
};

export default NameList;
