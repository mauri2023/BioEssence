//While
let vuelta = 98
while(vuelta <=100){
    console.log("El numero es " + vuelta);
    vuelta++
}

//Do while

let vuelta1 = 50
do{
    console.log("La vuelta es " + vuelta1);
    vuelta1++
}
while(vuelta1 <= 50);

//Practica

const tablaDeMultiplicar = function(numero) {
    for(let i = 1; i <= 10; i++) {
      console.log(numero + ' * ' + i + ' = ' + (numero * i));
    }
  };

  tablaDeMultiplicar(5);