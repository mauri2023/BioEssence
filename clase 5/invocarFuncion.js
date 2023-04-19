//Invocar una funcion

function nombreCompleto(nombre,apellido)
{
    return "Mi nombre completo es " + nombre +" "+  apellido;
}

console.log(nombreCompleto("Federico","Naccarato"));

//Invocar una funcion definiendo los valores por defecto

function nombreCompleto(nombre = "Federico" ,apellido = "Naccarato")
{
    return "Mi nombre completo es " + nombre +" "+  apellido;
}
nombreCompleto();

function hacerHelados(cantidad)
{
    return "Frambuesa ".repeat(cantidad);
}
let cantidadDeHelados = hacerHelados(25);
console.log(cantidadDeHelados);


