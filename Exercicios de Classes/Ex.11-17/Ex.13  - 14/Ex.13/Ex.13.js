/*
   Exercícios Com Classes
   Exercício 13
   https://wiki.python.org.br/ExerciciosClasses
*/
/**
 * 13 - Classe Funcionário: Implemente a classe Funcionário. Um empregado tem um nome (um string) e um salário(um double). Escreva um construtor com dois parâmetros (nome e salário) e métodos para devolver nome e salário. Escreva um pequeno programa que teste sua classe. 
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

}

let funcionario = new Funcionario('Marcos', 9000);
console.log(funcionario.nome)
console.log(funcionario.nome = 'Rezende')
console.log(funcionario.salario)
console.log(funcionario.salario = 10000)