/*
   Exercícios Com Classes
   Exercício 10
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 10 - Classe Bomba de Combustível: Faça um programa completo utilizando classes e métodos que:

    Possua uma classe chamada bombaCombustível, com no mínimo esses atributos:
        tipoCombustivel.
        valorLitro
        quantidadeCombustivel 
    Possua no mínimo esses métodos:
        abastecerPorValor( ) – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
        abastecerPorLitro( ) – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
        alterarValor( ) – altera o valor do litro do combustível.
        alterarCombustivel( ) – altera o tipo do combustível.
        alterarQuantidadeCombustivel( ) – altera a quantidade de combustível restante na bomba. 
    OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. 
 */

    class BombaCombustível{
      constructor(tipoCombustivel, valorLitro, quantidadeCombustivel = 100){
         this._tipoCombustive = tipoCombustivel;
         this._valorLitro = valorLitro;
         this._quantidadeCombustivel = quantidadeCombustivel;
      }
      _abastecerPorValor(valor){
         let litro = valor / this._valorLitro;
         this._alterarQuantidadeCombustivel(litro)
         return `R$${valor} - ${litro}l`;
      _}
      _abastecerPorLitro(litro){
         let valor = litro * this._valorLitro;
         this._alterarQuantidadeCombustivel(litro);
         return `R$${valor} - ${litro}l`;
      }
      _alterarValor(valor){
         return this._valorLitro = valor;
      }
      _alterarCombustivel(tipoCombustive){
        return this._tipoCombustive = tipoCombustive;
      }
      _alterarQuantidadeCombustivel(quantidade){
         this._quantidadeCombustivel -= quantidade;
         console.log('Qunatidade de coombustivel restante: '+ this._quantidadeCombustivel);
         return  this._quantidadeCombustivel;
      }
    }

    let abastecendo_1 = new BombaCombustível('gasolina', 5.08);
    console.log(abastecendo_1);
    console.log( abastecendo_1._abastecerPorValor(5.08));

    console.log(abastecendo_1._abastecerPorLitro(10));

    let abastecendo_2 = new BombaCombustível('Diesel',5.08);
    //console.log(abastecendo_2);
    console.log(abastecendo_2._alterarValor(6.05))
    console.log(abastecendo_2._abastecerPorValor(12.10))
    console.log(abastecendo_2._abastecerPorLitro(10))