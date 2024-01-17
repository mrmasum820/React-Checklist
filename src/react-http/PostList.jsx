import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errMsg: "Error retreiving data" });
      });
  }

  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        <h2>List of posts</h2>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errMsg ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
