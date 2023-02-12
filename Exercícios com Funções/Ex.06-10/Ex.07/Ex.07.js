/*
   Exercícios com funções 
   Exercício 07
   https://wiki.python.org.br/ExerciciosFuncoes
*/

/**
 * 07 - Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso. 
 */

function entradaDeDados () {
    let valorDaPrestacao;
    let diasAtrasados;
    let arrRelatorio = [];
    while (valorDaPrestacao != 0) {
        valorDaPrestacao = parseFloat(prompt('Qual o valor da prestação: '));
        while (valorDaPrestacao < 0 || isNaN(valorDaPrestacao)) {
            valorDaPrestacao = parseFloat(prompt('Qual o valor da prestação: '));
        }
        if(valorDaPrestacao == 0){
            break;
        }
        diasAtrasados = parseInt(prompt("Dias de atraso: "));
        while(diasAtrasados < 0 || isNaN(diasAtrasados)){
            diasAtrasados = parseInt(prompt("Dias de atraso: "));
        }
        arrRelatorio.push(valorDaPrestacao)
        arrRelatorio.push(diasAtrasados)

    }
   return arrRelatorio;
}

function valorPagamento(){
    let arrRelatorio = entradaDeDados ();
    let valorTotal;
    let arrTotal = [];
    let total = 0;
    alert(arrRelatorio.length)

    for(let i = 0; i < arrRelatorio.length; i++){
        if(i % 2 != 0 && arrRelatorio[i] == 0){
            alert('Entrou1')
            valorTotal = arrRelatorio[i-1];
            arrTotal.push(valorTotal)
        }
        else if(i % 2 != 0 && arrRelatorio[i] > 0){
            valorTotal = arrRelatorio[i-1] + (arrRelatorio[i-1] * 0.03)+(arrRelatorio[i] * (0.001 * arrRelatorio[i-1]));
            arrTotal.push(valorTotal)
        }   
    }
 

    for(let v of arrTotal){
        total += v;
;    }
    alert(`Total pago ${total.toFixed(2)}\nNúmero de pagamentos ${arrRelatorio.length/2}`)
}

valorPagamento()