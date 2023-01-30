/*

	EstruturaSequencial
	Exercício de 16 a 18
	https://wiki.python.org.br/EstruturaSequencial
*/

// 16 - Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da 
//área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a
//tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de
//tinta a serem compradas e o preço total.

/*
const arePintada = parseFloat(prompt("Informr o tamanho em metros quadrados da área a ser pintada: "));
var litroMetro = 54;
var numLatas = 1;
while(arePintada > litroMetro){
    numLatas += 1;
    litroMetro *= 2;
}
var total = numLatas * 80;
alert(`A quantidades de latas de tinta a serem compradas ${numLatas} e o preço total R$ ${total}.`);
console.log((`A quantidades de latas de tinta a serem compradas ${numLatas} e o preço total R$ ${total}.`));
*/

/* 17 - Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da
 área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a 
 tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.

    Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
    comprar apenas latas de 18 litros;
    comprar apenas galões de 3,6 litros;
    misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias. 
*/

const areaParaPintar = parseFloat(prompt("Informe o tamanho em metros quadrados da área a ser pintada: "));
const opcaoCompra = parseInt(prompt("Para comprar apenas latas de 18 litros opção [1].\nPara comprar apenas galões de 3,6 litros opção [2].\nPara misturar latas e galões opção [3]."));

var litroMetro2;
var valorTinta;
var total2;
var numLatas2 = 0;


function lojaDeTintas(litroMetro2, areaParaPintar, valorTinta, tipo) {
    let acumulador = 0;
    while(areaParaPintar > acumulador){
        numLatas2 += 1;
        acumulador = numLatas2 * litroMetro2;
    }
    total2 = numLatas2 * valorTinta;
    alert(`A quantidades de ${tipo} a serem compradas ${numLatas2} e o preço total R$ ${total2}.`);
    console.log((`A quantidades de ${tipo} a serem compradas ${numLatas2} e o preço total R$ ${total2}.`));
}

function lojaDeTintasOpc3(areaParaPintar){
    var areaRestante = areaParaPintar + (0.1 * areaParaPintar);
    var quantidadeLatas = 0;
    var quantidadeGalao = 0;
    var litroMetroLata = 108;
    var litroMetroGalao = 21.6;

    var valorTotalLatas;
    var valorTotalGaloes;
    var totalCompra;
    while(areaRestante > 0){
        if(areaRestante > 58.32) {
            areaRestante -= litroMetroLata;
            quantidadeLatas ++;
        }
        if(areaRestante < 58.32 && areaRestante > 0){
            areaRestante -= litroMetroGalao;
            quantidadeGalao ++;
            
        }
        valorTotalLatas = quantidadeLatas * 80;
        valorTotalGaloes = quantidadeGalao * 25;
        totalCompra = valorTotalLatas + valorTotalGaloes;
    }
  
    prompt(`A quantidade de latas usadas é de ${quantidadeLatas}(s). A Qunatidade de galões é de galões é de ${quantidadeGalao}(s). Valor Total da compra R$ ${totalCompra}`);

    console.log(`A quantidade de latas usadas é de ${quantidadeLatas}(s). A Qunatidade de galões é de galões é de ${quantidadeGalao}(s). Valor Total da compra R$ ${totalCompra}`);

}



if(opcaoCompra == 1) {
    litroMetro2 = 108;
    valorTinta = 80;
    areaParaPintar;
    let tipo = 'latas'
    lojaDeTintas(litroMetro2, areaParaPintar, valorTinta, tipo);
} else if(opcaoCompra == 2){
    litroMetro2 = 21.6;
    valorTinta = 25;
    areaParaPintar;
    let tipo = 'galões'
    lojaDeTintas(litroMetro2, areaParaPintar, valorTinta, tipo);
}else if(opcaoCompra == 3){
    lojaDeTintasOpc3(areaParaPintar)
}

// 18 - Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de
// Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link
// (em minutos).

const tamanhoDoArquivo = parseFloat(prompt("Informe o tamanho do um arquivo para download (em MB): "));
const velocidadeDoLink = parseFloat(prompt("Informe a velocidade do link da Internet (em Mbps): "));
const tempoAproximadoDoDownload = ( ( tamanhoDoArquivo * 8 ) / velocidadeDoLink) / 60;
alert(`O tempo aproximado do download do arquivo usando este link (em minutos) ${tempoAproximadoDoDownload}min`);
