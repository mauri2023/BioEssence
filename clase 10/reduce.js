// Reduce un array de numeros , string , etc. Reducirlo a un solo valor. Tiene un acumulador.

const numeros = [1,2,3,4,5];

const sumaTotal = numeros.reduce(function(acumulador,numeroActual){     // Necesita de un acumulador y de un parametro para ir iterando (numeroActual)
    return acumulador + numeroActual;
});

const sumaTotal1 = numeros.reduce((acumulador,numeroActual) => acumulador + numeroActual);   //Mismo ejemplo con arrowfunction. 

console.log(sumaTotal);
console.log(sumaTotal1);

