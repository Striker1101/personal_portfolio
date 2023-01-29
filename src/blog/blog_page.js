import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostID from "./components/post";
import Comments from "./components/Comments";
import Box from "./components/Box";
export default function Blog_page() {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const postID = useParams().post;
  useEffect(() => {
    Post(
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_MODE
        : process.env.REACT_APP_PRO_MODE
    );
    Comments_get(
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_MODE
        : process.env.REACT_APP_PRO_MODE
    );
  }, []);
  async function Post(url) {
    fetch(`${url}/posts/${postID}`)
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }
  async function Comments_get(url) {
    fetch(`${url}/posts/${postID}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      {post._id ? (
        <>
          <PostID post={post} />
          <Box setComments={setComments} postID={postID} />
          {comments.length ? <Comments comments={comments} /> : ""}
        </>
      ) : (
        "loading"
      )}
    </div>
  );
}
