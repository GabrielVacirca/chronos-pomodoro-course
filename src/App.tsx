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
      <Container>
        <form className="form">
          <div className="formRow">
            <label htmlFor="meuInput">task</label>
            <input id="meuInput" className="input" type="text"></input>
          </div>

          <div className="formRow">
            <label htmlFor="meuInput">Lorem ipsum dolor sit amet.</label>
            
          </div>

           <div className="formRow">
            <p>Lorem ipsum dolor sit.</p>
            <p>0 0 0 0 0 0</p>
          </div>

           <div className="formRow">
            <button>Enviar</button>
          </div>


        </form>
      </Container>
    </>
  );
}
