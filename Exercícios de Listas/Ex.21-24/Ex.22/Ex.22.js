/*
 *  Exercícios Com Listas 
    Exercício 22
    https://wiki.python.org.br/ExerciciosListas
*/
/**
 * 22 - Sua organização acaba de contratar um estagiário para trabalhar no Suporte de Informática, com a intenção de fazer um levantamento nas sucatas encontradas nesta área. A primeira tarefa dele é testar todos os cerca de 200 mouses que se encontram lá, testando e anotando o estado de cada um deles, para verificar o que se pode aproveitar deles.

    Foi requisitado que você desenvolva um programa para registrar este levantamento. O programa deverá receber um número indeterminado de entradas, cada uma contendo: um número de identificação do mouse o tipo de defeito:
    necessita da esfera;
    necessita de limpeza; 
    necessita troca do cabo ou conector;
    quebrado ou inutilizado
    Uma identificação igual a zero encerra o programa. Ao final o programa deverá emitir o seguinte relatório: 

Quantidade de mouses: 100

Situação                        Quantidade              Percentual
1- necessita da esfera                  40                     40%
2- necessita de limpeza                 30                     30%
3- necessita troca do cabo ou conector  15                     15%
4- quebrado ou inutilizado              15                     15%
 */

function entradaDeDados(){
    let identificacao;
    let arrRegistros = [];
    while(identificacao != 0){

        identificacao = parseInt(prompt('Informe o número de identificação do mouse ou [0 - sair]: '));
        while(isNaN(identificacao) || (identificacao < 5 && identificacao > 0)){
            identificacao = parseInt(prompt('Informe o número de identificação do mouse ou [0 - sair]: '));
        }
        if(identificacao == 0){
            break;
        }

        let situacao = parseInt(prompt('Informe a situação do mouse.\n[1 - necessita da esfera ]\n[2 - necessita de limpeza]\n[3 - necessita troca do cabo ou conector]\n[4 - quebrado ou inutilizado]: '));
        while(isNaN(situacao) || situacao < 0 || situacao > 4){
            situacao = parseInt(prompt('Informe a situação do mouse.\n[1 - necessita da esfera ]\n[2 - necessita de limpeza]\n[3 - necessita troca do cabo ou conector]\n[4 - quebrado ou inutilizado]: '));
        }

        arrRegistros.push(identificacao);
        arrRegistros.push(situacao);
    }
    return arrRegistros;
}


function levantamentoDeMouses(){
    let arrEntradaDeDados = entradaDeDados();
    let arrResultados = [0, 0, 0, 0];
    let arrParametros = [1, 2, 3, 4];
    let arrNomesDosParametros = ['Necessita da esfera', 'Necessita de limpeza', 'Necessita troca do cabo ou conector', 'quebrado ou inutilizado'];
    let arrSaidaDosResultados = [];

    arrSaidaDosResultados.push(`Quantidade de mouses:  ${arrEntradaDeDados.length / 2}\nSituação\t\t\t\t\t\t\t\tQuantidade\tPercentual\n`);

    for(let i = 0; i < arrEntradaDeDados.length; i++){
        for(let c = 0; c < arrParametros.length; c++){
            if(arrEntradaDeDados[i] == arrParametros[c]){
                arrResultados[c] += 1;
            }
        }
    }
    
    for(let v = 0; v < arrResultados.length; v++){
        let percentual = ((arrResultados[v] * 100) / ((arrEntradaDeDados.length) / 2));
        arrSaidaDosResultados.push(`${v+1} - ${arrNomesDosParametros[v]}\t\t\t\t${arrResultados[v]}\t\t\t${percentual.toFixed(2)}%\n`);
    }

    let imprimir = arrSaidaDosResultados.join('');
    alert(imprimir)


}
levantamentoDeMouses()