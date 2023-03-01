/*
   Exercícios Com Classes
   Exercício 3
   https://wiki.python.org.br/ExerciciosClasses
*/

/*
 3 - Classe Retangulo: Crie uma classe que modele um retangulo:

    Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher);
    Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
    Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local. 
*/

class Retangulo{
    constructor(base, altura){
        this._base = base;
        this._altura = altura;

    }


    set base(base){
        this._base = base;
    }
    get base(){
        return this._base; 
    }


    set altura(altura){
        this._altura = altura;
    }
    get altura(){
        return this._altura;
    }



    calcularArea(){
        let a = this._base * this._altura;
        console.log(`${this._base} x ${this._altura} = ${a}`)
        return a;
    } 

    calcularPerimetro(){
        let p = 2 * (this._base + this._altura);
        console.log(`${this._base} + ${this._altura} = ${p}`);
        return p;
    }
}
/*
let base = parseFloat(prompt('Informe a base do triangulo: '));
let altura = parseFloat(prompt('Informe a altura do triangulo: '));
*/
let base = 12;
let altura = 5;

let retangulo = new Retangulo(12, 5)
retangulo.calcularArea();

retangulo.base = 11;
console.log(retangulo.base)

retangulo.altura = 7;
console.log(retangulo.altura)

retangulo.calcularPerimetro()
