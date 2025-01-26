alert('Boas vindas ao jogo do número secreto');
let numeroSecreto =15;
let chute ;
let tentativas = 1;

while(chute != numeroSecreto){
  chute=prompt('Escolha um número entre 1 e 20');

if(chute == numeroSecreto){
  alert('Isso ai!Você acertou o número secreto '+ numeroSecreto + ' com '+ tentativas +' tentativas.');
}else{
  if(numeroSecreto > chute){
alert('O número secreto é maior que '+ chute);
  }else{
    alert('O numero secreto é menor que '+ chute);
  }
  tentativas++;
}
}