/*var listaDeSalarios = [300.95, 450.89, 789.51, 220, 200, 599.7, 200, 1000.78, 850.50, 500, 700, 260, 1500.25, 611, 900, 910];*/
function salariosContados (){
    listaDeSalarios = [300.95, 450.89, 789.51, 220, 200, 599.7, 200, 1000.78, 850.50, 500, 700, 260, 1500, 611, 900, 910, 50, 25, 60];
    var listaDeParametros = [[200, 299], [300, 399], [400, 499], [500, 599], [600, 699], [700, 799], [800, 899], [900, 999], [1000]];
    var r = [];
   
    var faixa200_299 = 0
    var faixa300_399 = 0;
    var faixa400_499 = 0;
    var faixa500_599 = 0;
    var faixa600_699 = 0;
    var faixa700_799 = 0;
    var faixa800_899 = 0;
    var faixa900_999 = 0;
    var faixa1000 = 0;
    var arr = [[0], [0], [0], [0], [0], [0], [0], [0], [0]];
    
    for(let s of listaDeSalarios){
        var salario = 0;
        salario += (s + (s * 0.09)) + 200;
        console.log("salario: "+salario)
        for(let p in listaDeParametros){
            if((salario >= listaDeParametros[p][0]) && (salario <= listaDeParametros[p][1])){
                if(p == 0){
                    faixa200_299++;
                    arr[0] = faixa200_299;
                }
                if(p == 1){
                    faixa300_399++;
                    arr[1] = faixa300_399;
                }
                if(p == 2){
                    faixa400_499++;
                    arr[2] = faixa400_499;
                }
                if(p == 3){
                    faixa500_599++;
                    arr[3] = faixa500_599;
                }
                if(p == 4){
                    faixa600_699++;
                    arr[4] = faixa600_699;
                }
                if (p == 5) {
                    faixa700_799++;
                    arr[5] = faixa700_799;
                }
                if(p == 6){
                    faixa800_899++;
                    arr[6] = faixa800_899;
                }
                if(p == 7){
                    faixa900_999++;
                    arr[7] = faixa900_999;
                }

            }else if(p == 8 && salario >= 1000){
                faixa1000++;
                arr[8] = faixa1000;
            }     
        }   
    }
    for(let y in listaDeParametros){
        console.log(listaDeParametros[y]+" Ocorrencias: "+arr[y])
    }   
}
salariosContados ();
