import React from "react";
import { Anchor } from "../component/styles/Anchor";
import Pic from "../assets/images/dummy.jpeg";
import { Intro } from "../component/styles/Intro";
import { Flex } from "../component/styles/Flex.styled";
import { Container } from "../component/styles/Container.styled";
export default function Home() {
  return (
    <Intro id="top">
      <Container>
        <Flex>
          <div>
            <span>
              <img src={Pic} alt="profile" />
            </span>
          </div>
          <div>
            <header>
              <h1>
                Hi. I'm <strong>Odemilin Eromosele</strong>.
              </h1>
            </header>
            <p>
              Am a Full Stack Web Developer with over <strong>2</strong> years
              of hands in experience as a developer{" "}
            </p>
            <Anchor>
              <a href="#work">
                Learn about what I do
              </a>
            </Anchor>
          </div>
        </Flex>
      </Container>
    </Intro>
  );
}
