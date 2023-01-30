/*
    https://wiki.python.org.br/EstruturaSequencial
    EstruturaSequencial
    Exercicio de 01 a 05
*/

//1-Faça um Programa que mostre a mensagem "Alo mundo" na tela.
console.log("Olo mundo!")
alert("Olo mundo!")

//2-Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
const numero = parseFloat(prompt("Informe um numero: "));
console.log(`O numero informado foi ${numero}.`);
alert(`O numero informado foi ${numero}.`)

//3-Faça um Programa que peça dois números e imprima a soma.
const numero1 = parseFloat(prompt("Informe o primeiro numero: "));
const numero2 = parseFloat(prompt("informe o segundo numero: "));
console.log(`A soma de ${numero1} + ${numero2} = ${numero1 + numero2}`);
alert(`A soma de ${numero1} + ${numero2} = ${numero1 + numero2}`);


//4-Faça um Programa que peça as 4 notas bimestrais e mostre a média.
var nota = 0;
for(let i = 1; i < 5; i++){
    nota += parseFloat(prompt(`Informe a ${i}º nota: `));
}console.log(`Soma de notas ${nota} a media é${nota / 4}`);
alert(`Soma de notas ${nota} a media é ${nota / 4}`);

//5-Faça um Programa que converta metros para centímetros.
const metro = parseFloat(prompt("Informe o tamanho em metros: "));
const centimetros = metro * 100;
console.log(`${metro}m equivale a ${centimetros}cm.`);
alert(`${metro}m equivale a ${centimetros}cm.`);
