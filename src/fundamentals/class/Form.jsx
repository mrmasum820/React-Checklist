import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topics: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`);
  };

  render() {
    const { username, comments, topics } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <br />

          <div>
            <label>Comments</label>
            <textarea
              cols="20"
              rows="5"
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <br />

          <div>
            <label>Topics</label>
            <select value={topics} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
