//Ejemplo de lenght 

let mensaje = "Gran dia para practicar JavaScript!";

console.log(mensaje.length);

//Ejemplo de indexOf

console.log(mensaje.indexOf("dia"));

//Ejemplo de slice 1

console.log(mensaje.slice(0,24));

//Ejemplo de slice 2

console.log(mensaje.slice(5));

//Ejemplo de slice 3

console.log(mensaje.slice(-11)); //Recorta empezando desde el final con el negativo - 

// Ejemplo trim.

let mensaje1 = "  Gran dia para practicar JavaScript!  ".trim();  // No elimina los espacios dentro que estan dentro de los caracteres , solamente de los costados.
console.log(mensaje1);

//Ejemplo split

let mensaje2 = "Gran dia para practicar JavaScript!".split(" ");  // Cada una de las palabras las coloca en indices diferentes separadas por comillas.
console.log(mensaje2);

//Ejemplo replace

let mensaje3 = "Gran dia para practicar JavaScript!".replace("dia","noche");  // Para reemplazar una palabra o frase por otra.  
console.log(mensaje3);

// Para acceder a un caracter de un string.

let nombre = "Federico";
console.log(nombre[3]);


