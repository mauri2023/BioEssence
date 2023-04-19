const colores = ["A","V","C"];  //Cada uno de los valores se agrega a una variable. 

/* const azul = colores[0];
const verde = colores[1];
const celeste = colores[2];
*/

let [azul,verde,celeste] = colores; // //Cuando se realiza un distructurin a un array  se pone en corchetes. Importa el orden pero no importa el nombre.

//console.log(azul);
//console.log(verde);
//console.log(celeste);

const persona = {
    nombre: "pepito",
    apellido: "fernandez",
    edad:"123"
};

const nombrePersona = persona.nombre;
const edadPersona = persona.edad;

let {edad,nombre} = persona;   //Cuando se realiza un distructurin a un objeto se pone en llaves. Importa el nombre pero no importa el orden.

// console.log(edad);
// console.log(nombre);

const generarNombreCompleto = ({nombre, apellido}) => {        // Arrowfunction toma como parametro una persona .
         console.log(nombre + " " + apellido );
}

generarNombreCompleto(persona);   //Se llama a la funcion y se pasa como parametro "persona" . 

