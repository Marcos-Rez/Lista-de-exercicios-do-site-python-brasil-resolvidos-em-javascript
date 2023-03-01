/*
   Exercícios Com Classes
   Exercício 4
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 *4 - Classe Pessoa: Crie uma classe que modele uma pessoa:

    Atributos: nome, idade, peso e altura
    Métodos: Envelhercer, engordar, emagrecer, crescer. Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm. 
 */

class Pessoa {
    constructor(nome, idade, peso, altura){
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
    }
    envelhecer(idade){
        if(idade < 21){
            this._altura += (idade / 2)
            console.log(this._altura)
        }
        return this._idade += idade;
    }
    engordar(peso){
       return this._peso += peso;
    }
    emagrecer(peso){
       return this._peso -= peso;
    }
    crescer(altura){
       return this._altura += altura;
    }

}

let pessoa = new Pessoa('Marcos', 19, 73, 1.73);
console.log(pessoa);
console.log(pessoa.envelhecer(1))
console.log(pessoa.crescer(0.5))
