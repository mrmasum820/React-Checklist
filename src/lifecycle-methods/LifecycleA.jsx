import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "MR Masum",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  // updating phrase
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  // handle button
  handleChange = () => {
    this.setState({
      name: "Something",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <p>Lifecycle A</p>
        <button onClick={this.handleChange}>change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
