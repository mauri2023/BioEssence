function calcularMonto(tipo, dias, sillaBebe) {
    let total;

    switch (tipo) {
        case "compacto":
            total = 14000 * dias;
            break;
        case "mediano":
            total = 17000 * dias;
            break;
        case "camioneta":
            total = 28000 * dias;
            break;
        default:
            console.log("El tipo no es valido");
            return;     
    }
    if (sillaBebe) {
        total = total + (1200 * dias);
    }
    console.log("el monto total a pagar por " + dias + " dias es de $ " + total);
}

calcularMonto("mediano", 2, false);


