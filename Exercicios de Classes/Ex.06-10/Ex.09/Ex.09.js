/*
   Exercícios Com Classes
   Exercício 9
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 * 9 - Classe Ponto e Retangulo: Faça um programa completo utilizando funções e classes que:

   [ok] Possua uma classe chamada Ponto, com os atributos x e y.
    [ok] Possua uma classe chamada Retangulo, com os atributos largura e altura.
    [ok] Possua uma função para imprimir os valores da classe Ponto
   [ok] Possua uma função para encontrar o centro de um Retângulo.
    [ok] Você deve criar alguns objetos da classe Retangulo.
    [ok] Cada objeto deve ter um vértice de partida, por exemplo, o vértice inferior esquerdo do retângulo, que deve ser um objeto da classe Ponto.
    [ok]A função para encontrar o centro do retângulo deve retornar o valor para um objeto do tipo ponto que indique os valores de x e y para o centro do objeto.
    [ok]O valor do centro do objeto deve ser mostrado na tela
    [ok]Crie um menu para alterar os valores do retângulo e imprimir o centro deste retângulo. 
 */

    class Ponto{
      constructor(x, y){
         this._x = x;
         this._y = y;
      }

      _imprimirX(){
         console.log(this._x);
         return this._x;
      }
      _imprimirY(){
         console.log(this._y);
         return this._y;
      }
      _centroDoRetangulo(_largura, _altura){
         let x = _largura / 2;
         let y = _altura / 2;
         console.log(x, y)
         return [x, y];
      }
    }


    class Retangulo extends Ponto{
      constructor(x, y, largura, altura){
         super(x, y)
         this._largura = largura;
         this._altura = altura;
      }

      get altura(){
         return this._altura;
      }
      set altura(altura){
         this._altura = altura
      }

      get largura(){
         return this._largura;
      }
      set largura(largura){
         this._largura = largura;
      }

    }


    let p1 = new Ponto(1, 1);
    let r1 = new Retangulo(p1._x, p1._y, 10, 4);
    console.log(r1)

    let centro = p1._centroDoRetangulo(r1._largura, r1._altura)
    console.log('centro: '+centro)
 