/*
   Exercícios Com Classes
   Exercício 2
   https://wiki.python.org.br/ExerciciosClasses
*/

/*
Classe Quadrado: Crie uma classe que modele um quadrado:

    Atributos: Tamanho do lado
    Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área; 
*/

class Quadrado {
    constructor(tamanho_do_lado){
        this._tamanho_do_lado = tamanho_do_lado;
    }

    mudar_valor_do_lado(tamanho_do_lado){
        this._tamanho_do_lado = tamanho_do_lado;
    }

    retornar_valor_do_lado(){
        console.log(this._tamanho_do_lado);
        return this._tamanho_do_lado;
    }
    calcular_area(){
        console.log(this._tamanho_do_lado ** 2)
        return this._tamanho_do_lado ** 2;
    }
}

let quadrado = new Quadrado(5);
quadrado.retornar_valor_do_lado()
quadrado.mudar_valor_do_lado(6)
quadrado.retornar_valor_do_lado()
quadrado.calcular_area()