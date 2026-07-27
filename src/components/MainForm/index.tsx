import { PlayCircleIcon } from "lucide-react";
import { Container } from "../Container";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";

export function MainForm() {
  return (
    <Container>
      <form className="form">
        <div className="formRow">
          <DefaultInput
            labelText="task"
            id="meuInput"
            type="text"
            placeholder="Digite algo"
          />
        </div>

        <div className="formRow">
          <label htmlFor="meuInput">Lorem ipsum dolor sit amet.</label>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} color="green" />
        </div>
      </form>
    </Container>
  );
}
