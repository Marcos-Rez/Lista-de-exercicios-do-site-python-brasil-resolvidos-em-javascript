
var Ex29produto = []
var Ex29Preco = [];
var tabelaDeProduto = ['Cenoura','Tomate','Abobrinha','Melão','Morango','Café moído','Tira mancha','Batata-inglesa','Repolho','Óleo diesel'
    
    ,'Pimentão','Mamão','Gás veicular','Alface','Etanol','Couve-flor','Pepino','Melancia','Açúcar refinado','Maracujá','Brócolis',
    
    'Agua com gás','Açúcar cristal','Botijão de gás','Óleo de soja','Gasolina','Açúcar demerara','Mandioca','Revista','Refrigerador',
    
    'Laranja-da-baía', 'Manteiga','Couve','Filé mignon','Fubá de milho', 'Móvel para copa e cozinha','Fogão','Seguro voluntário de veículo',
    
    'Leite longa-vida','Farinha de trigo','Laranja-lima','Tinta 2l','Alimento para animais','Maionese','Máquina de lavar roupas',
    
    'Pacote turístico', 'Pneu','Pão de forma','Margarina','Sabonete','Frango em pedaços','Picanha'];
    
    for(produto in tabelaDeProduto){
        
        console.log(produto+" ............... "+tabelaDeProduto[produto]);

        if(produto < 51){
            Ex29produto.push(`${produto} ............... ${tabelaDeProduto[produto]}\n`);
        }else{
            Ex29produto.push(`${produto} ............... ${tabelaDeProduto[produto]}`);
        }
        
       
    }

    var tabelaDePreco = [2.88, 6.69, 4.44, 6.66, 12.45, 25.11, 9.00, 5,78, 3.21, 4.45, 4.78, 8.89, 40.78, 2.10, 5.55, 1.89, 4.44, 8.99, 14.00, 4.78, 2.14,
        3.10, 7.77, 100.45, 7.00, 7.56, 12.12, 4.00, 3.99, 24235, 4.00, 12.89, 45.00, 2.99, 560.12, 600.45, 200.78, 7.00, 5.89, 4.99, 55.32, 33.91, 4.69, 796.21,
        3219.22, 541.00, 6.99, 7.55, 3.11, 12.00, 36.14];

        for(preco of tabelaDePreco){
            Ex29Preco.push(` R$${preco}\n`)
        }

    
    let Ex29tabela = Ex29produto.join("");
    let Ex29tabelapreco = Ex29Preco.join("")
    alert(Ex29tabela +""+Ex29tabelapreco);