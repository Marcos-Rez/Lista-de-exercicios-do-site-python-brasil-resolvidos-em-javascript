/*
    EstruturaDeDecisao
    Exercício 01 a 05.
    https://wiki.python.org.br/EstruturaDeDecisao
*/

// 01 - Faça um Programa que peça dois números e imprima o maior deles.
const numero1 = parseFloat(prompt("Informe o primeiro numero: "));
const numero2 = parseFloat(prompt("Informe o segundo numero: "));
var maior;
if(numero1 > numero2){
    maior = numero1;
}else{
    maior = numero2;
}console.log(`O maior numero é -> ${maior}.`);
alert(`O maior numero é -> ${maior}.`);

// 02 - Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const numero = parseFloat(prompt("Informe um numero: "));
var resultado; 
if(numero > 0){
    resultado = "número positivo."
}else if(numero < 0){
    resultado = "número negativo."
}else{
    resultado = "número neutro."
}alert(`${numero} é um ${resultado}`);
console.log(`${numero} é um ${resultado}`);

// 03 - Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
var caracter = prompt("Informe [F - Feminino] ou [M - Masculino]: ");
var msg;
caracter = caracter.toLowerCase();
if(caracter[0] == 'f') {
    msg = 'Sexo Femenino';
}else if(caracter[0] == 'm'){
    msg = 'Sexo Masculino';
}else{
    msg = 'Sexo invalido'
}
alert(msg)
console.log(msg);

// 04 - Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
var letra = prompt("Informe uma letra: ");
letra = letra.toLowerCase();
var mensagem;

    if(letra[0] == 'a' || letra == 'e' || letra[0] == 'i' || letra[0] == 'o' || letra[0] == 'u'){
        mensagem = "A letra digitada é vogal !";
        
    }else{
        mensagem = "A letra digitada é consoante !";

    };

alert(mensagem);
console.log(mensagem)

/*
    05 - Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez. 
*/

const nota1 = parseFloat(prompt("Informe a primeira nota: "));
const nota2 = parseFloat(prompt("Informe a segunda nota: "));
const media = (nota1 + nota2) / 2;
var msg;

if(media >= 7){
    msg = "Aprovado";
    if(media == 10){
        msg = msg + " com distinção"
    }
}else {
    msg = "Reprovado"
}
alert(msg)