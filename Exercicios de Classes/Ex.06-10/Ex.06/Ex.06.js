/*
   Exercícios Com Classes
   Exercício 6
   https://wiki.python.org.br/ExerciciosClasses
*/
/**
 * 6 - Classe TV: Faça um programa que simule um televisor criando-o como um objeto. O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume. Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.
 */

class ControleRemoto{
   constructor(power = false, canal, volume){
      this._power = power;
      this._canal = canal;
      this._volume = volume;
   }

   ligarDesligar(){
      if(this._power){
         return this._power = false;
      }else{
        return this._power = true;
      }
   }

   canal(canal){
      if(canal > 0 && canal < 100){
         return this._canal = canal;
      }else{
         return 'Canal inexistente.'
      }
   } 

   volumeMais(){
     if(this._volume < 20){
      return this._volume += 1;
     }else{
      return this._volume;
     }
   }
   volumeMenos(){
      if(this._volume > 0){
         return this._volume -= 1;
      }else{
         return this._volume;
      }
   }
}

let controle = new ControleRemoto(false, 13, 5);

console.log(controle.ligarDesligar())
console.log(controle.ligarDesligar())
console.log(controle.canal(7))

console.log(controle.volumeMais())
console.log(controle.volumeMenos())