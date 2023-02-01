/*
    EstruturaDeRepeticao
    Exercícios de 48 a 50
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

/*
Faça um programa que mostre os n termos da Série a seguir:

      S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 

    Imprima no final a soma da série.
*/

/*
 48 - Faça um programa que peça um numero inteiro positivo e em seguida mostre este numero invertido.
    Exemplo:
      12376489
      => 98467321
 */
/*
var arr = [];
var numeroInteiro = parseInt(prompt("Informe um numero inteiro positivo"));
while(numeroInteiro < 0 || isNaN(numeroInteiro)){
  numeroInteiro = parseInt(prompt("Informe um numero inteiro positivo"));
}
numeroInteiro = String(numeroInteiro);

for(let i = numeroInteiro.length; i >= 0; i--){
  arr.push(numeroInteiro[i]);
}
let saida = arr.join("");
alert(saida)
*/

/*
  49 - Faça um programa que mostre os n termos da Série a seguir:
      S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 
      Imprima no final a soma da série. 
*/
var h = 0;
var n = 4;

var arr = [];
arr.push(`S = `);
var ac = 1;
for(let i = 0; i < n; i++){
  if(i == 0){
    arr.push(`${i+1}/${i+1}`);
    arr.push(` + `);
  }if(i == 1){
    arr.push(`${i+1}/${i+2}`);
    arr.push(` + `)
  }if(i > 1){
    arr.push(`${i+1}/${i+ac}`);
    arr.push(` + `);
  }
  if(i == (n - 1)){
    arr.push(`... n/m ...`)
  }
  ac++;
}

var s1 = arr.join("");

var Ex49Soma = 0;

for(let i = 0; i < arr.length; i++){
  if(i % 2 != 0 && i != 0 && i < 8){
    console.log(arr[i]);
    Ex49Soma += arr[i];
  }
}
console.log(s1);



/*
//50 - Sendo H = 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, Faça um programa que calcule o valor de H com N termos.
var arr2 = [];
for(let i = 2; i <= n; i++){
  var x = 1 / (i/1);
  arr2.push(x);

}
var t = arr2.length;
console.log(` Sendo H = 1 + 1/2 + 1/3 + 1/4 + ... + 1/${n}, o valor de H é: ${arr2[t-1]}`)

/*
 51 - Faça um programa que mostre os n termos da Série a seguir:
      S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 
      Imprima no final a soma da série.  
*/
