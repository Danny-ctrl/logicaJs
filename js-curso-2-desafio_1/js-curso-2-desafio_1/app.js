let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do desafio';

function botaoClicado(){
  console.log("O botão foi clicado!")
}

function euAmoJS(){
  alert("Eu amo JS!")
}

function nomeCidade(){
  let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil')
  alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function numero(){
  let primeiroNumero = parseInt(prompt("Diga um número inteiro"))
  let segundoNumero = parseInt(prompt("Diga  mais um número inteiro"))
  let soma = primeiroNumero + segundoNumero;
  alert(`A soma dos números ${primeiroNumero} e ${segundoNumero} é ${soma}`)
}
