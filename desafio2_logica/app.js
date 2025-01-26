let nome=prompt('Qual seu nome?')
alert(nome +' Bem vindo(a)!')
let dia = prompt(nome +' qual dia da semana é hoje?');
let sabado = 'sabado';
let domingo = 'domingo';

if (dia  == sabado ){
alert('Bom fim de semana '+ nome);
}else if(dia==domingo){
  alert('Bom fim de semana ' + nome);
}else{
  alert('Boa semana ' + nome);
}

let numeroDigitado = prompt('Digite um numero');
if(numeroDigitado >0){
  alert('Numero positivo');
}else if(numeroDigitado<0){
  alert('Numero negativo');
}
if(numeroDigitado==0){
  alert('o número é 0');
}