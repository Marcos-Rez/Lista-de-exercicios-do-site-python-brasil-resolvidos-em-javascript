/*
	EstruturaSequencial
	Exercício de 11 a 15
	https://wiki.python.org.br/EstruturaSequencial
	
*/

// 11-Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
const numInteiro1 = parseFloat(prompt("Informe o primeiro número inteiro: "));
const numInteiro2 = parseFloat(prompt("Informe o segundo número inteiro: "));
const numReal = parseFloat(prompt("Informe um numero real: "));
// a) O produto do dobro do primeiro com metade do segundo.
const a = (numInteiro1 * 2) * (numInteiro2 / 2);
// b) A soma do triplo do primeiro com o terceiro.
const b = (numInteiro1  * 3) + numReal;
// c) O terceiro elevado ao cubo.
const c = numReal ** 3;
alert(`O produto do dobro do primeiro com metade do segundo é ${a}.`);
console.log(`O produto do dobro do primeiro com metade do segundo é ${a}.`);
alert(`A soma do triplo do primeiro com o terceiro é ${b}.`);
console.log(`A soma do triplo do primeiro com o terceiro é ${b}.`);
alert(`O terceiro elevado ao cubo é ${c}.`);
console.log(`O terceiro elevado ao cubo é ${c}.`);

// 12-Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const altura = parseFloat(prompt("Informe sua altura: "));
const pesoIdeal =  (72.7 * altura) - 58;
console.log(`O seu peso ideal é ${pesoIdeal}.`);
alert(`O seu peso ideal é ${pesoIdeal}.`)

// 13-Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
const h = parseFloat(prompt("Informe sua altura: "));
var sexo = prompt("Qual o seu sexo: [M] ou [F] ");
sexo = sexo.toLowerCase();
var pesoIdeal2 = 0;
// a) Para homens: (72.7*h) - 58
// b) Para mulheres: (62.1*h) - 44.7
if(sexo === 'm'){
     pesoIdeal2 = (72.7 * altura) - 58;
}else{
     pesoIdeal2 = (62.1*h) - 44.7;
}

console.log(`O seu peso ideal é ${pesoIdeal2}.`);
alert(`O seu peso ideal é ${pesoIdeal2}.`)

// 14 - João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz
// um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo
// excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a 
// quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
const peixePeso = parseFloat(prompt("Informe o peso em kilogramas: "));
var excesso = 0;
var multa = 0;
if(peixePeso > 50){
     excesso += peixePeso - 50;
     multa = 4 * excesso;
}
alert(`João Papo-de-Pescador pescou ${peixePeso}kg de peixe, excesso ${excesso}kg  multa R$ ${multa}.`);
console.log(`João Papo-de-Pescador pescou ${peixePeso}kg de peixe, excesso ${excesso}kg  multa R$ ${multa}.`);

/*
   15-Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule
// e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto 
// de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

    salário bruto.
    quanto pagou ao INSS.
    quanto pagou ao sindicato.
    o salário líquido.
    calcule os descontos e o salário líquido, conforme a tabela abaixo:

    + Salário Bruto : R$
    - IR (11%) : R$
    - INSS (8%) : R$
    - Sindicato ( 5%) : R$
    = Salário Liquido : R$

    Obs.: Salário Bruto - Descontos = Salário Líquido. 
*/

const valorHoraTrabalho = parseFloat(prompt("Informe quanto você ganha por hora: "));
const numerohorasTrabalhoMes = parseFloat(prompt('Informe o número de horas trabalhadas no mês: '));
const salarioBruto = valorHoraTrabalho * numerohorasTrabalhoMes;
const IR = (0.11 * salarioBruto);
const INSS = (0.08 * salarioBruto);
const sindicato = (0.05 * salarioBruto);
const descontos = (IR + INSS + sindicato);
const salarioLiquido = salarioBruto - descontos;
alert(`Salário bruto do mês R$ ${salarioBruto}.\nHoras trabalhadas ${numerohorasTrabalhoMes}h.\nImposto de renda R$ ${IR}.
INSS R$ ${INSS}.\nSindicato R$ ${sindicato}.\nTotal de descontos R$ ${descontos}.\n\nSalário liquido R$ ${salarioLiquido}.`);
