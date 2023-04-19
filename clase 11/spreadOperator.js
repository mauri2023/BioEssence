const numeros = [1,2,3,4,5];
const masNumeros = [6,7,8,9];

const todosLosNumeros = [...numeros, ...masNumeros];   //SpreadOperator son los tres ...  y se pueden sumar varios array.

// console.log(todosLosNumeros);

const datos1 = {
    datoA:123,
    datoB:1234,
}
const datos2 = {
    datoC:4567,
    datoD:4567,
}

const datosCompletos = {
    ...datos1,
    ...datos2,
}

// console.log(datosCompletos);

const persona = {       //Este es un objeto
    nombre: "Fede",
    apellido: "Nacca",
}

const datoABuscar = "nombre";

console.log(persona[datoABuscar]);  