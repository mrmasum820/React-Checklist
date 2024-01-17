import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            placeholder="userid"
            name="userId"
            value={userId}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="body"
            name="body"
            value={body}
            onChange={this.changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostForm;
