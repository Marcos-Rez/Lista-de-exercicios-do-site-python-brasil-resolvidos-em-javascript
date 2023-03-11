/*
   Exercícios Com Classes
   Exercício 15
   https://wiki.python.org.br/ExerciciosClasses
*/


/* 7 - Classe Bichinho Virtual:Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):

Atributos: Nome, Fome, Saúde e Idade b. Métodos: Alterar Nome, Fome, Saúde e Idade; Retornar Nome, Fome, Saúde e Idade Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer momento. 
*/

/**
 *15 - Classe Bichinho Virtual++: Melhore o programa do bichinho virtual, permitindo que o usuário especifique quanto de comida ele fornece ao bichinho e por quanto tempo ele brinca com o bichinho. Faça com que estes valores afetem quão rapidamente os níveis de fome e tédio caem. 
 */

class BichinhoVirtual{
     constructor(nome, fome, saude, idade, humor){
        this._nome = nome;
        this._fome = fome;
        this._saude = saude;
        this._idade = idade;
        this._humor = humor;
     }

     get nome(){
        return this._nome;
     }
     set nome(nome){
        this._nome = nome;
     }
     get fome(){
        return this._fome;
     }
     set fome(fome){
        this._fome = fome;
     }
     get idade(){
        return this._idade;
     }
     set idade(idade){
        this._idade = idade;
     }
     get saude(){
        return this._saude;
     }
     set saude(saude){
        this._saude = saude;
     }

     darRemedio(){
      this._saude = +20;
      return `Saudével. Saúde ${this._saude}`;
     }

     darComida(comida){
         
         if(comida > 5){
            return `Você so pode dar até 5 de comida por vez. Fome ${this._fome}, saúde ${this._fome}.`
         }else if(this.fome < -5){
            this._saude = -20;
            return `${this.nome} esta doente, você deu muita comida para ele. Saude ${this._saude}`;
         }else{
            this._fome -= comida;
            return `Fome ${this.fome}, saúde ${this.saude}.`;
         }
     }

     brincar(minutos){
        if(minutos > 5){
            return `Você so pode brincar com ele 5 minutos por vez.`
        }else{
            return this._humor += minutos;
        }
     }


     verHumor(){
       this._humor = (-this._fome) + (+this._saude) ;
       
        if(this._humor <= 4){
           return 'Mal humorado! '+this._humor;
        }else if(this._humor > 4 && this._humor <= 6){
           return 'Intediado! '+this._humor;
        }else{
           return 'Bem humorado! '+this._humor;
        }
     }
}

let bicho = new BichinhoVirtual('Tamagushi', 5, 10, 1, 10);
console.log('fome: '+bicho.fome)
console.log('saude: '+bicho.saude)

console.log('humor: '+bicho.verHumor())
console.log(bicho.darComida(5))
console.log('humor: '+bicho.verHumor())
console.log(bicho.darComida(5))
console.log('humor: '+bicho.verHumor())
console.log(bicho.darComida(5))
console.log(bicho.darComida(5))
console.log(bicho.fome)
console.log(bicho.saude)

console.log('humor: '+bicho.verHumor())
console.log(bicho.darRemedio())
console.log('humor: '+bicho.verHumor())
console.log(bicho.brincar(5))



