import Card from "./components/Card";
import Loading from "./components/Loading";
import { Link } from "react-router-dom";
export default function Index({ posts, setPosts }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <div>
        {posts.length ? (
          <div style={{
             display: "flex", 
             justifyContent: "center",
              gap: "5px",
              flexDirection:'column' }}>
            {posts.map((post, i) => {
              return (
                <Link key={i} to={`/blog/posts/${post._id}`}>
                  <Card post={post} />
                </Link>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
