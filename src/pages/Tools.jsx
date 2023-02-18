import React from "react";
import Skills from "../skills";
import { Line } from "../component/styles/Line.styled";
import { Anchor } from "../component/styles/Anchor";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SkillsStyled } from "../component/styles/Skills";
export default function Tools() {
  return (
    <SkillsStyled id="work">
      <div>
        <header>
          <h2>Here's all the stuff I do.</h2>
          <p>This is a list of all the tools i make use of for development</p>
        </header>
        <main>
          {Skills.map((skill, index) => {
            return (
              <Card
                key={index}
                variant="outlined"
                sx={{ width: 345, height: 250 }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {skill.header}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.items.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </main>
      </div>
      <Anchor>
        <a href="#portfolio">See some of my recent work</a>
      </Anchor>
      <Line width={95} />
    </SkillsStyled>
  );
}
