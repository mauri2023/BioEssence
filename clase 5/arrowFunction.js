/* 
Arrow Functions
Como ya vimos, una función es un bloque de código que podemos invocar todas las veces que necesitemos. Puede realizar una tarea específica y retornar un valor, y nos permite agrupar el código que vayamos a usar muchas veces.

Existe una forma un poco más compacta de crear o expresar nuestras funciones.


Las arrow functions —o funciones arrow— son una forma de crear funciones incorporadas a partir de ES6 —ECMAScript versión 6—. Una de sus ventajas es que son más concisas que las funciones clásicas creadas con la palabra reservada function.


Veamos un ejemplo:

// forma clásica
function sumar(a, b) {
 return a + b;
}
console.log( sumar(2, 4) );

// ES6 arrow function
let sumar = (a, b) => a + b;

console.log( sumar(2, 4) ); 
    
*/

// Forma clasica

/*

function sumar(a,b){
    return a + b;
}

console.log(sumar(10,30));

// Arrow Function

let sumar1 = (c,d) => c + d;

console.log(sumar1(30,30));

let multiplicar = (e,f) => e * f;

console.log(multiplicar(3,5));

let tengoQueTrabajar = dia => {
    if( dia == "Sabado" || dia == "Domingo")
        return "Hoy no tenes que trabajar";
        else{
            return "Hoy tenes que trabajar"
        }
}

console.log(tengoQueTrabajar("Sabado"));

*/


/* let saludo = () => "Hola";

console.log(saludo());

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ":" + fecha.getMinutes();
}

console.log(horaActual());

let dameCinco = () => [1,2,3,4,5];
console.log(dameCinco());

let multiplicarPorDos = () => 123 * 2 ;
console.log(multiplicarPorDos());

let mostrarNombre = () => "Mi nombre es Hernán";
console.log(mostrarNombre());
*/

// let saludar = nombre => nombre = 'Hola, ' + nombre + '!';

// console.log(saludar("Federico"));

//Convertirla a arrowfunction

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';


console.log(saludar("Federico","Naccarato"));