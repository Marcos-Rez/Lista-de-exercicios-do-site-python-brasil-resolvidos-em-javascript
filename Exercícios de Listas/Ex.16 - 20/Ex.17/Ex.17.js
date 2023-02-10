
/*
    Exercícios Com Listas 
    Exercício 17
    https://wiki.python.org.br/ExerciciosListas
*/ 



/* 17 
Em uma competição de salto em distância cada atleta tem direito a cinco saltos. O resultado do atleta será determinado pela média dos cinco valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe o nome, os saltos e a média dos saltos. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:

Atleta: Rodrigo Curvêllo
 
Primeiro Salto: 6.5 m
Segundo Salto: 6.1 m
Terceiro Salto: 6.2 m
Quarto Salto: 5.4 m
Quinto Salto: 5.3 m

Resultado final:
Atleta: Rodrigo Curvêllo
Saltos: 6.5 - 6.1 - 6.2 - 5.4 - 5.3
Média dos saltos: 5.9 m 
*/
function resultadoDaCompeticao(){
    var nome;
    var salto;
    var soma = 0;
    var media = 0;
    var arrNotas = [ [], [], [], [], [], [], []];
    var arrMedia = [];
 

    
    while(nome != isNaN(nome)){
        nome = prompt("Informe o nome: ");
       
        if((typeof(nome) == "undefined") || nome == "" || !isNaN(nome)){
            break;
        }else{
            arrNotas[0] = nome;
        }
        
        for(let s = 0; s < 5; s++){
            salto = parseFloat(prompt(`Informe o ${s+1}º salto: `));
            soma += salto;
            
            arrNotas[s+1] = salto;
    
            if(s == 4){
                media = soma / 5;
                soma = 0;
                arrNotas[6] = media
                media = 0;
                arrMedia.push(arrNotas)
                arrNotas = [ [], [], [], [], [], [], []];
              
            }
        }
    }

    return arrMedia;
    
};

function resultadoFinal(){
    var arr = [];
    arr = resultadoDaCompeticao();
    var arrSaidaDeDados = [];

    var saltosOrdem = ['Primeiro Salto', 'Segundo Salto', 'Terceiro Salto', 'Quarto Salto', 'Quinto Salto', 'Média'];

    var maiorMedia = 0;
    var nome;

    for(let i = 0; i < arr.length; i++){
        arrSaidaDeDados.push(`\n\nAtleta: ${arr[i][0]}\n\n`);
        for(let c = 0; c < saltosOrdem.length; c++){
            arrSaidaDeDados.push(`${saltosOrdem[c]}: ${arr[i][c+1]} m\n`);

            if(arr[i][6] > maiorMedia){
                maiorMedia = arr[i][6];
                nome = arr[i][0];
            }
        }
    }
    arrSaidaDeDados.push("\n\t<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>\n")
    arrSaidaDeDados.push(`\n\t\t<<< O vencedor é ${nome} sua média foi de ${maiorMedia} m >>>\n`);
    arrSaidaDeDados.push("\n\t<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>")
    var imprimir =  arrSaidaDeDados.join("");
    alert(imprimir)
    
}
resultadoFinal();