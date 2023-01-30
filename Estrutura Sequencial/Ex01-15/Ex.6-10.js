/*
    https://wiki.python.org.br/EstruturaSequencial
    EstruturaSequencial
    Exercicio de 06 a 10
*/

//6-Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
const raio = parseFloat(prompt("Informe o raio do circulo: "));
const area = 3.14 * (raio ** 2);
alert(`A area do circulo de raio ${raio} é ${area}.`);
console.log(`A area do circulo de raio ${raio} é ${area}.`);

//7-Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const lado = parseFloat(prompt("Informe o tamanho do lado do quadrado: "));
const areaQuadrado = lado ** 2;
const dobroAreaQuadrado = areaQuadrado * 2;
alert(`A area de um quadrado de lado ${lado} é ${areaQuadrado} um quadrado duas vezes maior tem o tamanhode ${dobroAreaQuadrado}.`);
console.log((`A area de um quadrado de lado ${lado} é ${areaQuadrado}. Um quadrado duas vezes maior tem o tamanho de ${dobroAreaQuadrado}.`));

//8-Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const ValorDahoraDeTrabalho = parseFloat(prompt(`Quanto você ganha por hora de trabalho: `));
const horasTrabalhadas = parseFloat(prompt(`Quantas horas você trabalha por mês: `));
const salarioMensal = ValorDahoraDeTrabalho * horasTrabalhadas;
console.log(`Você trabalhou ${horasTrabalhadas}h neste mês. O valor da hora de trabalho foi ${ValorDahoraDeTrabalho}R$. Seu salário no final do mês sera de ${salarioMensal}R$.`);
alert(`Você trabalhou ${horasTrabalhadas}h neste mês. O valor da hora de trabalho foi ${ValorDahoraDeTrabalho}R$. Seu salário no final do mês sera de ${salarioMensal}R$.`);

//9-Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
const fahrenheit = parseFloat(prompt("Informe a temperatura em graus Fahrenheit: "));
const celsius =  (fahrenheit - 32) / 1.8000;
alert(`A temperatura em graus Fahrenheit de ${fahrenheit} em graus Celsius sera de ${celsius}.`);
console.log(`A temperatura em graus Fahrenheit de ${fahrenheit} em graus Celsius sera de ${celsius}.`);

//10-Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit. 
const celsius2 = parseFloat(prompt("Informe a temperatura em graus celsius: "));
const fahrenheit2 = celsius2 * 1.8000 + 32.00; 
alert(`A temperatura em graus celsius de ${celsius2} em graus fahrenheit sera de ${fahrenheit2}.`);
console.log(`A temperatura em graus celsius de ${celsius2} em graus fahrenheit sera de ${fahrenheit2}.`);

