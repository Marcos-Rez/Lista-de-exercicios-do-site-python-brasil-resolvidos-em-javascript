/*
   Exercícios Com Classes
   Exercício 11
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 * Classe carro: Implemente uma classe chamada Carro com as seguintes propriedades:

    Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
    O consumo é especificado no construtor e o nível de combustível inicial é 0.
    Forneça um método andar( ) que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
    Forneça um método obterGasolina( ), que retorna o nível atual de combustível.
    Forneça um método adicionarGasolina( ), para abastecer o tanque. Exemplo de uso:

    meuFusca = Carro(15);           # 15 quilômetros por litro de combustível. 
    meuFusca.adicionarGasolina(20); # abastece com 20 litros de combustível. 
    meuFusca.andar(100);            # anda 100 quilômetros.
    meuFusca.obterGasolina()        # Imprime o combustível que resta no tanque.
 */

    class Carro{
        constructor(consumo = 15, combustivel = 0){
            this._consumo = consumo;
            this._combustivel = combustivel;
        }
        _andar(distancia){
            this._combustivel -= this._consumo * distancia;
            return distancia;
        }
        _obterQuantidadeGasolina(){
            return this._combustivel;
        }
        _adicionarGasolina(quantidade){
           return this._combustivel += quantidade;
        }
    }

    let carro1 = new Carro();
    console.log(carro1)
    console.log(carro1._adicionarGasolina(15))
    console.log(carro1._adicionarGasolina(35))
    console.log(carro1._andar(1))
    console.log(carro1._obterQuantidadeGasolina())
    console.log(carro1._andar(2.333333))
    console.log(carro1._obterQuantidadeGasolina())

