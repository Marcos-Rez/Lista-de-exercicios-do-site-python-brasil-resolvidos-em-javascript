/*

*/

/* 26 -Um posto está vendendo combustíveis com a seguinte tabela de descontos:

    Álcool:
    até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro.
    Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte
    forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
    o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/
const numeroDeLitrosVendidos = parseFloat(prompt("Informe o número de litros vendidos: "));
const tipoDeCombustivel = prompt("Informe o tipo de combustível (da seguinte forma: [A-álcool], [G-gasolina]): ");
var descontoPorLitro;
var valorLitro;
var nomeDoProduto;
var totalDesconto;
var total;
if(tipoDeCombustivel[0] == "A" || tipoDeCombustivel[0] == "a"){
    nomeDoProduto = "álcool";
    valorLitro = 1.90;
    if(numeroDeLitrosVendidos <= 20){
        descontoPorLitro = 0.03;
    }else if(numeroDeLitrosVendidos > 20){
        descontoPorLitro = 0.05;
    }    
}else if(tipoDeCombustivel[0] == "G" || tipoDeCombustivel[0] == "g"){
    nomeDoProduto = "gasolina";
    valorLitro = 2.50;
    if(numeroDeLitrosVendidos <= 20){
        descontoPorLitro = 0.04;
    }else if(numeroDeLitrosVendidos > 20){
        descontoPorLitro = 0.06;
    }
}else{
    alert("Opção invalida! Tente novamente.");
}

totalDesconto = descontoPorLitro * numeroDeLitrosVendidos;
total = (numeroDeLitrosVendidos * valorLitro) - totalDesconto;
alert(`Valor do litro do(a) ${nomeDoProduto} R$${valorLitro}.\nLitros vendidos ${numeroDeLitrosVendidos}L.\nDesconto por litro R$${descontoPorLitro}.\nTotal de desconto R$${totalDesconto}.\nTotal R$${total}.`);

/*
    27 - Uma fruteira está vendendo frutas com a seguinte tabela de preços:

                          Até 5 Kg           Acima de 5 Kg
    Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
    Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg

    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10%
    sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e
    escreva o valor a ser pago pelo cliente. 
*/

const fruta = prompt("Informe o tipo de fruta [1 - Morango] [2 - Maçã]: ");
const kilo = parseFloat(prompt("Informe a quantidade deseja em quilos: "));
var totalSemDescontoFruta; 
var descontoDafruta;
var total;
var frutaTipo;
var valor;
if(fruta == 1){
    frutaTipo = "morango";
    valor = kilo <= 5 ? 2.50 : 2.20;
}else if(fruta == 2){
    frutaTipo = "maçã"
    valor = kilo <= 5 ? 1.80 : 1.50;
}

totalSemDescontoFruta = valor * kilo;

descontoDafruta = kilo > 8 || totalSemDescontoFruta > 25.00 ? 0.1 : 0;

total = totalSemDescontoFruta - (totalSemDescontoFruta * descontoDafruta);

alert(`O quilo do(a) ${frutaTipo} R$${valor}.\nTotal de ${kilo}kg.\nDesconto ${descontoDafruta * 100}%.\nTotal R$${total}.`);
/*
    27 - O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:

                          Até 5 Kg           Acima de 5 Kg
    File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
    Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
    Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg

    Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites
    para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5%
    sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom
    fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e
    valor a pagar.
*/


var continuar = 's';
var formaDePagamento = prompt("Qual a forma de pagamento [1 - Cartão tabajara] [2 - Outros Cartões] [3 - Dinheiro] : ");
var quantidadeFile = 0;
var quantidadeDeAlcatra = 0;
var quantidadeDePicanha = 0;
var promocaoCarne = 0;
var resp;
while(continuar === 's'){

    const tipoDeCarne = parseInt(prompt("Informe o tipo de carne [1 - File Duplo] [2 - Alcatra] [3 - Picanha]: "));
    const quantidadeDeCarne = parseFloat(prompt("Informe a quantidade de carne em quilos: "));
   
    
    var totalDoValorDasCarnes;
    var descontoDoCartao;
    var totalPicanha;
    var totalAlcatra;
    var totalFile;
    var pagamentoNo;

    if(formaDePagamento == 1){
        pagamentoNo = "cartão tabajara";
    }else if(formaDePagamento == 2){
        pagamentoNo = 'outros cartões';
    }else if(formaDePagamento == 3) {
        pagamentoNo = 'dinheiro';
    }

    if(tipoDeCarne == 1){
        quantidadeFile = quantidadeDeCarne;
    }else if(tipoDeCarne == 2){
        quantidadeDeAlcatra = quantidadeDeCarne;
    }else if(tipoDeCarne == 3){
        quantidadeDePicanha = quantidadeDeCarne;
    }else{
        alert("Erro! Opção invalida! Escolha  [1 - File Duplo] [2 - Alcatra] [3 - Picanha]: ");
    }

    let todasASquantidadesMenoresOuIguais5Quilos = quantidadeDePicanha <= 5 && quantidadeDeAlcatra <= 5 && quantidadeFile <= 5 ? true : false;
    let todasAsQuantidadesMaioresQue5QuilosOuZero = ((quantidadeDePicanha > 5) && (quantidadeDeAlcatra > 5) && (quantidadeFile > 5)) || ((quantidadeDePicanha > 5) && (quantidadeDeAlcatra > 5) && (quantidadeFile == 0)) || ((quantidadeDePicanha > 5) && (quantidadeFile > 5) && (quantidadeDeAlcatra == 0)) || ((quantidadeDeAlcatra > 5) && (quantidadeFile > 5) && (quantidadeDePicanha == 0)) ? true : false;


    function todasAsOpcoesComMenosDe5Quilos(){
        if(quantidadeDePicanha <= quantidadeDeAlcatra && quantidadeDeAlcatra < quantidadeFile){
            promocaoCarne = 4.9;
            totalFile = quantidadeFile * promocaoCarne; 
        }else{
            promocaoCarne = 5.8;
            totalFile = quantidadeFile * promocaoCarne; 
        }

        if(quantidadeDePicanha < quantidadeDeAlcatra && quantidadeDeAlcatra >= quantidadeFile){
            promocaoCarne = 5.9;
            totalAlcatra = quantidadeDeAlcatra * promocaoCarne;
        }else{
            promocaoCarne = 6.8;
            totalAlcatra = quantidadeDeAlcatra * promocaoCarne;
        }

        if(quantidadeDePicanha >= quantidadeDeAlcatra && quantidadeDePicanha >= quantidadeFile){
            promocaoCarne = 6.9;
            totalPicanha = quantidadeDePicanha * promocaoCarne;
        }else{
            promocaoCarne = 7.8;
            totalPicanha = quantidadeDePicanha * promocaoCarne;
        }

        if(formaDePagamento == 1){
            descontoDoCartao = 0.05;  
        }else{
            descontoDoCartao = 0;
        }
        let total = totalPicanha + totalAlcatra + totalFile; 
        totalDoValorDasCarnes = total - (total * descontoDoCartao);
        

        return `Todo menos de 5kg. Picanha ${quantidadeDePicanha}kg ----- Total $R${totalPicanha}\nAlcatra ${quantidadeDeAlcatra}Kg ---- Total R$${totalAlcatra}\nFile Duplo ${quantidadeFile}Kg ---- Tota R$${totalFile}\nTipo de pagamento ---- ${pagamentoNo}\nValor do desconto no cartão ---- R$${descontoDoCartao}\nValor a pagar ---- R$${totalDoValorDasCarnes}.`;
    }

    function todasAsOpcoesComMaisDe5Quilos(){
        
        totalPicanha = (quantidadeDePicanha * 7.8);
        totalAlcatra = (quantidadeDeAlcatra * 6.8);
        totalFile = (quantidadeFile * 5.8);
        let total = totalPicanha + totalAlcatra + totalFile; 
        
        
        if(formaDePagamento == 1){
            descontoDoCartao = 0.05;
        }else{
            descontoDoCartao = 0;  
        }

        totalDoValorDasCarnes = total - (total * descontoDoCartao);
        return `Todos com mais de 5kg.\nPicanha ${quantidadeDePicanha}kg ----- Total $R${totalPicanha}\nAlcatra ${quantidadeDeAlcatra}Kg ---- Total R$${totalAlcatra}\nFile Duplo ${quantidadeFile}Kg ---- Tota R$${totalFile}\nTipo de pagamento ---- ${pagamentoNo}\nValor do desconto no cartão ---- R$${descontoDoCartao}\nValor a pagar ---- R$${totalDoValorDasCarnes}.`;
    }

    function peloMenosUmaOpcaoComMenosDe5Quilos(){
        if((quantidadeDePicanha <=5) && (quantidadeDeAlcatra > 5) && (quantidadeFile > 5)){
            promocaoCarne = 6.9;
            totalPicanha = quantidadeDePicanha * promocaoCarne;
            totalAlcatra = quantidadeDeAlcatra * 6.8;
            totalFile = quantidadeFile * 5.8; 
        }
        else if((quantidadeDePicanha > 5) && (quantidadeFile > 5) && (quantidadeDeAlcatra <= 5) ){
            promocaoCarne = 5.9;
            totalAlcatra = quantidadeDeAlcatra * promocaoCarne;
            totalPicanha = quantidadeDePicanha * 7.8;
            totalFile = quantidadeFile * 5.8; 

        }else if((quantidadeDePicanha > 5) && (quantidadeDeAlcatra > 5) && (quantidadeFile <= 5)){
            promocaoCarne = 4.9;
            totalFile = quantidadeFile * promocaoCarne;
            totalPicanha = quantidadeDePicanha * 7.8;
            totalAlcatra = quantidadeDeAlcatra * 6.8;
        }
        else if((quantidadeDePicanha > 5) && (quantidadeDeAlcatra <= 5 && quantidadeFile <= 5)){
            if(quantidadeDeAlcatra >= quantidadeFile){
                promocaoCarne = 5.9;
                totalAlcatra = quantidadeDeAlcatra * promocaoCarne;
                totalPicanha = quantidadeDePicanha * 7.8;
                totalFile = quantidadeFile * 5.8; 
            }else if((quantidadeDeAlcatra < quantidadeFile)){
                promocaoCarne = 4.9;
                totalFile = quantidadeFile * promocaoCarne; 
            }
        }
        else if((quantidadeFile > 5) && (quantidadeDePicanha <= 5) && (quantidadeDeAlcatra <= 5)){
            if(quantidadeDePicanha >= quantidadeDeAlcatra){
                promocaoCarne = 6.9;
                totalPicanha = quantidadeDePicanha * promocaoCarne;
            }else if((quantidadeDePicanha < quantidadeDeAlcatra)){
                promocaoCarne = 5.9;
                totalAlcatra = quantidadeDeAlcatra * promocaoCarne;
            }
        }else if((quantidadeDeAlcatra > 5) && (quantidadeDePicanha <= 5) && (quantidadeFile <= 5 )){
            if(quantidadeDePicanha >= quantidadeFile){
                promocaoCarne = 6.9;
                totalPicanha = quantidadeDePicanha * promocaoCarne;
            }else if((quantidadeDePicanha < quantidadeFile)){
                promocaoCarne = 4.9;
                totalFile = quantidadeFile * promocaoCarne;
                totalPicanha = quantidadeDePicanha * 7.8;
                totalAlcatra = quantidadeDeAlcatra * 6.8;
            }
        }
        let total = totalPicanha + totalAlcatra + totalFile; 
        totalDoValorDasCarnes = total - (total * descontoDoCartao);
        return `Pelomenos uma opção com menos de 5kg.\nPicanha ${quantidadeDePicanha}kg ----- Total $R${totalPicanha}\nAlcatra ${quantidadeDeAlcatra}Kg ---- Total R$${totalAlcatra}\nFile Duplo ${quantidadeFile}Kg ---- Tota R$${totalFile}\nTipo de pagamento ---- ${pagamentoNo}\nValor do desconto no cartão ---- R$${descontoDoCartao}\nValor a pagar ---- R$${totalDoValorDasCarnes}.`;
    }

    continuar = prompt("Continuar [S - Sim] [N - Não]");
    continuar = continuar[0].toLowerCase();

    if(todasASquantidadesMenoresOuIguais5Quilos){
        resp = todasAsOpcoesComMenosDe5Quilos();
    }else if(todasAsQuantidadesMaioresQue5QuilosOuZero){
        resp = todasAsOpcoesComMaisDe5Quilos();
      
    }else{
        resp = peloMenosUmaOpcaoComMenosDe5Quilos();
    }
}

alert(resp);