import React from "react";
import { Button } from "../component/styles/Button.styled";
import { SearchStyled } from "./components/Styles/Search";
export default function Search() {
  return (
    <SearchStyled>
      <input placeholder="Post tittle" type="text" name="search" id="search" />
      <Button> Search</Button>
    </SearchStyled>
  );
}
