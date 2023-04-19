// Es una funcion que se pasa como parametro de otra funcion. 
/*
let suma = (numero1,numero2) => numero1 + numero2;
let reste = (numero1,numero2) => numero1 - numero2;
let multiplique = (numero1,numero2) => numero1 * numero2;
let divida = (numero1,numero2) => numero1 / numero2;

let calculadora = (numero1,numero2,operacion) => operacion(numero1,numero2);

console.log(calculadora(18,3,suma));

function doble(numero){
    return numero * 2;
}
function triple(numero){
    return numero * 3;
}
function aplicarCallback(numero,funcion){
    return funcion(numero);
}

console.log(aplicarCallback(10,triple));
*/

function suma(a,b){
    return a + b;
}
function resta(a,b){
    return a - b;
}
function multiplicacion(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
function calculadora(a,b,funcion){
    return funcion(a,b);
}
console.log(calculadora(3,3,multiplicacion));

