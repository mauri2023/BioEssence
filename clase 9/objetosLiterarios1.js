let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho" , "Javier"],
    horario : "de 19 a 21 hs",
    notificaciones : function() {
        return "El horario de la cursada es " + this.horario;
    }
    }


function Curso(cantidadDeAlumnos,docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Curso(50,["Javier", "Gerardo"], "de 19 a 21 hs ");
let cursoDeMarketing = new Curso(50,["Diego", "Federico"], "de 17 a 21 hs ");

// console.log(cursoDeProgramacion);
// console.log(cursoDeMarketing);

let tenista = {
    nombre: "Roger",
    edad: 38,
    activo: true,
    saludar:function(){
        return "hola me llamo " + this.nombre + " y tengo " + this.edad + " años "+ " y actualmente estoy " + this.activo ;
    }
}
// console.log(tenista.saludar());

// Funciones constructoras :

function Auto(marca,modelo){
    this.marca = marca;
    this.modelo = modelo;
};

// Instarnciar un objeto

let miAuto1 = new Auto("Ford","Falcon");
