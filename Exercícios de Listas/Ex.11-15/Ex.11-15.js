/*
    Exercícios Com Listas 
    Exercício 11 a 15
    https://wiki.python.org.br/ExerciciosListas
*/



    /*10 - Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. 
     11 - Altere o programa anterior, intercalando 3 vetores de 10 elementos cada.*/

     function intercalandoVetores(){
        var vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var vetorB = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IV', 'V'];
        var vetorC = ['a','b','c','d','e','f','g','h', 'i', 'j'];
        var vetorABC = [];
        for(let i = 0; i < 10; i++){
            vetorABC.push(" [ "+vetorA[i], vetorB[i], vetorC[i]+" ]")
        }
        const vetorIntercalado = vetorABC.join(",  ");
        alert("Intercalando 3 vetores de 10 elementos cada:\n"+vetorIntercalado);
     }intercalandoVetores();
     

     /*12 - Foram anotadas as idades e alturas de 30 alunos. Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.*/
    
    var cadastroDeAlunos = [
        {nome: 'Marcos', idade: 18, altura: 1.73}, {nome: "Juju", idade: 18, altura: 1.70}, {nome: 'Bia', idade: 17, altura: 1.40}, {nome: 'Lia', idade: 18, altura: 2.10},{nome: 'Dio', idade: 18, altura: 1.80}, {nome: "Mia", idade: 18,altura: 1.55}, {nome: "Emma", idade: 3, altura: 1.35}, {nome: "Emmi", idade: 18, altura: 1.76}, {nome: "Li", idade: 18, altura: 1.66}, {nome: "Eli", idade: 1, altura: 1.85},
        {nome: "Elias", idade: 10, altura: 1.88}, {nome: "Doug", idade: 8, altura: 1.75}, {nome: "Paty", idade: 18, altura: 1.54}, {nome: "Kiko", idade: 18, altura: 1.70}, {nome: "Kia", idade: 18, idade: 18, altura: 1.30},
        {nome: "Ferbi", idade: 12, altura: 1.53}, {nome: "Saul", idade: 18, altura: 1.89}, {nome: "Silvia", idade: 18, altura: 1.49}, {nome: "Sama", idade: 1, altura: 1.79}, {nome: "Simão", idade: 18, altura: 1.84},
        {nome: 'Wesley', idade: 5, altura: 1.6}, {nome: 'Golias', idade: 19, altura: 3.10}, {nome: "Davi", idade: 66, altura: 1.70}, {nome: "Mirian", idade: 12, altura: 1.46}, {nome: "Salome", idade: 14, altura: 1.48}
     ]
   
     function cadDeAlunos(){
        var somaAltura = cadastroDeAlunos.reduce((acc, curr) => {
            return acc + curr.altura;
         }, 0);
         var media = somaAltura / cadastroDeAlunos.length;
         var cont = 0;
    
         for(let {idade, altura} of cadastroDeAlunos){
            if(idade > 13 && altura < media){
                cont++;
            }
         }
         alert(`Os alunos com mais de 13 anos que possuem altura inferior à média de altura ${media.toFixed(2)} é ${cont}.`);
    
         var comMap = cadastroDeAlunos.map(({altura},i)=>{
            if(altura > media){
                return cadastroDeAlunos[i];
            }
         });
         //Todos os alunos com altura maior que a média
        var arr = [];
       for(let i of comMap){
        if(i != null){
            arr.push(i)
        }
       }
        var saida = JSON.stringify(arr);
     
    alert("Alunos com altura maior que a media: \n"+saida);
     }cadDeAlunos();




/*
13 - Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, calcule a média anual das temperaturas e mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso: 1 – Janeiro, 2 – Fevereiro, . . . ).*/

function temperaturaMedia(){
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
var temperaturas = [];
var temp = [[], []];
for(let i = 0; i < meses.length; i++){
    var temperatura = parseFloat(prompt(`Infome a temperatura do mês ${meses[i]}:`));
    temp = [[meses[i]], [temperatura]];
    temperaturas.push(temp);
}
var soma = 0;
var tot = 0;
var mediaDasTemperaturas = 0;
var temperaturasAcimaDaMedia = [];
for(let i of temperaturas){
    soma += Number(i[1]);
    tot++;
    if(tot == temperaturas.length){
        mediaDasTemperaturas = (soma / temperaturas.length);
    }
}
temperaturasAcimaDaMedia.push(`Média anual das temperaturas:  ${mediaDasTemperaturas.toFixed(2)}ºC\n`)
var acc = 0;
for(let c of temperaturas){
    acc++;
    if(c[1] > mediaDasTemperaturas){
        temperaturasAcimaDaMedia.push(`\n${acc} - ${c.join(": ")}ºC`);
    }
}
var saida = temperaturasAcimaDaMedia.join("");
alert(saida);
}
temperaturaMedia();


/**
 * 14 - Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:

    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". 
 */

    var arr = [ "Telefonou para a vítima?",
    "Esteve no local do crime?",
    "Mora perto da vítima?",
    "Devia para a vítima?",
    "Já trabalhou com a vítima?"];

function validar (){
        var continuar = prompt('Continuar cadastro [s - sim] [n - não]: ');
        continuar = continuar[0];
        
        while(((continuar != 's' && continuar != 'S') || continuar == '' || typeof(continuar) == 'undefined') && (continuar != "n" || continuar != 'N')){
            if(continuar == 'n' || continuar == 'N'){
                break;
            }
            continuar = prompt('Continuar [s - sim] [n - não]: ');
            continuar = continuar[0];

            if(continuar == 'n' || continuar == 'N'){
                break;
            }
    }return continuar;
}

function respostasVerdadeiras(arr){
    var count = 0;
    for(let i of arr){
        if(i == 's'){
            count++;
        }
    }

   if(count < 2){
        alert("Inocente")
   }else if(count == 2){
        alert("Suspeito")
   }else if(count >= 3 && count <= 4 ){
        alert("Cúmplice")
   }else{
    alert("Assassino")
   }
}

    function culpadoOuInocente(){
        var continuar;
        var respostaSim = [];
        while((continuar == 's' || continuar == 'S' || continuar == '' || typeof(continuar) == 'undefined')){
            
            
   
            for(let i = 0; i < arr.length; i++){
                var resposta = prompt("Responda [s - sim] ou [n - não]\n"+arr[i]);
                resposta = resposta[0];
                while((resposta != "s" && resposta != 'S' && resposta != 'n' && resposta != 'N') || resposta == ""){
                    resposta = prompt("Responda [s - sim] ou [n - não]\n"+arr[i]);
                    resposta = resposta[0];
                }
                
                respostaSim.push(resposta)
                
            }
            respostasVerdadeiras(respostaSim);
            continuar =  validar();
            respostaSim = [];

        }
        
    };
    culpadoOuInocente();
   

    /**
 * 
 15 - Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:

    Mostre a quantidade de valores que foram lidos;
    Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
    Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
    Calcule e mostre a soma dos valores;
    Calcule e mostre a média dos valores;
    Calcule e mostre a quantidade de valores acima da média calculada;
    Calcule e mostre a quantidade de valores abaixo de sete;
    Encerre o programa com uma mensagem;
 */

function validasNotas(){
    var arrNotas1 = [];
    var arrNotas2 = [];


    while(nota != -1){
        var nota = parseFloat(prompt("Informe uma nota: "));
        while(nota < -1 || isNaN(nota)){
            nota = parseFloat(prompt("Nota invalida. Informe uma nota ou [-1 - para sair]: "));
        }
        if(nota > -1){
            arrNotas1.push(nota);
            arrNotas2.push(nota+'\n');
        }
    }


    let soma = arrNotas1.reduce((acc, curr) => {
        return acc + curr;
    },0)
   

    let media = 0;
    media = soma / arrNotas1.length;

    let valoresAcimaDaMedia = 0;
    let valoresAbaixoDe7 = 0;

    for(let i of arrNotas1){
        if(i > media){
            valoresAcimaDaMedia++;
        }
        if(i < 7){
            valoresAbaixoDe7++;
        }
    }

    alert(`Valores na ordem em que foram informados:\n${arrNotas1.join(" ,  ")}\n_________________\nValores na ordem inversa à que foram informados, um abaixo do outro:\n ${arrNotas2.reverse().join(' ')}\n_________________\n\nSoma dos valores: ${soma}\n_________________\n\nMédia dos valores: ${media}\n_________________\n\nSoma de valores acima da média: ${valoresAcimaDaMedia}\n_________________\n\nQuantidade de valores abaixo de sete: ${valoresAbaixoDe7}\n\n<<< Finalizando o programa... >>> `)


}
validasNotas()



