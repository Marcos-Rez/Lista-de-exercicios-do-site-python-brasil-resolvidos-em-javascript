/*
    EstruturaDeRepeticao
    Exercício 47
    https://wiki.python.org.br/EstruturaDeRepeticao
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
var resultadoFinal = [];
var resultados;
var notas = [];
var arrCadastros = [];
var arrResultados = [];
var nome;

var soma;
var media;
var maiorNota;
var menorNota;
var continuar;

//Guardando nome e nota no array notas 
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

    //Guardando maior nota, menor nota e media no array notas

    soma = 0;
    media = 0;
    maiorNota = arrCadastros[0][1];
    menorNota = arrCadastros[0][1];
    continuar;

    for(let i = 0; i < arrCadastros.length; i++){
        resultadoFinal.push(`\nAtleta: ${arrCadastros[i][0]}\n`);
        for(let c = 1; c < 8; c++){
    
            if(arrCadastros[i][c] >= maiorNota){
                maiorNota = arrCadastros[i][c];
            }
    
            if(arrCadastros[i][c] <= menorNota){
                menorNota = arrCadastros[i][c];
            }

            
            resultadoFinal.push(`Nota: ${arrCadastros[i][c]}\n`);
            
    
            soma += arrCadastros[i][c];
            media = (soma - (maiorNota + menorNota)) / 5;
        
            if(c == 7){
                
                notas.push(maiorNota);
                notas.push(menorNota);
                notas.push(media);
                //preparando a saida no alert
                resultadoFinal.push(`\nResultado Final:\nAtleta: ${arrCadastros[i][0]}\n`);
                resultadoFinal.push(`Melhor Nota: ${maiorNota}\n`);
                resultadoFinal.push(`Pior Nota: ${menorNota}\n`);
                resultadoFinal.push(`Média: ${media}\n\n`);

                arrCadastros = [];

                soma = 0;
                media = 0; 
            }
            if(i > 0 && c == 1){
                maiorNota = arrCadastros[i][c];
                menorNota = arrCadastros[i][c];
            }

        }
    }

    //guardando o array de notas em um array com todos os cadastros 
    arrResultados.push(notas)

    notas = [];

    continuar = prompt("Comtinuar cadastro de atletas? [s - sim] [n - não]: ");
    if(continuar == "n" || continuar == "N"){
        break;
    }
}
//Array com o resultado do vencedor
var maiorMedia;
var nomeMaiorMedia;

for(let i = 0; i < arrResultados.length; i++){
    if(i == 0){
        maiorMedia = arrResultados[0][10];
        nomeMaiorMedia = arrResultados[0][0];
    }
    for(let c = 0; c < 11; c++){
        if(arrResultados[i][10] > maiorMedia){
            maiorMedia = arrResultados[i][10];
            nomeMaiorMedia = arrResultados[i][0];
        }
    }
}

//preparando a saida no alert
resultadoFinal.push(`<<< Vencedor >>>\nATleta\t${nomeMaiorMedia}\nMédia: ${maiorMedia}`);
var fim = resultadoFinal.join("");
alert(fim);