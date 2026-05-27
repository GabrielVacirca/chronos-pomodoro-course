// PascalCase
// Precisa começar com letra maiúscula
// Ex: HeaderHeading ou ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Heading />
      <p>Esse é o meu primeiro componente React</p>
    </>
  );
}
