/*
    EstruturaDeDecisao
    Exercícios de 11 a 15.
*/



/* 11 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver
        o programa que calculará os reajustes.

    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salarioBruto = parseFloat(prompt("Informe o salário: "));

var percentualDeAumento;
var valorDoAumento;
var novoSalario;

function calculaReajustes(salarioBruto, percentualDeAumento){
    
    valorDoAumento = (percentualDeAumento * salarioBruto);
    novoSalario = salarioBruto + valorDoAumento;
    //console.log(`Salário bruto R$${salarioBruto}.\nO percentual de aumento aplicado ${percentualDeAumento * 100}%.\nO valor do aumento ${valorDoAumento}.\nO novo salário, após o aumento R$${novoSalario}.`);
    alert(`Salário bruto R$${salarioBruto}.\nO percentual de aumento aplicado ${percentualDeAumento * 100}%.\nO valor do aumento ${valorDoAumento}.\nO novo salário, após o aumento R$${novoSalario}.`);
}

if(salarioBruto <= 280){
    
    percentualDeAumento = 0.2;
    calculaReajustes(salarioBruto, percentualDeAumento);
}else if(salarioBruto > 280 && salarioBruto <= 700){
    
    percentualDeAumento = 0.15;
    calculaReajustes(salarioBruto, percentualDeAumento);
}else if(salarioBruto > 700 && salarioBruto <= 1500){
    
    percentualDeAumento = 0.1;
    calculaReajustes(salarioBruto, percentualDeAumento);
}else{
    
    percentualDeAumento = 0.05;
    calculaReajustes(salarioBruto, percentualDeAumento);
}



/*
    12 - Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto
    de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS
    corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido
    corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora
    e a quantidade de horas trabalhadas no mês.

    Desconto do IR:
    Salário Bruto até 900 (inclusive) - isento
    Salário Bruto até 1500 (inclusive) - desconto de 5%
    Salário Bruto até 2500 (inclusive) - desconto de 10%
    Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo.
    No exemplo o valor da hora é 5 e a quantidade de hora é 220.

            Salário Bruto: (5 * 220)        : R$ 1100,00
            (-) IR (5%)                     : R$   55,00  
            (-) INSS ( 10%)                 : R$  110,00
            FGTS (11%)                      : R$  121,00
            Total de descontos              : R$  165,00
            Salário Liquido                 : R$  935,00
*/

const valorHoraTrabalho = parseFloat(prompt("Informe o valor da hora de trabalho: "));
const horasTrabalhadasMes = parseFloat(prompt("Informe a quantidade de horas trabalhadas no mês: "));
//const valorHoraTrabalho = 9;
//const horasTrabalhadasMes  = 111.12;  
const salarioBruto2 = valorHoraTrabalho * horasTrabalhadasMes;
const sindicato = (0.03 * salarioBruto2);
const FGTS = (0.11 * salarioBruto2);
const INSS = (0.1 * salarioBruto2);
var totalDeDescontos;
var IR;
var descontoIR;
var salarioLiquido;


function calculoDeFolha(salarioBruto2, sindicato, FGTS, INSS, IR){
    IR = IR;
    descontoIR = (IR * salarioBruto2);
    descontoIR = parseFloat(descontoIR.toFixed(2));
    sindicato = parseFloat(sindicato.toFixed(2));
    FGTS = parseFloat(FGTS.toFixed(2));
    INSS = parseFloat(INSS.toFixed(2));
    totalDeDescontos = (sindicato + INSS + IR);
    salarioLiquido = salarioBruto2 - totalDeDescontos;
    salarioLiquido = parseFloat(salarioLiquido.toFixed(2));

    //console.log(`Salário Bruto:     : R$${salarioBruto}\n(-) IR (${IR*100}%)        : R$${descontoIR}\n(-) INSS (10%)     : R$${INSS}\nFGTS (11%)         : R$${FGTS}\nSindicato (3%)     : R$${sindicato}\nTotal de descontos : R$${totalDeDescontos}\nSalário Liquido    : R$${salarioLiquido}`);
    alert(`Salário Bruto:     : R$${salarioBruto2}\n(-) IR (${IR*100}%)        : R$${descontoIR}\n(-) INSS (10%)     : R$${INSS}\nFGTS (11%)         : R$${FGTS}\n(-) Sindicato (3%)  : R$${sindicato}\nTotal de descontos : R$${totalDeDescontos}\nSalário Liquido    : R$${salarioLiquido}`);

}

if(salarioBruto2 <= 900){
    IR = 0;
    calculoDeFolha(salarioBruto2, sindicato, FGTS, INSS, IR);
}else if(salarioBruto2 <= 1500){
    IR = 0.05;
    calculoDeFolha(salarioBruto2, sindicato, FGTS, INSS, IR);
}else if(salarioBruto2 <= 2500){
    IR = 0.1;
    calculoDeFolha(salarioBruto2, sindicato, FGTS, INSS, IR);
}else{
    IR = 0.2;
    calculoDeFolha(salarioBruto2, sindicato, FGTS, INSS, IR);
}



// 13 - Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.)
// , se digitar outro valor deve aparecer valor inválido.

const dia = parseInt(prompt("Informe o numero da semana: "));
switch(dia){
    case 1:
        alert("1 - Domingo.");
        break;
    case 2:
        alert("2 - Segunda.");
        break;
    case 3:
        alert("3 - Terça.");
        break;
    case 4:
        alert("4 - Quarta.");
        break;
    case 5:
        alert("5 - Quinta.");
        break;
    case 6:
        alert("6 - Sexta.");
        break;
    case 7:
        alert("7 - Sábado.");
        break;
    default:
        alert("Valor invalido.");
        break;
}


/* 14 - Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

      Média de Aproveitamento  Conceito
      Entre 9.0 e 10.0        A
      Entre 7.5 e 9.0         B
      Entre 6.0 e 7.5         C
      Entre 4.0 e 6.0         D
      Entre 4.0 e zero        E

    O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

var nota1 = 3.9;
var nota2 = 3.9;
var media = (nota1 + nota2) / 2;
var conceito;
var mensagemSaida;

if(media > 9){
    conceito = "A";
    mensagemSaida = "APROVADO";
}else if(media >= 7.5){
    conceito = "B";
    mensagemSaida = "APROVADO";

}else if(media >= 6){
    conceito = "C";
    mensagemSaida = "APROVADO";
}else if(media >= 4){
    conceito = "D";
    mensagemSaida = "REROVADO";
}
else{
    conceito = "E";
    mensagemSaida = "REROVADO";
}
alert(`Primeira nota ${nota1}. Segunda nota ${nota2}. Média ${media}. Conceito ${conceito}. Situação: ${mensagemSaida}.`);


/*  15 - Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo.
    Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

    Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
    Triângulo Equilátero: três lados iguais;
    Triângulo Isósceles: quaisquer dois lados iguais;
    Triângulo Escaleno: três lados diferentes; 
*/

const a = parseFloat(prompt("Informe o lado 1 'base': "));

const b = parseFloat(prompt("Informe o lado 2: "));
const c = parseFloat(prompt("Informe o lado 3: "));
var trianguloResposta;
if((b + c > a) && ((a + c > b) && (a + b) > c)){
    if( a == b && b == c){
        trianguloResposta = "Triângulo Equilátero";
    }else if((a == b) || (a == c) || (c == b)){
        trianguloResposta = "Triângulo Isósceles";
    }else{
        trianguloResposta = "Triângulo Escaleno";
    }
}else{
    trianguloResposta = "Os valores não podem formar um triângulo."
}
alert(trianguloResposta);