/*
   Exercícios com funções 
   Exercício 10
   https://wiki.python.org.br/ExerciciosFuncoes
*/

/**
 * 10 - Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente. 
 */



function jogador(resul, p, btm, pontos, jogador){ 
    let resultado = document.querySelector(resul);
    let numSorteado1;
    let ponto;
    let p1 = document.querySelector(p);
 
    let cont = 0;
    let botao1 = document.querySelector(btm);
    let pontos_1 = document.querySelector(pontos);

    
    botao1.addEventListener('click', ()=> {
      
        if(cont == 0){
            ponto = jogarDados();
            p1.innerText = ponto;
            cont++;
          
        }else{
            numSorteado1 = jogarDados();
            pontos_1 .innerText = numSorteado1;
         
        }


        if(ponto == 7 || ponto == 11){
            numSorteado1 = ponto;
            resultado.innerText = `Jogador: ${jogador}.\nResultado ${ponto}. NATURAL.\nVocê ganhou!`;
            setInterval(() => {
                window.location.reload(true);
            }, 3000);
        }else if((ponto == 2 || ponto == 3 || ponto == 12)){
            
            resultado.innerText = `Jogador: ${jogador}.\nResultado ${ponto} CRAPS.\nVocê Perdeu!`;
            setInterval(() => {
                window.location.reload(true);
            }, 3000);
        }else if(numSorteado1 == ponto && numSorteado1 != 7){
            resultado.innerText = `${ponto}\nNumero Sorteado ${numSorteado1}.\nJogador: ${jogador} venceu.`;
            setInterval(() => {
                window.location.reload(true);
            }, 3000);
        }else if(numSorteado1 == 7){
            resultado.innerText = `${numSorteado1}.\nJogador: ${jogador} perdeu.`;
            setInterval(() => {
                window.location.reload(true);
            }, 3000);
        }
    })
}

/*
function jogador2(){
    let resultado2 = document.querySelector("#resultado2");
    let numSorteado2;
    let ponto2 = jogarDados();
    let p2 = document.querySelector('#p2')
    p2.innerText = ponto2;
   
    let botao2 = document.querySelector('#btm2');
    let pontos_2 = document.querySelector("#pontos_jogador2")
    botao2.addEventListener('click', ()=>{
        numSorteado2 = jogarDados();
        if(numSorteado2 == 7 || numSorteado2 == 11){
            resultado2.innerText = `Jogador2.\nResultado ${numSorteado2}. NATURAL.\nVocê ganhou!`;
            setInterval(() => {
                window.location.reload(true);
            }, 3000);
        }else if(numSorteado2 == 2 || numSorteado2 == 3 || numSorteado2 == 12){
            resultado2.innerText = `Jogado2.\nResultado ${numSorteado2} CRAPS.\nVocê Perdeu!`;
            setInterval(() => {
                window.location.reload(true);
            }, 3000);
        }else{
            pontos_2 .innerText = `Ponto ${ponto2}  Numero Sorteado ${numSorteado2}.\n Jogador2 venceu.`;
        }
    })
}*/

function jogarDados(){
   
    return Math.floor(Math.random() * (12 - 2 + 1) + 2);// The maximum is inclusive and the minimum is inclusive
}

jogador("#resultado", '#p1', '#btm1', "#pontos_jogador1", 'play 1');
jogador("#resultado2", '#p2', '#btm2', "#pontos_jogador2", 'play 2');

