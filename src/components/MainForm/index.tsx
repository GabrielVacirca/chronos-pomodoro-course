import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";

export function MainForm() {
  function handleCreateNewTask(
    event: React.SubmitEventHandler<HTMLFormElement>,
  ) {
    console.log("Enviado!");
    event.preventDefault();
  }
  return (
    <form onSubmit={handleCreateNewTask} className="form">
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
  );
}
