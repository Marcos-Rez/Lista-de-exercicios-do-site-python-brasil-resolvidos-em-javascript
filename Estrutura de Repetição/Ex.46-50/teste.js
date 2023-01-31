/*
    EstruturaDeRepeticao
    Exercício 46
    https://wiki.python.org.br/EstruturaDeRepeticao
*/



/*
46 - Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:

Atleta: Rodrigo Curvêllo

Primeiro Salto: 6.5 m
Segundo Salto: 6.1 m
Terceiro Salto: 6.2 m
Quarto Salto: 5.4 m
Quinto Salto: 5.3 m

Melhor salto:  6.5 m
Pior salto: 5.3 m
Média dos demais saltos: 5.9 m

Resultado final:
Rodrigo Curvêllo: 5.9 m
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


var nome;
var soma = 0;
var media = 0;
var arrSaida = []
var arrResultados = [];
var maiorNota = arrCadastros[0][1];
var menorNota = arrCadastros[0][1];
controle = 0;

for(let i = 0; i < arrCadastros.length; i++){
    arrResultados.push("\n"+arrCadastros[i][0]);//nome
    for(let c = 1; c < 8; c++){

        arrResultados.push(arrCadastros[i][c]);//notas
        
        if(arrCadastros[i][c] >= maiorNota){
            maiorNota = arrCadastros[i][c];
        }

        if(arrCadastros[i][c] <= menorNota){
            menorNota = arrCadastros[i][c];
        }

        soma += arrCadastros[i][c];
        media = (soma - (maiorNota + menorNota)) / 5;
    
        if(c == 7){
        
            arrResultados.push("\n"+maiorNota);
            arrResultados.push("\n"+menorNota);
            arrResultados.push("\n"+media);

            soma = 0;
            media = 0;
            //maiorNota = arrCadastros[i][c];
            //menorNota = arrCadastros[i][c];

            
        }
        if(i > 0 && c == 1){
            maiorNota = arrCadastros[i][c];
            menorNota = arrCadastros[i][c];
        }

        

        
    }
}

alert(arrCadastros);


for(let r of arrResultados){
    alert(r)
}


resultados.push(`Atleta ${arrCadastros[i][0]}\n`);

resultados.push(`\nResultado final:\n
Atleta: ${arrCadastros[i][0]}\n
Melhor nota: ${maiorNota}\n
Pior nota: ${menorNota}\n
Média: ${media}`);