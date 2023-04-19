// Metodo map retorna

const numeros = [1,2,3,4,5];

//Arrowfunction: en la primera parte "numeroActual" ese es un parametro (pueden ser muchos). En caso de la segunda parte
// se requiere mas codigo hay que envolverlo en corchetes y ademas usar el return. 

const dobles1 = numeros.map (numeroActual => numeroActual * 2);
console.log(dobles1);

//Funcion normal : 
const dobles = numeros.map(function(numeroActual){
    return numeroActual * 2;
})

// console.log(dobles);

const nombres = ["Fede","Nacho","German"];

const nombresMayus = nombres.map(function(nombreActual){
    return nombreActual.toUpperCase();   //toUpperCase para poner nombres en mayuscula
})

// console.log(nombresMayus);

const alumnos = [
    {
        nombre: "asbbaada",
        edad: 23,
    },
    {
        nombre: "aasdsada",
        edad: 23,
    },
    {
        nombre: "asaggda",
        edad: 23,
    },
    {
        nombre: "asaggda",
        edad: 23,
    },
]
// console.log(alumnos[0].nombre);




const nombresDeAlumnos =alumnos.forEach(function(alumnoActual)
{
    // console.log(alumnoActual.nombre)
})



