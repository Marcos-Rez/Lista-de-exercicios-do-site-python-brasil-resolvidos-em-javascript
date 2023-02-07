/*
    Exercícios Com Listas 
    Exercício 01 a 05
    https://wiki.python.org.br/ExerciciosListas

*/
/* 01 - Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.*/
function leitorDeNumerosInteiros(){
    var arr = [];
    for(let i = 1; i < 6; i++){
        let num = parseInt(prompt(`Informe o ${i} número: `));
        while(num == "" || isNaN(num)){
            num = parseInt(prompt(`Informe o ${i} número: `));
        }
        arr.push(num)
    }
    alert(arr)
};
leitorDeNumerosInteiros();

/*2 - Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.*/
/*
function leitorDeNumerosReais(){
    var arrOrdemInversa = [];
    for(let i = 1; i <= 10; i++){
        let num = parseFloat(prompt(`Informe ${i}º número: `));
        while(num == "" || isNaN(num)){
            num = parseFloat(prompt(`Informe ${i}º número: `));
        }
        arrOrdemInversa.push(num);
    }
    alert(arrOrdemInversa.reverse());
}
leitorDeNumerosReais();
*/

/*3 - Faça um Programa que leia 4 notas, mostre as notas e a média na tela.*/

function mediaDe4_notas(){
    var arrNotas = [];
    for(let i = 1; i <= 4; i++){
        let nota = parseFloat(prompt(`Informe a ${i}º nota: `));
        while(nota < 0 || nota > 10 || nota == "" || isNaN(nota)){
            nota = parseFloat(prompt(`Informe a ${i}º nota: `));
        }
        arrNotas.unshift(nota);
    }
    let soma = arrNotas.reduce(function(acc, curr){
        return acc + curr;
    }, 0)
    var notas = arrNotas.join(",  ")
    alert(`Notas: ${notas}.\nMédia: ${soma.toFixed(2) / 4}`);
}
mediaDe4_notas();


/*4 - Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.*/
function filtraConsoantes(){
    var arrFrase = ["a", "b", "c", "d", "a", "f", "g", "h", "i", "j"];
    let count = 0;
    for(let caracter of arrFrase){
        if(!caracter.includes("a") && !caracter.includes("e") && !caracter.includes("i") && !caracter.includes("o") && !caracter.includes("u")){
            count++;
        }
    }
    return count;
}
alert("Número de consoantes: "+filtraConsoantes());


/*5 - Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.*/
function filtraParImpar(){
    let arrPar = [];
    let arrImpar = [];
    let arrNumeros = []
    for(let i = 0; i < 20; i++){
        let num = parseInt(prompt(`Informe o ${i+1}º número inteiro: `));
        while(num == "" || isNaN(num)){
            num = parseInt(prompt(`Informe o ${i+1}º número inteiro: `));
        }

        arrNumeros.push(num);
    }

    for(let num of arrNumeros){
        if(num % 2 == 0){
             arrPar.push(num);
        }else{
            arrImpar.push(num);
        }
    }
        alert(`Números: ${arrNumeros}\nPares: ${arrPar}\nImpares: ${arrImpar}`);
}
filtraParImpar();