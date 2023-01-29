import "./blog.css";
import BlogPage from "./blog_page";
import { Routes, Route } from "react-router-dom";
import Index from "./Homepage";
import Nav from "./Nav";
import Signup from "./signup";
import Login from "./login";
function App() {
  return (
    <div className="blog">
      <Nav />
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="posts/:post" element={<BlogPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
