import React from "react";
import Data from "../data";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Anchor } from "../component/styles/Anchor";
import { ProjectsStyled } from "../component/styles/Projects";
export default function Projects() {
  return (
    <ProjectsStyled id="portfolio">
      <div>
        <header>
          <h2>Here’s some stuff I made recently.</h2>
          <p>
            First two are collaboration with Devi Group, and the rest are
            presonal project
          </p>
        </header>
        <main>
          {Data.map((item, i) => {
            return (
              <Card key={i} variant="outlined" sx={{ width: 355 }}>
                <div></div>
                <CardMedia
                  component="img"
                  alt={item.src}
                  height="300"
                  image={item.src}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.header}
                  </Typography>
                  <Typography variant="body7" color="text.primary">
                    {item.tool}
                    <p>{item.des}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    {" "}
                    <a href={item.live_site}>Live Site</a>
                  </Button>
                  <Button size="small">
                    <a href={item.repo}>Github</a>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </main>
        <footer>
          <p>
            {" "}
            CLick to see more of my work on{" "}
            <a href="https://github.com/Striker1101">Github</a>
          </p>
          <Anchor>
            <a href="#contact">Get in touch with me</a>
          </Anchor>
        </footer>
      </div>
    </ProjectsStyled>
  );
}
