/*
    Estrutura de Repetição
    Exercícios de 31 a 35
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

/*
*/


/*
    31 - O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências.
Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores
referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra.
O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e
mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra.
A saída deve ser conforme o exemplo abaixo:

    Lojas Tabajara 
    Produto 1: R$ 2.20
    Produto 2: R$ 5.80
    Produto 3: R$ 0
    Total: R$ 9.00
    Dinheiro: R$ 20.00
    Troco: R$ 11.00
    ...
*/
//arr = ['a', 7.8, 'b', 5.6, 'c', 8.1, 'd', 3.10];
var arr = [];
continuar = 's';
while(continuar == 's' || continuar == "S" || !isNaN(continuar)){
     var nomeProduto = prompt("Informe o nome do produto: ");
     var valor = parseFloat(prompt('Informe o valor do produto: '));
     continuar = prompt("Continuar [s - sim] [n - não]: ");
     arr.push(nomeProduto)
     arr.push(valor)
} 



var resp = ['Lojas Tabajara\n'];
tot=0;

for(let i = 0; i < arr.length; i++ ){
    if(i % 2 == 0){
        //console.log(arr[i]+" ....... R$ "+arr[i+1]);
        resp.push(`${arr[i]} .............. R$ ${arr[i+1]}\n`)
    }else{
        tot += arr[i];
    }
}
//console.log("Total ... R$",tot)
resp.push(`Total ............................ R$${tot}`);
let respostaFinal = resp.join("");
alert(respostaFinal);

/*
 32 - Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
  Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:

    Fatorial de: 5
    5! =  5 . 4 . 3 . 2 . 1 = 120
*/

var fat = 5;
var Ex05resposta = 1;
var Ex31arr = [];
var Ex31respostaFinal;
for(let i = fat; i >= 1; i--){
    console.log(i)
    Ex05resposta *= i;
    if( i > 1){
        Ex31arr.push(`${i} x `)
    }else if(i == 1){
        Ex31arr.push(`${i} = ${Ex05resposta}`);
    }
}
Ex31respostaFinal = Ex31arr.join("");

console.log("5! -> ",Ex31respostaFinal);
alert("5! -> "+Ex31respostaFinal);


/*
33 - O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um
conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas,
bem como a média das temperaturas.
*/
var continuar;
var temperatura;
var Ex32array = [];
while(continuar == 's' || continuar == 'S' || isNaN(continuar)){
    temperatura = parseFloat(prompt("Informe a temperatura: "));
    continuar = prompt("Continuar [s - sim] [n - não]: ");
    continuar = continuar[0];

    Ex32array.push(temperatura);
    if(continuar == 'n' || continuar == 'N'){
        break;
    }
}
var Ex32soma = 0;
var Ex32media;

for(t of Ex32array){
    Ex32soma += t;
}alert(Ex32soma)

Ex32media = Ex32soma / (Ex32array.length);
let max = Math.max.apply(null, Ex32array);
let min = Math.min.apply(null, Ex32array)
alert(`Temperatura máxima: ${max}.\nTemperatura ${min}.\nTemperatura média ${Ex32media}`);


/*
    34 - Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia.
    Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça 
    um número inteiro e determine se ele é ou não um número primo.
*/
    const Ex34numero = 38;
    var Ex34acumulador = 0;
    var ehPrimo;
    for(let i = 1; i <= 1000; i++){
        if(Ex34numero % i == 0){
            Ex34acumulador++;
        }
    }

    if(Ex34acumulador <= 2){
        ehPrimo = 'é primo.'
    }else{
        ehPrimo = 'não é primo.'
    }
    
    //console.log(`O número ${Ex34numero} ${ehPrimo}`);
    alert(`O número ${Ex34numero} ${ehPrimo}`);
    
/*
    35 - Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos 
    números primos existentes entre 1 e um número inteiro informado pelo usuário. 
 */

    const Ex35limiteDeVerificacao = parseInt(prompt("Informe um número interiro limite para verificação de números primos: "));
    //const Ex35limiteDeVerificacao = 1000;
    var Ex35Controlador;
    var Ex35numeroDerestoZero;
    var ExArrPrimos = [];

    for(let i = 1; i < Ex35limiteDeVerificacao; i++){
        for(let l = 1; l <= 1000; l++){
            if(i % l == 0){
                Ex35numeroDerestoZero++;
            }
            
            if(Ex35numeroDerestoZero > 0 && Ex35numeroDerestoZero < 3 && l == 1000){
                ExArrPrimos.push(i);
            }

            if(l == 1000){
                Ex35numeroDerestoZero = 0;
            }
        }
    }

    //console.log("-",ExArrPrimos);
    alert(ExArrPrimos)
