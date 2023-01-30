/*Estrutura de Repetição
  Exercúcios de 36 a 37
  https://wiki.python.org.br/EstruturaDeRepeticao 
*/

/* 


/*
 36 - Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo
  usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e 
  final devem ser informados também pelo usuário, conforme exemplo abaixo:

    Montar a tabuada de: 5
    Começar por: 4
    Terminar em: 7

    Vou montar a tabuada de 5 começando em 4 e terminando em 7:
    5 X 4 = 20
    5 X 5 = 25
    5 X 6 = 30
    5 X 7 = 35

    Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.
*/

const tabuadaDe = parseInt(prompt("Montar a tabuada de: "));
const inicio = parseInt(prompt("Começar por: "));
const termino = parseInt(prompt("Terminar em: "));
var Ex36arr = [];
var Ex36resp;
Ex36arr.push(`Montando a tabuada de ${tabuadaDe}.\n`);
for(let i = inicio; i <= termino; i++){
    Ex36arr.push(`${tabuadaDe} x ${i} = ${tabuadaDe * i}\n`);
}
Ex36resp = Ex36arr.join("");
alert(Ex36resp);

/*
    37 - Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais
    baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um
    dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve ser
    dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve ser 
    informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, 
    além da média das alturas e dos pesos dos clientes
*/

var Ex37codigo;
var Ex37altura;
var Ex37peso;

var Ex37arr = [];

var obj = {
    codigo: 0,
    altura: 0,
    peso: 0
}

while(Ex37codigo != 0  || isNaN(Ex37codigo)){

    Ex37codigo = parseInt(prompt("Informe o seu código"));
    if(Ex37codigo == 0){
        break;
    }

    Ex37altura = parseFloat(prompt("Informe a sua altura: "));
    Ex37peso = parseFloat(prompt("Informe o seu peso: "));
   
    obj['codigo'] = Ex37codigo;
    obj['altura'] = Ex37altura;
    obj['peso'] = Ex37peso;
   
    Ex37arr.push(obj);

    //alert(Object.values(obj))

    var obj = {
        codigo: 0,
        altura: 0,
        peso: 0
    }
}

//alert(Object.values(Ex37arr[0]));
//alert(Object.values(Ex37arr[1]));
var maiorAltura = 0;
var codigoMaiorAltura;
var menorAltura;
var codigoMenorAltura;
var mediaAltura = 0;
var somaAltura = 0;

for(let o of Ex37arr){
    if(o.altura > maiorAltura){
        maiorAltura = o.altura;
        codigoMaiorAltura = o.codigo;
    }
    menorAltura = o.altura;
    if(o.altura <= menorAltura){
        menorAltura = o.altura;
        codigoMenorAltura = o.codigo;
    }

    somaAltura += o.altura;
    mediaAltura = somaAltura / Ex37arr.length;
    
    
} 



var maiorPeso = 0;
var codigoMaiorPeso;
var menorPeso;
var codigoMenorPeso;
var mediaPeso;
var somaPeso = 0;

for(let o of Ex37arr){
    if(o.peso > maiorPeso){
        maiorPeso = o.peso;
        codigoMaiorPeso = o.codigo;
    }
    menorPeso = o.peso;
    if(o.peso <= menorPeso){
        menorPeso = o.peso;
        codigoMenorPeso = o.codigo;
    }
    somaPeso += o.peso;
    mediaPeso = somaPeso / Ex37arr.length;
}


alert(`Maior altura: código ${codigoMaiorAltura}, altura ${maiorAltura}.
Menor altura: código ${codigoMenorAltura}, altura ${menorAltura}.\nMaior peso: código ${codigoMaiorPeso}, peso ${maiorPeso}kg.\nMenor peso: código ${codigoMenorPeso}, peso ${menorPeso}kg
\nMédia altura: ${mediaAltura}.\n Média peso: ${mediaPeso}`);
/*
console.log(codigoMaiorAltura, maiorAltura);
console.log(codigoMenorAltura, menorAltura);
console.log(mediaAltura);

console.log(codigoMaiorPeso, maiorPeso);
console.log(codigoMenorPeso, menorPeso);
console.log(mediaPeso);
*/
