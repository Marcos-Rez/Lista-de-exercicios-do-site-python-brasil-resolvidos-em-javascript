/*
   Exercícios Com Classes
   Exercício 1
   https://wiki.python.org.br/ExerciciosClasses
*/

/**
 * 1 - Classe Bola: Crie uma classe que modele uma bola:

    Atributos: Cor, circunferência, material
    Métodos: trocaCor e mostraCor 
 */

    class Bola {
        constructor(cor, circunferencia, material){
            this._cor = cor;
            this._circunferencia = circunferencia;
            this._material = material;
        }

        trocaCor(cor){
            this._cor = cor;
        }
        mostraCor(){
            console.log(this._cor);
            return this._cor;
        }
    }

    let boliche = new Bola('azul', 14, 'metal');
    console.log(boliche)

    boliche.trocaCor('preto');
    boliche.mostraCor()