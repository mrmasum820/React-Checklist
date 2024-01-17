import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  incrementFive() {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
