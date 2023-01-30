/*
    Estrutura de Repetição
    Exercícios de 26 a 30
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

/*
    26 - Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/


var numeroTotalEleitores = parseInt(prompt("Informe o número total de eleitores: "));
var encerrarAeleicao = 'n';
var goku = 0;
var vegeta = 0;
var satan = 0;
var emBranco = 0;
var nulo = 0;
var Ex26somaDeVotos = 0;

while((!isNaN(encerrarAeleicao) || encerrarAeleicao != "s" || encerrarAeleicao != "S") && Ex26somaDeVotos < numeroTotalEleitores){
    var voto = parseInt(prompt("Vote no seu candidato preferido: [1 - Goku] [2 - Vegeta] [3 - Mr Satan] [4 - Em branco] [5 - Nulo]: "));
    while(voto < 1 || voto > 5 || isNaN(voto)){
        voto = parseInt(prompt("Vote no seu candidato preferido: [1 - Goku] [2 - Vegeta] [3 - Mr Satan] [4 - Em branco] [5 - Nulo]: "));
    }

    if(voto == 1){
        goku++;
    }else if(voto == 2){
        vegeta++;
    }else if(voto == 3){
        satan++;
    }else if(voto == 4){
        emBranco++;
    }else if(voto == 5){
        nulo++;
    }else{
        alert("Erro! Falha no sistema. Informe ao responsável pela secção");
    }

    Ex26somaDeVotos++;
    alert(Ex26somaDeVotos)
}
alert(`Goku ${goku}.\nVegeta ${vegeta}.\nSatan ${satan}.\nEm branco ${emBranco}.\nNulos ${nulo}.`)


/*
 27 - Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de
 turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.
*/
var quantidadeTurmas = parseInt(prompt("Informe o número de turmas: "));
while(isNaN(quantidadeTurmas)){
    quantidadeTurmas = parseInt(prompt("Informe o número de turmas: "));
}
var quantidadeDeAlunos;
var arr = [];
var media;
var soma = 0;
for(let i = 1; i <= quantidadeTurmas; i++){
    quantidadeDeAlunos = parseInt(prompt(`Informe o némero de alunos da turma ${i} até 40 alunos: `));
    while(quantidadeTurmas > 40 || isNaN(quantidadeDeAlunos)){
        quantidadeDeAlunos = parseInt(prompt(`Erro! Acima de 40 alunos. Informe o némero de alunos da turma ${i}: `));
    }

    soma += quantidadeDeAlunos;
    media = soma / quantidadeTurmas;

}alert(`A média de alunos por turma é: ${media.toFixed(2)} alunos.`);

/*
 28 - Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o
valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em
cada um.
*/

var Ex28soma = 0;
var Ex28media = 0;
const quantidadeDeCd = parseInt(prompt("Informe a quantidad de cd's: "));
for(let i = 1; i <= quantidadeDeCd; i++){
    var valorDoCd = parseFloat(prompt(`Informe o valor do ${i}º cd: `));

    Ex28soma += valorDoCd;
}
Ex28media = Ex28soma / quantidadeDeCd;
alert(`A soma do valor dos cd's: ${Ex28soma}.\nO valor médio gasto em cada um deles: ${Ex28media} `)


/*
 29 - O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto
 cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta.
 Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços.
 Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos,
 conforme o exemplo abaixo:

    Lojas Quase Dois - Tabela de preços
    1 - R$ 1.99
    2 - R$ 3.98
    ...
    50 - R$ 99.50
*/

var Ex29preco = 1.99;
var Ex29array = [];
for(let i = 1; i <= 50; i++){
    console.log(i+" - "+"R$ "+(i*Ex29preco));
    if(i >= 10){
        Ex29array.push(`${i} - R$ ${(i*Ex29preco).toFixed(2)}\n`);
    }else{
        Ex29array.push(`0${i} - R$ ${(i*Ex29preco).toFixed(2)}\n`);
    }
    
    
}
let Ex29arrayFinal = Ex29array.join("");

alert(Ex29arrayFinal)



/*
30 - O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso 
na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães,
a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:

    Preço do pão: R$ 0.18
    Panificadora Pão de Ontem - Tabela de preços
    1 - R$ 0.18
    2 - R$ 0.36
    ...
    50 - R$ 9.00
*/

const Ex30_preco = 0.18;
var Ex30_array = [];
var Ex30_resposta;
for(let i = 1; i <= 50; i++){
    console.log(`${i} - R$ ${(i * Ex30_preco).toFixed(2)}`);
    if(i >= 10){
        Ex30_array.push(`${i} - R$ ${(i * Ex30_preco).toFixed(2)}\n`);
    }else{
        Ex30_array.push(`0${i} - R$ ${(i * Ex30_preco).toFixed(2)}\n`);
    }
    
}
Ex30_resposta = Ex30_array.join("");
alert(Ex30_resposta)