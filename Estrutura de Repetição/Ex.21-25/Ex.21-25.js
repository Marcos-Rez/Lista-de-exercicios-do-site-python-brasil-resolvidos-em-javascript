/*

    Estrutura de Repetição
    Exercicios de 21 a 25.
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

/*21 -  Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
 Um número primo é aquele que é divisível somente por ele mesmo e por 1.
*/

const numeroInteiro = parseInt(prompt("Informe um número inteiro: "));

var Ex21contador = 0;
var ehPrimo;
for(let i = 1; i <= 1000; i++){
    if(numeroInteiro % i == 0){
        Ex21contador ++;
    }
}
if(Ex21contador > 2){
    ehPrimo = 'não é';
}else{
    ehPrimo = "é";
}
alert(`O número ${numeroInteiro} ${ehPrimo} primo.`);

/*
 22 - Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, 
 por quais número ele é divisível.
*/

const Ex22numeroInteiro = parseInt(prompt("Informe um número inteiro: "));

var Ex22arrayDivisores = [];
var Ex22ehPrimo;

for(let i = 1; i <= 1000; i++){
    if(Ex22numeroInteiro % i == 0){
        Ex22arrayDivisores.push(i);
    }
}

if(Ex22arrayDivisores.length > 2){
    Ex22ehPrimo = 'não é';
}else{
    Ex22ehPrimo = "é";
}

alert(`O número ${Ex22numeroInteiro} ${Ex22ehPrimo} primo. Divisores ${Ex22arrayDivisores}`);


/*
    23 - Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido 
    pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar
    os números primos.
    Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.
 */

    

    //const n = parseInt(prompt("Informe o intervalo de números que deseja verificar: "));
    //const verificarAte = parseInt(prompt("Qual o limite de verificação: "))
    const n = 100;
    const verificarAte = 200;

    var acumulador = 0;
    var array = [];
    var controle = 1;
    
    for(let i = 1; i <= n; i++){
        for(let c = 1; c <= verificarAte; c++){
            if(i % c == 0){
                acumulador += 1;
            }

            if(c == verificarAte){
                acumulador = 0;
                controle = 0;
            }

            controle++;
            //console.log("controle: ",controle++);
            //console.log(i, acumulador)
            if(acumulador != 0 && acumulador < 3 && controle >= verificarAte){
                //console.log("dentro ",i);
                array.push(i);
            }
        } 

    }console.log(`Todos os primos entre um e ${n} -> ${array}.\n O limite escolido de verificação foi ${verificarAte}.`);

/*
    24 - Faça um programa que calcule o mostre a média aritmética de N notas.
*/

var Ex24continuar = "s";
var nota;
var soma = 0;
var Ex24acumulador=0;
var media = 0;
while(Ex24continuar == 's' || Ex24continuar == "S"){
    
    nota = prompt("Informe a nota: ");
    nota = parseFloat(nota);

    while((isNaN(nota)) || (nota > 10) || (nota < 0)){
        nota = parseFloat(prompt("Erro! Informe a nota: "));
    }
    soma += nota;
    Ex24acumulador++;
    Ex24continuar = prompt("Continuar [sim - s] [não - n]");
    Ex24continuar = Ex24continuar[0];
  
    media = soma / Ex24acumulador;
}
alert(`A média é ${media}`);


/*
    25 - Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a
média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem,
adulta ou idosa, conforme a média calculada. 
*/

var continuar = 's';
var idade;
var media = 0;
var soma = 0;
var Ex25contador=0;

while(continuar == "s" || continuar == "s" || !isNaN(continuar)){
    idade = parseInt(prompt("Informe a sua idade: "));
    while(isNaN(idade) || idade < 0){
        idade = parseInt(prompt("Erro!Idade menor que zero ou não é um número valido. Informe a sua idade: "));
    }
    
    

    continuar = prompt("Deseja continuar [s - sim] [n - não]: ");
    continuar = continuar[0];

    Ex25contador++;
    soma += idade;
    alert(soma)
    media = soma / Ex25contador;
   

}
alert(`A média das idades é ${idade}.`);