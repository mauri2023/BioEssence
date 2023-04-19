let colores = ["Verde","Azul","Amarillo","Verde"];
let quePosicionEsta = colores.indexOf("Azul");  //Para saque en que indice esta
let estaPosicionNoEsta = colores.indexOf("Rojo");  //Al poner un dato que no esta en el array devuelve -1 cuando no lo encuentra.
console.log(quePosicionEsta);
console.log(estaPosicionNoEsta);

let elPrimero = colores.lastIndexOf("Verde");   // Empieza a buscar desde el final del array hacia el indice 0.
let sacarElPrimero = colores.shift();   // Sacar al primero
console.log(elPrimero);
console.log(colores);
