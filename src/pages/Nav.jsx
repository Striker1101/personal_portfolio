import React from "react";
import { NavStyled } from "../component/styles/Nav";
export default function Nav() {
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
      </ul>
    </NavStyled>
  );
}
