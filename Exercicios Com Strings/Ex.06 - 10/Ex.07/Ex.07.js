/*
   Exercícios com String 
   Exercício 7
   https://wiki.python.org.br/ExerciciosComStrings
*/

/*
7- Conta espaços e vogais. Dado uma string com uma frase informada pelo usuário (incluindo espaços em branco), conte:

    quantos espaços em branco existem na frase.
    quantas vezes aparecem as vogais a, e, i, o, u. 
*/

function contaEspacosVogais(){
    let frase = prompt('Informe uma frase: ');
    frase = frase.toLowerCase();
    let contVogais = 0;
    let contEspacos = 0;
    for(let i of frase){
        if(i == " "){
            contEspacos++;
        }

        if((i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') || (i == 'á' || i == 'é' || i == 'é' || i == 'é' || i == 'ú')){
            contVogais++
        }
    }

    //alert(contEspacos);
    alert(`Espaços em branco existentes na frase: ${contEspacos}.\nQuantas vezes aparecem as vogais: ${contVogais}`)

}
contaEspacosVogais()