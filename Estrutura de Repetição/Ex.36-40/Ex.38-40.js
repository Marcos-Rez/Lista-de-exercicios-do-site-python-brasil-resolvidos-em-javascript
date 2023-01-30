/*Estrutura de Repetição
  Exercúcios de 38 a 40
  https://wiki.python.org.br/EstruturaDeRepeticao 
*/

/*
38 - Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:

    Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
    Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
    A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do
    ano anterior.
    Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o
    programa permitindo que o usuário digite o salário inicial do funcionário. 
*/

const salarioInicial = parseFloat(prompt("Informe o seu salario inicial em 1995: "));
//var salarioInicial = 1000;
var percentualDeAumento = 0.015;
var salario1996 = salarioInicial + (percentualDeAumento * salarioInicial);

var data = new Date();
var ano = data.getFullYear();
var salarioAtual = salario1996;

for(let i = 1997; i < 2023; i++){
    salarioAtual = (salarioAtual + ((percentualDeAumento *= 2) * salarioAtual));
    
}
//console.log(salarioAtual.toFixed(2));
alert(`O seu salario em ${ano} é R$ ${salarioAtual.toFixed(2)}.`)

/*
39 - Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e
o segundo representando a sua altura em centímetros. Encontre o aluno mais alto e o mais baixo.
Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.
*/

var cadastro = [[1010, 1.85], [1111, 1.55], [1212, 1.88], [1313, 1.73], [1414, 1.53], [1515, 1.89], [1616, 1.66], [1717, 1.72], [1818, 2.3], [1919, 1.51], [2020, 1.86]];
var numeroDoAlunoMaisAlto;
var numeroDoAlunoMaisBaixo;
var maiorAltura = cadastro[0][1];
var menorAltura  = cadastro[0][1];


for(i in cadastro){
    
    if(cadastro[i][1] > maiorAltura){
        maiorAltura = cadastro[i][1];
        numeroDoAlunoMaisAlto = cadastro[i][0]
        
    }
   
    if(cadastro[i][1] < menorAltura){
        menorAltura = cadastro[i][1]
        numeroDoAlunoMaisBaixo = cadastro[i][0];
       
    }
}
alert(`O aluno mais alto: ${numeroDoAlunoMaisAlto}, altura ${maiorAltura}.\nO aluno mais baixo: ${numeroDoAlunoMaisBaixo}, altura ${menorAltura}.`);

/*
40 - Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de
trânsito. Foram obtidos os seguintes dados:

    Código da cidade;
    Número de veículos de passeio (em 1999);
    Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
    Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
    Qual a média de veículos nas cinco cidades juntas;
    Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.
 */

    var estatistica = [[1010, 55895, 5452], [1111, 74410, 6745], [1212, 1120, 252], [1313, 89410, 10459], [1414 , 810, 120]];

    var indice = estatistica[0][2] / estatistica[0][1];
    var codigoMenorIndice;
    var codigoMaiorIndice;

    var maiorIndice = indice;
    var menorIndice = indice;

    var mediaDeVeiculos = 0;
    var soma = 0;
    var mediaDeAcidentesMenosDeDezMilHabitantes;

    var mediaAcidenteCidadeMenos2000;
    var somaMenos2000 = 0;
    var contador=0;
    for(i in estatistica){
        indice = estatistica[i][2] / estatistica[i][1];
        if(maiorIndice <= indice ){
            maiorIndice = indice;
            codigoMaiorIndice = estatistica[i][0];
        }

        if(menorIndice >= indice){
            menorIndice = indice;
            codigoMenorIndice = estatistica[i][0];
        }


        

        if(estatistica[i][1] < 2000){
            contador++;
            somaMenos2000 += estatistica[i][2];
        }

        soma += estatistica[i][1];
        console.log(soma)

        
    }
    mediaDeVeiculos = soma / (estatistica.length);
    mediaAcidenteCidadeMenos2000 = somaMenos2000 / contador;
    
    //alert(`O maior índice de acidentes de transito ${maiorIndice} pertence a cidade ${codigoMaiorIndice}.\nO menor índice de acidentes de transito ${menorIndice} pertence a cidade ${codigoMenorIndice}.\nA média de veículos nas cinco cidades juntas ${mediaDeVeiculos}.\nA média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio ${mediaAcidenteCidadeMenos2000}.`);
    console.log((`O maior índice de acidentes de transito ${maiorIndice} pertence a cidade ${codigoMaiorIndice}.\nO menor índice de acidentes de transito ${menorIndice} pertence a cidade ${codigoMenorIndice}.\nA média de veículos nas cinco cidades juntas ${mediaDeVeiculos}.\nA média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio ${mediaAcidenteCidadeMenos2000}.`))