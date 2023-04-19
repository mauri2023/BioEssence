const productos = [
    { id: 1, name: 123 },
    { id: 2, name: 123 },
    { id: 3, name: 123 },
    { id: 4, name: 123 },
    { id: 5, name: 123 },
]

const fs = require("fs");   //Primero se realiza el "npm init -y" y luego se pone la " const fs = require("fs"); "

const jsonProductos = fs.readFileSync("./productos.json", "utf-8");  //De esta manera se importa el modulo "productos.json" 

const productosImportados = JSON.parse(jsonProductos);   //Para convertir de formato json a formato javascript. Toma el const anterior y lo convierte.

const nombreDelProductoImportado = productosImportados.forEach(productoActual => console.log(productoActual.name));  // Para buscar en todos los producto importados de los array del json y traer solo los nombres.

const productoNuevo = {
    id: productosImportados.length + 1,
    name: "licuadora",
    vendido: false,
    categorias: [
        "electrodomesticos",
        "hogar"
    ]
}

productosImportados.push(productoNuevo); //Pushear el nuevo elemento al array de productos existentes en el json.

const nuevosProductosJson = JSON.stringify(productosImportados);   //Convertir el array de js a json.

fs.writeFileSync("./productos.json", nuevosProductosJson, "utf-8"); //Guardamos el array JSON al archivo correspondiente. El primero es la ruta , el segundo la nueva informacion a pasar y tercer parametro el utf-8.

// console.log(nombreDelProductoImportado);

// console.log(productosImportados);
