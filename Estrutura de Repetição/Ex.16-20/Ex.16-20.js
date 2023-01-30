/*
    Estrutura de Repetição
    Exercícios de 16 á 20
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

/*
    16 -A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere
    a série até que o valor seja maior que 500.
*/

var pos1 = 0;
var pos2;
var f = 1;

while(f < 500){
    f += pos1;
    pos2 = f - pos1;
    pos1 = pos2;
    console.log(" - ",f);
}
console.log(`Ultimo valor anterior a 500 -> ${pos1} Valor maior que 500 -> `,f);
//alert(`Ultimo valor anterior a 500 -> ${pos1} Valor maior que 500 -> `,f);

/*
    17 - Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. 
    Ex.: 5!=5.4.3.2.1=120
*/

    var numero = 5;
    var fat = 1;
    var array = [];
    array.push("O fatorial de "); 
    for (let i = numero; i >= 1; i--) {
        fat *= i;
        array.push((`${i}! x `))
    }
    array.push(" = ",fat);
    console.log(array.join(""));
    
/*
    18 - Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e
    a soma dos valores.
*/

var conjuntoN = [9, 150, -9, 20, 18, 45];
var maior = conjuntoN[0];
var menor = conjuntoN[0];
var soma = 0;
for(valor of conjuntoN){
    if(valor > maior){
        maior = valor;
    }
    if(valor < menor){
        menor = valor;
    }
    soma += valor;
}
console.log("O maior valor: "+maior);
console.log("O menor valor: "+menor);
console.log("A soma dos valores do conjunto é: "+soma);

// 19 - Altere o programa anterior para que ele aceite apenas números entre 0 e 1000;

var continuar = 's';
var Ex19array = [];
while(continuar == 's'){
    var Ex19numeros = parseFloat(prompt("Informe os valores entre 0 e 1000: "));
    if(Ex19numeros < 1000 && Ex19numeros > 0){
        Ex19array.push(Ex19numeros);
    }
while(Ex19numeros <= 0 || Ex19numeros >= 1000 || isNaN(Ex19numeros)){
    Ex19numeros = parseFloat(prompt("Erro! Valor invalido. Informe os valores entre 0 e 1000: "));
    if(Ex19numeros < 1000 && Ex19numeros > 0){
        Ex19array.push(Ex19numeros);
    }
}
    continuar = prompt("Continuar [s - sim] [n - não]");
    continuar = continuar[0];
    alert(continuar)
    while(continuar != 's' && continuar != 'n'){
        continuar = prompt("Continuar [s - sim] [n - não]");
        continuar = continuar[0];
    }
}

var Ex19maior = Ex19array[0];
var Ex19menor = Ex19array[0];
var Ex19soma = 0;
for(valor of Ex19array){
    if(valor > Ex19maior){
        Ex19maior = valor;
    }
    if(valor < Ex19menor){
        Ex19menor = valor;
    }
    Ex19soma += valor;
}
alert(`O maior valor foi ${Ex19maior}.\nO menor valor foi ${Ex19menor}.\nA soma dos valores foi ${Ex19soma}.`);


/*
    20 - Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes
    e limitando o fatorial a números inteiros positivos e menores que 16. 
*/

var ex20Continuar = 's';
while(ex20Continuar == 's'){
    var fatorial = parseInt(prompt("Informe um número inteiro positivo menor que 16: "));
    while(fatorial >= 16 || fatorial <= 0){
        fatorial = parseInt(prompt("Erro! Número invalido. Informe um número inteiro positivo menor que 16: "));
    }

    var ex20Resposta = 1;
    for(let i = 1; i <= fatorial; i++){
        ex20Resposta *= i;
    }
    alert(`O fatorial de ${fatorial} é ${ex20Resposta}.`);

    ex20Continuar = prompt("Deseja continuar [s - sim] [Qualquer outra tecla - não]");
    ex20Continuar = ex20Continuar[0].toLowerCase();
}


