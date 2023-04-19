//Scope 
let mensaje = "hola";

function saludar(){
    let mensaje = "chau" //let local de la funcion
    return mensaje;     // retorna la funcion mensaje (LOCAL)
}
console.log(mensaje); // Rertorna la variable "mensaje" pero global.
console.log(saludar()); // Retorna mensaje de la funcion con la variable local.