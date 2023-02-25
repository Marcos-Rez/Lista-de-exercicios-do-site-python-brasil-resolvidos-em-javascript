/*
   Exercícios com funções 
   Exercício 11
   https://wiki.python.org.br/ExerciciosFuncoes
*/
/**
 * 11 - Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA. Opcionalmente, valide a data e retorne NULL caso a data seja inválida. 
 */

function validarData(){
    
    let data = prompt('Informe a data no formato DD/MM/AAAA: ');
    
    let dia = data[0] + data[1];
    dia = Number(dia);

    let mes = data[3] + data[4];
    mes = Number(mes);

    let ano = data[6] + data[7] + data[8] + data[9];
    ano = Number(ano);

    let arrMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro', 'Outubro','Novembro',
    'Dezembro'];

    while(data.length < 10 || isNaN(data[0]) || data[0] > 3 || isNaN(data[1]) || data[2] != '/' || isNaN(data[3]) || data[3] > 1 || isNaN(data[4]) || data[5] != '/' || isNaN(data[6]) || isNaN(data[7]) || isNaN(data[8]) || isNaN(data[9]) || dia > 31 || mes > 12){
        
        data = prompt('Informe a data no formato DD/MM/AAAA: ');
        
        dia = data[0] + data[1];
        dia = Number(dia);

        mes = data[3] + data[4];
        mes = Number(mes);

        ano = data[6] + data[7] + data[8] + data[9];
        ano = Number(ano);
    }

    for(let i = 0; i < arrMeses.length; i++){
        if(i+1 == mes){
            let dataSaida = `${dia} ${arrMeses[i]} ${ano}`;
            alert(dataSaida)
        }
       
    }
    return dataSaida;
}

validarData()
