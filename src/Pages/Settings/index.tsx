import { Heading, Save, SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";

import { MainTemplate } from "../../Templates/MainTemplate";
import { DefaultInput } from "../../components/DefaultInput";
import { DefaultButton } from "../../components/DefaultButton";

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
        <Container>
          <p style={{ textAlign: "center" }}></p>
        </Container>
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput id="workTime" labelText="Foco"></DefaultInput>
          </div>
          <div>
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
            ></DefaultInput>
          </div>
          <div>
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
            ></DefaultInput>
          </div>
          <div>
            <DefaultButton icon={<SaveIcon />} aria-label='Salvar configurações'
            title='Salvar configurações' color={"green"}/>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
