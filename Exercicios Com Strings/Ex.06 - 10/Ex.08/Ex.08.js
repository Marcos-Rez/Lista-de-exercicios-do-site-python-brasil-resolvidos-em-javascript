/*
   Exercícios com String 
   Exercício 8
   https://wiki.python.org.br/ExerciciosComStrings
*/

/**
 * 8 - Palíndromo. Um palíndromo é uma seqüência de caracteres cuja leitura é idêntica se feita da direita para esquerda ou vice−versa. Por exemplo: OSSO e OVO são palíndromos. Em textos mais complexos os espaços e pontuação são ignorados. A frase SUBI NO ONIBUS é o exemplo de uma frase palíndroma onde os espaços foram ignorados. Faça um programa que leia uma seqüência de caracteres, mostre−a e diga se é um palíndromo ou não. 
 */

function cacaPalindromo(){
    let frase = prompt('Informe uma frase: ');
    frase = frase.toLocaleLowerCase().replace(' ', '')
    let frase2;
    let arrFrase = [];
    for(let i = frase.length; i >= 0; i--){
        arrFrase.push(frase[i]);
    }
    
    frase2 = arrFrase.join('');
    alert(frase == frase2)
}
cacaPalindromo()