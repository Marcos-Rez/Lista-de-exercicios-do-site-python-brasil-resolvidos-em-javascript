/*
   Exercícios Com Classes
   Exercício 12
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 * 12 - Classe Conta de Investimento: Faça uma classe contaInvestimento que seja semelhante a classe contaBancaria, com a diferença de que se adicione um atributo taxaJuros. Forneça um construtor que configure tanto o saldo inicial como a taxa de juros. Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta. Escreva um programa que construa uma poupança com um saldo inicial de R$1000,00 e uma taxa de juros de 10%. Depois aplique o método adicioneJuros() cinco vezes e imprime o saldo resultante. 
 */

class ContadeInvestiment{
   constructor(saldo_inicial = 1000 , taxa_juros = 0.1){
      this._saldo_inicial = saldo_inicial;
      this._taxa_juros = taxa_juros
   }

   _adicione_juros(){
      return this._taxa_juros += 0.1;
   }

   _saldo(){
      let saldo = (this._saldo_inicial - (this._taxa_juros * this._saldo_inicial));
     // console.log(saldo)
       return this._saldo_inicial = saldo;
   }

}
let c = new ContadeInvestiment();
console.log(c)
console.log(c._adicione_juros())
console.log(c._adicione_juros())
console.log(c._adicione_juros())
console.log(c._adicione_juros())
console.log(c._adicione_juros())
console.log(c._saldo())

