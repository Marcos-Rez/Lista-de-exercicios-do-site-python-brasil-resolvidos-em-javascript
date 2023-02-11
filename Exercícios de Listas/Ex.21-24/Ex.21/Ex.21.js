/*
 *  Exercícios Com Listas 
    Exercício 21
    https://wiki.python.org.br/ExerciciosListas
*/

/**
 * 21 - Faça um programa que carregue uma lista com os modelos de cinco carros (exemplo de modelos: FUSCA, GOL, VECTRA etc). Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:

    O modelo do carro mais econômico;
    Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 2,25 o litro. Abaixo segue uma tela de exemplo. O disposição das informações deve ser o mais próxima possível ao exemplo. Os dados são fictícios e podem mudar a cada execução do programa. 

Comparativo de Consumo de Combustível

Veículo 1
Nome: fusca
Km por litro: 7
Veículo 2
Nome: gol
Km por litro: 10
Veículo 3
Nome: uno
Km por litro: 12.5
Veículo 4
Nome: Vectra
Km por litro: 9
Veículo 5
Nome: Peugeout
Km por litro: 14.5

Relatório Final
 1 - fusca           -    7.0 -  142.9 litros - R$ 321.43
 2 - gol             -   10.0 -  100.0 litros - R$ 225.00
 3 - uno             -   12.5 -   80.0 litros - R$ 180.00
 4 - vectra          -    9.0 -  111.1 litros - R$ 250.00
 5 - peugeout        -   14.5 -   69.0 litros - R$ 155.17
O menor consumo é do peugeout.
 */

function consumoModelo(){
    let titulo = '\t\tOs carros mais econômicos do Brasil em 2022\n';
    let arrModelos = ['Chevrolet Onix 1.0', 'VW Virtus 170 TSI', 'Fiat Argo 1.0', 'Peugeot 208 1.0', 'Renault Kwid 1.0 '];
    let arrConsumo = [13.1, 13.8, 14.1, 14.7, 15.3];
    let arrSaida1 = [];
    let maisEconomico = '';
    let consumo;
    arrSaida1.push(titulo)
    for(let i = 0; i < arrModelos.length; i++){
        if(i == 0){
            consumo = arrConsumo[0];
            maisEconomico = arrModelos[0];
        }
  
        if(arrConsumo[i] <= consumo){
            consumo = arrConsumo[i];
            maisEconomico = arrModelos[i];
        }
        arrSaida1.push(`\nVeículo ${i+1}\nNome: ${arrModelos[i]}\nKm por litro: ${arrConsumo[i]}\n`);
    }


    for(let v = 0; v < arrModelos.length; v++){
        let mil_Km = (1000/arrConsumo[v]);
        let valor = mil_Km * 2.25;
        arrSaida1.push(`\n${v+1}\t-\t${arrModelos[v]}\t-\t${arrConsumo[v]}\t-\t${mil_Km.toFixed(3)} litros - R$ ${valor.toFixed(2)}\n`);
    }
    let saida = arrSaida1.join('');
    alert(saida)

}
consumoModelo()