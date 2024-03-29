import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Type your name" ref={this.inputRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default RefsDemo;
