let nome=prompt('Qual seu nome?')
alert(nome +' Bem vindo(a)!')
let dia = prompt(nome +' qual dia da semana é hoje?');
let sabado = 'sabado';
let domingo = 'domingo';

if (dia  == sabado ){
alert('Bom fim de semana');
}else if(dia==domingo){
  alert('Bom fim de semana');
}else{
  alert('Boa semana');
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