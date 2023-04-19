let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho" , "Javier"],
    horario : "de 19 a 21 hs",
    notificaciones : function() {
        return "El horario de la cursada es " + this.horario;
    }
    }

    console.log(curso.notificaciones());

    //Constructor de los objetos (Funcion constructora de objetos)

    function auto(laMarca,elModelo){
        this.marca = laMarca;
        this.modelo = elModelo;
    }

    //Instanciar ( Crear un objeto a partir de su funcion modelo )

    let miAuto = new auto("Peugeot",2019);

    
