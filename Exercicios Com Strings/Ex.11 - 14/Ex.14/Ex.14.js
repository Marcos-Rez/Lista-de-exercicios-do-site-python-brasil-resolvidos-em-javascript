/*
   Exercícios com String 
   Exercício 14
   https://wiki.python.org.br/ExerciciosComStrings
*/
/**
 * Leet spek generator. Leet é uma forma de se escrever o alfabeto latino usando outros símbolos em lugar das letras, como números por exemplo. A própria palavra leet admite muitas variações, como l33t ou 1337. O uso do leet reflete uma subcultura relacionada ao mundo dos jogos de computador e internet, sendo muito usada para confundir os iniciantes e afirmar-se como parte de um grupo. Pesquise sobre as principais formas de traduzir as letras. Depois, faça um programa que peça uma texto e transforme-o para a grafia leet speak.
 */
let letrasCodificadas = [4 , 'b', 'c', 'd', 3, 'f', 'g', 'h', 1, 'j', 'k', 'l', 'm', 'n', 0, 'p', 'q', 7, 5, 't', 8, 'v', 'w', 'x', 'y', 2, ' '];

let letras = ['a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

let palavraEscolida = prompt("Escolha uma palavra: ");
palavraEscolida = palavraEscolida.toLowerCase();
let palavraCodificada = [];

for(let i in palavraEscolida){
   for(let c in letras){
      //console.log(`${palavraEscolida[i]} - ${letras[c]}`);
      if(palavraEscolida[i] == letras[c]){
         palavraCodificada.push(c)
      }
   }
}


let arrNovaPalavra = [];
for(let i of palavraCodificada){ 
      arrNovaPalavra.push(letrasCodificadas[i])
    }    

let saida1 = arrNovaPalavra.join('');
alert(saida1)