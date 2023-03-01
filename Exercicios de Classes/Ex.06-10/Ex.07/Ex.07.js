/*
   Exercícios Com Classes
   Exercício 7
   https://wiki.python.org.br/ExerciciosClasses
*/
/**
 * 7 - Classe Bichinho Virtual:Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):

    Atributos: Nome, Fome, Saúde e Idade b. Métodos: Alterar Nome, Fome, Saúde e Idade; Retornar Nome, Fome, Saúde e Idade Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer momento. 
 */

    class BichinhoVirtual{
         constructor(nome, fome, saude, idade){
            this._nome = nome;
            this._fome = fome;
            this._saude = saude;
            this._idade = idade;
            
         }

         get nome(){
            return this._nome;
         }
         set nome(nome){
            this._nome = nome;
         }
         get fome(){
            return this_.fome;
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

         humor(){
            let humor = (-this._fome) + (+this._saude);
            console.log('humor: '+humor);

            if(humor < 5){
               return 'Mal humorado!';
            }else{
               return 'Bem humorado!';
            }
         }
    }

    let bicho = new BichinhoVirtual('Tamagushi', 5, 10);
    console.log(bicho.humor())
    

