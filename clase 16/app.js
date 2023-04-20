const express = require("express");  //Se llama a exprees

const path = require("path");

const app = express();   //Se inicializa express y se guarda en app.

//Puertos desde el 3000 al 3100 generalmente estan libres

//localhost:3000/     Para comprobar en el navegador que esta corriendo en la red local. Con la barra(ultima) sola y vacia es el indice.

app.get("/", (request,response) => {                    //Request todos los datos del head y todos los datos del body 
    console.log("Entraron a la ruta home");   
    //response.send("Bienvenido al index");                 //Response va a dar funciones para responder al cliente
   
    console.log(path.join(__dirname, "./Views/index.html"));

    res.sendFile("C:\Users\takal\OneDrive\Escritorio\DH local\clase 16\Views\index.html");

});

app.get("/home", (req,res) => {             //Se utiliza req y res (request y responde ) !Tiene que ser en ese orden si o si
    console.log("Entraron a la ruta home");   
    console.log(request.url);     //Para que no muestre la ruta a la que entraron . 
});

app.get("/habitacion/fede",(req,res) => {
    //res.send("Estas en la habitacion de Fede");
  })

app.get("/home", () => {                // Para escuchar a los get. 
   console.log("Entraron a la ruta home");
});      
// app.post(),    Para escuchar a los post

// app.put();       Para escuchar a los put

// app.delete();      Para escuchar a los delete

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});                 
                    //Para que escuche el puerto 3000, todos los pedidos y todos los request
                    // que susedan en el puerto 3000 los va a estar recibiendo y procesando este servidor.




