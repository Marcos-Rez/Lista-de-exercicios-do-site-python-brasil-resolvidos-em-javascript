/*
/*
   Exercícios com String 
   Exercício 2
   https://wiki.python.org.br/ExerciciosComStrings
*/

/*
 2 - Nome ao contrário em maiúsculas. Faça um programa que permita ao usuário digitar o seu nome e em seguida mostre o nome do usuário de trás para frente utilizando somente letras maiúsculas. Dica: lembre−se que ao informar o nome o usuário pode digitar letras maiúsculas ou minúsculas. 
*/

function nomesDeusuarios(){
    let nome = prompt('Informe seu nome: ');
    nome = nome.toLocaleUpperCase();
    let arrNomes = [];

    for(let i of nome){
        arrNomes.unshift(i);
    }
    let imprimir = arrNomes.join('');
    alert(imprimir)
}
nomesDeusuarios();
