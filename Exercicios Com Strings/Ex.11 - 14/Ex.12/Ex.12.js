/*
   Exercícios com String 
   Exercício 11
   https://wiki.python.org.br/ExerciciosComStrings
*/

/**
 * Valida e corrige número de telefone. Faça um programa que leia um número de telefone, e corrija o número no caso deste conter somente 7 dígitos, acrescentando o '3' na frente. O usuário pode informar o número com ou sem o traço separador.

    Valida e corrige número de telefone
    Telefone: 461-0133
    Telefone possui 7 dígitos. Vou acrescentar o digito três na frente.
    Telefone corrigido sem formatação: 34610133
    Telefone corrigido com formatação: 3461-0133
 */

    function corrigeTelefone(){
        let num = '4610-4133';
        let novoNumero = []
        let saida;
        let telefone;
        let corrigidoComFormatação;
        let corrigidoSemFormatação;
        for(let i in num){
            if(!isNaN(num[i])){
                novoNumero.push(num[i])
            }
        } 
        telefone = novoNumero.join('');
        
        if(novoNumero.length < 7){
            saida = ('Número invalido! Informe  seu número conforme o modelo [34610133] ou [346-0733]: ');
        }else if(novoNumero.length == 7){
            novoNumero.unshift(3)
            saida = ("Telefone possui 7 dígitos. Vou acrescentar o digito três na frente. ");
        }else{
            saida = telefone;
        }
        
        novoNumero[3] += '-';

        corrigidoComFormatação = `\nTelefone corrigido com formatação: ${novoNumero.join('')}`
        corrigidoSemFormatação = `\nTelefone corrigido sem formatação: ${telefone}`
        alert(saida + corrigidoComFormatação + corrigidoSemFormatação)
    }
    corrigeTelefone()