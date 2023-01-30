/*

    EstruturaDeDecisao
    Exercícios de 16 a 20.

*/

/*
    16 - Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c.
     O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas
    seguintes situações:

    Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve
    fazer pedir os demais valores, sendo encerrado;
    Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
    Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
    Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário; 
*/


const a = parseFloat(prompt("Informe o valor de a: "));



function x1(a, b, delta){
    var x1 = (-b + (Math.sqrt(delta))) / (2 * a);
    return x1;
}

function x2(a, b, delta){
    var x2 = (-b - (Math.sqrt(delta))) / (2 * a);
    return x2;
}


if(a == 0){
    alert("valor de 'a' é igual a zero, a equação não é do segundo grau!");
}else{
    const b = parseFloat(prompt("Informe o valor de b: "));
    const c = parseFloat(prompt("Informe o valor de c: "));
    var delta = ((b)**2) -4 * (a) * (c);
    if(delta < 0){
        alert(`O delta calculado foi negativo. Delta = ${delta}, a equação não possui raizes reais.`);
        //console.log(`O delta calculado foi negativo. Delta = ${delta}, a equação não possui raizes reais .`);
    }else if(delta == 0){
        let x_2 = x2(a, b, delta);
        alert(`O delta calculado foi igual a zero a equação possui apenas uma raiz real. Raiz = ${x_2}`);
        //console.log(`O delta calculado foi igual a zero. A equação possui apenas uma raiz real. Raiz = ${x_2}`);
    }else{
        let x_1 = x1(a, b, delta);
        let x_2 = x2(a, b, delta);
        alert(`O delta calculado foi positivo. Delta = ${delta}, a equação possui duas raiz reais x1 = ${x_1} e x2 = ${x_2}.`);
        //console.log(`O delta calculado foi positivo. Delta = ${delta}, a equação possui duas raiz reais x1 = ${x_1} e x2 = ${x_2}.`);
    }
}


// 17 - Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

const ano = parseInt(prompt("Informe o ano: "));
const divisaoPor100 = ano / 100;
const divisaoPor400 = ano / 400;
var ehBissexto;
if((ano % 4 == 0) && (!Number.isInteger(divisaoPor100) || (Number.isInteger(divisaoPor400)))){
    ehBissexto = "sim";
}else{
    ehBissexto = "não";
}
alert(`O ano ${ano} é bissexto?   Resposta: ${ehBissexto}.`)

//console.log(`O ano ${ano} é bissexto?   Resposta: ${ehBissexto}.`)



// 18 - Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

var dataEhValida = prompt("Informe a data no formato dd/mm/aaaa: ");
dataEhValida = dataEhValida.split('/').join("");
var diaValido = parseInt(dataEhValida.substring(0, 2));
var mesValido = parseInt(dataEhValida.substring(2, 4));
var anoValido = parseInt(dataEhValida.substring(4, 6));

var valido = true;
var espaco = false;
for(d of dataEhValida){

    if((d != 0 ) && (d != 1) && (d != 2) && (d != 3) && (d != 4) && (d != 5) && (d != 6) && (d != 7) && (d != 8) && (d != 9)){
        valido = false
    }

    if(d == " "){
        espaco = true;
    }
}

if(valido && (dataEhValida.length == 8) && espaco == false){
    if((diaValido > 0 && diaValido <= 31) && (mesValido > 0 && mesValido <= 12) && (anoValido > 0)){
        //console.log("Data validada com sucesso!");
        alert(`Data validada com sucesso! ${dataEhValida}.`);
    }else{
        //console.log("Data invalida! Tente novamente! Formato dd/mm/aaaa -> 01/09/2000. ");
        alert("Data invalida! Tente novamente! Formato dd/mm/aaaa -> 01/09/2000. ");
    }
}else{
    //console.log("Data invalida! Tente novamente sem espaços e sem letras! Formato dd/mm/aaaa -> 01/09/2000. ");
    alert("Data invalida! Tente novamente sem espaços e sem letras! Formato dd/mm/aaaa -> 01/09/2000. ");
}


/* 19 - Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.

    Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
    326 = 3 centenas, 2 dezenas e 6 unidades
    12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16 
*/

const numerInteiro = prompt("Informe um numero inteiro: ");

console.log(numerInteiro.length);
if(numerInteiro.length >= 4 ){
    //console.log(`${numerInteiro} = ${numerInteiro[1]} centena(s), ${numerInteiro[2]} dezena(s) e ${numerInteiro[3]} unidade(s)`);
    alert(`${numerInteiro} = ${numerInteiro[1]} centena(s), ${numerInteiro[2]} dezena(s) e ${numerInteiro[3]} unidade(s)`);
}else if(numerInteiro.length >= 3 ){
    //console.log(`${numerInteiro} = ${numerInteiro[0]} centena(s), ${numerInteiro[1]} dezena(s) e ${numerInteiro[2]} unidades(s)`);
    alert(`${numerInteiro} = ${numerInteiro[0]} centena(s), ${numerInteiro[1]} dezena(s) e ${numerInteiro[2]} unidades(s)`);

}else if(numerInteiro.length >= 2 ){
    //console.log(`${numerInteiro} = ${numerInteiro[0]} dezena(s) e ${numerInteiro[1]} unidade(s)`);
    alert(`${numerInteiro} = ${numerInteiro[0]} dezena(s) e ${numerInteiro[1]} unidade(s)`);

}else{
    //console.log(`${numerInteiro} = ${numerInteiro[0]} unidade(s)`);
    alert(`${numerInteiro} = ${numerInteiro[0]} unidade(s)`);

}


/*
    20 - Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:

    A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
    A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
    A mensagem "Aprovado com Distinção", se a média for igual a 10.
*/

const notaParcial1 = parseFloat(prompt("Informe a primeira nota: "));
const notaParcial2 = parseFloat(prompt("Informe a segunda nota: "));
const notaParcial3 = parseFloat(prompt("Informe a terceira nota: "));

const media = (notaParcial1 + notaParcial2 + notaParcial3) / 3;

if(media == 10){
    alert("Aprovado com Distinção.");
}else if(media >= 7){
    alert("Aprovado.");
}else{
    alert("Reprovado");
}