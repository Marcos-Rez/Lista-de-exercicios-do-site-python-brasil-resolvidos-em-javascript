/*
    Exercícios Com Listas 
    Exercício 17
    https://wiki.python.org.br/ExerciciosListas
*/


/** *
 * 16 - Utilize uma lista para resolver o problema a seguir. Uma empresa paga seus vendedores com base em comissões. O vendedor recebe $200 por semana mais 9 por cento de suas vendas brutas daquela semana. Por exemplo, um vendedor que teve vendas brutas de $3000 em uma semana recebe $200 mais 9 por cento de $3000, ou seja, um total de $470. Escreva um programa (usando um array de contadores) que determine quantos vendedores receberam salários nos seguintes intervalos de valores:

    $200 - $299
    $300 - $399
    $400 - $499
    $500 - $599
    $600 - $699
    $700 - $799
    $800 - $899
    $900 - $999
    $1000 em diante 

    Desafio: Crie uma fórmula para chegar na posição da lista a partir do salário, sem fazer vários ifs aninhados.
*/
var listaDeSalarios = [300.95, 450.89, 789.51, 5520, 200, 599.7, 2000, 1000.78, 850.50, 500, 3000, 8500, 1500, 6110, 9000, 910, 7000, 2500, 1060];

var listaDeParametros = [[200, 299], [300, 399], [400, 499], [500, 599], [600, 699], [700, 799], [800, 899], [900, 999], [1000]];

var resultadoParcial = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function filtraDados(){
    var salario = 0;
    for(let i = 0; i < listaDeSalarios.length; i++){
        salario += (200 + (0.09 * listaDeSalarios[i]))
        console.log(i +' - '+salario);
        for(let c = 0; c < listaDeParametros.length; c++){
            if(salario >= listaDeParametros[c][0] && salario <= listaDeParametros[c][1]){
                
                console.log(listaDeParametros[c])
                resultadoParcial[c] += 1;
                salario = 0;
            }
            if(salario >= listaDeParametros[c]){
                console.log(c +' - '+salario+" - "+listaDeParametros[c])
                resultadoParcial[c] += 1;
                salario = 0;
            }
        }
    }
    for(let a = 0; a < resultadoParcial.length; a++){
            console.log(`Na faixa de ${listaDeParametros[a]}: temos ${resultadoParcial[a]} pessoas.`)
        }
    
};
filtraDados()


