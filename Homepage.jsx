import Home from "./src/pages/Home";
import Nav from "./src/pages/Nav";
import Tools from "./src/pages/Tools";
import Projects from "./src/pages/Projects";
import Contact from "./src/pages/Contact";
import { Container } from "./src/component/styles/Container.styled";
export default function Homepage() {
  return (
    <div>
      <Nav />
      <Home />
      <Container>
        <Tools />
        <Projects />
      </Container>
      <Contact />
    </div>
  );
}
