import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.co/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingOne;
