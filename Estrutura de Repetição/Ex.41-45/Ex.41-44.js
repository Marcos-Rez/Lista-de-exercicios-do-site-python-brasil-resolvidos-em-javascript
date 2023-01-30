/*
    EstruturaDeRepeticao
    Exercícios de 41 a 45
    https://wiki.python.org.br/EstruturaDeRepeticao
*/

    /*
    41 - Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos
    juros, quantidade de parcelas e valor da parcela.

    Os juros e a quantidade de parcelas seguem a tabela abaixo:

    Quantidade de Parcelas  % de Juros sobre o valor inicial da dívida
    1       0
    3       10
    6       15
    9       20
    12      25

    Exemplo de saída do programa:

    Valor da Dívida Valor dos Juros Quantidade de Parcelas  Valor da Parcela
    R$ 1.000,00     0               1                       R$  1.000,00
    R$ 1.100,00     100             3                       R$    366,00
    R$ 1.150,00     150             6                       R$    191,67
    */




    function calculoDeJuros(){
        const valorInicial = parseFloat(prompt("Quantidade de Parcelas  ....  % de Juros sobre o valor inicial da dívida \n1     ....    0%\n3     ....    10%\n6     ....    15%\n9     ....    20%\n12   ....   25%\nInforme o valor da sua divida:  "));
        var array = [];
        var cabecalho = "Valor Dívida  Valor Juros  Quantidade Parcelas  Valor Parcela\n";
        array.push(cabecalho);

        for(let i = 0; i <= 12; i += 3){
            if(i == 0){
                let juros = 0;
                let valorDivida = valorInicial;
                let numParcelas = i + 1;
                let valorParcela = valorDivida / numParcelas;
                let r = ` R$ ${valorDivida}\t\t  ${juros}\t\t\t\t${numParcelas}\t\t\t\t${valorParcela.toFixed(2)}\n`;
                array.push(r);
            }
            if(i == 3)
            {
                let valorDivida = valorInicial + (0.1 * valorInicial);
                let  juros = valorDivida - valorInicial;
                let numParcelas = i;
                let valorParcela = valorDivida / numParcelas;
                let r = ` R$ ${valorDivida}\t\t  ${juros}\t\t\t${numParcelas}\t\t\t\t${valorParcela.toFixed(2)}\n`;
                array.push(r);
            }
            if(i == 6){
                let valorDivida = valorInicial + (0.15 * valorInicial);
                let  juros = valorDivida - valorInicial;
                let numParcelas = i;
                let valorParcela = valorDivida / numParcelas;
                let r = ` R$ ${valorDivida}\t\t  ${juros}\t\t\t${numParcelas}\t\t\t\t${valorParcela.toFixed(2)}\n`;
                array.push(r);
            }
            if(i == 9){
                let valorDivida = valorInicial + (0.20 * valorInicial);
                let juros = valorDivida - valorInicial;
                let numParcelas = i;
                let valorParcela = valorDivida / numParcelas;
                let r = ` R$ ${valorDivida}\t\t  ${juros}\t\t\t${numParcelas}\t\t\t\t${valorParcela.toFixed(2)}\n`;
                array.push(r);
            }
            if(i == 12){
                let valorDivida = valorInicial + (0.25 * valorInicial);
                let juros = valorDivida - valorInicial;
                let numParcelas = i;
                let valorParcela = valorDivida / numParcelas;
                let r = ` R$ ${valorDivida}\t\t  ${juros}\t\t\t${numParcelas}\t\t\t\t${valorParcela.toFixed(2)}\n`;
                array.push(r);
            }
        }
        let saida = array.join("");
        alert(saida)
    }
    calculoDeJuros();


/*
 42 - Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos:
[0-25], [26-50], [51-75] e [76-100]. A entrada de dados deverá terminar quando for lido um número negativo.
*/

var numero;
var arrayNumero = [];
var count0_25 = 0;
var count26_50 = 0;
var count51_75 = 0;
var count76_100 = 0;
while(numero > 0 || isNaN(numero) || numero > 100){
    numero = parseInt(prompt("Escolha um número de 1 a 100: "));
    if(numero >= 0 && numero <= 100){
        arrayNumero.push(numero)
    }
}
for(let numero of arrayNumero){
    if(numero >= 0 && numero <= 25){
        count0_25++;
    }
    if(numero >= 26 && numero <= 50){
        count26_50++;
    }
    if(numero >= 51 && numero <= 75){
        count51_75++;
    }
    if(numero >= 76 && numero <= 100){
        count76_100++;
    }
}alert(`0 a 25: ${count0_25}\n26 a 50: ${count26_50}\n51 a 75: ${count51_75}\n76 a 100: ${count76_100}`);

/*
Resolução alternativa com Math.floor e Math.random
var arrayNumeros = [];
var count0_25 = 0;
var count26_50 = 0;
var count51_75 = 0;
var count76_100 = 0;
const quantidadeDeNumeros = 30;
for(let i = 1; i <= quantidadeDeNumeros; i++){
    let numero = Math.floor(Math.random() * 100);
    if(!arrayNumeros.includes(numero)){
        arrayNumeros.push(numero);
    }
    
}
for(let numero of arrayNumero){
    if(numero >= 0 && numero <= 25){
        count0_25++;
    }
    if(numero >= 26 && numero <= 50){
        count26_50++;
    }
    if(numero >= 51 && numero <= 75){
        count51_75++;
    }
    if(numero >= 76 && numero <= 100){
        count76_100++;
    }
console.log(arrayNumeros)
*/
/*
 43 - O cardápio de uma lanchonete é o seguinte:

    Especificação   Código  Preço
    Cachorro Quente 100     R$ 1,20
    Bauru Simples   101     R$ 1,30
    Bauru com ovo   102     R$ 1,50
    Hambúrguer      103     R$ 1,20
    Cheeseburguer   104     R$ 1,30
    Refrigerante    105     R$ 1,00
Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido.
Considere que o cliente deve informar quando o pedido deve ser encerrado. 
*/

var pedidos;
var valor = 0;
var contadorCachorroQuente = 0;
var contadorBauruSimples = 0;
var contadorBauruComOvo = 0;
var contadorHamburguer = 0;
var contadorCheeseburger = 0;
var contadorRefrigerante = 0;
var total = 0;
var saida = [];
var arrayDePedidos = [["cachorro Quente", 100, 0, 0], ["Bauru Simples\t", 101, 0, 0], ["Bauru com ovo\t", 102, 0, 0], ["Hambúrguer\t", 103, 0, 0], ["Cheeseburguer\t", 104, 0, 0], ["Refrigerante\t", 105, 0, 0], ["Total",0]];

while(pedidos != 0 || isNaN(pedidos)){
    pedidos = parseInt(prompt("Especificação\t\t\tCódigo\t\tPreço\n\nCachorro Quente\t\t 100\t\tR$ 1,20\nBauru Simples\t\t\t 101\t\tR$ 1,30\nBauru com ovo\t\t\t 102\t\tR$ 1,50\nHambúrguer\t\t\t 103\t\tR$ 1,20\nCheeseburguer\t\t\t 104\t\tR$ 1,30\nRefrigerante\t\t\t 105\t\tR$ 1,00\nInforme o codigo do pedido ou [0 - Para encerrar o pedido] : "));

    switch(pedidos){
        case 100:
            contadorCachorroQuente++;
            valor = contadorCachorroQuente * 1.20;
            arrayDePedidos[0][2] = contadorCachorroQuente;
            arrayDePedidos[0][3] = valor;
            break;
        case 101:
            contadorBauruSimples++;
            valor = contadorBauruSimples * 1.30;
            arrayDePedidos[1][2] = contadorBauruSimples;
            arrayDePedidos[1][3] = valor;
            break;
        case 102:
            contadorBauruComOvo++;
            valor = contadorBauruComOvo * 1.50;
            arrayDePedidos[2][2] = contadorBauruComOvo;
            arrayDePedidos[2][3] = valor;
            break;
        case 103:
            contadorHamburguer++;
            valor = contadorHamburguer * 1.20;
            arrayDePedidos[3][2] = contadorHamburguer;
            arrayDePedidos[3][3] = valor;
            break;
        case 104:
            contadorCheeseburger++;
            valor = contadorCheeseburger * 1.30;
            arrayDePedidos[4][2] = contadorCheeseburger;
            arrayDePedidos[4][3] = valor;
            break;
        case 105:
            contadorRefrigerante++;
            valor = contadorRefrigerante * 1.00;
            arrayDePedidos[5][2] = contadorRefrigerante;
            arrayDePedidos[5][3] = valor;
            break;
        default:
            break;
    }
}


for(let i = 0; i <= arrayDePedidos.length; i++){
    if(arrayDePedidos[i][3]){
        total += arrayDePedidos[i][3];
        arrayDePedidos[6][1] = total;
    }

    if(i < (arrayDePedidos.length - 1)){
        saida.push(`${arrayDePedidos[i][0]}\t\tquantidade ...... ${arrayDePedidos[i][2]}\t total do item ...... R$ ${arrayDePedidos[i][3]}\n`);
    }
    if((i+1) == arrayDePedidos.length){
        saida.push(`Total ... R$ ${arrayDePedidos[6][1]}`);
        saida = saida.join("");
        alert(saida)
    }
    
}


/*
 44 - Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:

    1 , 2, 3, 4  - Votos para os respectivos candidatos 
    (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
    5 - Voto Nulo
    6 - Voto em Branco

    Faça um programa que calcule e mostre:
    O total de votos para cada candidato;
    O total de votos nulos;
    O total de votos em branco;
    A percentagem de votos nulos sobre o total de votos;
    A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos tem-se o valor zero.
*/

var voto;
var CandidatoGatinho = 0;
var CandidatoMessianico = 0;
var CandidatoMenosPior = 0;
var CandidatoNaoPodeSerPio = 0;
var VotoNulo = 0;
var VotoEmBranco = 0;
var porcentagemDeNulos = 0;
var porcentagemDeBranco = 0;

 while(voto < 0 || voto != 0 || isNaN(voto) || voto > 6){
    voto = parseInt(prompt("Eleição presidencia.\t\tEscolha o seu candidato!\n\n[1 - Candidato gatinho]\n[2 - Candidato Messianico]\n[3 - Candidato Menos Pior]\n[4 - Candidato Não Pode Ser Pior]\n[5 - Voto Nulo]\n[6 - Voto Em Branco]\n[0 - Encerrrar Votação]: "));

    if(voto == 1){
        CandidatoGatinho++;
    }
    if(voto == 2){
        CandidatoMessianico++;
    }
    if(voto == 3){
        CandidatoMenosPior++
    }
    if(voto == 4){
        CandidatoNaoPodeSerPio++;
    }
    if(voto == 5){
        VotoNulo++;
    }
    if(voto == 6){
        VotoEmBranco++;
    }

    porcentagemDeNulos = (VotoNulo / (CandidatoGatinho + CandidatoMessianico + CandidatoMenosPior + CandidatoNaoPodeSerPio + VotoEmBranco)) * 100;
    porcentagemDeBranco = (VotoEmBranco / (CandidatoGatinho + CandidatoMessianico + CandidatoMenosPior + CandidatoNaoPodeSerPio + VotoNulo)) * 100;
 } alert(`Candidato Gatinho ${CandidatoGatinho}\nCandidato Messianico ${CandidatoMessianico}\nCandidato Menos Pior ${CandidatoMenosPior}\nCandidato Nao Pode Ser Pior ${CandidatoNaoPodeSerPio}\nPercentual de votos nulos ${porcentagemDeNulos}%\nPercentual de votos em branco ${porcentagemDeBranco}%`);
 


/*
  45 - Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno 
  a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 
  1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido informar:

    Maior e Menor Acerto;
    Total de Alunos que utilizaram o sistema;
    A Média das Notas da Turma. 

    Gabarito da Prova:

    01 - A
    02 - B
    03 - C
    04 - D
    05 - E
    06 - E
    07 - D
    08 - C
    09 - B
    10 - A

    Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos
    usarem o programa.
 */
var arrRespostasDosAlunos = [];
var gabarito = ["A","B","C","D","E","E","D","C","B","A"];
var resposta;
var contador = 1;
var continuarComOutroAluno;

var resultados = [];
var saida = [];

while(isNaN(continuarComOutroAluno) || continuarComOutroAluno == "s" || continuarComOutroAluno == "S" || continuarComOutroAluno != "n" || continuarComOutroAluno != "N"){

    sistema();
    continuarComOutroAluno = prompt("Deseja continuar? [s - sim] [n - não]: ");
    continuarComOutroAluno = continuarComOutroAluno[0];
    numeroDeAcertos = 0;
    numeroDeErros = 0;
    contador = 1;

    if(continuarComOutroAluno == "n" || continuarComOutroAluno == "N"){
        break;
    }

}

function sistema(){
    var nomeDoAluno = prompt("Informe o seu nome: ");
    var numeroDeAcertos = 0;
    var numeroDeErros = 0;
    let acer = [];
    let erro = 0;
    while((resposta != "A" && resposta != "B" && resposta != "C" && resposta != "D" && resposta != "E") || isNaN(resposta)){
        
        resposta = prompt(`Questao ${contador} - Escolha a alternativa correta [A B C D E]: `);
        resposta = resposta.toUpperCase();
    
        if(resposta == "A" || resposta == "B" || resposta == "C" || resposta == "D" || resposta == "E"){
            contador++;
            arrRespostasDosAlunos.push(resposta);

            if(arrRespostasDosAlunos[contador-2] == gabarito[contador-2]){
                numeroDeAcertos++;   
            }
            if(arrRespostasDosAlunos[contador-2] != gabarito[contador-2]){
                numeroDeErros++;
            }

            
            if(contador == 11){
                numeroDeAcertos = 0;
                numeroDeErros = 0;
                break;
            }

        
        }
    }

    alert(`Aluno ${nomeDoAluno} | Acertos ${acer.length} | Error ${numeroDeErros}`)
}
