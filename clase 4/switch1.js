let numero1 = 3;
let numero2 = 4;
let operationType = " ";
let result;

switch (operationType) {
    case "sumar":
        result = numero1 + numero2;
        console.log("El resultado de la operacion " + operationType + " de " + numero1 + " + " + numero2 + " da como resultado " + result);
        break;
    case "restar":
        result = numero1 - numero2;
        console.log("El resultado de la operacion " + operationType + " de " + numero1 + " - " + numero2 + " da como resultado " + result);
        break;
    case "multiplicar":
        result = numero1 * numero2;
        console.log("El resultado de la operacion " + operationType + " de " + numero1 + " * " + numero2 + " da como resultado " + result);
        break;
    case "dividir":
        result = numero1 / numero2;
        console.log("El resultado de la operacion " + operationType + " de " + numero1 + " y " + numero2 + " da como resultado " + result);
        break;
    default:
        console.log("Las unicas operaciones aceptadas son : suma - resta - division - multiplicacion");

    }       
