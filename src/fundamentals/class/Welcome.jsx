import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome guest",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    // const {state1, state2} = this.state
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Welcome;

/**
 * <Welcome name="John" hName="Superman" />
 */
