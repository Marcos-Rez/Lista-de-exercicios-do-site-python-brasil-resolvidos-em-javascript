/*
 *  Exercícios Com Listas 
    Exercício 24
    https://wiki.python.org.br/ExerciciosListas
*/

/**
 * 24 - Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido. Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios, simulando os lançamentos dos dados. 
 */

  function getRandom(){
    return Math.floor(Math.random() * (7 - 1) + 1);
  }

  let arrDados = [];
  for(let i = 1; i <= 100; i++){
    arrDados.push(getRandom());
  }

  let arrParametros = [1, 2, 3, 4, 5, 6];

  let arrResultados = [0, 0, 0, 0, 0, 0];
  for(let d = 0; d < arrDados.length; d++){
    for(let p = 0; p < arrParametros.length; p++){
        if(arrDados[d] == arrParametros[p]){
            arrResultados[p] += 1;
        }
    }
  }
 
  for(let r = 0; r < arrResultados.length; r++){
    console.log(`${arrParametros[r]}:  foi sorteado ${arrResultados[r]} vezes`)
  }


  