alert('Boas vindas ao jogo do número secreto');
let numeroSecreto =15;
let chute =prompt('Escolha um número entre 1 e 20');
if(chute == numeroSecreto){
  alert('Isso ai!Você acertou o número secreto '+ numeroSecreto);
}else{
  alert('Você errou :(')
}