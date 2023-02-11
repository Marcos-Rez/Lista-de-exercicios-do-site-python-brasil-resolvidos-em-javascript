/*
 *  Exercícios Com Listas 
    Exercício 23
    https://wiki.python.org.br/ExerciciosListas
*/

/**
 *23 -  A ACME Inc., uma empresa de 500 funcionários, está tendo problemas de espaço em disco no seu servidor de arquivos. Para tentar resolver este problema, o Administrador de Rede precisa saber qual o espaço ocupado pelos usuários, e identificar os usuários com maior espaço ocupado. Através de um programa, baixado da Internet, ele conseguiu gerar o seguinte arquivo, chamado "usuarios.txt":

alexandre       456123789 -> 456123789 / (1024*1024) = 434,99 MB
anderson        1245698456
antonio         123456456
carlos          91257581
cesar           987458
rosemary        789456125

Neste arquivo, o nome do usuário possui 15 caracteres. A partir deste arquivo, você deve criar um programa que gere um relatório, chamado "relatório.txt", no seguinte formato:

ACME Inc.               Uso do espaço em disco pelos usuários
------------------------------------------------------------------------
Nr.  Usuário        Espaço utilizado     % do uso

1    alexandre       434,99 MB             16,85%
2    anderson       1187,99 MB             46,02%
3    antonio         117,73 MB              4,56%
4    carlos           87,03 MB              3,37%
5    cesar             0,94 MB              0,04%
6    rosemary        752,88 MB             29,16%

Espaço total ocupado: 2581,57 MB
Espaço médio ocupado: 430,26 MB

O arquivo de entrada deve ser lido uma única vez, e os dados armazenados em memória, caso sejam necessários, de forma a agilizar a execução do programa. A conversão da espaço ocupado em disco, de bytes para megabytes deverá ser feita através de uma função separada, que será chamada pelo programa principal. O cálculo do percentual de uso também deverá ser feito através de uma função, que será chamada pelo programa principal. 
 */

function conversaoDeDados(){
    let arrDados = ['alexandre', 456123789, 'anderson', 1245698456, 'antonio', 123456456, 'carlos', 91257581, 'cesar', 987458, 'rosemary', 789456125];

    let arrConvertidoParaMB = [];

    for(let i = 0; i < arrDados.length; i++){
        if(i % 2 == 0){
            arrConvertidoParaMB.push(arrDados[i]);
        }else{
            let MB = arrDados[i] / (1024 * 1024);
            arrConvertidoParaMB.push(MB);
        }
    }
    return arrConvertidoParaMB;
}

function calculaPorcentagem(){
    let dados = conversaoDeDados();
    let arrSaidaDados = [];
    let arrNomes = [];
    let arrValores = [];
    let total_MB = 0;
    for(let i = 0; i < dados.length; i++){
        if(i % 2 != 0){
            total_MB += dados[i];
            arrValores.push(dados[i]);
        }
        if(i % 2 == 0){
            arrNomes.push(dados[i]);
        }
    }
    arrSaidaDados.push('ACME Inc.\t\tUso do espaço em disco pelos usuários\n------------------------------------------------------------------------\nNr.  Usuário\t\tEspaço utilizado\t% do uso.\n')
    
    let arrPercentual = [];
    let valor;
    for(let v = 0; v < arrValores.length; v++){
        valor = (arrValores[v] * 100) / total_MB;
        arrPercentual.push(valor);
    }


    for(let s = 0; s < arrValores.length; s++){
        arrSaidaDados.push(`${s+1}\t${arrNomes[s]}\t\t${arrValores[s].toFixed(2)} MB\t\t${arrPercentual[s].toFixed(2)}%\n`)
    }

    return arrSaidaDados;

}


function main(){
    let imprimir = calculaPorcentagem();
    imprimir = imprimir.join('');
    console.log(imprimir);
    alert(imprimir)
}
main()