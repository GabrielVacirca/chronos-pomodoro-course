// PascalCase
// Precisa começar com letra maiúscula
// Ex: HeaderHeading ou ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      <Container>
        <Heading>Logo</Heading>
      </Container>
    </>
  );
}
