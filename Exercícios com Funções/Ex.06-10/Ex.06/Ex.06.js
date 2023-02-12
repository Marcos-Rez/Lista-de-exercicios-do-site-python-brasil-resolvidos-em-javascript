/*
   Exercícios com funções 
   Exercício 06 a 10
   https://wiki.python.org.br/ExerciciosFuncoes
*/
/**
 * 
Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.
Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.

Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.

Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente. 
 */
/**
 * 
 * 06 -Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.
 */

function conversaoDeHoarios(hora, min){
    let h;
    let a;
    let p
   if(hora == 0 && min == 0){
    h = hora;
    a = 'P.M'
    h = `${h} : ${min} ${a}`;
   }else if(hora == 0 && min > 0){
    h = hora;
    a = 'A.M'
    h = `${h} : ${min} ${a}`;
   }else if(hora == 12){
    h = hora;
    a = 'P.M'
    h = `${h} : ${min} ${a}`;
   }
    else if((hora > 12 && hora < 24 && min > 0) || ((hora < 23 && hora > 12) && (min < 59))){
        h = hora - 12;
        a = 'P.M'
        h = `${h} : ${min} ${a}`;
       
    }else if((hora == 12 && min > 0) || hora < 12){
  
        p ='A.M'
        h = `${hora} : ${min} ${p}`;
    }
    alert(h)
}
function imprimir(){
    let continuar;
    while(continuar != 'n' || continuar != 'n'){
        let hora = parseInt(prompt("Informe a hora: "));
        while(hora > 24 || hora < 0 || isNaN(hora)){
            hora = parseInt(prompt("Informe a hora: "));
        }
        let min = parseInt(prompt('Informe os minutos: '));
        while(min > 60 || min < 0 || isNaN(min)){
            min = parseInt(prompt('Informe os minutos: '));
        }

        conversaoDeHoarios(hora, min);

        continuar = prompt("Deseja continuar [s - sim] [n - não]: ");

        while(continuar != 's' && continuar != 'S' && continuar != 'n' && continuar != 'N'){
            continuar = prompt("Deseja continuar [s - sim] [n - não]: ");
            if(continuar == 'n' || continuar == "N"){
                break;
            }
        }
        if(continuar == 'n' || continuar == "N"){
            break;
        }
    } 
    
}
imprimir()
