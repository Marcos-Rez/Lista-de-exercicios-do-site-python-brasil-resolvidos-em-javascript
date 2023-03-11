/*
   Exercícios Com Classes
   Exercício 13 - 14
   https://wiki.python.org.br/ExerciciosClasses
*/
/**
 * 13 - Classe Funcionário: Implemente a classe Funcionário. Um empregado tem um nome (um string) e um salário(um double). Escreva um construtor com dois parâmetros (nome e salário) e métodos para devolver nome e salário. Escreva um pequeno programa que teste sua classe. 
 * 
 * 14 - Aprimore a classe do exercício anterior para adicionar o método aumentarSalario (porcentualDeAumento) que aumente o salário do funcionário em uma certa porcentagem.

    Exemplo de uso:

      harry=funcionário("Harry",25000)
      harry.aumentarSalario(10)
 */

class Funcionario{

   constructor(nome, salario){
      this._nome = nome;
      this._salario = salario;
   }

   get nome(){
      return this._nome;
   }
   set nome(nome){
      this._nome = nome;
   }

   get salario(){
      return this._salario;
   }
   set salario(salario){
      this._salario = salario;
   }

   _aumentarSalario(porcentagemDeaumento){
      this._salario += (this._salario * porcentagemDeaumento)
   }

}

let funcionario = new Funcionario('Marcos', 9000);
console.log(funcionario.nome)
console.log(funcionario.nome = 'Rezende')
console.log(funcionario.salario)
console.log(funcionario.salario = 10000)
console.log(funcionario._aumentarSalario(0.1))
console.log(funcionario.salario)