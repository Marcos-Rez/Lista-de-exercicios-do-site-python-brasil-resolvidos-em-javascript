/*
    Exercícios Com Listas 
    Exercício 06 a 10
    https://wiki.python.org.br/ExerciciosListas

*/

/* 06 -Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.*/

function cadastroAlunos(){
    var medias = [];
    var soma = 0;
    var media = 0;
    var nota;

    for(let i = 1; i <= 10; i++){
        for(let a = 1; a <= 4; a++){
            nota = parseFloat(prompt(`Informe a ${a}º nota: `));
            while(0 > nota || nota > 10 || isNaN(nota)){
                nota = parseFloat(prompt(`Informe a ${a}º nota: `));
            }
            soma += nota;
            media = soma / 4;
        }

        medias.push(media);
        soma = 0;
        media = 0;
    }
    var mediasMaiorQue7 = medias.filter((media) => {
        return media >= 7;
    })
    let m = mediasMaiorQue7.join(", ");
    alert(`As médias maiores que 7 foram: ${m}`);
}
cadastroAlunos();


/*7 - Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números. */

var numerosInteiros = [7, 8, 9, 1, 4];

var soma = numerosInteiros.reduce((acc, curr) => {
    return acc + curr;
}, 0);
var multiplicacao = numerosInteiros.reduce((acc, curr) => {
    return acc * curr;
})
alert(`Números inteiros: ${numerosInteiros}\nSoma: ${soma}\nMultiplicação: ${multiplicacao}`);

/* 8 - Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida. */


function ordenInversa(){
    var arrIdade = [];
    var arrAltura = [];
    for(let i = 1; i <= 5; i++){
        var idade = parseInt(prompt("Informe a sua idade: "));
        while(idade < 0 || idade > 150 ||isNaN(idade)){
            idade = parseInt(prompt("Informe a sua idade: "));
        }
        arrIdade.unshift(idade)
    }
    for(let a = 1; a <= 5; a++){
        var altura = parseFloat(prompt("Informe a sua altura: "));
        while(altura < 0 || altura == "" || isNaN(altura)){
            altura = parseFloat(prompt("Informe a sua altura: "));
        }
        arrAltura.unshift(altura);
    }
        
        var id = arrIdade.join(", ");
        var al = arrAltura.join(", ");
        alert(`Idade e a altura na ordem inversa a ordem lida.\nIdades: ${id}\nAltura: ${al}`);
}
ordenInversa();

/* 9 - Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var somaDosQuadrados = arr.reduce((acc, arr) => {
    return acc + (arr * arr);
}, 0);
alert(`A soma dos quadrados dos elementos do vetor: ${arr} -> ${somaDosQuadrados}`);


/*
 10 - Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. 
*/

function intercalandoVetores(){
    var vetorA = [1, 3, 5, 7, 9, 11, 13, 15, 17, 21];
    var vetorB = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    var vetorA_B = [];
    for(let i = 0; i < 10; i++){
        vetorA_B.push(vetorA[i]);
        vetorA_B.push(vetorB[i]);
    }
    alert(`Vetor A: ${vetorA}\nVetor B: ${vetorB}\nVetor A_B: ${vetorA_B}`)
}
intercalandoVetores();