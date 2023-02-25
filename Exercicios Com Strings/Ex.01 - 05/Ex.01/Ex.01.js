/*
/*
   Exercícios com String 
   Exercício 1
   https://wiki.python.org.br/ExerciciosComStrings
*/
/**
 * 1 - Tamanho de strings. Faça um programa que leia 2 strings e informe o conteúdo delas seguido do seu comprimento. Informe também se as duas strings possuem o mesmo comprimento e são iguais ou diferentes no conteúdo.

    Compara duas strings
    String 1: Brasil Hexa 2006
    String 2: Brasil! Hexa 2006!
    Tamanho de "Brasil Hexa 2006": 16 caracteres
    Tamanho de "Brasil! Hexa 2006!": 18 caracteres
    As duas strings são de tamanhos diferentes.
    As duas strings possuem conteúdo diferente.
 */

    function lerStrings(str1, str2){
        let string = str1;
        let string2 = str2;
        let tamanhoEhIgual = string.length == string2.length ? 'As duas strings são de tamanhos iguais' : 'As duas strings são de tamanhos diferentes';
    
        let conteudoEhIgual = string == string2 ? 'As duas strings possuem conteúdo iguais.' : 'As duas strings possuem conteúdo diferente';

        console.log(`${string}\n${string2}\nTamanho de ${string}: ${string.length}\nTamanho de ${string2}: ${string2.length}\n${tamanhoEhIgual}\n${conteudoEhIgual}`);

        alert(`${string}\n${string2}\nTamanho de ${string}: ${string.length}\nTamanho de ${string2}: ${string2.length}\n${tamanhoEhIgual}\n${conteudoEhIgual}`);
    }

    lerStrings('Vascos', 'Vasco');