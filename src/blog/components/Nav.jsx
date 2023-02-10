import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(undefined);
  function search() {
    setToggle(!toggle);
    if (text) {
      console.log(text);
    }
  }
  function handleText(e) {
    setText(e.target.value);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          {toggle && (
            <input
              style={{ borderRadius: "25px" }}
              type="text"
              name="search_text"
              id="search_text"
              onChange={handleText}
              value={text}
              placeholder="search by post title"
            />
          )}
          <input
            style={{
              position: "relative",
              left: "-13px ",
              borderRadius: "25px",
              border: "transparent",
              cursor: "pointer",
              padding:' 5px',
              transition: "ease-in-out all .2s",
            }}
            className="search"
            type="submit"
            value="Search"
            onClick={search}
          />
        </div>
        <Link to={"/"}>Home</Link>
        <Link to={"/blog"}>Blog Post</Link>
        <Link to={"/blog/sign-up"}>Sign up</Link>
        <Link to={"/blog/log-in"}>Login</Link>
      </div>
    </div>
  );
}
