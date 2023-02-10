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

function salariosContados (){
    var listaDeSalarios = [300.95, 450.89, 789.51, 5520, 200, 599.7, 2000, 1000.78, 850.50, 500, 3000, 8500, 1500, 6110, 9000, 910, 7000, 2500, 1060];
    var listaDeParametros = [[200, 299], [300, 399], [400, 499], [500, 599], [600, 699], [700, 799], [800, 899], [900, 999], [1000]];
   
    var faixa200_299 = 0
    var faixa300_399 = 0;
    var faixa400_499 = 0;
    var faixa500_599 = 0;
    var faixa600_699 = 0;
    var faixa700_799 = 0;
    var faixa800_899 = 0;
    var faixa900_999 = 0;
    var faixa1000 = 0;
    
    for(let s of listaDeSalarios){
        var salario = 0;
        salario += ((s * 0.09) + 200);
        //console.log("salario: "+salario)
        for(let p in listaDeParametros){
            if((salario >= listaDeParametros[p][0]) && (salario <= listaDeParametros[p][1])){
                faixa200_299 += p == 0? 1 : 0;
                faixa300_399 += p == 1? 1 : 0;
                faixa400_499 += p == 2? 1 : 0;
                faixa500_599 += p == 3? 1 : 0;
                faixa600_699 += p == 4? 1 : 0;
                faixa700_799 += p == 5? 1 : 0;
                faixa800_899 += p == 6? 1 : 0;
                faixa900_999 += p == 7? 1 : 0;
            }else if(p == 8 && salario >= 1000){
                faixa1000++;
            }
        }
    }
    console.log("Faixa de salários\n[200, 299]: "+faixa200_299+"\n[300, 399]: "+faixa300_399 +"\n[400, 499]: "+faixa400_499+"\n[500, 599]: "+faixa500_599 + "\n[600, 699]: "+faixa600_699 +"\n[700, 799]: "+ faixa700_799 +"\n[800, 899]: "+faixa800_899 +"\n[900, 999]: "+faixa900_999 +"\n[1000 em diante]: "+faixa1000)
   /* alert("Faixa de salários\n[200, 299]: "+faixa200_299+"\n[300, 399]: "+faixa300_399 +"\n[400, 499]: "+faixa400_499+"\n[500, 599]: "+faixa500_599 + "\n[600, 699]: "+faixa600_699 +"\n[700, 799]: "+ faixa700_799 +"\n[800, 899]: "+faixa800_899 +"\n[900, 999]: "+faixa900_999 +"\n[1000 em diante]: "+faixa1000)*/
}
salariosContados();
