/*
   Exercícios com funções 
   Exercício 08 a 09
   https://wiki.python.org.br/ExerciciosFuncoes
*/
/**
 * 08 - Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado. 
 */
function contadorDeDigitos(){
    let numero = prompt("Informe um numero inteiro");
    while(isNaN(numero)){
        numero = prompt("Informe um numero inteiro");
    }

    let tot = [];
    for(let i of numero){
       tot.push(i);
    }
    alert("O total de digitos é de "+tot.length)
}
contadorDeDigitos()

// 09 - Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721

function reverterNumero(){
    let arrNum = [];
    let numero = prompt("Informe um numero interiro: ");
    while(isNaN(numero)){
        numero = prompt("Informe um numero interiro: ");
    }

    for(let i = numero.length; i >= 0; i--){
        arrNum.push(numero[i]);
    }
    let num = arrNum.join('   ');
    alert(num)
}
reverterNumero()