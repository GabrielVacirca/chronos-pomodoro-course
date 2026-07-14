// PascalCase
// Precisa começar com letra maiúscula
// Ex: HeaderHeading ou ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
       
          <CountDown />
        
      </Container>
    </>
  );
}
