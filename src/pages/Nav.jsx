import React from "react";
import { useNavigate } from "react-router-dom";
import { NavStyled, Button } from "../component/styles/Nav";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="#top">Top</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Button onClick={()=>{navigate("/blog")}} type="submit">Blog</Button>
        </li>
      </ul>
    </NavStyled>
  );
}
