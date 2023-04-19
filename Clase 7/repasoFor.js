function calcularTotal(numero){
    let suma = 0;

    for(let contador = 0 ; contador < numero.length ; contador++){
        suma = suma + numero[contador];
    }
    return suma;
} 
    console.log(calcularTotal([100,50,25,30]));

    