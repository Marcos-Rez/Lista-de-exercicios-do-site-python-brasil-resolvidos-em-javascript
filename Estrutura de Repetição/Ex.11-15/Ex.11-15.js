/*
    Estrutura de Repetição
    Exercícios de 11 á 15
    https://wiki.python.org.br/EstruturaDeRepeticao
*/


/*  10 - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
    11 - Altere o programa anterior para mostrar no final a soma dos números.
*/

const Ex11num1 = parseInt(prompt("Informe o primeiro número: "));
const Ex11num2 = parseInt(prompt("Informe o segundo número: "));
var Ex11soma = 0;
for(let i = (Ex11num1 +1); i < (Ex11num2); i++){
    alert(i);
    Ex11soma += i;
}
alert(`A soma é ${Ex11soma}`);

/*
    12 - Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre
    1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser 
    conforme o exemplo abaixo:

    Tabuada de 5:
    5 X 1 = 5
    5 X 2 = 10
    ...
    5 X 10 = 50    
*/

var Ex12taboada = parseInt(prompt("Informe o valor da taboada entre 1 e 10: "));
var arr = [];
while(Ex12taboada <= 0 || Ex12taboada > 10 || isNaN(Ex12taboada)){
    Ex12taboada = parseInt(prompt("Erro! Valor invalido. Informe o valor da taboada entre 1 e 10: "));
}
for(let i = 1; i < 11; i++){
   arr.push((`${Ex12taboada} x ${i} = ${Ex12taboada * i}.\n`));
}
let arr2 = arr.join("");
alert(arr2);

/*
    13 - Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número
    elevado ao segundo número. Não utilize a função de potência da linguagem.
*/

const base = parseInt(prompt("Inforne o valor da base: "));
const expoente = parseInt(prompt("Informe o valor do expoente: "));
//var Ex13_resultado = Math.pow(base, expoente);
//var Ex13_resultado = base ** expoente;
var Ex13_resultado = base;
for(let i = 1; i < expoente; i++){
    Ex13_resultado *= base;
}
alert(Ex13_resultado);


/*
    14 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números
    pares e a quantidade de números impares.
*/

var Ex14numeroInteiro;
var Ex14arrayPar = [];
var Ex14arrayImpar = [];
for(let i = 1; i <= 10; i++){
    Ex14numeroInteiro = parseInt(prompt(`Informe o ${i}º número: `));
    if(Ex14numeroInteiro % 2 == 0){
        Ex14arrayPar.push(Ex14numeroInteiro);
    }
    if(Ex14numeroInteiro % 2 != 0){
        Ex14arrayImpar.push(Ex14numeroInteiro);
    }
}
let Ex14par = Ex14arrayPar.length;
let Ex14impar = Ex14arrayImpar.length;

alert(`Os números pares são ${Ex14arrayPar}, total -> ${Ex14par}. Os números impares são ${Ex14arrayImpar}, total ${Ex14impar}.`);


/*
    15 - A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,...
    Faça um programa capaz de gerar a série até o n−ésimo termo. 
*/

var n = parseInt(prompt("A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,...\nEscolha a quantidade determos da sequência o n−ésimo termo: ")); 
var f = 1;
var n1 = 0;
var n2;
var Ex15_array = [];
var Ex15_resposta;
for(let i = 1; i <= n; i++){
    
    f += n1;
    n2 = f - n1;
    n1 = n2;
    Ex15_array.push(f)
    Ex15_resposta =  Ex15_array.join(" -> ");
    
}
//console.log("Final: ",f);
alert(`O enesimo termo da sequencia de ${n} números é ${f} -> ${Ex15_resposta}`);

