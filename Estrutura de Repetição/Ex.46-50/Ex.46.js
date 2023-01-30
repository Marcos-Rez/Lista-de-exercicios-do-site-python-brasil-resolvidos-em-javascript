/*
    EstruturaDeRepeticao
    Exercícios46
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
var salto;
var arrayResultados = [];
var arrayAtletas = [[], [], [], [], [], []];
var nomeDoAtleta = prompt("Informe o nome do atleta: ");

while(!isNaN(nomeDoAtleta) == ""){
  if(nomeDoAtleta == ""){
    break;
  }
   arrayAtletas[0] = [[nomeDoAtleta]];
  for(let i = 0; i < (arrayAtletas.length - 1); i++){
    salto = parseFloat(prompt(`${i+1}º salto: `));
  
   arrayAtletas[i+1] = salto;
  
  }
  arrayResultados.push(arrayAtletas);
  nomeDoAtleta = prompt("Informe o nome do atleta: ");
  arrayAtletas = [[], [], [], [], [], []];

}

  var arraySaida = [];
  var melhorSalto = 0;
  var piorSalto = 0;
  var mediaDosDemaisSaltos = 0;
  var resultadoFinal;
  var nome;
  var soma = 0;
  var media = 0;
  var vencedor = [];
  for(let a = 0; a < arrayResultados.length; a++){
    arraySaida.push(`Atleta: ${arrayResultados[a][0]}\n`);
    media = 0;
    for(let b = 1; b <= 5; b++){
      
      if(b == 1){
        melhorSalto = 0;
        piorSalto = arrayResultados[a][b];
      };

      if(arrayResultados[a][b] > melhorSalto){
        melhorSalto = arrayResultados[a][b];
      };

      if(arrayResultados[a][b] < piorSalto){
        piorSalto = arrayResultados[a][b];
      }
      soma += arrayResultados[a][b];

      arraySaida.push(`${b}º salto ${arrayResultados[a][b]}\n`);
      if(b == 5){

        soma = soma - (melhorSalto + piorSalto);
        media = soma / 3;

        arraySaida.push(`\nMelhor salto ${melhorSalto}`);
        arraySaida.push(`\nPior salto ${piorSalto}`);
        arraySaida.push(`\nMédia dos demais saltos: ${media}m\n\n\n`);
        vencedor.push(arrayResultados[a][0]);
        vencedor.push(media);
        
        soma = 0;
        media = 0;
      };
    }

  }

var nomeDoVencedor;
var maiorMedia;
for(let i = 0; i < vencedor.length; i++){
  if(vencedor[i] == arrayResultados[0][0]){
    maiorMedia = vencedor[1];
    nomeDoVencedor = vencedor[0];
  }

  if(!vencedor[i] % 2 == 0){
    if(vencedor[i] >= maiorMedia){
      maiorMedia = vencedor[i];
      nomeDoVencedor = vencedor[i-1];
    }

  }
}
arraySaida.push(`Resultado final:\n ${nomeDoVencedor}: ${maiorMedia}m`);

var resultadoFormatado = arraySaida.join("");
alert(resultadoFormatado);