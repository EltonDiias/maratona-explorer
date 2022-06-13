// variaveis?
// dados de entrada?
// dados de saida?
// const random = Math.floor(Math.random() * months.length);

const respostaElement = document.querySelector('#resposta')
const botaoPergunta = document.querySelector('#btnPerguntar')
const respostas = [
  'Talvez.',
  'Sim!',
  'Muito provavelmente...',
  'Quem sabe?',
  'As chances são grandes.',
  'Temo que não.',
  'Não entendi sua pergunta.',
  'Não!',
  'Provavelmente não!',
  'Desculpe. Não consigo pensar em uma resposta para isso.',
  'Provavelmente sim.',
  'A meu ver, sim.',
  'Não posso te contar.',
  'Não consigo responder com precisão...'
]

// clicar em fazer pergunta

function responder() {
  const pergunta = document.getElementsByTagName('input')[0].value
  if (pergunta == '') {
    alert('Digite sua pergunta!')
    return
  }
  botaoPergunta.setAttribute('disabled', true)

  // calculando o numero aleatorio
  const numeroAleatorio = Math.floor(Math.random() * respostas.length)
  // escrevendo a pergunta e a resposta no site
  respostaElement.innerHTML =
    '<div>' + pergunta + '</div>' + respostas[numeroAleatorio]

  // definindo a opacity para 1 novamente
  respostaElement.style.opacity = 1

  //sumir a resposta depois de 3 segundos
  setTimeout(function () {
    respostaElement.style.opacity = 0
    botaoPergunta.removeAttribute('disabled')
  }, 3000)
}
