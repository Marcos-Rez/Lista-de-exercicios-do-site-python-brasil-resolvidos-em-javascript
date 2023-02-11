/*
 *  Exercícios Com Listas 
    Exercício 20
    https://wiki.python.org.br/ExerciciosListas
*/

/*As Organizações Tabajara resolveram dar um abono aos seus colaboradores em reconhecimento ao bom resultado alcançado durante o ano que passou. Para isto contratou você para desenvolver a aplicação que servirá como uma projeção de quanto será gasto com o pagamento deste abono.

    Após reuniões envolvendo a diretoria executiva, a diretoria financeira e os representantes do sindicato laboral, chegou-se a seguinte forma de cálculo: 

    a.Cada funcionário receberá o equivalente a 20% do seu salário bruto de dezembro; a.O piso do abono será de 100 reais, isto é, aqueles funcionários cujo salário for muito baixo, recebem este valor mínimo; Neste momento, não se deve ter nenhuma preocupação com colaboradores com tempo menor de casa, descontos, impostos ou outras particularidades. Seu programa deverá permitir a digitação do salário de um número indefinido (desconhecido) de salários. Um valor de salário igual a 0 (zero) encerra a digitação. Após a entrada de todos os dados o programa deverá calcular o valor do abono concedido a cada colaborador, de acordo com a regra definida acima. Ao final, o programa deverá apresentar:
    O salário de cada funcionário, juntamente com o valor do abono;
    O número total de funcionário processados;
    O valor total a ser gasto com o pagamento do abono;
    O número de funcionário que receberá o valor mínimo de 100 reais;
    O maior valor pago como abono; A tela abaixo é um exemplo de execução do programa, apenas para fins ilustrativos. Os valores podem mudar a cada execução do programa. 

Projeção de Gastos com Abono
============================ 
 
Salário: 1000
Salário: 300
Salário: 500
Salário: 100
Salário: 4500
Salário: 0
 
Salário    - Abono     
R$ 1000.00 - R$  200.00
R$  300.00 - R$  100.00
R$  500.00 - R$  100.00
R$  100.00 - R$  100.00
R$ 4500.00 - R$  900.00
 
Foram processados 5 colaboradores
Total gasto com abonos: R$ 1400.00
Valor mínimo pago a 3 colaboradores
Maior valor de abono pago: R$ 900.00
*/

function entradaDeDados(){
    let salario;
    let arrSalarios = [];
    while(salario != 0){
        salario = parseFloat(prompt('Informe o salário ou [0 - para encerrar]: '));
        while(salario < 0 || isNaN(salario)){
            salario = parseFloat(prompt('Informe o salário ou [0 - para encerrar]: '));
        }
        arrSalarios.push(salario);

    }
    return arrSalarios;
}

function calculoDeAbono(){
    let arrSaida = [];
    let arrSalarios = entradaDeDados();

    let arrAbonos = arrSalarios.map((salario)=>{
        abono =  (salario * 0.2);
 
        if(abono < 100) return 100;
        return abono;
    }) 
    arrAbonos[(arrAbonos.length) - 1] = 0;
    
    let total = arrAbonos.reduce((acc, current)=>{
        return acc + current;
    },0)

    let valorMaximo = 0;
    let accMin = 0;
    arrAbonos.forEach(abono => {
        if(abono > valorMaximo){
            valorMaximo = abono;
        }
        if(abono == 100){
            accMin++;
        }
    });

    
    arrSaida.push(` Projeção de Gastos com Abono\n============================ \n\n`);
    arrSalarios.forEach(salario => {
        arrSaida.push(`Salário: R$ ${salario}\n`);
    })
    for(let i in (arrSalarios)){
        if(i < (arrSalarios-1)){
            arrSaida.push(`\nR$ ${arrSalarios[i]} - R$ ${arrAbonos[i]}`);
        }
    }
    arrSaida.push(`\nForam processados ${(arrSalarios.length)-1} colaboradores\nTotal gasto com abonos: R$ ${total}\nValor mínimo pago a ${accMin} colaboradores\nMaior valor de abono pago: R$ ${valorMaximo}`);

    let imprimir = arrSaida.join(" - ");
    alert(imprimir)
}
calculoDeAbono()