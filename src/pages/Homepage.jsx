import Home from "./Home";
import Nav from "./Nav";
import Tools from "./Tools";
import Projects from "./Projects";
import { Container } from "../component/styles/Container.styled";
export default function Homepage() {
  return (
    <div>
      <Nav />
      <Home />
      <Container>
        <Tools />
        <Projects />
      </Container>
    </div>
  );
}
