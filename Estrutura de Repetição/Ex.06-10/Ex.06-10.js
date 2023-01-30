/*
    Estrutura De Repeticao
    Exercícios de 06 á 10.
    https://wiki.python.org.br/EstruturaDeRepeticao

*/

/*
    06 - Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois 
    modifique o programa para que ele mostre os números um ao lado do outro.

*/

var r = [];
for(var i = 1; i <= 20; i++){
    r.push(i);
    console.log(i);
};
let j = r.join("");
console.log(j);

//07 - Faça um programa que leia 5 números e informe o maior número.

var num;
var menor;
var maior;
var arr = [];
    for(i = 1; i <= 5; i++){
        num = parseFloat(prompt(`Informe o número${i}`));
        arr.push(num);
    }
    menor = Math.min.apply(null, arr);
    maior = Math.max.apply(null, arr);
    alert(`O maior número é ${maior}. O menor número é ${menor}.`);


//08 - Faça um programa que leia 5 números e informe a soma e a média dos números.

var soma = 0;
var media;
var arrayNumeros = [];
for(let i = 0; i < 5; i++){
    arrayNumeros.push(parseFloat(prompt(`Informe o número${i+1}: `)));
    soma += arrayNumeros[i];
    media = soma / (arrayNumeros.length);
}
 alert(`A soma é ${soma}. A média é ${media}`);

//09 - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
var numbers = [];
for(let i = 1; i <= 50; i++){
    if(i % 2 != 0){
       console.log(i)
       numbers.push(i);
     
    }
}
//console.log(numbers);
alert(numbers);

/* 10 - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no
 intervalo compreendido por eles.
*/
const numeroInteiro1 = parseInt(prompt("Informe o primeiro número inteiro: "));
const numeroInteiro2 = parseInt(prompt("informe o segundo número inteiro: "));
for(let i = (numeroInteiro1 + 1); i <= (numeroInteiro2 -1 ); i++){
    //console.log(i)
    alert(i);
}