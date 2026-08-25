self.onmessage = function (event) {
  console.log('Worker RECEBEU:', event.data);

  switch(event.data){
    case 'FAVOR': {
      self.postMessage('Favor recebido!');
      break;
    }
    case 'INICIO': {
      self.postMessage('Início recebido!');
      break;
    }
    case 'PAUSA': {
      self.postMessage('Pausa recebida!');
      break;
    }
    default:
      self.postMessage('Mensagem desconhecida recebida: ' + event.data);
   
  }

}