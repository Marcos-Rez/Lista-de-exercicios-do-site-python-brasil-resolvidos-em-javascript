/*
   Exercícios com String 
   Exercício 3 a 5
   https://wiki.python.org.br/ExerciciosComStrings
*/
/** 
 * 3 - Nome na vertical. Faça um programa que solicite o nome do usuário e imprima-o na vertical.

    F
    U
    L
    A
    N
    O
 */

function imprimirNome(){
    let nome = prompt('Informe seu nome: ');
    let arrNomes = [];
    for(let i of nome){
        arrNomes.push(i+'\n');
    }

    let imprimir = arrNomes.join(' ');
    alert(imprimir)
}
imprimirNome();

/**
 * 4 - Nome na vertical em escada. Modifique o programa anterior de forma a mostrar o nome em formato de escada.

    F
    FU
    FUL
    FULA
    FULAN
    FULANO
 */

    function imprimirNome2(){
      let nome = prompt('Informe seu nome: ');
      let arrNomes = [];

      for(let i = 0; i < nome.length; i++){
         for(let c = 0; c < i+1; c++){
            arrNomes.push(nome[c])
         }
         arrNomes.push('\n')
      }
  
      let imprimir = arrNomes.join('');
      //console.log(imprimir)
      alert(imprimir)
  }
  imprimirNome2();

  /**
   * 5 - Nome na vertical em escada invertida. Altere o programa anterior de modo que a escada seja invertida.

    FULANO
    FULAN
    FULA
    FUL
    FU
    F
   */

    function imprimirNome3(){
      let nome = prompt('Informe seu nome: ');
      
      let arrNomes = [];

      for(let i = nome.length; i > 0; i--){
         for(let c = 0; c < i; c++){
            arrNomes.push(nome[c])
         }
         arrNomes.push('\n')
      }
  
      let imprimir = arrNomes.join('');
      //console.log(imprimir)
      alert(imprimir)
  }
  imprimirNome3();