/*
   Exercícios com String 
   Exercício 9
   https://wiki.python.org.br/ExerciciosComStrings
*/

/**
 * 9 - Verificação de CPF. Desenvolva um programa que solicite a digitação de um número de CPF no formato xxx.xxx.xxx-xx e indique se é um número válido ou inválido através da validação dos dígitos verificadores edos caracteres de formatação. 
 * 
 * Como fazer a verificação: 
 * https://www.devmedia.com.br/validar-cpf-com-javascript/23916
 */

function validadorCPF(){
    let cpf = prompt('Informe seu CPF neste formato 123.456.789-09 :')
    let ver_cpf = cpf.replace('.', '').replace('.', '').replace('-', '');
    let primeiroDigitos = ver_cpf.substring(0, 9);
    let primeiroDigitoVerificador = ver_cpf.substring(9, 10);

    let cont = 11;
    let soma = 0;
    for(let i = 0; i < primeiroDigitos.length; i++ ){
        cont--;
        //console.log(` ${primeiroDigitos[i]} x ${cont} = `+ primeiroDigitos[i] * cont)
        soma += (primeiroDigitos[i] * cont)
    }
    let resultaDivisao = (soma * 10) / 11;
    let resto = (soma * 10) % 11;
    let eHvalido;

    if(resto == 10 || resto == 11) resto = 0;
   
    if(resto == primeiroDigitoVerificador){
        eHvalido = true;
    }else{
        eHvalido = false;
    }
  

    if(eHvalido){
        let ver_cpf = cpf.replace('.', '').replace('.', '').replace('-', '');
        let primeiroDigitos = ver_cpf.substring(0, 10);
        let segundoDigitoVerificador = ver_cpf.substring(10, 11);
     
        let cont = 12;
        let soma = 0;
        for(let i = 0; i < primeiroDigitos.length; i++ ){
            cont--;
            //console.log(` ${primeiroDigitos[i]} x ${cont} = `+ primeiroDigitos[i] * cont)
            soma += (primeiroDigitos[i] * cont)
        }
        let resultaDivisao = (soma * 10) / 11;
        let resto = (soma * 10) % 11;

        let cpfEhValido;
        if(resto == segundoDigitoVerificador){
            cpfEhValido = 'O CPF é válido.'
            return cpfEhValido;
        }else{
            cpfEhValido = 'O CPF não é válido.'
            return cpfEhValido;
        }
        
    }
}
alert(validadorCPF());