import Card from "./components/Card";
import Loading from "./components/Loading";
import { Link } from "react-router-dom";
import Genre from "./components/Genre";
import { HomepageStyled, Line } from "./components/Styles/Homepage.styled";
export default function Index({ posts, setPosts }) {
  return (
    <HomepageStyled>
      <Line />
      <Genre setPosts={setPosts} />
      {posts.length ? (
        <main>
          {posts.map((post, i) => {
            return (
              <Link key={i} to={`/blog/posts/${post._id}`}>
                <Card post={post} />
              </Link>
            );
          })}
        </main>
      ) : (
        <Loading />
      )}
    </HomepageStyled>
  );
}
