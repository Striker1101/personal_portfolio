import React, { useState } from "react";
import { NavStyled } from "./Styles/Nav.styled";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <NavStyled>
      <Link to={"/"}>Home</Link>
      <Link to={"/blog"}>Blog Post</Link>
      <Link to={"/blog/sign-up"}>Sign up</Link>
      <Link to={"/blog/log-in"}>Login</Link>
      <Link to={"/blog/search"}>Search</Link>
    </NavStyled>
  );
}
