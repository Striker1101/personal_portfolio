import React, { useEffect, useState } from "react";
import BlogPage from "./blog_page";
import { Routes, Route } from "react-router-dom";
import Index from "./Homepage";
import Nav from "./components/Nav";
import Search from "./Search";
import { Container } from "../component/styles/Container.styled";
import Signup from "./signup";
import Login from "./login";
import Footer from "./components/Footer";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE
      }/`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <div className="blog">
      <Nav />
      <Routes>
        <Route
          index
          path="/"
          element={<Index posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="posts/:post"
          element={
            <Container>
              <BlogPage />
            </Container>
          }
        />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route
          path="/search"
          element={
            <Container>
              <Search />
            </Container>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
