import React, { Component } from "react";

class ClassClick extends Component {
  handleClick() {
    console.log("button is clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click here</button>
      </div>
    );
  }
}

export default ClassClick;
