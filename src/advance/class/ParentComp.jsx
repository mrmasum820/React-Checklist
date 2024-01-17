import React, { PureComponent, Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "MR Masum",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Something",
      });
    }, 2000);
  }

  render() {
    console.log(
      "===================== parent comp render ========================="
    );
    return (
      <div>
        <p>Parent component</p>
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
