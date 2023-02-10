
/**
 * 
 *  Exercícios Com Listas 
    Exercício 19
    https://wiki.python.org.br/ExerciciosListas

/**
 * 19 - Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande quantidade de organizações:

"Qual o melhor Sistema Operacional para uso em servidores?"

As possíveis respostas são:

1- Windows Server
2- Unix
3- Linux
4- Netware
5- Mac OS
6- Outro

Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). Os valores referentes a cada uma das opções devem ser armazenados num vetor. Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada um dos concorrentes e informar o vencedor da enquete. O formato da saída foi dado pela empresa, e é o seguinte:

Sistema Operacional     Votos   %
-------------------     -----   ---
Windows Server           1500   17%
Unix                     3500   40%
Linux                    3000   34%
Netware                   500    5%
Mac OS                    150    2%
Outro                     150    2%
-------------------     -----
Total                    8800

O Sistema Operacional mais votado foi o Unix, com 3500 votos, correspondendo a 40% dos votos.
 */

function entradaDeDados(){
    let sistemaEscolido;
    let arrDeVotos = [];
    while(sistemaEscolido != 0 ){
        sistemaEscolido = parseInt(prompt("Qual o melhor Sistema Operacional para uso em servidores?\nAs possíveis respostas são:\n 1- Windows Server\n 2- Unix\n 3- Linux\n 4- Netware\n 5- Mac OS\n 6- Outro"))

        if(sistemaEscolido == 0){
            break;
        }

        while(sistemaEscolido < 0 || sistemaEscolido > 6){
            alert("Entrou")
            sistemaEscolido = parseInt(prompt("Qual o melhor Sistema Operacional para uso em servidores?\nAs possíveis respostas são:\n 1- Windows Server\n 2- Unix\n 3- Linux\n 4- Netware\n 5- Mac OS\n 6- Outro"));
    
            if( sistemaEscolido == 0){
                break;
            }
        }
        arrDeVotos.push(sistemaEscolido);
    }
   
    return arrDeVotos;
}


function calculaVotos(){
    let arrDados = entradaDeDados();
    let arrParametros = [1, 2, 3, 4, 5, 6];
    let arrResultados = [0, 0, 0, 0, 0, 0];
    for(let i = 0; i < arrDados.length; i++){
        for(let c = 0; c < arrParametros.length; c++){
            if(arrDados[i] == arrParametros[c]){
                arrResultados[c] += 1;
            }
        }
    }
    
    let soma = arrDados.length;
    


    let arrSistemas = ["Windows Server", "Unix", "Linux", "Netware", "Mac OS", "Outro"];
    let saida = [];
    let porc = 0;
    saida.push("Sistema Operacional\t\tVotos\t\t%\n\n")
    saida.push('--------------------------------------           -------- \t -------\n')
    for(let r = 0; r < arrSistemas.length; r++){
        porc = ((arrResultados[r] * 100) / soma).toFixed(1);
        if(r == 0){
            saida.push(`${arrSistemas[0]}\t\t\t\t${arrResultados[0]}\t\t${porc}%\n`);
            porc = 0;
        }
        else if(r == 3){
            saida.push(`${arrSistemas[r]}\t\t\t\t\t\t${arrResultados[r]}\t\t${porc}%\n`);
            porc = 0;
        }
        else{
            saida.push(`${arrSistemas[r]}\t\t\t\t\t\t\t${arrResultados[r]}\t\t${porc}%\n`);
            porc = 0;
        }
    }
    saida.push('--------------------------------------           -------- \t -------\n');
    saida.push(`Total\t\t\t\t\t\t\t${soma}`);

    var s = saida.join("");
    alert(s)
}

calculaVotos();
