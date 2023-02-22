import React, { useState, useEffect } from "react";
import { GenreStyle } from "./Styles/Homepage.styled";
import { Button } from "../../component/styles/Button.styled";
export default function Genre({ setPosts }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE
      }/genre`
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genre));
  }, []);
  function handleClick(e) {
    const target = e.currentTarget;
    const id = target.getAttribute("data-id");
    fetch(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE
      }/genre/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.genre_Posts) setPosts(data.genre_Posts);
      });
  }
  return (
    <GenreStyle>
      {genres.map((genre, index) => {
        return (
          <Button onClick={handleClick} key={index} data-id={genre._id}>
            {genre.name}
          </Button>
        );
      })}
    </GenreStyle>
  );
}
