let isRunning = false; // Variável para controlar o estado do worker

self.onmessage = function (event) {
  if (isRunning) return; // Se o worker já estiver em execução, não faz nada

  isRunning = true; // Marca o worker como em execução

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000; // Calcula o timestamp de término da tarefa
  const now = Date.now();

  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000); // Chama a função tick novamente após 1 segundo
  }

  tick(); // Chama a função tick imediatamente para enviar o primeiro valor
};
