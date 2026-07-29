import { PlayCircleIcon } from "lucide-react";
import { Container } from "../Container";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { useTaskContext } from "../../context/TaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        formattedSecondsRemaining: "21:00",
      };
    });
  }
  return (
    <Container>
      <form className="form">
        <button type="button" onClick={handleClick}></button>
        <div className="formRow">
          <DefaultInput
            labelText="task"
            id="meuInput"
            type="text"
            placeholder="Digite algo"
          />
        </div>

        <div className="formRow">
          <label htmlFor="meuInput">Próximo intervalo é de </label>
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
