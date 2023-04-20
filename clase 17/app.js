const express = require("express"); //1. Requerimos

const path = require("path");

const app = express(); //2. Inicializamos

app.get("/", (req, res) => {
  //4. Se configuran las rutas.
  const rutaCompleta = path.join(__dirname, "./views/index.html");
  res.sendFile(rutaCompleta);
});

app.listen(3000, () => {
  console.log("servidor escuchando en el puerto 3000"); //3. Escuchamos
});
