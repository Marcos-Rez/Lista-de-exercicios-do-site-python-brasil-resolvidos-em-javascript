/*
    Estrutura de Repetição
    Exercícios de 01 á 05.
    https://wiki.python.org.br/EstruturaDeRepeticao

*/

/* 
    01 - Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo
    até que o usuário informe um valor válido.
*/

var nota = parseFloat(prompt("Imforme uma nota entre [0 - 10]: "));
while(nota < 0 || nota > 10){
    nota = parseFloat(prompt("Nota invalida! Imforme uma nota entre [0 - 10]: "));
}


/*
   02 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome
   do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

var nomeUsuario;
var senha;

nomeUsuario = prompt("Informe o nome de usuario: ");
senha = prompt("Informe uma senha: ");

while(nomeUsuario == senha){
    //console.log("Senha invalida!\nO nome de usuário NÃO pode ser iqual a sua senha, tente novamente: ");
    senha = prompt("Senha invalida!\nO nome de usuário NÃO pode ser iqual a sua senha, tente novamente: ");

}


/*
    3 - Faça um programa que leia e valide as seguintes informações:

    Nome: maior que 3 caracteres;
    Idade: entre 0 e 150;
    Salário: maior que zero;
    Sexo: 'f' ou 'm';
    Estado Civil: 's', 'c', 'v', 'd';
*/

var nome = prompt("Informe o nome de usuario com mais de 3 caracteres: ");

while(nome.length <= 3){
    nome = prompt("Erro! Némero de caracteres menor que o permitido. O nome de usuario deve ter mais de 3 caracteres: ");
}

var idade = parseInt(prompt("Informe a idade ente 0 e 150 anos: "));

while(idade < 0 || idade > 150 || isNaN(idade)){
    idade = prompt("Erro! Idade menor que zeor ou maior que 150. Informe a idade ente 0 e 150 anos: ");
}

var salario = prompt("Informe o salário maior que 'zero': ");
while(salario <= 0){
    salario = prompt("Erro! O salário informado é menor que zero. Informe o salário maior que 'zero': ");
}




var sexo = prompt("Informe o sexo [f - femenino] ou [m - masculino]: ");

sexo = sexo[0];
if(sexo == "" || sexo == " " || sexo == isNaN(sexo) || sexo == undefined){
    sexo = 'P';
    sexo = sexo.toLowerCase();
}

sexo = sexo.toLowerCase();
while((sexo != 'f' && sexo != 'm') || sexo == "" || sexo == " "){
    sexo = prompt("Erro! O sexo informado é invalido. Informe o sexo [f - femenino] ou [m - masculino]: ");
    sexo = sexo[0];
    if(sexo == "" || sexo == " " || sexo == isNaN(sexo) || sexo == undefined){
        sexo = 'P';
        sexo = sexo.toLowerCase();
    }
    sexo = sexo.toLowerCase();
}



var estadoCivil = prompt("Infore o estado civil [s - solteiro] [c - casado] [v - viúvo] [d - divorcido]: ");
estadoCivil = estadoCivil[0];
if(estadoCivil == "" || estadoCivil == " " || estadoCivil == isNaN(estadoCivil) || estadoCivil == undefined ){
    estadoCivil = 'E';
    estadoCivil = estadoCivil.toLowerCase();
}
estadoCivil = estadoCivil.toLowerCase();

while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd' || estadoCivil == isNaN(estadoCivil)){
    estadoCivil = prompt("Erro! O estado civil é invalido. Infore o estado civil [s - solteiro] [c - casado] [v - viúvo] [d - divorcido]: ");
    estadoCivil = estadoCivil[0];
    if(estadoCivil == "" || estadoCivil == " " || estadoCivil == isNaN(estadoCivil) || estadoCivil == undefined ){
        estadoCivil = 'E';
        estadoCivil = estadoCivil.toLowerCase();
    }
    estadoCivil = estadoCivil.toLowerCase();
   
}


/*
    4 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de
    crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de
    1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do
    país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

var pais_A = 80000;
var taxaDeCrecimento_A = 0.03;

var pais_B = 200000;
var taxaDeCrecimento_B = 0.015;

var anos=1;

while(pais_A < pais_B){

    pais_A += (pais_A * taxaDeCrecimento_A);
    pais_B += (pais_B * taxaDeCrecimento_B);


    console.log("A "+pais_A + " - " +"B "+pais_B);
    console.log(anos++)
}
anos = anos - 1;
console.log("A " +pais_A + " - " + "B " + pais_B + ". Anos: "+anos);

/* 05 - Altere o programa anterior permitindo ao usuário informar as populações e as taxas de 
        crescimento iniciais. Valide a entrada e permita repetir a operação.
*/

var Ex5_pais_A = parseInt(prompt("Informe a população do país A: "));
while(Ex5_pais_A <= 0 || isNaN(Ex5_pais_A)){
    Ex5_pais_A = parseInt(prompt("Erro! A população informada é menor ou igual a zero ou não é um numero. Informe a população do país A: "));
}

var Ex5_taxaDeCrecimento_A = parseFloat(prompt("Informe a taxa de crescimento anual do país A: "));
while(Ex5_taxaDeCrecimento_A <= 0.0 || isNaN(Ex5_taxaDeCrecimento_A)){
    Ex5_taxaDeCrecimento_A = parseFloat(prompt("Erro! A taxa de crescimento é menor ou igual a zero ou não é um número. Informe a taxa de crescimento anual do país A: "));
    
}

var Ex5_pais_B = parseInt(prompt("Informe a população do país B: "));
alert(Ex5_pais_A+" "+Ex5_pais_B);
while(Ex5_pais_B <= 0 || isNaN(Ex5_pais_B) || Ex5_pais_A >= Ex5_pais_B){
    Ex5_pais_B = parseInt(prompt('Erro! A população informada é menor ou igual a zero ou não é um numero. Informe a população do país B: '));
}

var Ex5_taxaDeCrecimento_B = parseFloat(prompt("Informe a taxa de crescimento anual do país B: "));
while(Ex5_taxaDeCrecimento_B <= 0 || isNaN(Ex5_taxaDeCrecimento_B)){
    Ex5_taxaDeCrecimento_B = parseFloat(prompt("Erro! A taxa de crescimento é menor ou igual a zero ou não é um número ou o país a é maior que país B. Informe a taxa de crescimento anual do país B: "));
}

var Ex5_anos = 1;

while(Ex5_pais_A < Ex5_pais_B){

    Ex5_pais_A += (Ex5_pais_A * Ex5_taxaDeCrecimento_A);
    Ex5_pais_B += (Ex5_pais_B * Ex5_taxaDeCrecimento_B);


    //console.log("A "+Ex5_pais_A + " - " +"B "+Ex5_pais_B);
    Ex5_anos++;
}
Ex5_anos = Ex5_anos - 1;
alert("A " +Ex5_pais_A + " - " + "B " + Ex5_pais_B + ". Anos: "+Ex5_anos);