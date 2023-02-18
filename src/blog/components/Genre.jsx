import React from "react";
import { GenreStyle } from "./Styles/Homepage.styled";
import { Button } from "../../component/styles/Button.styled";
export default function Genre() {
  return (
    <GenreStyle>
      <Button>Web Dev</Button>
      <Button>Responsive Design</Button>
    </GenreStyle>
  );
}
