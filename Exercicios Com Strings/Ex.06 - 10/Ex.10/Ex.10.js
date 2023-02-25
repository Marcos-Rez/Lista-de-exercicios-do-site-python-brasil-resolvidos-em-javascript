/*
   Exercícios com String 
   Exercício 10
   https://wiki.python.org.br/ExerciciosComStrings
*/

/* 10 - Número por extenso. Escreva um programa que solicite ao usuário a digitação de um número até 99 e imprima-o na tela por extenso. */

var unidade =["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];

let numero = parseInt(prompt('Informe o número entre 1 e 99: '));
while(isNaN(numero) || numero > 99 || numero < 1){
    numero = parseInt(prompt('Informe o número entre 1 e 99: '));
}
numero = String(numero);
alert(typeof(numero))
let unid = numero[1];
let deze = numero[0];

 if(numero < 20){
    alert(unidade[numero])
}
else if(numero > 19 && unid > 0){
 
    alert(dezena[deze]+' e '+unidade[unid])
}else{
    alert(dezena[deze])
}
