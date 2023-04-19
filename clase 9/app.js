//Para importar 

const calculadora = require("./calcualdora.js");

// console.log(calculadora);

// console.log(calculadora.sumar(5,6));






//File system ( para importar )

const fs = require("fs");

const exsiteElArchivo = fs.existsSync("../textos.txt");

const contenidoArchivo = fs.readFileSync("../textos.txt","utf-8");   // (Encoding) UTF-8 es para que pueda leer el txt en idioma español.

fs.writeFileSync("../textos.txt", contenidoArchivo + "\n El mas nuevo", "utf-8");  // Para sobreescribir el  txt.  

// el  \n  se utiliza para bajar una linea.

// console.log(exsiteElArchivo);
// console.log(contenidoArchivo);


const UUID = require("uuid");  //Para pedir un funcion uuid que esta en otro modulo que importa id todos diferentes


let usuario = {
    id: UUID.v4,
    nombre : "Federico",
    apellido : "Naccarato",
    altura : 170,
    location : {
        pais : "argentina",
        provincia: "buenos aires",
        partido : "La plata",      
    },



presentarse: function() {
    const apellido = this.apellido.join(" ");

    console.log("hola mi nombre es " + this.nombre + " " + apellido + " vivo en " + this.location.provincia);
}
}

console.log(usuario.id());

