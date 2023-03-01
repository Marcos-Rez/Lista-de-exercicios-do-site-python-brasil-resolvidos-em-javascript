/*
   Exercícios Com Arquivos
   Exercício 1
   https://wiki.python.org.br/ExerciciosArquivos
*/

/*
    Fonte pesquisada para resolução: 
    https://www.youtube.com/watch?v=U5KyvdurbDM
    https://www.hardware.com.br/comunidade/valido-ip/716271/

    Faça um programa que leia um arquivo texto contendo uma lista de endereços IP e gere um outro arquivo, contendo um relatório dos endereços IP válidos e inválidos.
        O arquivo de entrada possui o seguinte formato: 

    200.135.80.9
    192.168.1.1
    8.35.67.74
    257.32.4.5
    85.345.1.2
    1.2.3.4
    9.8.234.5
    192.168.0.256

        O arquivo de saída possui o seguinte formato: 

    [Endereços válidos:]
    200.135.80.9
    192.168.1.1
    8.35.67.74
    1.2.3.4

    [Endereços inválidos:]
    257.32.4.5
    85.345.1.2
    9.8.234.5
    192.168.0.256
    */
    const arrDados = []
    const fs = require('fs');
    const nome_arquivo = '/arquivo1.txt';
    const path = __dirname + `${nome_arquivo}`;

    function escritorDeArquivo(caminho, texto){
        fs.writeFile(caminho, texto, function(error){
            if(error){
                console.log("Erro durante a escrita: "+error.message);
            }else{
                console.log("Escrito com sucesso: "+caminho);
            }
        })
    }

    function leitorDeArquivo(caminho){
        fs.readFile(caminho, 'utf-8', function(error, data){
            if(error){
                console.log("Erro de leitura: "+error.message)
            }else{
               console.log(data);
               let dados = data;
               
               pegaDados(dados)
                return data;
            }
        })
    }

    escritorDeArquivo(path, `['200.135.80.9',
    '192.168.1.1',
    '8.35.67.74',
    '257.32.4.5',
    '85.345.1.2',
    '1.2.3.4',
    '9.8.234.5',
    '192.168.0.256']`)


function pegaDados(dados){
    for(let d of dados){
        console.log(d)
    }//console.log(arrDados)
}


leitorDeArquivo(path)