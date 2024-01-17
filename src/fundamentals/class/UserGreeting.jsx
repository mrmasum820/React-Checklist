import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <h2>Welcome MR Masum</h2>;

    // return this.state.isLoggedIn ? (
    //   <h2>Welcome MR Masum</h2>
    // ) : (
    //   <h2>Welcome Guest</h2>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h2>Welcome MR Masum</h2>;
    // } else {
    //   message = <h2>Welcome Guest</h2>;
    // }
    // return message;

    // if (this.state.isLoggedIn) {
    //   return <h2>Welcome MR Masum</h2>;
    // } else {
    //   return <h2>Welcome Guest</h2>;
    // }
  }
}

export default UserGreeting;
