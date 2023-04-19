/* Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula) 
que muestre por consola "acá i tiene el valor de x" donde x va a ser el valor de la variable i
 en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive. */

 function pasandoPorI(){
    for(let i = 0 ; i <= 4; i++){
        console.log("aca i tiene el valor de x es " + i );
    }
 }
 pasandoPorI()

 /* Contar impares
¡Vamos a crear una función interesante!
En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro
y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. 
Para resolver la ejercitación debemos utilizar el for .

Ejemplo de cómo se usaría esta función (ustedes solo deben concentrarse en su implementación):

 console.log(noParesDeContarImparesHasta(4))
 // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3.

 Dentro del condicional del for, deberíamos utilizar el parámetro que es enviado a la función. */

 function noParesDeContarImparesHasta(){
    for(let i = 0; i <= 10; i ++)
    if( i % 2 !== 0);
}

noParesDeContarImparesHasta(30);

var gananciasDelUltimoSemestre = [50, 12 , -3 , 100 , 0];

function sumatoriaGananciaSemestre(unSemestre){
    return unSemestre[0] + unSemestre [1] + 
    unSemestre [2] + unSemestre[3] + unSemestre[4] + unSemestre[5];
}
console.log(sumatoriaGananciaSemestre([20,30,20,30,20,120]));     

