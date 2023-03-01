/*
   Exercícios Com Classes
   Exercício 5
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 * Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes: alterarNome, depósito e saque; No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios. 
 */
class ContaCorrente{
   constructor(numero, nome, saldo = 0){
      this._numero = numero;
      this._nome = nome;
      this._saldo = saldo;
   }

   set nome(nome){
      this._nome = nome;
   }
   get nome(){
      return this._nome;
   }
   get saldo(){
      return this._saldo;
   }
  deposito(valor){
      if(valor > 0){
         this._saldo += valor;
         return valor;
      }else{
         return "Erro! O valor de deposito deve ser maior que 0."
      }
   }

   saque(valor){
      if(valor <= this._saldo){
         this._saldo -= valor;
         return valor;
      }else{
         return "Erro! O valor de saque deve ser menor ou igual ao saldo."
      }
   }
}

let cc = new ContaCorrente(1230, 'Marcos');
console.log(cc.nome)
console.log(cc.nome = 'joao');
console.log(cc.saldo);
console.log(cc.deposito(100))
console.log(cc.saldo)
console.log(cc.saque(99))
console.log(cc.saldo)
