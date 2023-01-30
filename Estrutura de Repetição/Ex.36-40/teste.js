var Ex37codigo;
var Ex37altura;
var Ex37peso;

var Ex37arr = [];

var obj = {
    codigo: 0,
    altura: 0,
    peso: 0
}

    Ex37codigo = 0001;
    Ex37altura = 1.89;
    Ex37peso = 125.66;

    obj['codigo'] = Ex37codigo;
    obj['altura'] = Ex37altura;
    obj['peso'] = Ex37peso;
   
    
    Ex37arr.push(obj);

    console.log(Ex37arr[0]['peso'])
    console.log('obj: ',obj)

//----------------------------------------
    
obj = {
    codigo: 0,
    altura: 0,
    peso: 0
}
    Ex37codigo = 0002;
    Ex37altura = 1.95;
    Ex37peso = 110.77;

    obj['codigo'] = Ex37codigo;
    obj['altura'] = Ex37altura;
    obj['peso'] = Ex37peso;
   
    Ex37arr.push(obj);
    console.log('obj: ',obj)


    //----------------------------------------
    
obj = {
    codigo: 0,
    altura: 0,
    peso: 0
}
    Ex37codigo = 0003;
    Ex37altura = 1.67;
    Ex37peso = 42.39;

    obj['codigo'] = Ex37codigo;
    obj['altura'] = Ex37altura;
    obj['peso'] = Ex37peso;
   
    Ex37arr.push(obj);
    console.log('obj: ',obj)

    console.log(Ex37arr[0])
    console.log(Ex37arr[1])
    console.log(Ex37arr[2])
    console.log("________________________________________________________________________-")


    var maiorAltura = 0;
    var codigoMaiorAltura;
    var menorAltura;
    var codigoMenorAltura;
    var mediaAltura = 0;
    var somaAltura = 0;

    for(let o of Ex37arr){
        if(o.altura > maiorAltura){
            maiorAltura = o.altura;
            codigoMaiorAltura = o.codigo;
        }
        menorAltura = o.altura;
        if(o.altura <= menorAltura){
            menorAltura = o.altura;
            codigoMenorAltura = o.codigo;
        }
    
        somaAltura += o.altura;
        mediaAltura = somaAltura / Ex37arr.length;
    } 
      console.log(codigoMaiorAltura, maiorAltura);
      console.log(codigoMenorAltura, menorAltura);
      console.log(mediaAltura);


    var maiorPeso = 0;
    var codigoMaiorPeso;
    var menorPeso;
    var codigoMenorPeso;
    var mediaPeso;
    var somaPeso = 0;

    for(let o of Ex37arr){
        if(o.peso > maiorPeso){
            maiorPeso = o.peso;
            codigoMaiorPeso = o.codigo;
        }
        menorPeso = o.peso;
        if(o.peso <= menorPeso){
            menorPeso = o.peso;
            codigoMenorPeso = o.codigo;
        }
        somaPeso += o.peso;
        mediaPeso = somaPeso / Ex37arr.length;
    }

    console.log(codigoMaiorPeso, maiorPeso);
    console.log(codigoMenorPeso, menorPeso);
    console.log(mediaPeso);


    var n = 30000.0056;
    console.log(n.toFixed(2))