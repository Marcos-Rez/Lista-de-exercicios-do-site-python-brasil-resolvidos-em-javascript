/*
    Estrutura De Decisao
    Exercicios de 06 a 10
*/

/*
// 06 - Faça um Programa que leia três números e mostre o maior deles.
const numero1 = parseFloat(prompt("Informe o primeiro numero: "));
const numero2 = parseFloat(prompt("Informe o segundo numero: "));
const numero3 = parseFloat(prompt("Informe o terceiro numero: "));

var maior = numero1;
if(maior < numero1) {
    maior = numero1;
}if(maior < numero2){
    maior = numero2;
}if(maior < numero3){
    maior = numero3;
}
alert(`O maior numero digitado foi ${maior}.`);

// 7 - Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
const produto1 = parseFloat(prompt("Informe o primeiro produto: "));
const produto2 = parseFloat(prompt("Informe o segundo produto: "));
const produto3 = parseFloat(prompt("Informe o terceiro produto: "));


var produtoMaisBarato = produto1;

if(produto2 < produtoMaisBarato){
    produtoMaisBarato = produto2;
}
if(produto3 < produtoMaisBarato){
    produtoMaisBarato = produto3;
}
//console.log(produtoMaisBarato)
alert(`O produto mais barato é ${produtoMaisBarato}.`);



// 8 - Faça um Programa que leia três números e mostre-os em ordem decrescente.
const num1 = 100;
const num2 = 180;
const num3 = 1010;

if(num1 > num2 && num2 > num3){
    alert(`A ordem crescente é ${num1} ${num2} ${num3}.`);
}
if(num1 > num2 && num1 > num3 && num2 < num3){
    alert(`A ordem crescente é ${num1} ${num3} ${num2}.`);
}
if(num1 < num2 && num1 > num3){
    alert(`A ordem crescente é ${num2} ${num1} ${num3}.`);
}
if(num2 > num3 && num3 > num1){
    alert(`A ordem crescente é ${num2} ${num3} ${num1}.`);
}
if(num3 > num2 &&  num3 > num1 & num1 > num2){
    alert(`A ordem crescente é ${num3} ${num1} ${num2}.`);
}
if(num3 > num2 && num2 > num1){
    alert(`A ordem crescente é ${num3} ${num2} ${num1}.`);
}


// 10 - Faça um Programa que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. 
var turno = prompt("Em que turno você estuda?  [M - matutino] ou [V - Vespertino] ou [N - Noturno]: ");

turno = turno.toLowerCase();
var msg;
if(turno[0] == 'm'){
    msg = 'Bom dia!'
}else if(turno[0] == 'v'){
    msg = 'Boa tarde!';
}else if(turno[0] == 'n'){
    msg = 'Boa Noite!';
}else{
    msg = 'Opção invalida!';
}
alert(msg);
//console.log(msg);

*/

