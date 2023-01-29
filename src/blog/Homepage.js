import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { Link } from "react-router-dom";
export default function Index() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Posts(process.env.NODE_ENV === 'development' ?
       process.env.REACT_APP_DEV_MODE 
       : process.env.REACT_APP_PRO_MODE);
  }, []);
  async function Posts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {posts.length ? (
          <div>
            {posts.map((post, i) => {
              return (
                <Link key={i} to={`/blog/posts/${post._id}`}>
                  <Card  post={post} />
                </Link>
              );
            })}
          </div>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
}
