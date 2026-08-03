import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { useRef, useState } from "react";
import { useTaskContext } from "../../context/TaskContext/UseTaskContext";
import type { TaskModel } from "../../models/TaskModel";

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

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
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60; // Calcula o tempo restante em segundos com base na duração da tarefa

    setState((prevState) => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: 1,
      secondsRemaining,
      formattedSecondsRemaining: "00:00",
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

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
