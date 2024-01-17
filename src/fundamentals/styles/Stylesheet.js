import React from "react";
import "./Stylesheet.css";

const Stylesheet = (props) => {
  const className = props.isActive ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  );
};

export default Stylesheet;

// <Stylesheet isActive={true} />
