
/*
    Exercícios Com Listas 
    Exercício 18
    https://wiki.python.org.br/ExerciciosListas
*/ 


/** 18 - Uma grande emissora de televisão quer fazer uma enquete entre os seus telespectadores para saber qual o melhor jogador após cada jogo. Para isto, faz-se necessário o desenvolvimento de um programa, que será utilizado pelas telefonistas, para a computação dos votos. Sua equipe foi contratada para desenvolver este programa, utilizando a linguagem de programação C++. Para computar cada voto, a telefonista digitará um número, entre 1 e 23, correspondente ao número da camisa do jogador. Um número de jogador igual zero, indica que a votação foi encerrada. Se um número inválido for digitado, o programa deve ignorá-lo, mostrando uma breve mensagem de aviso, e voltando a pedir outro número. Após o final da votação, o programa deverá exibir:

    O total de votos computados;
    Os númeos e respectivos votos de todos os jogadores que receberam votos;
    O percentual de votos de cada um destes jogadores;
    O número do jogador escolhido como o melhor jogador da partida, juntamente com o número de votos e o percentual de votos dados a ele.
        Observe que os votos inválidos e o zero final não devem ser computados como votos. O resultado aparece ordenado pelo número do jogador. O programa deve fazer uso de arrays. O programa deverá executar o cálculo do percentual de cada jogador através de uma função. Esta função receberá dois parâmetros: o número de votos de um jogador e o total de votos. A função calculará o percentual e retornará o valor calculado. Abaixo segue uma tela de exemplo. O disposição das informações deve ser o mais próxima possível ao exemplo. Os dados são fictícios e podem mudar a cada execução do programa. Ao final, o programa deve ainda gravar os dados referentes ao resultado da votação em um arquivo texto no disco, obedecendo a mesma disposição apresentada na tela. 

Enquete: Quem foi o melhor jogador?

Número do jogador (0=fim): 9
Número do jogador (0=fim): 10
Número do jogador (0=fim): 9
Número do jogador (0=fim): 10
Número do jogador (0=fim): 11
Número do jogador (0=fim): 10
Número do jogador (0=fim): 50
Informe um valor entre 1 e 23 ou 0 para sair!
Número do jogador (0=fim): 9
Número do jogador (0=fim): 9
Número do jogador (0=fim): 0

Resultado da votação:

Foram computados 8 votos.

Jogador Votos           %
9               4               50,0%
10              3               37,5%
11              1               12,5%
O melhor jogador foi o número 9, com 4 votos, correspondendo a 50% do total de votos. */


function arrDeVotosComputador(){
    var numero;
    var votosComputados = [];
    while(numero < 0 || numero > 23 || isNaN(numero) || numero != 0){
        numero = parseInt(prompt("Informe o número do melhor jogador da partida.\nEscolha um número de [1 a 23] ou [0 - sair].: "));
        while(numero < 0 || numero > 23){
            numero = parseInt(prompt("Erro! O número informado esta invalido. Escolha um número de [1 a 23] ou [0 - sair].\nInforme o número do melhor jogador da partida: "));
        }
        if(numero != 0 && !isNaN(numero)){
            votosComputados.push(numero);
        }
        
    }
    return votosComputados;
    
}


function arrResultado(){
    let arrVotos = [];
    arrVotos = arrDeVotosComputador();
    arrIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var saida = [];
    let porc = 0;

    for (let i = 0; i < arrVotos.length; i++) {
        for (let c = 0; c < arrIndex.length; c++) {
           if( arrVotos[i] == arrIndex[c]){
            
            arr[c] += 1;
           }   
        }
    }

    saida.push(`Foram computados: ${arrVotos.length} votos.\n`);

    for(let s = 0; s < arrIndex.length; s++){
        porc = ((arr[s] * 100) / 23);
        saida.push((`\nNúmero do jogador\t\tVotos\t\t%\n\t${s+1}\t\t\t\t\t\t${arr[s]}\t\t${porc.toFixed(2)}%`));
    }
    alert(saida)

}
arrResultado();