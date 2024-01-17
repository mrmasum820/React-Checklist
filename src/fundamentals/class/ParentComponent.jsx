import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent State",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(child) {
    alert(`Hello ${this.state.parentName} from ${child}`);
  }

  render() {
    return (
      <div>
        <ChildrenComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
