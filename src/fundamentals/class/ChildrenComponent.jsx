import React, { Component } from "react";

class ChildrenComponent extends Component {
  render() {
    const { greetHandler } = this.props;
    return (
      <div>
        <button onClick={() => greetHandler("child component")}>
          greet parent
        </button>
      </div>
    );
  }
}

export default ChildrenComponent;
