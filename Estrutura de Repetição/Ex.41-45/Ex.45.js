/*
    EstruturaDeRepeticao
    Exercícios 45
    https://wiki.python.org.br/EstruturaDeRepeticao
*/


/*
  45 - Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno 
  a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 
  1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido informar:

    Maior e Menor Acerto;
    Total de Alunos que utilizaram o sistema;
    A Média das Notas da Turma. 

    Gabarito da Prova:

    01 - A
    02 - B
    03 - C
    04 - D
    05 - E
    06 - E
    07 - D
    08 - C
    09 - B
    10 - A

    Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos
    usarem o programa.

    
 */

    //var arrayResposta = ['A',"B","C","D","E","E","D","C","B","A"];
    var arrayResposta = [];
    var gabarito;
    for(let i = 1; i <= 10; i++){
        gabarito = prompt(`Informe o gabarito da ${i}º questao: `);
        arrayResposta.push(gabarito);
    }
    alert(arrayResposta)
    var saida = [];
    var arrayDados = [];
    var count = 0;
    var resposta;
    var continuarComOutroAluno;
    var corretas = 0;
    var maiorNota = 0;
    var menorNota;
    var nomeMaiorNota;
    var nomeMenorNota;
    var mediaDeNotas = 0;
    var soma = 0;

    while(isNaN(continuarComOutroAluno) || continuarComOutroAluno == "s" || continuarComOutroAluno == "S" || continuarComOutroAluno != "n" || continuarComOutroAluno != "N"){
        var nomeDoAluno = prompt("Informe o seu nome: ");
        arrayDados.push(nomeDoAluno);
        while((resposta != "A" && resposta != "B" && resposta != "C" && resposta != "D" && resposta != "E") || isNaN(resposta)){
            resposta = prompt(`Questao ${count + 1} - Escolha a alternativa correta [A B C D E]: `);
            resposta =  resposta.toUpperCase(); 
           
            if(resposta == "A" || resposta == "B" || resposta == "C" || resposta == "D" || resposta == "E"){
                
                arrayDados.push(resposta)
                count++;
            }
            if(count == 10){
                count = 0;
                continuarComOutroAluno = prompt("Deseja continuar? [s - sim] [n - não]: ");
                continuarComOutroAluno = continuarComOutroAluno[0];
                

                for(let i = 0; i < arrayResposta.length; i++){
                    if(arrayDados[i+1] == arrayResposta[i]){
                        corretas += 1;
                    }
                }

                arrayDados = [];
                
                saida.push(nomeDoAluno, corretas);
                corretas = 0;
                

                if(continuarComOutroAluno[0] == "n" || continuarComOutroAluno[0] == "N"){
                    break;
                }else{
                    var nomeDoAluno = prompt("Informe o seu nome: ");
                    arrayDados.push(nomeDoAluno);
                }
            }

        }

        if(continuarComOutroAluno[0] == "n" || continuarComOutroAluno[0] == "N"){
            break;
        }

    }
    alert(saida);
    menorNota = saida[1];
   for(let i = 0; i < saida.length; i++){
        if(i % 2 != 0){
            if(saida[i] >= maiorNota){
                maiorNota = saida[i];
                nomeMaiorNota = saida[i-1];
            }

            if(saida[i] <= menorNota){
                menorNota = saida[i];
                nomeMenorNota = saida[i-1]
            }

            soma += saida[i];
            alert(soma);
        }
   }
   mediaDeNotas = (soma / (saida.length / 2));

   alert(`A maior noto foi do(a) ${nomeMaiorNota}: ${maiorNota}.\nA menor nota foi do(a) ${nomeMenorNota}: ${menorNota}.\nA média da turma foi ${mediaDeNotas}.\nTotal de alunos que utilizarão o sistema: ${(saida.length)/2}`)

