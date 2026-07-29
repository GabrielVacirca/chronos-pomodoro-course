import { PlayCircleIcon } from "lucide-react";
import { Container } from "../Container";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { HomeProps } from "../../Pages/Home"


export function MainForm({state}: HomeProps) {
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
          <label htmlFor="meuInput">Próximo intervalo é de {state.config.workTime}min</label>
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
