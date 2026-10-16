import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { useRef } from "react";
import { useTaskContext } from "../../context/TaskContext/UseTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../context/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''; // Obtém o nome da última tarefa, se existir
  // ciclos
  const nextCycle = getNextCycle(state.currentCycle); // Obtém o próximo ciclo com base no ciclo atual
  const nextCycleType = getNextCycleType(nextCycle); // Obtém o tipo do próximo ciclo com base no próximo ciclo
  const durationCycle = state.config[nextCycleType]; // Obtém a duração do próximo ciclo com base no tipo do próximo ciclo

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss(); // Limpa mensagens anteriores

    if (taskNameInput.current === null) return; // Verifica se a referência do input é nula

    const taskName = taskNameInput.current.value.trim(); // Obtém o valor do input

    if (!taskName) {
      showMessage.warn("Digite o nome da tarefa antes de enviar."); // Alerta se o campo estiver vazio
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: durationCycle,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    showMessage.sucess(`Tarefa "${taskName}" iniciada com sucesso!`); // Mensagem de sucesso
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    showMessage.dismiss(); // Limpa mensagens anteriores
    showMessage.error("Tarefa interrompida."); // Mensagem de interrupção
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          ref={taskNameInput}
          defaultValue={lastTaskName} // Define o valor padrão como o nome da última tarefa
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            aria-label="Iniciar tarefa"
            title="Iniciar tarefa"
            type="submit"
            color="green"
            icon={<PlayCircleIcon />}
            key="botao_submit"
          />
        ) : (
          <DefaultButton
            aria-label="Pausar tarefa"
            title="Pausar tarefa"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="botao_interromper"
          />
        )}
      </div>
    </form>
  );
}
