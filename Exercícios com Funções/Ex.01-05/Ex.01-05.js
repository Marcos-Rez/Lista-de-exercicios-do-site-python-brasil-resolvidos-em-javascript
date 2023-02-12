/*
   Exercícios com funções 
   Exercício 01 a 05
   https://wiki.python.org.br/ExerciciosFuncoes
*/


/*
   1 - Faça um programa para imprimir:

        1
        2   2
        3   3   3
        .....
        n   n   n   n   n   n  ... n

    para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha. 
*/

function n_ésimaLinha(numero){
    let n = numero;
    let arr = [];
    for(let i = 1; i <= n; i++){
        for(let c = 1; c <= i; c++){
            arr.push(i, ' ')
        }
        arr.push('\n')
    }
    let v = arr.join('')
    console.log(v)
}n_ésimaLinha(5)

/**
 * 2 - Faça um programa para imprimir:

        1
        1   2
        1   2   3
        .....
        1   2   3   ...  n

    para um n informado pelo usuário. Use uma função que receba um valor n inteiro imprima até a n-ésima linha. 
 */
    var arr = [];
    function n_ésimaLinha2(numero){
        let n = numero + 1;
        for(let i = 1; i < n; i++){
            for(let c = 1; c < i+1; c++){
                arr.push(c, ' ')
            }
            arr.push("\n");
        }
        let v = arr.join('');
        console.log(v)
    }
    n_ésimaLinha2(5);


/**
 * 3 - Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.
 */

function soma(a, b, c){
    let resposta = a + b + c;
    console.log("A soma entre" ,a, b, c+" é", resposta)
}soma(1, 2, 3);

/*
 4 - Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.
*/

function isPositive(num){
    let r = num > 0? 'P':'N';
    return r;
}console.log(isPositive(8))

/**
 5 - Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas. 
 */
function somaImposto(taxaImposto, custo){
    let imposto = (taxaImposto / 100) * (custo);
    let custoTotal = custo + imposto;
    let s = `\nCusto do produto R$${custo}\nValor do imposto sobre venda R$${imposto}\nTotal R$${custoTotal}`
    return s;
}console.log(somaImposto(10, 100))