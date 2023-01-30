/*
    EstruturaDeRepeticao
    Exercícios de 46 a 50
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

/*


Faça um programa que peça um numero inteiro positivo e em seguida mostre este numero invertido.

    Exemplo:

      12376489
      => 98467321

Faça um programa que mostre os n termos da Série a seguir:

      S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 

    Imprima no final a soma da série. 

Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, Faça um programa que calcule o valor de H com N termos.
Faça um programa que mostre os n termos da Série a seguir:

      S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 

    Imprima no final a soma da série.
*/

/*
47 - Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média com as notas restantes). As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:

Atleta: Aparecido Parente
Nota: 9.9
Nota: 7.5
Nota: 9.5
Nota: 8.5
Nota: 9.0
Nota: 8.5
Nota: 9.7

Resultado final:
Atleta: Aparecido Parente
Melhor nota: 9.9
Pior nota: 7.5
Média: 9,04
*/

var notas = [[], [], [], [], [], [], [], []];
var arrCadastros = [];
var nome;

var continuar;

while(continuar == "" || continuar == "n" || continuar == "N" || continuar != "S" || continuar != s){

    while(nome == "" || isNaN(nome)){
        nome = prompt("Informe o nome do atleta: ");
    
        if(nome != ""){
            break;
        }
    }
    notas[0] = nome;
    for(let i = 0; i < 7; i++){
        var nota = parseFloat(prompt(`Informe a ${i+1}º nota: `));
        notas[i+1] = nota;
    }

    arrCadastros.push(notas);
    notas = [[], [], [], [], [], [], [], []];
    continuar = prompt("Comtinuar cadastro de atletas? [s - sim] [n - não]: ");
    if(continuar == "n" || continuar == "N"){
        break;
    }
}

