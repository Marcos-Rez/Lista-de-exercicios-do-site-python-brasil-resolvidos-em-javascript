/*
   Exercícios com funções 
   Exercício 12
   https://wiki.python.org.br/ExerciciosFuncoes
*/

/*12 - Embaralha palavra. Construa uma função que receba uma string como parâmetro e devolva outra string com os carateres embaralhados. Por exemplo: se função receber a palavra python, pode retornar npthyo, ophtyn ou qualquer outra combinação possível, de forma aleatória. Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados.*/

//Math.floor(Math.random() * numeros.length);
function embaralhaPalavras(){
    let string = prompt('Digite uma palavra: ');
    let arrString = []
    let arrIndex = [];
    let contador = 0;

    while(contador < string.length){
        let index = Math.floor(Math.random() * string.length);
        if(!arrIndex.includes(index)){
            contador++;
            arrIndex.push(index)
        }
    }

    
    for(let i of arrIndex){
        arrString.push(string[i])
    }
    let imprimir = arrString.join('  ').toUpperCase();
    alert(`${string}\n${imprimir}`)
    return imprimir;
}

embaralhaPalavras()
