import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h2>Hello MR Masum</h2>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "divId", className: "dummyClass" },
    React.createElement("h1", null, "Hello MR Masum"),
    React.createElement("p", null, "I am using pure jsx here")
  );
};

export default Hello;
