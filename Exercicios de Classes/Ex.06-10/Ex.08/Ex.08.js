/*
   Exercícios Com Classes
   Exercício 8
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 * 8 - Classe Macaco: Desenvolva uma classe Macaco,que possua os atributos nome e bucho (estomago) e pelo menos os métodos comer(), verBucho() e digerir(). Faça um programa ou teste interativamente, criando pelo menos dois macacos, alimentando-os com pelo menos 3 alimentos diferentes e verificando o conteúdo do estomago a cada refeição. Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal? 
 */

class Macaco{
   constructor(nome, estomago){
      this._nome = nome;
      this._estomago = estomago;
   }

   _comer(alimento = 'banana'){
      return `Comendo ${alimento}.`;
   }
   _verbucho(vazio){
      return this._comer(vazio)
   }
   _digerir(digeriu = false){
      if(digeriu){
         return true;
      }else{
         return false;
      }
   }
}

let macaco01 = new Macaco('mac1', 'vazio');
console.log(macaco01._verbucho())
console.log(macaco01._comer('coco'));
console.log(macaco01._digerir(true))
console.log(macaco01._comer('castannha'))
console.log(macaco01._verbucho())

let macaco2 = new Macaco('mac', 'vazio');
console.log(macaco2._verbucho('vazio'));
console.log(macaco2._comer('macaco01'))

