/*
    EstruturaDeDecisao
    Exercícios de 21 a 25.

*/

/*
    21 - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois
informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 
reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a
quantidade de notas existentes na máquina.

    Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
    Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1. 
*/


const saque = parseFloat(prompt("Informe o  valor do saque: "));
//const saque = 576;

var soma;
var acumulador100 = 0;
var acumulador50 = 0;
var acumulador10 = 0;
var acumulador5 = 0;
var acumulador1 = 0;
var limite;

limite = (saque <= 600) && (saque >= 10) ? true : false;

function contadorDeNotas(saque, limite){
    soma = saque;
    if(limite){
        while(soma > 0){
            if(soma >= 100){
                soma -= 100;
                acumulador100++;
            }
            if((soma < 100 && soma >= 50)){
                soma -= 50
                acumulador50++;
            }
            if(soma < 50 && soma >= 10){
                soma -= 10;
                acumulador10++;
            }
            if(soma < 10 && soma >= 5){
                soma -= 5;
                acumulador5++;
            }
            if(soma < 5 && soma >= 1){
                soma -= 1;
                acumulador1++;
            }
        }
        alert(`Para sacar a quantia de R$${saque}.\n ${acumulador100} nota(s) de R$100,00. \n${acumulador50} nota(s) de R$50,00. \n${acumulador10} notas(s) de R$10,00. \n${acumulador5} nota(s) de R$5,00. \n${acumulador1} nota(s) de R$1,00.`);
    } else{
        alert(`Limite não permitido!`); 
    }
    //console.log(`Para sacar a quantia de ${saque}, ${acumulador100} nota(s) de R$100,00. ${acumulador50} nota(s) de R$50,00. ${acumulador10} notas(s) de R$10,00. ${acumulador5} nota(s) de R$5,00 ${acumulador1} nota(s) de R$1,00.`);
}

contadorDeNotas(saque, limite);




// 22 - Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o
// operador módulo (resto da divisão).

const numInteiroEx22 = parseInt(prompt("Informe um número inteiro: "));
let respostaEx22 = numInteiroEx22 % 2 == 0 ? "Par" : "Impar";
alert(`O número ${numInteiroEx22} é ${respostaEx22}`);


// 23 - Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma
// função de arredondamento.

var numeroInteiroEx23 = prompt("Informe um numero: ");
var ehDecimal;
if(numeroInteiroEx23[0] == "," || numeroInteiroEx23[0] == "."){
    numeroInteiroEx23 = '0' + numeroInteiroEx23;
}
for(n of numeroInteiroEx23){
    if(n == "," || n == "."){
        ehDecimal = true;
    }
}
if(ehDecimal){
    alert(`O núnero ${numeroInteiroEx23} é decimal.`);
}else{
    alert(`O núnero ${numeroInteiroEx23} não é decimal.`);
}


//24 - Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.
//     O resultado da operação deve ser acompanhado de uma frase que diga se o número é:

//     par ou ímpar;
//     positivo ou negativo;
//     inteiro ou decimal.

var numero1_Ex24 = prompt("Informe um numero: ");
var numero2_Ex24 = prompt("Informe outro numero: ");
const opcaoEx_24 = parseInt(prompt("Escolha uma operação. [1 - Soma] [2 - Subtração] [3 - Multiplicação] [4 - Divisão]: "));

var num1_Ex24;
var num2_Ex24;
var resultado_Ex24;
var positivoNegativo;
var parImpar;
var inteiro;
numero1_Ex24 = numero1_Ex24.split(",").join(".");
numero2_Ex24 = numero2_Ex24.split(",").join(".");

for(v of numero1_Ex24){
    if(v == "."){
        num1_Ex24 = parseFloat(numero1_Ex24);
        break;
    }else{
        num1_Ex24 = parseInt(numero1_Ex24);
        //Não pode ter break se tiver na primeira verificação sai do laço
    }
}

for(v of numero2_Ex24){
    if(v == "."){
        num2_Ex24 = parseFloat(numero2_Ex24);
        break;
    }else{
        num2_Ex24 = parseInt(numero2_Ex24);
        //Não pode ter break se tiver na primeira verificação sai do laço
    }
}

if(opcaoEx_24 == 1){
    resultado_Ex24 = num1_Ex24 + num2_Ex24;
}else if(opcaoEx_24 == 2){
    resultado_Ex24 = (num1_Ex24 - num2_Ex24);
}else if(opcaoEx_24 == 3){
    resultado_Ex24 = num1_Ex24 * num2_Ex24;
}else if(opcaoEx_24 == 4){
    resultado_Ex24 = num1_Ex24 / num2_Ex24;
}else{
    resultado_Ex24 = "Erro! Opção invalida.";
    
}

if(resultado_Ex24 != "Erro! Opção invalida."){
    if(resultado_Ex24 < 0){
        positivoNegativo = "negativo";
    }else{
        positivoNegativo = "positivo";
    }
    
    if(resultado_Ex24 % 2 == 0){
        parImpar = "par";
    }else{
        parImpar = "impar";
    }

    if(Number.isInteger(resultado_Ex24)){
        inteiroFracionado = "inteiro."
    }else{
        inteiroFracionado = "fracionado."
    }

    alert(`O resultado é ${resultado_Ex24}.\num número  ${positivoNegativo}, ${parImpar} e ${inteiroFracionado}.\n`)

}else{
    alert(resultado_Ex24)
}


/*
    25 - Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:

    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?"
    
    O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
    Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita",
    entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". 
*/

var array = ["Telefonou para a vítima?","Esteve no local do crime?", "Mora perto da vítima?","Devia para a vítima?", "Já trabalhou com a vítima?"];
var numRespostasSim = [];
var respostaDaPergunta;
for(i in array){
    respostaDaPergunta = prompt(`Responda [V - vedadeiro] ou [F - falso] ${array[i]} `);
    if(respostaDaPergunta[0] == "v" || respostaDaPergunta[0] == "V"){
        numRespostasSim.push(respostaDaPergunta);
    }
}

if(numRespostasSim.length >= 5){
    alert("Assassino!")
}else if(numRespostasSim.length >= 3){
    alert("Cúmplice!");
}else if(numRespostasSim.length == 2){
    alert("Suspeita!")
}else{
    alert("Inocente!")
}