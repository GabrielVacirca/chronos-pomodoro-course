import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { useRef, useState } from "react";
import { useTaskContext } from "../../context/TaskContext/UseTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  // ciclos
  const nextCycle = getNextCycle(state.currentCycle); // Obtém o próximo ciclo com base no ciclo atual
  const nextCycleType = getNextCycleType(nextCycle); // Obtém o tipo do próximo ciclo com base no próximo ciclo
  const durationCycle = state.config[nextCycleType]; // Obtém a duração do próximo ciclo com base no tipo do próximo ciclo

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return; // Verifica se a referência do input é nula

    const taskName = taskNameInput.current.value.trim(); // Obtém o valor do input

    if (!taskName) {
      alert("Digite o nome da tarefa antes de enviar."); // Alerta se o campo estiver vazio
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

    const secondsRemaining = newTask.duration * 60; // Calcula o tempo restante em segundos com base na duração da tarefa

    setState((prevState) => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Formata o tempo restante em minutos e segundos
      tasks: [...prevState.tasks, newTask],
    }));
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
        />
      </div>

      <div className="formRow">
        <label htmlFor="meuInput">Próximo intervalo é de </label>
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
          />
        ) : (
          <DefaultButton
            aria-label="Pausar tarefa"
            title="Pausar tarefa"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
          />
        )}
      </div>
    </form>
  );
}
