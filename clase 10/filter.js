//Metodo filter  . Te retorna una array o multiples. 

const numeros = [1,2,3,4,5];

const numerosPares = numeros.filter(function(numeroActual){
        return numeroActual % 2 === 0 ;
        
});

// console.log(numerosPares);

const numerosPares1 = numeros.filter(numeroActual1 => numeroActual1 % 2 === 0);    //Ejemplo con arrowfunction

console.log(numerosPares1);