import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";

import { MainTemplate } from "../../Templates/MainTemplate";
import { DefaultInput } from "../../components/DefaultInput";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { useRef } from "react";
import { useTaskContext } from "../../context/TaskContext/UseTaskContext";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakTimeInputRef.current?.value;
    const longBreakTime = longBreakTimeInputRef.current?.value;
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
        <Container>
          <p style={{ textAlign: "center" }}></p>
        </Container>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
            ></DefaultInput>
          </div>
          <div>
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
            ></DefaultInput>
          </div>
          <div>
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTimeBreakTime}
            ></DefaultInput>
          </div>
          <div>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
              color={"green"}
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
